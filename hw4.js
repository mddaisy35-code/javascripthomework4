let user = {
    firstName: "Merlin",
    lastName: "daisy",
    email: "mddaisy@gmail.com"
};

let name = (user.firstName + " " + user.lastName).toUpperCase();
let domain = user.email.split("@")[1];

console.log(name, domain);




let str = "JavaScript is very easy";

let result = {
    characters: str.length,
    words: str.split(" ").length,
    lowercase: str.toLowerCase()
};

console.log(result);




let userName = "daisy";
let phoneNumber = "7277";

let username = userName.slice(0, 3) + phoneNumber.slice(-2);

console.log(username.toLowerCase());