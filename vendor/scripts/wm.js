const windows = document.querySelectorAll(".window");
let maxZindex = 3;

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const resizeListener = window.matchMedia("(max-width: 1200px)");

if (resizeListener.matches) {
    windows.forEach((e) => {
        e.style.setProperty("transform", "translate(0, -50%)");
        e.style.setProperty("top", `50%`);
    });
}

windows.forEach((e) => {
    e.style.zIndex = maxZindex + 1;
    maxZindex += 1;

    if (!resizeListener.matches) {
        e.style.setProperty("left", `${randomInteger(30, 70)}%`);
        e.style.setProperty("top", `${randomInteger(10, 70)}%`);
    }

    e.firstElementChild.firstElementChild.addEventListener(
        "click",
        (ev) => {
            ev.preventDefault();
            e.classList.add("off");
            e.classList.remove("on");
            const id = e.dataset.mi;

            queryElementDatum("for", id).forEach((spanElement) => {
                spanElement.classList.remove("active");
                console.log(spanElement);
            });
        }
    );
});

