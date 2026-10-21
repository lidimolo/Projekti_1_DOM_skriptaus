// Haetaan tarvittavat HTML
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
    
    //Muutettaan käyttäjän syöttämät arvot numeroksi
    const minutes = Number(minInput.value);
    const hours = Number(hourInput.value);

    console.log(minutes);
    console.log(hours);
    // Lasketaan koknaisaika minuutteina
    const timeTotal = hours * 60 + minutes;
    console.log (timeTotal);
    //Tarkistetaan, että syötetty aika on oikein
    if (hours<0 || minutes <0 || minutes>59 || timeTotal===0) {
        //Näytetään virheilmoitus
        timeError.textContent = "Syötä aika oikein";
        minInput.classList.add("input-error");
        hourInput.classList.add("input-error");
        return;
    }
    // Poistetaan virheilmoitus 
    timeError.textContent="";
    minInput.classList.remove("input-error");
    hourInput.classList.remove("input-error")
    // Näytetään kategorian valinta
    category.classList.remove("hidden");
})
// Haetaan lomake  ja lista
const timeForm = document.querySelector ("#timeForm");
const resultList = document.querySelector ("#resultList");
// Haetaan aiemmin tallennetut tiedot LocalStoragesta
let entries = JSON.parse(localStorage.getItem("timeEntries")) || [];
console.log("Tallennetut tiedot:", entries);

// Funktio näyttää yhden tallennetun merkinnän listassa
function showEntry(entry) {
    // Muutetaan minuutit tunneiksi ja minuuteiksi
    const shownHours = Math.floor(entry.minutes / 60);
    const shownMin = entry.minutes % 60;
    //Muodostetaan näytettävä aikateksti
    let timeText = "";
    if (shownHours > 0) {
        timeText = shownHours + "h ";
    }
    timeText = timeText + shownMin + "min";
    // Luodaan uusi listan elementti 
    const item = document.createElement("li");
    item.textContent = entry.category + " " + timeText + " ";
    // Luodaan poistopainike
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "Poista";
    // Kun käyttäjä painaa Poista, poistetaan merkintä
    deleteButton.addEventListener("click", function() {
        // Poistetaan valittu merkintä taulukosta
        entries = entries.filter(function(savedEntry){
            return savedEntry !== entry;
        });
        // Päivitetään localStorage
        localStorage.setItem ("timeEntries", JSON.stringify(entries));
        // Poistetaan merkintä näkyvästä listasta
        item.remove();
    });
     // Lisätään poistopainike listan elementtiin
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
    







