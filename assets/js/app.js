let openTab = (tabName) => {
    let tabs = document.getElementsByClassName("instruction-block");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}