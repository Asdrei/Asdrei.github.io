var menu = 0;

function switch_menu() {
    menu = (menu + 1) % 2;
    sidebar = document.getElementById("sidebar");
    content = document.getElementById("mainbox");
    switch (menu) {
        case 1:
            sidebar.style.display = "block";
            content.style.width = "82vw";
            break;
    
        default:
            sidebar.style.display = "none";
            content.style.width = "100vw";
            break;
    }
}