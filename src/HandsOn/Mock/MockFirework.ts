import {Firework} from "./Types";

// Mockの役割を果たすように書き換えてください
export class MockFirework implements Firework {
    private fire_wasCalled = false
    fire(): void {
        this.fire_wasCalled=true
    }

    private disable_wasCalled = false
    disable(): void {
        this.disable_wasCalled=true
    }


    // fireを実行する時はdisableは実行しない
    // disableを実行する時はfireは実行しない
    // ↑これは対になっていて、両方とも呼ばれることはないですね
    // mockはソフトウェアの期待する振る舞いを知っています
    // パスワードが有効な時・無効な時それぞれのケースで期待する振る舞いを、メソッドにまとめてMock自身が検証します。
    verifyFire() {
        // ここに花火が打ち上がる場合のアサーションをまとめる
        expect(this.fire_wasCalled).toBeTruthy()
        expect(this.disable_wasCalled).not.toBeTruthy()
    }

    verifyDisable() {
        // ここに花火が打ち上がらない場合のアサーションをまとめる
        expect(this.fire_wasCalled).not.toBeTruthy()
        expect(this.disable_wasCalled).toBeTruthy()
    }
}