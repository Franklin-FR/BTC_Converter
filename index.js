




const apiFetcher = async ()=> {
    const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const dataToJson = await data.json()
    return (dataToJson.bpi.USD.rate_float)

}





const btn = document.querySelector('#btn')
btn.addEventListener("click", async()=> {
    let input = document.querySelector('input[type="number"]')            
    let btcVal = await apiFetcher()
    

    let calBtcValue = btcVal * input.value
    document.querySelector("h3").innerText = calBtcValue
    // console.log(calBtcValue)
    // debugger;
})










