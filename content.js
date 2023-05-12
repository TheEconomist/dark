function setWhiteText(element) {
    element.style.color = "white";
}

function setBlackBackground(element) {
    element.style.backgroundColor = "black";
}

// text
const tags = ["p", "span", "small", "figcaption", "a", "h1", "h2", "h3", "h4", "h5", "h6"];

for (const t of tags) {
    for (const e of document.getElementsByTagName(t)) {
        setWhiteText(e)
    }
}

// masthead
for (const e of document.getElementsByClassName("styled-masthead")) {
    setBlackBackground(e)
}

setBlackBackground(document.body);