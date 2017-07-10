class DOMClasses {

    static add(e: HTMLElement, klass: string): void {
        let classes = e.getAttribute("class");
        if (classes === null) {
            return;
        } else if (classes.indexOf(klass) === -1) {
            classes += ` ${klass}`;
            e.setAttribute("class", classes);
        }
    }

    static remove(e: HTMLElement, klass: string): void {
        let classes = e.getAttribute("class");
        if (classes === null) {
            return;
        } else {
            classes = classes.replace(klass, "").trim();
            e.setAttribute("class", classes);
        }
    }

}

export default DOMClasses;