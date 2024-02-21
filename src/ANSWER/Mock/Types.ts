export type Firework = {
    fire: () => void
    disable: () => void
}

export type LaunchFireworkSystem = {
    password: string
    firework: Firework
    launch: () => void
}

