function element(tag: string, className: string, children: Node[]|string|null): Node {
    let element = document.createElement(tag);
    if (Array.isArray(children)) {
        for (let child of children) {
            element.appendChild(child);
        }
    } else if (children !== null) {
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

function table(className: string, children: Node[]|string): Node {
    return element("table", className, children);
}

function thead(className: string, children: Node[]|string): Node {
    return element("thead", className, children);
}

function tbody(className: string, children: Node[]|string): Node {
    return element("tbody", className, children);
}

function th(className: string, children: Node[]|string): Node {
    return element("th", className, children);
}

function tr(className: string, children: Node[]|string): Node {
    return element("tr", className, children);
}

function td(className: string, children: Node[]|string): Node {
    return element("td", className, children);
}

function img(url: string): Node {
    let img: HTMLImageElement = <HTMLImageElement>element("img", "", null);
    img.setAttribute("src", url);
    return img;
}

function input(type: string, className: string, value: string = ""): Node {
    let input: HTMLInputElement = <HTMLInputElement>element("input", className, null);
    input.setAttribute("type", type);
    input.setAttribute("value", value);
    return input;
}

export {
    div,
    p,
    img,
    input,
    table,
    thead,
    tbody,
    th,
    tr,
    td
};