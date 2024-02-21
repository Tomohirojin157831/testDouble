import {Weather, WeatherRepository} from "./Types"

// 正しくSpyの役割を果たすように書き換えてください
export class SpyWeatherRepository implements WeatherRepository {
    // getByCity_arg: getByCity メ ソッドが受け取ったcityを保存しておいて、何が渡されたかを確認するためのプロパティ
    getByCity_arg = ''

    getByCity(city: string): Promise<Weather> {
        this.getByCity_arg = city
        return Promise.resolve(Weather.SUNNY)
    }
}

const spy = new SpyWeatherRepository()
spy.getByCity('Toyota')
console.log(spy.getByCity_arg) // Toyota　

// getByCityメソッドが「呼ばれた時」に何を受け取ったか

// Spy: テスト対象が依存しているコンポーネントにアクセスしたのかを記録するもの
// → 何のメソッドが呼ばれたか、どんな引数を渡されたか、何回呼ばれたか・もしくは呼ばれていないのか
// → Spyは返り値を気にしないので、考えなくていい。コンパイルさえ通れば何を返してもいい。