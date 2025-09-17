let date = new Date();
//  date.setMonth(7)

// date.setDate(1);
// console.log(date.getDay() );

const holidays = [
  { date: "2025-01-01", name: "New Year's Day" },
  { date: "2025-04-18", name: "Good Friday" },
  { date: "2025-04-21", name: "Easter Monday" },
  { date: "2025-05-01", name: "Workers' Day" },
  { date: "2025-06-12", name: "Democracy Day" },
  { date: "2025-10-01", name: "Independence Day" },
  { date: "2025-12-25", name: "Christmas Day" },
  { date: "2025-12-26", name: "Boxing Day" },
];

renderCalendar();

function renderCalendar() {
  let currentMonth = date.getMonth();
  let monthDays = document.querySelector(".days");

  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  // let firstDayIndex = date.getDay();
  let firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  let lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  let nextDays = 7 - lastDayIndex - 1;

  
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[currentMonth];
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
     let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = i.toString().padStart(2, "0");
    let monthString = month.toString().padStart(2, "0");
    let fullDate = `${year}-${monthString}-${day}`;
    let holiday = holidays.find((h) => h.date === fullDate);
    console.log(fullDate);

    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else if (holiday){
      days += `<div class="holiday">
      <span class = "date">${i}</span>
      <span class = "holiday-name">${holiday.name}</span>
      </div>`
    }else {
      days += `<div>${i}</div> `;
    }
  }
  for (let a = 1; a <= nextDays; a++) {
    days += `<div class="next-date">${a}</div>`;
    
  }monthDays.innerHTML = days;
}

let prevIcon = document.querySelector(".prev");
let nextIcon = document.querySelector(".next");

prevIcon.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextIcon.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});