const element = document.querySelector(".input-box");

/***************************************/

element.addEventListener('input', handleChange);

/***************************************/

function handleChange(event) {
    const val = event.target.value;
    if (val === "g^2") {
        window.open("http://g2yamanashi.web.fc2.com/index.html", '_blank', 'noreferrer');
    }
    if (val === "x") {
        window.open("https://x.com/g2_yama", '_blank', 'noreferrer');
    }
    if (val === "youtube") {
        window.open("https://www.youtube.com/@g_2827", '_blank', 'noreferrer');
    }
    if (val === "booth") {
        window.open("https://g2yama.booth.pm/", '_blank', 'noreferrer');
    }
}