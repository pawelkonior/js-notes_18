const data = [
    {
        name: 'pawel',
        age: 38,
        city: 'krakow',
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: "krzys",
        age: 21,
        city: "wroclaw",
        hobbies: ["js", "board games", "video games"]
    },
    {
        name: "ola",
        age: 28,
        city: "warszawa",
        hobbies: ["copywriting", "travelling", "coding"],
    },
    {
        name: "mateusz",
        age: 29,
        city: "malbork",
        hobbies: ["video games", "movies", "cars"]
    },
    {
        name: "agnieszka",
        age: 46,
        city: "lodz",
        hobbies: ["music", "yoga", "reading"]
    },
    {
        name: 'eryk',
        age: 24,
        city: 'piastow',
        hobbies: ['games', 'rap music', 'gym']
    },
    {
        name: "robert",
        age: 26,
        city: "gdansk",
        hobbies: ["motorization", "NHL", "NFL"]
    },
    {
        name: "monika",
        age: 26,
        city: "warszawa",
        hobbies: ["music", "films", "reading"]
    },
    {
        name: 'mateusz',
        age: 24,
        city: 'lublin',
        hobbies: ['gry', 'bieganie', 'motocykle']
    },
    {
        name: "maciek",
        age: 33,
        city: "warszawa",
        hobbies: ["drums", "ufc", "sc-fi"]
    }
]


// policz średnią wieku ziomeczków

// function avg(persons){
//     let ageSum = 0;
//
//     for (let i = 0; i < persons.length; i++){
//         ageSum += persons[i].age;
//     }
//
//     return ageSum / persons.length;
// }

// function avg(persons){
//     let ageSum = 0;
//
//     for (const person of persons){
//         ageSum += person.age;
//     }
//
//     return ageSum / persons.length;
// }


// function avg(persons){
//     let ageSum = 0;
//
//     persons.forEach((person) => {
//         ageSum += person.age;
//     })
//
//     return ageSum / persons.length;
// }


// function avg(persons){
//     return persons.reduce((acc, ce) => acc + ce.age, 0) / persons.length
// }


// one liner
// const avg = (persons) => persons.reduce((acc, ce) => acc + ce.age, 0) / persons.length;


const result = avg(data);
console.log(result);













