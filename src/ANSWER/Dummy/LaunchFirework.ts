import {LaunchFireworkSystem, Firework} from './Types'

export class LaunchFireworkImpl implements LaunchFireworkSystem {
    password: string
    firework: Firework

    constructor(firework: Firework, password: string) {
        this.firework = firework
        this.password = password
    }

    launch() {
        this.firework.fire()
    }
}