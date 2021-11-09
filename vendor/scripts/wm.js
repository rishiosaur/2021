const windows = document.querySelectorAll(".window");
let maxZindex = 3;

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const resizeListener = window.matchMedia("(max-width: 1200px)");

if (resizeListener.matches) {
    console.log("hi");
    windows.forEach((window) => {
        e.style.setProperty("left", `50%`);
        e.style.setProperty("transform", "translateX(-50%)");
        e.style.setProperty("top", `auto`);
    });
}

windows.forEach((e) => {
    e.style.zIndex = maxZindex + 1;
    maxZindex += 1;

    e.style.setProperty("left", `${randomInteger(30, 70)}%`);
    e.style.setProperty("top", `${randomInteger(10, 70)}%`);
    e.firstElementChild.firstElementChild.addEventListener(
        "click",
        (ev) => {
            ev.preventDefault();
            console.log("hi");
            e.classList.add("off");
            e.classList.remove("on");
            const id = e.dataset.mi;
            console.log(id);
            queryElementDatum("for", id).forEach((spanElement) => {
                spanElement.classList.remove("active");
                console.log(spanElement);
            });
        }
    );
    // dragElement(e);
});