let count =  0;
let countEl = document.getElementById("count-number");
let entries = document.getElementById("previous-entries");

function increment() {
    countEl.textContent = ++count;
}

function save() {
    console.log(count);
    entries.textContent += count + " - ";
    countEl.textContent = count = 0;
}
