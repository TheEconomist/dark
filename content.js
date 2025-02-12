// https://www.w3schools.com/css/css3_variables_javascript.asp

const r = document.querySelector(':root');

// text
r.style.setProperty("--mb-colour-greyscale-london-5", "#eeeeee")
r.style.setProperty("--ds-color-london-5", "#eeeeee")
r.style.setProperty("--mb-colour-greyscale-london-20", "#eeeeee")

// masthead
r.style.setProperty("--mb-colour-greyscale-london-100", "#0d0d0d")

// the world in brief box
r.style.setProperty("--mb-colour-canvas-los-angeles-95", "transparent")

// special article banner
r.style.setProperty("--ds-color-london-95", "#0d0d0d")

// Share modal
r.style.setProperty('--ds-color-london-100', '#0d0d0d')

// box thingy
r.style.setProperty("--ds-color-los-angeles-95", "transparent")

// anchor hover
r.style.setProperty("--mb-colour-base-chicago-30", "#eeeeee");

// Underlined text and buttons
r.style.setProperty("--ds-color-chicago-45", "#1a2c78");

// if like me you dislike the new serif typeface
r.style.setProperty("--ds-type-system-serif", "EconomistSansOsF")

// anchor active background colour
r.style.setProperty("--ds-color-chicago-95", "#transparent");

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
