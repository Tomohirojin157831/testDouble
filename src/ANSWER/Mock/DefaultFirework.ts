import {Firework} from './Types'

export default class DefaultFirework implements Firework {
    fire() {
        console.log("本物の花火が打ち上げられたよ")
    }

    disable(): void {
        console.log("本当に花火は中止になったよ")
    }
}