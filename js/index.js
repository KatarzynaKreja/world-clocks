function updateTimes() {
  let cataniaElement = document.querySelector("#catania");
  if (cataniaElement) {
    let cataniaTimeElement = cataniaElement.querySelector(".time");
    let cataniaDateElement = cataniaElement.querySelector(".date");
    let cataniaTimezone = moment().tz("Europe/Rome");
    cataniaDateElement.innerHTML = cataniaTimezone.format("MMMM	Do YYYY");
    cataniaTimeElement.innerHTML = cataniaTimezone.format("HH:mm:ss");
  }

  let cracowElement = document.querySelector("#cracow");
  if (cracowElement) {
    let cracowTimeElement = cracowElement.querySelector(".time");
    let cracowDateElement = cracowElement.querySelector(".date");
    let cracowTimezone = moment().tz("Europe/Warsaw");
    cracowDateElement.innerHTML = cracowTimezone.format("MMMM	Do YYYY");
    cracowTimeElement.innerHTML = cracowTimezone.format("HH:mm:ss");
  }

  let hongkongElement = document.querySelector("#hongkong");
  if (hongkongElement) {
    let hongkongTimeElement = hongkongElement.querySelector(".time");
    let hongkongDateElement = hongkongElement.querySelector(".date");
    let hongkongTimezone = moment().tz("Hongkong");
    hongkongDateElement.innerHTML = hongkongTimezone.format("MMMM	Do YYYY");
    hongkongTimeElement.innerHTML = hongkongTimezone.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
          <div class="city" >
          <div>
            <h3>${cityName}</h3>
            <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
          </div>

          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
  `;
}
updateTimes();
setInterval(updateTimes, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
