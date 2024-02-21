import {LaunchFireworkSystem, Firework} from "./Types";

export class LaunchFireworkImpl implements LaunchFireworkSystem {
    firework: Firework
    password: string

    constructor(firework: Firework, password: string) {
        this.firework = firework
        this.password = password
    }

    launch() {
        // テストが通るように実装してください
    }
}