function element(tag: string, className: string, children: Node[]|string): Node {
    let element = document.createElement(tag);
    if (Array.isArray(children)) {
        for (let child of children) {
            element.appendChild(child);
        }
    } else {
        element.innerText = children;
    }
    element.setAttribute("class", className);
    return element;
}

function div(className: string, children: Node[]|string): Node {
    return element("div", className, children);
}

function p(className: string, children: Node[]|string): Node {
    return element("p", className, children);
}

function img(url: string): Node {
    let img: HTMLImageElement = <HTMLImageElement>element("img", "", "");
    img.setAttribute("src", url);
    return img;
}

function input(type: string, className: string, value: string = ""): Node {
    let input: HTMLInputElement = <HTMLInputElement>element("input", className, "");
    input.setAttribute("type", type);
    input.setAttribute("value", value);
    return input;
}

function style(css: string) {
    let element = document.createElement("style");
    element.setAttribute("type", "text/css")
    element.appendChild(document.createTextNode(css));
    return element;
}

export {
    div,
    p,
    style,
    img,
    input
};