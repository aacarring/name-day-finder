const containerDiv = document.querySelector('.container');
const yesterdayBtn = document.querySelector('.buttons .yesterday');
const todayBtn = document.querySelector('.buttons .today');
const tomorrowBtn = document.querySelector('.buttons .tomorrow');
const questionMarkSvg = document.querySelector('.container img');


function yesterdayNameDays() {
    questionMarkSvg.remove();
    containerDiv.innerHTML = "";
    fetch("https://api.abalin.net/yesterday")
        .then(response => response.json())
        .then(data => {
            let dataArr = data.data;
            let namedays = dataArr.namedays;
            for (let [key, value] of Object.entries(namedays)) {
                if (value !== "n/a") {
                    let nameday = document.createElement('p');
                    nameday.textContent = value;
                    containerDiv.style.paddingTop = "45vh";
                    containerDiv.appendChild(nameday);
                }
            }
        });
}

function todayNameDays() {
    questionMarkSvg.remove();
    containerDiv.innerHTML = "";
    fetch("https://api.abalin.net/today")
        .then(response => response.json())
        .then(data => {
            let dataArr = data.data;
            let namedays = dataArr.namedays;
            for (let [key, value] of Object.entries(namedays)) {
                if (value !== "n/a") {
                    let nameday = document.createElement('p');
                    nameday.textContent = value;
                    containerDiv.style.paddingTop = "45vh";
                    containerDiv.appendChild(nameday);
                }
            }
        });
}

function tomorrowNameDays() {
    questionMarkSvg.remove();
    containerDiv.innerHTML = "";
    fetch("https://api.abalin.net/tomorrow")
        .then(response => response.json())
        .then(data => {
            let dataArr = data.data;
            let namedays = dataArr.namedays;
            for (let [key, value] of Object.entries(namedays)) {
                if (value !== "n/a") {
                    let nameday = document.createElement('p');
                    nameday.textContent = value;
                    containerDiv.style.paddingTop = "45vh";
                    containerDiv.appendChild(nameday);
                }
            }
        });
}

yesterdayBtn.addEventListener('click', yesterdayNameDays);
todayBtn.addEventListener('click', todayNameDays);
tomorrowBtn.addEventListener('click', tomorrowNameDays);
