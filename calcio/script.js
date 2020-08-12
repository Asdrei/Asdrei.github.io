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

function add_name() {
    create_user(document.getElementById("new").value);
    console.log(document.getElementById("new").value);
    let sidebar = document.getElementById("options");
    sidebar.innerHTML = '<li>aggiungi: <input type="text" id="new" placeholder="nome"> <input type="button" id="new-submit" value="+" onclick="add_name()"></li>';
    get_users();
}
