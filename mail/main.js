const mailArray = [
  "esempio@gmail.com",
  "guida@gmail.com",
  "modello@gmail.com",
  "paradigma@gmail.com",
  "traccia@gmail.com",
  "falsariga@gmail.com",
  "caso@gmail.com",
];
const mail = prompt("Per accedere inserisci la tua email");
let verified = false;

for (let i = 0; i < mailArray.length; i++) {
  if (mailArray[i] === mail) {
    verified = true;
  }
}
if (verified) {
  console.log("benvenuto!");
} else {
  console.log("email non presente!");
}
