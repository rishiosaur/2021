Element.prototype.drag = function (setup) {
    var setup = setup || {};

    var mousemove = function (e) {
        // document mousemove

        this.style.left = e.clientX - this.dragStartX + "px";
        this.style.top = e.clientY - this.dragStartY + "px";

        setup.ondrag && setup.ondrag(e); // ondrag event
    }.bind(this);

    var mouseup = function (e) {
        // document mouseup

        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseup);

        handle.classList.remove("dragging");

        setup.ondragend && setup.ondragend(e); // ondragend event
    }.bind(this);

    var handle = setup.handle || this;

    handle.addEventListener(
        "mousedown",
        function (e) {
            // element mousedown

            this.dragStartX = e.offsetX;
            this.dragStartY = e.offsetY;

            document.addEventListener("mousemove", mousemove);
            document.addEventListener("mouseup", mouseup);

            handle.classList.add("dragging");

            setup.ondragstart && setup.ondragstart(e); // ondragstart event
        }.bind(this)
    );

    handle.classList.add("draggable");

    setup.ondraginit && setup.ondraginit(e); // ondraginit event
};

document.querySelectorAll(".window").forEach((element) => {
    console.log(element);
    element.drag({ handle: element.firstElementChild.firstElementChild });
});