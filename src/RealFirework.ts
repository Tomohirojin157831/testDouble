import {Firework} from "./Types";

export class RealFirework implements Firework {
    password = ""

    async fire() {

        // 天気をAPIで今日の天気を取得
        const nowWeather = await fetch("https://weather.tsukumijima.net/api/forecast/city/230010")
            .then((response) => response.json()).then((user) => {
                console.log(user.forecasts[0].telop)
                return user.forecasts[0].telop
            })

        // パスワードと天気によって打ち上げるかしないかを決める
        if (nowWeather !== "雨") {
            return "花火を打ち上げました"
        } else {
            return "花火の打ち上げができません"
        }
    }
    selfDestruction() {
        return "中止しました"
    }
}
