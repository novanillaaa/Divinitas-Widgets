<script>
function generateCalendar() {
const now = new Date();
const month = now.getMonth();
const year = now.getFullYear();
const today = now.getDate();

const monthNames = [
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];
const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

let firstDay = new Date(year, month, 1).getDay();
let daysInMonth = new Date(year, month + 1, 0).getDate();

let table = `<header>${monthNames[month]} ${year}</header><table><tr>`;
daysOfWeek.forEach(d => { table += `<th>${d}</th>`; });
table += "</tr><tr>";

for (let i = 0; i < firstDay; i++) {
table += "<td></td>";
}

for (let day = 1; day <= daysInMonth; day++) {
let isToday = day === today ? "today" : "";
table += `<td class="${isToday}">${day}</td>`;
if ((day + firstDay) % 7 === 0) table += "</tr><tr>";
}

table += "</tr></table>";
document.getElementById("calendar").innerHTML = table;
}

generateCalendar();
</script>
