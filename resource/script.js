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

    for (x in data.rates) {
        const option = document.createElement('option');
        option.text = x;

        currencyFrom.add(option);
    }

}

async function calculate(currency) {

    console.log(typeof(currency));

    const input = from.value;

    const res = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${currency}`);
    const data = await res.json();

    rates = data.conversion_rates;
    console.log(rates[currency]);

    
}



from.addEventListener('input', calculate);

currencyFrom.addEventListener('change', calculate);
currencyTo.addEventListener('change', calculate);

setOptions();

calculate('USD');