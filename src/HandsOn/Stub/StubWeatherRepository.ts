import {Weather, WeatherRepository} from './Types'

// 正しくStubの役割を果たすように書き換えてください
export class StubWeatherRepository implements WeatherRepository {
    // 返り値を設定するためのプロパティ
    getByCity_returnValue = Promise.resolve(Weather.SUNNY)

    getByCity(city: string): Promise<Weather> {
        // ↓getByCity_returnValueにセットした値は無視？
        // return Promise.resolve(Weather.SUNNY)
        return this.getByCity_returnValue
    }
}

const stub = new StubWeatherRepository()
stub.getByCity_returnValue = Promise.resolve(Weather.CLOUDY)
// ↓これ今の実装だと何が帰ってきますか？
const actualWeather = stub.getByCity('')


// Stub → 返り値を固定するためのダブル