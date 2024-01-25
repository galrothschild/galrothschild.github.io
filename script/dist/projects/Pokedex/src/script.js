"use strict";
let counter = 1;
document.querySelector(".btn-next")?.addEventListener("click", () => {
    counter++;
    console.log(counter);
});
document.querySelector(".btn-previous")?.addEventListener("click", () => {
    counter--;
    console.log(counter);
});
async function getNames() {
    let results = (await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=1017&offset=0")).json()).results;
    let longest = results.reduce((acc, curr) => {
        if (acc.name.length > curr.name.length) {
            return acc;
        }
        else {
            return curr;
        }
    });
    console.log(longest);
}
getNames();
