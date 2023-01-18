let elForm = document.querySelector(".form");
let elInput = document.querySelector("#age");
let elresult = document.querySelector("#result");
let elresult2 = document.querySelector("#result2");
let elresult3 = document.querySelector("#result3");
let elresult4 = document.querySelector("#result4");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  function piyodaTezligi(elInputValue, piyoda) {
    var piyoda = 3.6;
    var elInputValue = +elInput.value;
    return (elInputValue / piyoda).toFixed(2) + " Soat";
  }
  elresult.textContent = piyodaTezligi();

  function velosipedTezligi(elInputValue, velosiped) {
    var velosiped = 20.1;
    var elInputValue = +elInput.value;
    return (elInputValue / velosiped).toFixed(2) + " Soat";
  }
  elresult2.textContent = velosipedTezligi();

  function moshinaTezligi(elInputValue, moshina) {
    var moshina = 70;
    var elInputValue = +elInput.value;
    return (elInputValue / moshina).toFixed(2) + " Soat";
  }
  elresult3.textContent = moshinaTezligi();

  function samalyotTezligi(elInputValue, samalyot) {
    var samalyot = 800;
    var elInputValue = +elInput.value;
    return (elInputValue / samalyot).toFixed(2) + " Soat";
  }
  elresult4.textContent = samalyotTezligi();
 })