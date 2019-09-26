class CryptoAPI{

    async queryAPI(currency,cryptoCurrency){
        const result = document.getElementById('result');
        result.innerText = "Working on this feature!";
    }

    async getCryptoCurrenciesList(){
        const apiKey = '89f2c4c4-42e2-43ce-9aa9-258eda11a3b0';
        const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
        const qString = '?CMC_PRO_API_KEY=' + apiKey;
        const url1 = 'https://api.myjson.com/bins/6xdct';
        const data = await fetch(url1);
        const cryptoCurrencies = await data.json();

        return {
            cryptoCurrencies
        }
    }
}