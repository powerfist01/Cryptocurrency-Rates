const cryptoAPI = new CryptoAPI();
const ui = new UI();

const form = document.getElementById('form');



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const selectCurrency = document.getElementById('currency').value;
    const selectCryptoCurrency = document.getElementById('cryptocurrency').value;

    if(selectCurrency === "" || selectCryptoCurrency === ""){
        alert('All fields are mandatory :)');
    } else {
        cryptoAPI.queryAPI(selectCurrency,selectCryptoCurrency);
    }
})