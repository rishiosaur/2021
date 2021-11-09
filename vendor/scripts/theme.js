const changeTheme = (main, bg, accent, other) => {
    const set = (va, val) => {
        document.documentElement.style.setProperty(va, val);
    };
    set("--main", main);
    set("--bg", bg);
    set("--accent", accent);

    if (other) {
        const values = Object.entries(other)
        values.forEach(([key, value]) => {
            set(`--${key}`, value)
        })
    }
};