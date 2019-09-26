class UI{
    constructor(){
        this.init();
    }
    init(){
        this.printCryptoCurrencies();
    }
    printCryptoCurrencies(){
        cryptoAPI.getCryptoCurrenciesList()
            .then(data=>{
                const cryptoCurrencies = data.cryptoCurrencies.data;
                console.log(cryptoCurrencies);
                const select = document.getElementById('cryptocurrency');
                cryptoCurrencies.forEach(currency=>{
                    const option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option);
                })
            })
    }
}