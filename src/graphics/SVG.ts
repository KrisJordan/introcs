import SVGElement from "./SVGElement";
import Shape from "./Shape";
import Rectangle from "./Rectangle";
import Circle from "./Circle";
import Group from "./Group";
import Text from "./Text";
import Line from "./Line";
import Ellipse from "./Ellipse";
import Path from "./Path";

/**
 * Wrapper class used to render introcs SVG Graphics classes to an
 * SVG tag in an HTML document.
 */
export default class SVG {

    private domElement: Element;

    autoScale: boolean = true;

    /**
     * This state variable is used to avoid stacking up post-process calls
     * when many observed elements' states change at once.
     */
    private _postDebounce: boolean = false;

    /**
     * To construct an SVG object, you must provide the id attribute of an SVG tag
     * located in the HTML of the web page.
     * 
     * @param id The id attribute of the SVG tag on a web page to render to.
     */
    constructor(id: string) {
        this.domElement = document.getElementById(id) as Element;
        window.onresize = () => this.queuePostProcess();
    }

    /**
     * Calling this method will clear and repaint the SVG tag with whatever argument is given.
     * The elements drawn will automatically be scaled and repositioned to be centered and fill
     * the SVG tag's space on the web page.
     * 
     * @param element The Group or Shape you want to render to the screen.
     */
    render(element: SVGElement): void {
        this.clearChildren(this.domElement);
        this.paint(this.domElement, element);
        this.postProcess();
    }

    private clearChildren(parent: Element): void {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    private paint(element: Element, shape: SVGElement): void {
        let shapeElement: Element = this.createElement(shape);
        this.update(shapeElement, shape);
        element.appendChild(shapeElement);
    }

    private update(shapeElement: Element, shape: SVGElement): void {
        this.assignSVGAttributes(shape, shapeElement);

        if (shape instanceof Shape) {
            this.assignShapeAttributes(shape, shapeElement);
        }

        if (shape instanceof Group) {
            this.paintGroup(shape, shapeElement);
        }

        if (shape instanceof Rectangle) {
            this.assignRectangleAttributes(shape, shapeElement);
        } else if (shape instanceof Circle) {
            this.assignCircleAttributes(shape, shapeElement);
        } else if (shape instanceof Text) {
            this.assignTextAttributes(shape, shapeElement);
        } else if (shape instanceof Line) {
            this.assignLineAttributes(shape, shapeElement);
        } else if (shape instanceof Ellipse) {
            this.assignEllipseAttributes(shape, shapeElement);
        } else if (shape instanceof Path) {
            this.assignPathAttributes(shape, shapeElement);
        }

        shape.clearObservers();
        shape.addObserver((shape) => {
            this.update(shapeElement, shape);
            this.queuePostProcess();
        });
    }

    private createElement(shape: SVGElement): Element {
        let tag: string = "";
        if (shape instanceof Group) {
            tag = "g";
        } else if (shape instanceof Rectangle) {
            tag = "rect";
        } else if (shape instanceof Circle) {
            tag = "circle";
        } else if (shape instanceof Text) {
            tag = "text";
        } else if (shape instanceof Line) {
            tag = "line";
        } else if (shape instanceof Ellipse) {
            tag = "ellipse";
        } else if (shape instanceof Path) {
            tag = "path";
        } else {
            throw new Error("Unsupported SVGElement type.");
        }
        return document.createElementNS("http://www.w3.org/2000/svg", tag);
    }

    private assignSVGAttributes(shape: SVGElement, e: Element): void {
        let mouseable: SVGRectElement = e as SVGRectElement;
        mouseable.onclick = shape.onclick.bind(shape);
        mouseable.ondblclick = shape.ondblclick.bind(shape);
        mouseable.onmousemove = shape.onmousemove.bind(shape);
        mouseable.onmouseup = shape.onmouseup.bind(shape);
        mouseable.onmousedown = shape.onmousedown.bind(shape);
        mouseable.onmouseover = shape.onmouseover.bind(shape);
        mouseable.onmouseout = shape.onmouseout.bind(shape);
        e.setAttribute("transform", shape.transform.toMatrix());
    }

    private paintGroup(shape: Group, g: Element): void {
        this.clearChildren(g);
        shape.children.forEach((child: SVGElement) => {
            this.paint(g, child);
        });
    }

    private assignShapeAttributes(shape: Shape, e: Element): void {
        if (shape.opacity !== 1) {
            e.setAttribute("opacity", String(shape.opacity));
        }

        if (shape.fillOpacity > 0) {
            e.setAttribute("fill", shape.fill.toRGB());
        }

        if (shape.fillOpacity !== 1) {
            e.setAttribute("fill-opacity", String(shape.fillOpacity));
        }

        if (shape.strokeOpacity > 0) {
            e.setAttribute("stroke", shape.stroke.color.toRGB());
            e.setAttribute("stroke-width", String(shape.stroke.width));
            e.setAttribute("stroke-linecap", shape.stroke.linecap);
            e.setAttribute("stroke-linejoin", shape.stroke.linejoin);
        }

        if (shape.strokeOpacity !== 1) {
            e.setAttribute("stroke-opacity", String(shape.strokeOpacity));
        }
    }

    private assignRectangleAttributes(shape: Rectangle, r: Element): void {
        r.setAttribute("width", shape.width + "px");
        r.setAttribute("height", shape.height + "px");
        r.setAttribute("x", String(shape.x));
        r.setAttribute("y", String(shape.y));
    }

    private assignCircleAttributes(shape: Circle, c: Element): void {
        c.setAttribute("r", shape.r + "px");
        c.setAttribute("cx", String(shape.cx));
        c.setAttribute("cy", String(shape.cy));
    }

    private assignLineAttributes(shape: Line, l: Element): void {
        l.setAttribute("x1", String(shape.x1));
        l.setAttribute("y1", String(shape.y1));
        l.setAttribute("x2", String(shape.x2));
        l.setAttribute("y2", String(shape.y2));
    }

    private assignTextAttributes(shape: Text, text: Element): void {
        text.innerHTML = shape.text;
        text.setAttribute("x", String(shape.x));
        text.setAttribute("y", String(shape.y));
        text.setAttribute("font-family", shape.font.family);
        text.setAttribute("font-size", shape.font.size + "px");
        text.setAttribute("text-anchor", shape.textAnchor);
        if (shape.textLength !== undefined) {
            text.setAttribute("textLength", String(shape.textLength));
            text.setAttribute("lengthAdjust", shape.lengthAdjust);
        }
    }

    private assignEllipseAttributes(shape: Ellipse, ellipse: Element): void {
        ellipse.setAttribute("cx", String(shape.cx));
        ellipse.setAttribute("cy", String(shape.cy));
        ellipse.setAttribute("rx", String(shape.rx));
        ellipse.setAttribute("ry", String(shape.ry));
    }

    private assignPathAttributes(shape: Path, path: Element): void {
        path.setAttribute("d", shape.toString());
    }

    private queuePostProcess(): void {
        if (this._postDebounce === false) {
            this._postDebounce = true;
            setTimeout(() => {
                this.postProcess();
            }, 0);
        }
    }

    private postProcess(): void {
        if (!this.autoScale) {
            return;
        }

        this._postDebounce = false;
        let board: Element = this.domElement as Element;

        if (board.firstChild === null) {
            return;
        }

        let clientRect: ClientRect = board.getBoundingClientRect();
        let width: number = clientRect.width * 0.9;
        let height: number = clientRect.height * 0.9;

        let scaleBox: SVGRect = (board.firstChild as SVGGElement).getBBox();
        let widthRatio: number = scaleBox.width / width;
        let heightRatio: number = scaleBox.height / height;
        let scale: number;
        if (widthRatio > heightRatio) {
            scale = 1 / widthRatio;
        } else {
            scale = 1 / heightRatio;
        }

        if (scale === Infinity) {
            return;
        }

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