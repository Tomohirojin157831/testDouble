import {AuthServer, LaunchFireworkSystem, Firework} from './Types'

export class LaunchFireworkImpl implements LaunchFireworkSystem {
    firework: Firework
    authServer: AuthServer

    constructor(firework: Firework, authServer: AuthServer) {
        this.firework = firework
        this.authServer = authServer
    }

    login(userId: string) {
        this.authServer.login(userId)
    }

    async launchBy(userId: string) {
        const user = await this.authServer.getUser(userId)
        if (user !== undefined) {
            this.firework.fire()
        }
    }

}