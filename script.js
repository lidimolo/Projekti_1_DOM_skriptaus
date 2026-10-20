const addButton = document.querySelector ("#addButton");
const category = document.querySelector("#category");
const minInput = document.querySelector("#minInput");
const hourInput = document.querySelector("#hourInput");
const timeError = document.querySelector("#timeError");
console.log(addButton);
console.log(category);
console.log(minInput);
console.log(hourInput);

addButton.addEventListener ("click", function() {
    
    const minutes = Number(minInput.value);
    const hours = Number(hourInput.value);

    console.log(minutes);
    console.log(hours);
    const timeTotal = hours * 60 + minutes;
    console.log (timeTotal);
    if (hours<0 || minutes <0 || minutes>59 || timeTotal===0) {
        timeError.textContent = "Syötä aika oikein";
       minInput.classList.add("input-error");
       hourInput.classList.add("input-error");
        return;
    }

    timeError.textContent="";
    minInput.classList.remove("input-error");
    hourInput.classList.remove("input-error")
    category.classList.remove("hidden");
})

const timeForm = document.querySelector ("#timeForm");
const resultList = document.querySelector ("#resultList");
let entries = JSON.parse(localStorage.getItem("timeEntries")) || [];
console.log("Tallennetut tiedot:", entries);

function showEntry(entry) {
    const shownHours = Math.floor(entry.minutes / 60);
    const shownMin = entry.minutes % 60;
    let timeText = "";
    if (shownHours > 0) {
        timeText = shownHours + "h ";
    }
    timeText = timeText + shownMin + "min";
    const item = document.createElement("li");
    item.textContent = entry.category + " " + timeText + " ";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Poista";
    deleteButton.addEventListener("click", function() {
        entries = entries.filter(function(savedEntry){
            return savedEntry !== entry;
        });
        localStorage.setItem ("timeEntries", JSON.stringify(entries));
        item.remove();
    });
    item.append(deleteButton);
    resultList.append(item);
}
entries.forEach(function(entry) {
    showEntry(entry);
});

timeForm.addEventListener ("submit", function(event) {
    event.preventDefault ();

    const minutes = Number(minInput.value);
    const hours = Number(hourInput.value);
    const timeTotal = hours * 60 + minutes;
    console.log (timeTotal);
    if (hours < 0 || minutes < 0 || minutes > 59 || timeTotal === 0) 
        {
        timeError.textContent = "Syötä aika oikein";
        minInput.classList.add("input-error");
        hourInput.classList.add("input-error");
        return;
    }

    timeError.textContent = "";
    minInput.classList.remove("input-error");
    hourInput.classList.remove("input-error");

    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    console.log(selectedCategory);

    const entry = {
    category: selectedCategory,
    minutes: timeTotal};
    entries.push(entry);
     console.log(entries);

    localStorage.setItem("timeEntries", JSON.stringify(entries));

    minInput.value="";
    hourInput.value="";

    category.classList.add("hidden");
    showEntry(entry);
});
    







