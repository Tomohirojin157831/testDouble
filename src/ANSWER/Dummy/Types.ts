export type Firework = {
    fire: () => void
}

export type LaunchFireworkSystem = {
    password: string
    firework: Firework
    launch: () => void
}
