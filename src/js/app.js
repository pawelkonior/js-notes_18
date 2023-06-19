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

//
// const result = avg(data);
// console.log(result);

// policz średnią wieku ludzi spoza warszawy

// function avgAgeWithoutWarsawPeople(items) {
//     let ageSum = 0;
//     let counter = 0;
//
//     for (const item of items){
//         if (item.city !== 'warszawa'){
//             ageSum += item.age;
//             counter++;
//         }
//     }
//
//     return ageSum / counter;
// }


// const avgAgeWithoutWarsawPeople = (items) => {
//     const filteredItems = items.filter((item) => item.city !== 'warszawa');
//     return filteredItems.map((item) => item.age).reduce((acc, ce) => acc + ce) / filteredItems.length
// }
//
// const result = avgAgeWithoutWarsawPeople(data);
// console.log(result)


// wybierz miasto na imprezę integracyjną 07.07.2023

// function getCities(items){
//     const cities = [];
//
//     for (const item of items) {
//         cities.push(item.city)
//     }
//
//     return cities;
// }


const getCities = (items) => items.map((item) => item.city)

const mostCommonItem = (items) => {
    const cities = {};

    for (const item of items) {
        if (cities[item]) {
            cities[item]++;
        } else {
            cities[item] = 1;
        }
    }

    const max = Math.max(...Object.values(cities));

    console.log(cities)
    return Object.entries(cities)
        .filter((item) => item[1] === max)
        .map((item) => item[0]);
}

// const result = mostCommonItem(getCities(data));
// console.log(result);



// policz ile jest unikalnych hobbies

// const getUniqueHobbies = (elements) => {
//     const hobbies = [];
//
//     for (const element of elements){
//         for (const hobby of element.hobbies){
//             if(!hobbies.includes(hobby)){ // 'js', 'python'
//                 hobbies.push(hobby);
//             }
//         }
//     }
//
//     return hobbies
// }

// const getUniqueHobbies = (elements) => new Set(elements
//     .map((element) => element.hobbies)
//     .flat())
//
// const result = getUniqueHobbies(data);
// console.log(result);

// Znajdź czy ktoś jest stary >35

// const getOldMan = (elements) => {
//     for (const element of elements){
//         if (element.age > 35){
//             return true
//         }
//     }
//
//     return false;
// }

// const getOldMan = (students) => {
//     return students.some((student) => {
//         return student.age > 35
//     })
// };
//
//
// const result = getOldMan(data);
// console.log(result);

// Czy wszyscy pochodzą z krakowa?

// const isAllFromCracovia = (students) => {
//     for (const student of students){
//         if (student.city !== 'krakow'){
//             return false
//         }
//     }
//
//     return true;
// }

const isAllFromCracovia = (students) => students.every((student) => student.city === 'krakow')

const result = isAllFromCracovia(data);
console.log(result);














