var output = document.getElementById("output");

var student={
    "nome": "Davide",
    "cognome": "Riccioli",
    "età": 21
}

var studentList = [student, student, student, student];
var names=["Davide", "Ottavio", "Alfredo", "Christian", "Edoardo", "Marco", "Eleonora", "Gloria"];
var surnames=["Riccioli", "Fogliata", "Voza", "Guida", "Iervasi", "Grazian", "Rossi", "Ramoni"];
for(i=0; i<studentList.length; i++){
    var nameIndex = Math.floor(Math.random()*names.length);
    var surnameIndex = Math.floor(Math.random()*surnames.length);
    studentList[i].nome = names[nameIndex];
    studentList[i].cognome = surnames[surnameIndex];
    studentList[i].età = Math.floor(Math.random() * 101);
}

for(var k=0; k<studentList.length; k++){
    for(var key in studentList[k]){
        console.log(key, studentList[k][key])
    }
}

var inputName= prompt("Inserisci il tuo nome");
var inputLastName= prompt("Inserisci il tuo cognome");
var inputAge = parseInt(prompt("Inserisci la tua età"));

studentList.push({
    "nome" : inputName,
    "cognome" : inputLastName,
    "età" : inputAge
})

for(var key in studentList[studentList.length-1]){
    console.log(key, studentList[studentList.length-1][key]);
}