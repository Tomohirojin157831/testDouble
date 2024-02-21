export type Firework = {
    fire: () => void
}

export type LaunchFireworkSystem = {
    firework: Firework
    authServer: AuthServer
    login: (userId: string) => void
    launchBy: (userId: string) => void
}

export type User = {
    name: string
    email: string
}

export type AuthServer = {
    login: (userId: string) => void
    getUser: (userId: string) => Promise<User | undefined>
}
