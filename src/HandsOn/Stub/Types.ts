export enum Weather {
    SUNNY,
    CLOUDY,
    RAINY,
}

export type WeatherRepository = {
    getByCity: (city: string) => Promise<Weather>
}

export type LaunchFireworkSystem = {
    weatherRepository: WeatherRepository
    launch: (city: string) => Promise<string>
}
