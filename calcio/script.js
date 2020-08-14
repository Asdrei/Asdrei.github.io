var menu = 0;

var current_name = null

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
    if (document.getElementById("new").value != "") {
    create_user(document.getElementById("new").value);
    get_users();
    }
}



function set_current(nome) {
    if (current_name != null) {
        save();
    }
    current_name = nome;
    document.getElementById("name").innerHTML = "";
    document.getElementById("name").appendChild(document.createTextNode(nome));
    get_data(nome);
    document.getElementById("whitebox").style.display = "block";
}

