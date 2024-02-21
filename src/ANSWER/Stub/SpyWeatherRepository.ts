import {Weather, WeatherRepository} from "./Types"

export class SpyWeatherRepository implements WeatherRepository {
    getByCity_arg = ''

    getByCity(city: string): Promise<Weather> {
        this.getByCity_arg = city
        return Promise.resolve(Weather.SUNNY)
    }
}
