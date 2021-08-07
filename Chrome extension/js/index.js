// Variables
let myLead = [];
// Elements
const saveBtnEl = document.querySelector("#input-btn");
const deleteBtnEl = document.querySelector("#delete-btn");
const tabBtnEl = document.querySelector("#tab-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const aAllEl = document.getElementsByTagName("a");
// Main
if(localStorage.getItem("myLead"))
{
    myLead= JSON.parse(localStorage.getItem("myLead"));
    console.log(myLead);
    show(myLead);
}


// Functions
saveBtnEl.addEventListener("click", function() {
    if(inputEl.value !== "") {
        myLead.push(inputEl.value); 
        inputEl.value = "";
        show(myLead);
        localStorage.setItem("myLead", JSON.stringify(myLead));
    }
})

deleteBtnEl.addEventListener("click", function() {
    localStorage.clear();
    myLead = [];
    ulEl.innerHTML = "";
})

tabBtnEl.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url);
        localStorage.setItem("myLead", JSON.stringify(myLead));
        show(myLead);
    })
    
})

function show(arr) {
    let liEl;
    let aEl;
    let tempString = "";
    ulEl.innerHTML = "";
    for(let i = 0; i < arr.length; i++) {
        aEl = document.createElement("a");
        aEl.href = "https://" +  myLead[i];
        
        // remove https:// if necessary
        tempString = myLead[i];
        if(myLead[i].search("://") > -1)
            tempString = myLead[i].slice(myLead[i].search("://") + 3, myLead[i].length);
        // remove extra letters
        if(myLead[i].length > 32)
            tempString = tempString.slice(0,32) + "...";
        aEl.textContent = tempString;

        aEl.target = "_blank";
        liEl = document.createElement("li");
        liEl.append(aEl);
        ulEl.append(liEl);
        // ulEl.innerHTML += "<li><a href='https://" + myLead[i] + "'>" + myLead[i] + "</a>";
    }
}

