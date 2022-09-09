
let weather = {
    "apiKey": "0001f9baa35043738f1960b45a7552ef",

    async fetchWeather(){
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=prague&units=metric&appid=0001f9baa35043738f1960b45a7552ef");
        const data = await response.json();
        const temp = data.main.temp;
        const feel = data.main.feels_like;
        const humidity = data.main.humidity;
        const pressure = data.main.pressure;

        document.getElementById('temperature').textContent= temp;
        document.getElementById('feels').textContent= feel;
        document.getElementById('humidity').textContent= humidity;
        document.getElementById('pressure').textContent= pressure;

    }

}

let btn = document.querySelector("button")

weather.fetchWeather();

setInterval(() => {
        weather.fetchWeather();
        console.log("Aktualizováno") //tohle jsem si jen dala pro kontrolu, že to funguje
    },
    300000
);

if (btn) {
    btn.addEventListener("click", (e) => {
            e.preventDefault()
            weather.fetchWeather()
        console.log("Aktualizováno") //Opět jen pro mou kontrolu
        }
    );
}
    else {
        console.log("BTN nenalezen")
    }






















