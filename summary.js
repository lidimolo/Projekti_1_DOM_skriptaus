let entries = JSON.parse(localStorage.getItem("timeEntries")) || [];
console.log(entries);
let totalMin = 0;

entries.forEach (function(entry) {
    totalMin = totalMin + entry.minutes;
})
console.log(totalMin);

const totalHours = Math.floor (totalMin / 60);
const remainingMin = totalMin % 60;

const totalTime = document.querySelector ("#totalTime")
totalTime.textContent = totalHours + "h" + " " + remainingMin + " " + "min";

let workMin = 0;
let studyMin = 0;
let sportMin = 0;
let hobbyMin = 0;
let otherMin = 0;

entries.forEach (function(entry){
    if (entry.category === "Työ") {
       workMin = entry.minutes + workMin;
    }
      if (entry.category === "Opiskelu") {
       studyMin = entry.minutes + studyMin;
    }
       if (entry.category === "Urheilu") {
       sportMin = entry.minutes + sportMin;
    }
       if (entry.category === "Hobby") {
       hobbyMin = entry.minutes + hobbyMin;
    }
       if (entry.category === "Muu") {
       otherMin = entry.minutes + otherMin;
    }
})

console.log (workMin);
console.log (studyMin);

// Työ

const workHours = Math.floor (workMin / 60);
const workRemMin = workMin % 60;
const workTime = document.querySelector ("#workTime")
workTime.textContent = workHours + " " + "h" + " " + workRemMin + " " + "min";
// Opiskelu
const studyHours = Math.floor (studyMin / 60);
const studyRemMin = studyMin % 60;
const studyTime = document.querySelector ("#studyTime")
studyTime.textContent = studyHours + " " + "h" + " " + studyRemMin + " " + "min";
// Urheilu
const sportHours = Math.floor(sportMin / 60);
const sportRemMin = sportMin % 60;
const sportTime = document.querySelector("#sportTime");
sportTime.textContent = sportHours + " h " + sportRemMin + " min";

// Hobby
const hobbyHours = Math.floor(hobbyMin / 60);
const hobbyRemMin = hobbyMin % 60;
const hobbyTime = document.querySelector("#hobbyTime");
hobbyTime.textContent = hobbyHours + " h " + hobbyRemMin + " min";
// Muu
const otherHours = Math.floor(otherMin / 60);
const otherRemMin = otherMin % 60;
const otherTime = document.querySelector("#otherTime");
otherTime.textContent = otherHours + " h " + otherRemMin + " min";


let workPercent=0;
let studyPercent=0;
let sportPercent=0;
let hobbyPercent=0;
let otherPercent=0;
   if (totalMin >0) {
      workPercent = Math.floor ( workMin/totalMin *100);
      studyPercent = Math.floor ( studyMin/totalMin *100);
      sportPercent = Math.floor(sportMin / totalMin * 100);
      hobbyPercent = Math.floor(hobbyMin / totalMin * 100);
      otherPercent = Math.floor(otherMin / totalMin * 100);
      }
// Työ
document.querySelector("#workPercent").textContent = workPercent + "%";
document.querySelector("#workBar").style.width = workPercent + "%";
// Opiskelu
document.querySelector("#studyPercent").textContent = studyPercent + "%";
document.querySelector("#studyBar").style.width = studyPercent + "%";
// Urheilu
document.querySelector("#sportPercent").textContent = sportPercent + "%";
document.querySelector("#sportBar").style.width = sportPercent + "%";
// Hobby
document.querySelector("#hobbyPercent").textContent = hobbyPercent + "%";
document.querySelector("#hobbyBar").style.width = hobbyPercent + "%";
// Muu
document.querySelector("#otherPercent").textContent = otherPercent + "%";
document.querySelector("#otherBar").style.width = otherPercent + "%";
