function updateTimes() {
  let romeElement = document.querySelector("#rome");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimezone = moment().tz("Europe/Rome");

  let warsawElement = document.querySelector("#warsaw");
  let warsawTimeElement = warsawElement.querySelector(".time");
  let warsawDateElement = warsawElement.querySelector(".date");
  let warsawTimezone = moment().tz("Europe/Warsaw");

  let hongkongElement = document.querySelector("#hongkong");
  let hongkongTimeElement = hongkongElement.querySelector(".time");
  let hongkongDateElement = hongkongElement.querySelector(".date");
  let hongkongTimezone = moment().tz("Hongkong");

  romeDateElement.innerHTML = romeTimezone.format("MMMM	Do YYYY");
  warsawDateElement.innerHTML = warsawTimezone.format("MMMM	Do YYYY");
  hongkongDateElement.innerHTML = hongkongTimezone.format("MMMM	Do YYYY");

  romeTimeElement.innerHTML = romeTimezone.format("HH:mm:ss");
  warsawTimeElement.innerHTML = warsawTimezone.format("HH:mm:ss");
  hongkongTimeElement.innerHTML = hongkongTimezone.format("HH:mm:ss");
}
updateTimes();
setInterval(updateTimes, 1000);
