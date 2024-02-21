export type Firework = {
    fire: () => void
}

export type LaunchFireworkSystem = {
    firework: Firework
    password: string
    launch: () => void
}
