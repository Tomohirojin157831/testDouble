import {LaunchFireworkSystem, Weather, WeatherRepository} from './Types'
import DefaultWeatherRepository from "./DefaultWeatherRepository";


export class LaunchFireworkImpl implements LaunchFireworkSystem {
    weatherRepository: WeatherRepository

    constructor(weatherRepository: DefaultWeatherRepository) {
        this.weatherRepository = weatherRepository
    }

    async launch(city: string): Promise<string> {
        // red(想定通りテストが落ちることを確認する) -> green(テストが通る最小限の実装をする) -> refactor
        // テストが通るように書き換えてください
        const resultWeather = await this.weatherRepository.getByCity(city)
        if (resultWeather == Weather.SUNNY){
            return Promise.resolve('花火を打ち上げました')
        }else{
            return Promise.resolve('中止しました')
        }
    }
}
