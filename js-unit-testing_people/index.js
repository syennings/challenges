export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map(
    (person) => `${person.firstName} ${person.lastName} (${person.age})`
  );
}

export function getPeopleByAge(people, age) {
  return people
    .filter((person) => person.age === age)
    .map((person) => `${person.firstName} ${person.lastName} ${person.age}`);
}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age >= 23)
    .map((person) => `${person.firstName} ${person.lastName}`);
}

export function getPeopleByLastName(people, lastName) {
  return people
    .filter((person) => person.lastName === lastName)
    .map((person) => `${person.firstName} ${person.lastName}`);
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age >= age);
}

export function getFullNamesSortedByAge(people) {
  return people
    .slice()
    .sort((person1, person2) => person1.age - person2.age)
    .map((person) => `${person.firstName} ${person.lastName}`);
}
