import 'dotenv/config';


export class WeatherService {

    async getWeatherData(location: string): Promise<any>{
      const apiKey = process.env.WEATHER_API_KEY;
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: any = await response.json();
    
        const weather = {
          condition: data.current.condition,
          temperature: data.current.temp_c
        }
        return weather;

        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
    }

}