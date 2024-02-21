import {LaunchFireworkSystem, Firework} from "./Types";

export class LaunchFireworkImpl implements LaunchFireworkSystem {
    firework: Firework
    password: string

    constructor(firework: Firework, password: string) {
        this.firework = firework
        this.password = password
    }

    launch() {
        // ここにコードを記述して下さい
        if (this.password === '55party') {
            this.firework.fire()
        } else {
            this.firework.disable()
        }
    }
}