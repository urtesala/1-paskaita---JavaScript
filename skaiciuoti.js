const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const calculateEl = document.getElementById('calculate');
const apskaiciuotaEl = document.getElementById('apskaiciuota');
const actionEl = document.getElementById('action');

function calculate() {
  console.log('action ===', action.value);
  let rezultatas;
  if (action.value === 'plius') {
    rezultatas = num1El.valueAsNumber + num2El.valueAsNumber;
  } else if (action.value === 'minus') {
    rezultatas = num1El.valueAsNumber - num2El.valueAsNumber;
  }

  console.log(rezultatas);
  apskaiciuotaEl.textContent = rezultatas;
  // num1El.value = '';
  // num2El.value = '';
}

calculateEl.onclick = calculate;