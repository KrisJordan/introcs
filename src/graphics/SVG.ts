import SVGElement from "./SVGElement";
import Rectangle from "./Rectangle";
import Circle from "./Circle";
import Group from "./Group";
import Text from "./Text";

/**
 * Wrapper class used to render introcs SVG Graphics classes to an
 * SVG tag in an HTML document.
 */
export default class SVG {
    
    private domElement: Element;

    /**
     * To construct an SVG object, you must provide the id attribute of an SVG tag
     * located in the HTML of the web page.
     * 
     * @param id The id attribute of the SVG tag on a web page to render to.
     */
    constructor(id: string) {
        this.domElement = document.getElementById(id) as Element;
    }

    /**
     * Calling this method will clear and repaint the SVG tag with whatever argument is given.
     * The elements drawn will automatically be scaled and repositioned to be centered and fill
     * the SVG tag's space on the web page.
     * 
     * @param element The Group or Shape you want to render to the screen.
     */
    render(element: SVGElement): void {
        this.clearChildren();
        this.paint(this.domElement, element);
        this.postProcess();
    }

    private clearChildren(): void {
        while (this.domElement.firstChild) {
            this.domElement.removeChild(this.domElement.firstChild);
        }
    }

    private paint(element: Element, shape: SVGElement): void {
        if (shape instanceof Rectangle) {
            let r: SVGRectElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            r.setAttribute("width", shape.width + "px");
            r.setAttribute("height", shape.height + "px");
            r.setAttribute("x", String(shape.x));
            r.setAttribute("y", String(shape.y));
            r.setAttribute("stroke", shape.stroke.color.toRGB());
            r.setAttribute("stroke-width", String(shape.stroke.width));
            r.setAttribute("stroke-linecap", shape.stroke.linecap);
            r.setAttribute("stroke-linejoin", shape.stroke.linejoin);
            r.setAttribute("fill", shape.fill.toRGB());
            r.setAttribute("transform", shape.transform.toMatrix());
            element.appendChild(r);
        } else if (shape instanceof Circle) {
            let c: SVGCircleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            c.setAttribute("r", shape.r + "px");
            c.setAttribute("cx", String(shape.cx));
            c.setAttribute("cy", String(shape.cy));
            c.setAttribute("stroke", shape.stroke.color.toRGB());
            c.setAttribute("stroke-width", String(shape.stroke.width));
            c.setAttribute("fill", shape.fill.toRGB());
            c.setAttribute("transform", shape.transform.toMatrix());
            element.appendChild(c);
        } else if (shape instanceof Group) {
            let g: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
            shape.children.forEach((child: SVGElement) => {
                this.paint(g, child);
            });
            g.setAttribute("transform", shape.transform.toMatrix());
            element.appendChild(g);
        } else if (shape instanceof Text) {
            let text: SVGTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.innerHTML = shape.text;
            text.setAttribute("x", String(shape.x));
            text.setAttribute("y", String(shape.y));
            text.setAttribute("dx", String(shape.dx));
            text.setAttribute("dy", String(shape.dy));
            text.setAttribute("font-family", shape.font.family);
            text.setAttribute("font-size", shape.font.size + "px");
            text.setAttribute("transform", shape.transform.toMatrix());
            text.setAttribute("fill", shape.fill.toRGB());
            text.setAttribute("stroke", shape.stroke.color.toRGB());
            text.setAttribute("stroke-width", String(shape.stroke.width));
            text.setAttribute("stroke-linecap", shape.stroke.linecap);
            text.setAttribute("stroke-linejoin", shape.stroke.linejoin);
            element.appendChild(text);
        }
    }

    private postProcess(): void {
        let board: Element = this.domElement as Element;
        
        let transG: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
        board.appendChild(transG);
    
        let scaleG: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
        transG.appendChild(scaleG);
        
        for (let i: number = 0; i < board.children.length; i++) {
            let child: Element = board.children.item(i);
            if (child !== transG) {
                board.removeChild(child);
                scaleG.appendChild(child);
            }
        }

        let clientRect: ClientRect = board.getBoundingClientRect();
        let width: number = clientRect.width * 0.9;
        let height: number = clientRect.height * 0.9;
    
        let scaleBox: SVGRect = scaleG.getBBox();
        let widthRatio: number = scaleBox.width / width;
        let heightRatio: number = scaleBox.height / height;
        let scale: number;
        if (widthRatio > heightRatio) {
            scale = 1 / widthRatio;
        } else {
            scale = 1 / heightRatio;
        }
        scaleG.setAttribute("transform", `scale(${scale})`);

        let transBox: SVGRect = transG.getBBox();
        let centerX: number = (clientRect.right - clientRect.left) / 2.0;
        let centerBoardX: number = transBox.x + (transBox.width / 2.0);
        let deltaX: number = centerX - centerBoardX;
        let centerY: number = (clientRect.bottom - clientRect.top) / 2.0;
        let centerBoardY: number = transBox.y + (transBox.height / 2.0);
        let deltaY: number = centerY - centerBoardY;
        transG.setAttribute("transform", `translate(${deltaX},${deltaY})`);
    }

}