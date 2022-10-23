function updateTimes() {
  let cataniaElement = document.querySelector("#catania");
  let cataniaTimeElement = cataniaElement.querySelector(".time");
  let cataniaDateElement = cataniaElement.querySelector(".date");
  let cataniaTimezone = moment().tz("Europe/Rome");

  let cracowElement = document.querySelector("#cracow");
  let cracowTimeElement = cracowElement.querySelector(".time");
  let cracowDateElement = cracowElement.querySelector(".date");
  let cracowTimezone = moment().tz("Europe/Warsaw");

  let hongkongElement = document.querySelector("#hongkong");
  let hongkongTimeElement = hongkongElement.querySelector(".time");
  let hongkongDateElement = hongkongElement.querySelector(".date");
  let hongkongTimezone = moment().tz("Hongkong");

  hongkongDateElement.innerHTML = hongkongTimezone.format("MMMM	Do YYYY");
  cataniaDateElement.innerHTML = cataniaTimezone.format("MMMM	Do YYYY");
  cracowDateElement.innerHTML = cracowTimezone.format("MMMM	Do YYYY");

  hongkongTimeElement.innerHTML = hongkongTimezone.format("HH:mm:ss");
  cataniaTimeElement.innerHTML = cataniaTimezone.format("HH:mm:ss");
  cracowTimeElement.innerHTML = cracowTimezone.format("HH:mm:ss");
}
updateTimes();
setInterval(updateTimes, 1000);
