// elements whose font size can change:
// * header (40px), linksnav (32px), mainsection (28px), footerbar (28px) 

// using the words "smaller", "inherit", and "larger"
// makes this so much easier! (see solution folder)

var header, linksnav, mainsection, footerbar;

function fontSizeSmaller() { // 0.5x original size 
    header.style.fontSize = "20px";
    linksnav.style.fontSize = "16px";
    mainsection.style.fontSize = "14px";
    footerbar.style.fontSize = "14px";
}

function fontSizeNormal(){ // x1 original size
    header.style.fontSize = "40px";
    linksnav.style.fontSize = "32px";
    mainsection.style.fontSize = "28px";
    footerbar.style.fontSize = "28px";
}

function fontSizeLarger(){ // x1.5 original size
    header.style.fontSize = "60px";
    linksnav.style.fontSize = "48px";
    mainsection.style.fontSize = "42px";
    footerbar.style.fontSize = "42px";
}

window.onload = (event) => {
    header = document.getElementsByClassName("header")[0];
    linksnav = document.getElementsByClassName("linksnav")[0];
    mainsection = document.getElementsByClassName("mainsection")[0];
    footerbar = document.getElementsByClassName("footerbar")[0];
};