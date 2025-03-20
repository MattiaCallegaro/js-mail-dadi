//Creao una lista di email di invitati
//Faccio inserire all'utente la sua email
//creo la variabile di controllo per verificare che la sua email sia presente nella lista e la imposto su false
//creo un ciclo di array con le email
//verifico che la sua email inserita sia ugiuale a quella nella lista
//se é uguale puó accedere alla festa e la variabile cambia in true
//fuori dal controllo stampo il messaggio "Benvenuta alla festa"

const email=["LucaRossi@gmail.com", "MarioVerdi@gmail.com", "PieroAngela@gmail.com", "BarbaraFranchetti@gmail.com"];
let userMail=prompt("Inserisci il tuo indirizzo email");
let checkEmail= false;
for(let i=0; checkEmail===false && i<email.length; i++ ){
    if(email[i].toLocaleLowerCase()===userMail.toLocaleLowerCase()){
        checkEmail= true;
    }
}

if(checkEmail==false){
    console.log(alert("Invito non trovato. Mi dispiace non puó partecipare alla festa"))
}
else{
    console.log(alert("Benvenuto alla festa"))
}

let start=alert("Premi ok")
let x = (Math.random() * 6 + 1);
console.log(alert(x.toFixed(0)));