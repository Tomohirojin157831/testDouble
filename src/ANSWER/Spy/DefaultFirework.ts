import {Firework} from './Types'

export default class DefaultFirework implements Firework {
    fire() {
        console.log("本物の花火が打ち上げられたよ")
    }
}