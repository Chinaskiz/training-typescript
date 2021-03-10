// Un type peut être associé à une variable grâce à la syntaxe "myvar: type"
let helloWorld = "Hello world !";
// Cette interface peut être ensuite utilisée par une variable
// Le compiler échouera si la variable ne respecte pas le contrat d'interface
const user = {
    name: "John Doe",
    id: 1
};
// Le type de retour d'une fonction peut aussi être typé
function getUser() {
    return user;
}
// Le compiler échouera si la variable ne respecte pas les valeurs possibles du type
let s = "stopped";
// Le compiler échouera si les items de la collection ne respectent pas le type
let collection1 = ["a", "b", "c"];
let collection2 = [1, 2, 3];
