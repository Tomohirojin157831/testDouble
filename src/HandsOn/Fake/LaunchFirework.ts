import {AuthServer, LaunchFireworkSystem, Firework} from './Types'

export class LaunchFireworkImpl implements LaunchFireworkSystem {
    firework: Firework
    authServer: AuthServer

    constructor(firework: Firework, authServer: AuthServer) {
        this.firework = firework
        this.authServer = authServer
    }

    login(userId: string) {
        // テストが通るように実装してください
    }

    async launchBy(userId: string) {
        // テストが通るように実装してください
    }
}