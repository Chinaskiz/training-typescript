// Un type peut être associé à une variable grâce à la syntaxe "myvar: type"
let helloWorld: string = "Hello world !";

// Une interface peut être déclarée avec le mot clé "interface"
interface User {
    name: string;
    id: number;
}

// Cette interface peut être ensuite utilisée par une variable
// Le compiler échouera si la variable ne respecte pas le contrat d'interface
const user: User = {
    name: "John Doe",
    id: 1
}

// Le type de retour d'une fonction peut aussi être typé
function getUser(): User {
    return user;
}

// type permet de définir facilement une sorte d'énumération
type Status = "started" | "stopped" | "unknown";

// Le compiler échouera si la variable ne respecte pas les valeurs possibles du type
let s: Status = "stopped";

// Il est possible de définir le type d'une collection grâce aux génériques
type StringArray = Array<string>;

// Le compiler échouera si les items de la collection ne respectent pas le type
let collection1: StringArray = ["a", "b", "c"];
let collection2: Array<number> = [1, 2, 3];