export default class WeatherData {
  constructor(city, text, temperature, feelsLike, humidity, icon) {
    this.city = city;
    this.text = text;
    this.temperature = temperature;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.icon = icon;
  }
}
