var output = document.getElementById("output");

var student={
    "nome": "Davide",
    "cognome": "Riccioli",
    "età": 21
}

for(var key in student){
    console.log(key, student[key]);
}

var studentList = [
    {
        "nome": "Giorno",
        "cognome": "Giovanna",
        "età": 15
    },
    {
        "nome": "Gastani",
        "cognome": "Frinzi",
        "età": 53
    },
    {
        "nome": "Marco",
        "cognome": "Ramoni",
        "età": 22
    }
];

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