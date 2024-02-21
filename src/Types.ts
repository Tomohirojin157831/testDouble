export type Firework = {
    fire: () => Promise<string>
    selfDestruction: () => string
}

export type RealLaunchFireworkSystem = {
    password: string
    firework: Firework
    launch: () => Promise<string> | string
}
