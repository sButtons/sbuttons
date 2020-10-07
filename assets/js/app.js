let openTab = () => {
    let tabs = document.getElementsByClassName("instruction-block");
    let links = document.getElementsByClassName("submenu-links");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    for (let i = 0; i < links.length; i++) {
        links[i].removeClass('active');
    }
    this.addClass('active');
    document.getElementById(this.attr[href]).style.display = "block";
}

let links = document.getElementsByClassName("submenu-links");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener(openTab);
}
