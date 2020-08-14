
var database = firebase.database();

function create_user(name) {
    if (name!= null){
    firebase.database().ref('names/' + name).set({
        nome: name,
        ammonizioni: 0,
        espulsioni: 0,
        presenze: 0,
        infortuni: 0,
        tempo_partita: 0,
        tempo_allenamento: 0
        });}
}

function get_users() {
    let sidebar = document.getElementById("options");
    sidebar.innerHTML = '<li>aggiungi: <input type="text" id="new" placeholder="nome"> <input type="button" id="new-submit" value="+" onclick="add_name()"></li>';
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
            el.setAttribute("onclick", "set_current('"+nome+"')");
        }
    });
    console.log("done!")
}

function get_data(name) {
    if (name!= null){
    let data = database.ref().child("names/"+name);
    data.on('value', function(snapshot) {
        var info = snapshot.val();
        document.getElementById("ammonizioni").value = info.ammonizioni;
        document.getElementById("espulsioni").value = info.espulsioni;
        document.getElementById("presenze").value = info.presenze;
        document.getElementById("infortuni").value = info.infortuni;
        document.getElementById("tempo_partita").value = info.tempo_partita;
        document.getElementById("tempo_allenamento").value = info.tempo_allenamento;
    });}
}

function remove_name() {
    if (current_name != null) {
        if (window.confirm("Attenzione, i dati verranno cancellati,\ncontinuare?")) {
        database.ref().child("names/"+current_name).remove();
        get_users();
        current_name = null;
        document.getElementById("whitebox").style.display = "none";
        }
    }
}

function save() {
    if (current_name != null) {
        let user = database.ref().child("names/"+current_name);
        user.set(
            {
                nome: current_name,
                ammonizioni: document.getElementById("ammonizioni").value,
                espulsioni: document.getElementById("espulsioni").value,
                presenze: document.getElementById("presenze").value,
                infortuni: document.getElementById("infortuni").value,
                tempo_partita: document.getElementById("tempo_partita").value,
                tempo_allenamento: document.getElementById("tempo_allenamento").value
            }
        )
        get_users();
    }
}