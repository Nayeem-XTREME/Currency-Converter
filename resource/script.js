const key = 'cb82c3405ae982d702305ad181f18e37';

const from = document.querySelector('#from-input');
const to = document.querySelector('#to-input');

const currencyFrom = document.querySelector('#from');
const currencyTo = document.querySelector('#to');

const swap = document.querySelector('.swap');

// console.log(from, to, currencyFrom, currencyTo, swap);


async function setOptions() {
    const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}`);
    const data = await res.json();

    for (x in data.rates) {
        const option = document.createElement('option');
        option.text = x;

        currencyFrom.add(option);
    }

}

async function calculate(currency) {

    console.log(typeof(currency));

    const input = from.value;

    const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}`);
    const data = await res.json();

    rates = data.rates;
    // console.log(rates.currency);
}



from.addEventListener('input', calculate);

currencyFrom.addEventListener('change', calculate);
currencyTo.addEventListener('change', calculate);

setOptions();

calculate(currencyFrom.value);