const calendarEl = document.getElementById("calendar");
let currentDate = new Date();

// Updated events with type: virtue, sin, or normal
const events = {
"2025-09-12": {text: "Choir Rehearsal @ 5PM", type: "virtue"},
"2025-09-15": {text: "Dance Performance @ 7PM", type: "virtue"},
"2025-09-18": {text: "Secret Society Meeting @ 9PM", type: "sin"},
"2025-09-20": {text: "Scholarship Ceremony @ 3PM", type: "normal"},
"2025-09-21": {text: "Art Exhibit Opening @ 3PM", type: "virtue"},
"2025-09-25": {text: "Theater Club Party @ 8PM", type: "sin"}
};

function renderCalendar(date) {
const month = date.getMonth();
const year = date.getFullYear();
const today = new Date();
const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const monthNames = [
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

let html = `<header>
<button id="prev">&#8249;</button>
<div>${monthNames[month]} ${year}</div>
<button id="next">&#8250;</button>
</header>
<table>
<tr>${daysOfWeek.map(d => `<th>${d}</th>`).join("")}</tr>
<tr>`;

// Empty cells before first day
for (let i = 0; i < firstDay; i++) {
html += "<td></td>";
}

for (let day = 1; day <= daysInMonth; day++) {
const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
const eventData = events[dateStr];
const isToday = (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) ? "today" : "";
const eventText = eventData ? eventData.text : "";
let dotColor = "";
if(eventData){
if(eventData.type === "virtue") dotColor = "#A3C9F9"; // Celestial Blue
else if(eventData.type === "sin") dotColor = "#A4161A"; // Blood Crimson
else dotColor = "#CFAE60"; // Golden Seal normal
}
html += `<td class="${isToday}" data-event="${eventText}" style="--dot-bg: ${dotColor}">${day}</td>`;
if ((day + firstDay) % 7 === 0 && day !== daysInMonth) html += "</tr><tr>";
}

html += "</tr></table>";
calendarEl.innerHTML = html;

document.getElementById("prev").addEventListener("click", () => {
currentDate.setMonth(currentDate.getMonth() - 1);
renderCalendar(currentDate);
});
document.getElementById("next").addEventListener("click", () => {
currentDate.setMonth(currentDate.getMonth() + 1);
renderCalendar(currentDate);
});

// Clickable days
document.querySelectorAll("#calendar td").forEach(td => {
td.addEventListener("click", () => {
const event = td.getAttribute("data-event");
if(event) alert(event);
else alert("No events today");
});
});
}

renderCalendar(currentDate);
