class Weather {
    constructor(city,country){
        this.apikey = 'f9abe913c4cc5315c37a59db898eaec7';
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apikey}&units=imperial`);

        const responseData = await response.json();

        return responseData
    }

    changeLocation(city,country){
        this.city = city;
        this.country = country;
    }
}