// https://www.w3schools.com/css/css3_variables_javascript.asp

const r = document.querySelector(':root');

// text
r.style.setProperty("--ds-color-london-5", "white")
r.style.setProperty("--ds-color-london-10", "white")

// idk
r.style.setProperty("--ds-color-los-angeles-95", "transparent")

// masthead popup background
// r.style.setProperty("--ds-color-london-20", "white")
// for (const e of document.getElementsByClassName("ds-masthead is-open")) {
//     e.style.background = "grey"
// }

// masthead, masthead popup text
// r.style.setProperty("--ds-color-london-100", "transparent")
for (const e of document.getElementsByClassName("styled-masthead")) {
    e.style.backgroundColor = "transparent"
}

// aside tag
for (const e of document.getElementsByClassName("article__body-aside")) {
    e.style.backgroundColor = "transparent"
}

document.body.style.backgroundColor = "black"