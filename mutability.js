let clone1 = { ...person };
let clone2 = Object.assign({}, person);

let samePerson = person;

person.age += 1;
person.country = "FR";

if (person !== clone1) {
    samePerson = person;
}
