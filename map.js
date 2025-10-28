const students = [
  { id: 1, firstName: "Ali", lastName: "Khan", score: 85 },
  { id: 2, firstName: "Amna", lastName: "Khan", score: 65 },
  { id: 3, firstName: "fatima", lastName: "Khan", score: 75 },
  { id: 4, firstName: "Asad", lastName: "Khan", score: 95 },
];
//transformed array
let fullName = students.map((std) => {
  let fullName1 = `${std.firstName} ${std.lastName}`;
  let status = std.score >= 80 ? "paas" : "fail";
  let score = std.score;
  return { fullName1, status, score };
});

console.log(fullName);
//html embeded code

let container = document.getElementById("cont");
let final = fullName.map((std2) => {
  return `<h2>${std2.fullName1}</h2> <P>score: ${std2.score}</P> <P> status: ${std2.status}</P>`;
});
console.log(final);
let abc=final.join(" ");
console.log(abc);
container.innerHTML=abc;
