import { GameService } from "./services/GameService.js";
import { WeatherService } from "./services/WeatherService.js";

const gameService = new GameService();
const weatherService = new WeatherService();

const name = await gameService.askForName();
const city = await gameService.askForCity();
const { temperature } = await weatherService.getWeatherData(city);
const guess = await gameService.askForTemperature();

gameService.getResults(name, city, guess, temperature);