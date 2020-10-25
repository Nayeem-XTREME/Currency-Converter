const key = 'ff43dc8de70f112322225d2a';

const from = document.querySelector('#from-input');
const to = document.querySelector('#to-input');

const currencyFrom = document.querySelector('#from');
const currencyTo = document.querySelector('#to');

const swap = document.querySelector('.swap');

// console.log(from, to, currencyFrom, currencyTo, swap);


async function setOptions() {
    const res = await fetch(`https://open.exchangerate-api.com/v6/latest`);
    const data = await res.json();

    currencyFrom.remove(currencyFrom.value);
    currencyTo.remove(currencyTo.value);

    for (x in data.rates) {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');

        option1.text = x;
        option1.value = x;

        option2.text = x;
        option2.value = x;

        currencyFrom.add(option1);
        currencyTo.add(option2);
    }

}

async function calculate() {

    const fromValue = currencyFrom.value;
    const toValue = currencyTo.value;

    console.log(fromValue, typeof(fromValue));

    const input = from.value;

    const res = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${fromValue}`, {mode: 'cors'});
    const data = await res.json();

    rates = data.conversion_rates;
    console.log(input * rates[currencyTo.value]);

    
}

setOptions();

from.addEventListener('input', calculate);

currencyFrom.addEventListener('change', calculate);
currencyTo.addEventListener('change', calculate);

calculate();