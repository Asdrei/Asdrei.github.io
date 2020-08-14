
var database = firebase.database();

function create_user(name) {
    firebase.database().ref('names/' + name).set({
        nome: name,
        ammonizioni: 0,
        espulsioni: 0,
        presenze: 0,
        infortuni: 0,
        tempo_partita: 0,
        tempo_allenamento: 0,
        cartellini: 0
        });
}

function get_users() {
    console.log("getting user list")
    var parent = document.getElementById("options");
    let names = database.ref().child("names");
    names.on('value', function(snapshot) {
        let nomi = snapshot.val();
        for (nome in nomi) {
            el = document.createElement("li");
            el.appendChild(document.createTextNode(nome));
            parent.appendChild(el);
            el.setAttribute("id", nome);
            el.addEventListener("click", set_current(nome));
        }
    });
    console.log("done!")
}

