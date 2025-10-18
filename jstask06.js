//unordered list
let countries = ["Pak", "Qatar", "Dubai", "UK", "USA", "London", "England", "Canada", "Greece", "Scotland"];
let countryname = "";
let countrylist=document.getElementById("list");

for (let i = 0; i < countries.length; i++) {
  countryname += `<li>${countries[i]}</li>`;
}
console.log(countryname);
countrylist.innerHTML=countryname;

//ordered list
let countries = ["Pak", "Qatar", "Dubai", "UK", "USA", "London", "England", "Canada", "Greece", "Scotland"];
let countryname="";
let countrylist=document.getElementById("order");
for(let i=0;i<countries.length;i++){
    countryname += `<li>${countries[i]}</li>`;
}
    console.log("countryname");
countrylist.innerHTML=countryname;
// to run any of order or unoder first comnet one section and then run the code it doesnot
//  give result of order and un order both