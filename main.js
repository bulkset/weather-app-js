const ApiKey = "e0ba178e27e2444ca3794639232709"
const query = `http://api.weatherapi.com/v1/current.json?key=e0ba178e27e2444ca3794639232709&q=London`

fetch(query).then((response) => {

    return response.json()
}).then((data) => {
    console.log(data)
})