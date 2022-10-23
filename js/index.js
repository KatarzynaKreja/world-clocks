function updateTimes() {
  let cataniaElement = document.querySelector("#catania");
  if (cataniaElement) {
    let cataniaTimeElement = cataniaElement.querySelector(".time");
    let cataniaDateElement = cataniaElement.querySelector(".date");
    let cataniaTimezone = moment().tz("Europe/Rome");
    cataniaDateElement.innerHTML = cataniaTimezone.format("MMMM	Do YYYY");
    cataniaTimeElement.innerHTML = cataniaTimezone.format("HH:mm:ss");
  }

  let reykjavikElement = document.querySelector("#reykjavik");
  if (reykjavikElement) {
    let reykjavikTimeElement = reykjavikElement.querySelector(".time");
    let reykjavikDateElement = reykjavikElement.querySelector(".date");
    let reykjavikTimezone = moment().tz("Iceland");
    reykjavikDateElement.innerHTML = reykjavikTimezone.format("MMMM	Do YYYY");
    reykjavikTimeElement.innerHTML = reykjavikTimezone.format("HH:mm:ss");
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
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
        <a href="/">🔙 Back to all cities 🔙</a>
  `;
}
updateTimes();
setInterval(updateTimes, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
