const button = document.querySelector('button')
const err = document.querySelector('.error')
const main = document.querySelector('.cityData')
const loading = document.querySelector('.load')
const getWeather = async () => {
    const apiKey = "c60a00d53f5c446bb43162007231310"
    try{
            const input = document.querySelector('input').value
            if(input){
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}`, {mode: "cors"})
                if(!response.ok){
                    throw new Error()
                }
                const data = await response.json() 
                if(!data){
                    loading.innerHTML = "Loading..."
                }
                if(data){
                    loadData(data)
                    err.innerHTML = ""
                    loading.innerHTML = ""
                }
              
            }
        }catch(error){
            err.innerHTML = "No location found."
        }
}

button.addEventListener('click', getWeather)
function loadData(data){
    const image = document.querySelector('#icon')
    const cond = document.querySelector('.cond')
    const feels = document.querySelector('.feels')
    const temp = document.querySelector('.temp')
    const humid = document.querySelector('.humid')
    const title = document.querySelector('.title')

    const condition = data.current.condition.text
    const feelslike_c = data.current.feelslike_c
    const temp_c = data.current.temp_c
    const humidity = data.current.humidity
    const icon = data.current.condition.icon
    const city = data.location.name

    image.src = "http:" + icon
    title.textContent = city
    cond.innerHTML = `Condition: ${condition}`
    feels.innerHTML = `Feels like: ${feelslike_c} °C`
    temp.innerHTML = `It is: ${temp_c} °C `
    humid.innerHTML = `Humidity: ${humidity}`

}

