import {Firework, RealLaunchFireworkSystem} from "./Types";

export class LaunchFireworkImpl implements RealLaunchFireworkSystem {
    firework: Firework
    password: string

    constructor(firework: Firework, password: string) {
        this.firework = firework
        this.password = password
    }

    async launch() {
        if (this.password === "55party") {
            return await this.firework.fire()
        } else {
            return this.firework.selfDestruction()
        }
    }
}
