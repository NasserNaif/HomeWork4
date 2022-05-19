let characters = [
  {
    name: "abdullah",
    age: 23,
    gender: "male",
    height: 173,
    mass: 70,
    eyeColor: "browen",
  },
  {
    name: "Nasser",
    age: 16,
    gender: "male",
    height: 120,
    mass: 40,
    eyeColor: "Blue",
  },
  {
    name: "ahmad",
    age: 16,
    gender: "male",
    height: 120,
    mass: 50,
    eyeColor: "black",
  },
  {
    name: "norah",
    age: 20,
    gender: "famale",
    height: 160,
    mass: 503,
    eyeColor: "black",
  },
];

// Map
// 1 :
function NameAndHei(c) {
  return c.name + " " + c.height;
}
let ArrNameheight = characters.map(NameAndHei);
console.log(ArrNameheight);

// 2 :
let arrOnlyName = characters.map((c) => c.name);
console.log(arrOnlyName);

// REDUCE

let TotalMass = characters.reduce((sum, a) => sum + a.mass, 0);
console.log(TotalMass);

// Filter

// 1 :
let MoreThan100 = characters.filter((c) => {
  if (c.mass > 100) return c;
});
console.log(MoreThan100);

// 2 :
console.log(characters.filter((c) => c.gender === "famale"));

// SORT

// 1 :
console.log(characters.sort((c) => c.name));

// 2 :
console.log(characters.sort((c) => c.gender));

// Every

// 1 :
console.log(characters.every((c) => c.eyeColor === "Blue"));

// 2 :
console.log(characters.every((c) => c.gender === "male"));

// Some

// 1 :
console.log(characters.some((c) => c.gender === "male"));

// 2 :
console.log(characters.some((c) => c.mass < 50));
