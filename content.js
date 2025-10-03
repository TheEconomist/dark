// https://www.w3schools.com/css/css3_variables_javascript.asp

const r = document.querySelector(':root');
const insiderDark = "#0d0d0d";
const insiderLite = "#f2f2f2";

// main text
r.style.setProperty("--mb-colour-greyscale-london-5", insiderLite)

// world in brief text
r.style.setProperty("--mb-colour-greyscale-london-20", insiderLite)

// masthead and body background
r.style.setProperty("--mb-colour-greyscale-london-100", insiderDark)

// the world in brief box
r.style.setProperty("--mb-colour-canvas-los-angeles-95", "transparent")

// special article banner
r.style.setProperty("--ds-color-london-95", insiderDark)

// anchor hover
r.style.setProperty("--mb-colour-base-chicago-30", insiderLite);

// infobox (e.g. the rest of this cover package)
r.style.setProperty("--mb-colour-base-new-york-95", "transparent")

/*
(async () => {
    r.style.setProperty("--ds-type-system-serif", "Roboto");
    r.style.setProperty("--ds-type-system-serif-lining", "Roboto");
    r.style.setProperty("--ds-type-system-sans", "Roboto");
    r.style.setProperty("--ds-type-system-sans-lining", "Roboto");

    const customFont = document.createElement("link");
    customFont.href = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";
    customFont.rel = "stylesheet";

    while (document.head == null) await new Promise(resolve => setTimeout(resolve, 100));

    document.head.appendChild(customFont);
})()
*/
