const queryElementDatum = (index, value) =>
    document.querySelectorAll(`[data-${index}="${value}"]`);

const unwrap = (node) => {
    node.replaceWith(...node.childNodes);
};
String.prototype.toElement = function () {
    var temp = document.createElement("div");
    temp.innerHTML = this;
    return temp.firstChild;
};
HTMLElement.prototype.prependChild = function (childNode) {
    if (this.firstChild) {
        this.insertBefore(childNode, this.firstChild);
    } else {
        this.appendChild(childNode);
    }
};
document.querySelectorAll("[data-md]").forEach((element) => {
    console.log(element);
    element.setAttribute("href", "#");
    element.addEventListener("click", (e) => {
        e.preventDefault();
        const id = element.dataset.md;
        const modal = queryElementDatum("mi", id)[0];
        modal.classList.add("off");
        modal.classList.remove("on");
    });
});

document.querySelectorAll("[data-mo]").forEach((element) => {
    element.setAttribute("href", "#");
    element.addEventListener("click", (e) => {
        e.preventDefault();
        const id = element.dataset.mo;
        const modal = queryElementDatum("mi", id)[0];
        modal.classList.add("on");
        unwrap(element);
    });
});

document.querySelectorAll("[data-wo]").forEach((element) => {
    const id = element.dataset.wo;
    element.setAttribute("href", "#");
    element.appendChild(
        `<span class="indicator" data-for="${id}"></span>`.toElement()
    );
    element.addEventListener("click", (e) => {
        e.preventDefault();

        const modal = queryElementDatum("mi", id)[0];

        if (modal.classList.contains("off")) {
            modal.classList.remove("off");
        }

        modal.classList.add("on");
        queryElementDatum("for", id).forEach((spanElement) => {
            spanElement.classList.add("active");
            console.log(spanElement);
        });
    });
});

document.querySelectorAll("[data-o]").forEach((element) => {
    element.setAttribute("href", "#");

    element.addEventListener("click", (e) => {
        e.preventDefault();
        const listeners = element.dataset.o.split(" ");
        listeners.forEach((listener) => {
            const elements = queryElementDatum("ob", listener);

            elements.forEach((el) => {
                el.classList.remove("off");
                el.classList.add("on");
            });
            queryElementDatum("cb", listener).forEach((el) => {
                el.classList.remove("on");
                el.classList.add("off");
            });
        });
        if (
            !(element.dataset.cb === element.dataset.o) &&
            !element.dataset.wo
        ) {
            unwrap(element);
        }
    });
});