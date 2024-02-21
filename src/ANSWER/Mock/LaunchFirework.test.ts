import {MockFirework} from './MockFirework'
import {LaunchFireworkImpl} from './LaunchFirework'
import SpyFirework from './SpyFirework'

// また仕様が変わって、打ち上げられなかった場合に花火を無効化するようににdisableメソッドを呼ぶことになりました。
// そのため、打ち上げられるテストケースでは、fireが呼ばれることに加えて、disableが呼ばれていないことも合わせてテストしたいです。
// 打ち上げられないテストケースも同様に、fireが呼ばれないことに加えて、disableが呼ばれていることを合わせてテストします。
// Spyをそのように書き換えると、リファクタリングの必要があることに気づきます。
// リファクタリングの結果、Spyにアサートが含まれることとなりましたが、それはもうすでにSpyではなくMock（自己検証するSpy）です。

describe('花火打ち上げシステム（LaunchFireworkImpl）のテスト', () => {

    describe('リファクタ前', () => {
        it('正しいpasswordが設定されている場合、花火を打ち上げて中止はしないこと', () => {
            const spyFirework = new SpyFirework()
            const correctPassword = '55party'
            const launchFirework = new LaunchFireworkImpl(spyFirework, correctPassword)


            launchFirework.launch()


            expect(spyFirework.fire_wasCalled).toBeTruthy()
            expect(spyFirework.disable_wasCalled).not.toBeTruthy()
        })

        it('不正なpasswordが設定されている場合、花火を打ち上げず中止すること', () => {
            const spyFirework = new SpyFirework()
            const invalidPassword = '88event'
            const launchFirework = new LaunchFireworkImpl(spyFirework, invalidPassword)


            launchFirework.launch()


            expect(spyFirework.fire_wasCalled).not.toBeTruthy()
            expect(spyFirework.disable_wasCalled).toBeTruthy()
        })
    })

    describe('リファクタ後', () => {
        it('正しいpasswordが設定されている場合、花火を打ち上げて中止はしないこと', () => {
            const mockFirework = new MockFirework()
            const correctPassword = '55party'
            const launchFirework = new LaunchFireworkImpl(mockFirework, correctPassword)


            launchFirework.launch()


            mockFirework.verifyFire()
        })

        it('不正なpasswordが設定されている場合、花火を打ち上げず中止すること', () => {
            const mockFirework = new MockFirework()
            const invalidPassword = '88event'
            const launchFirework = new LaunchFireworkImpl(mockFirework, invalidPassword)


            launchFirework.launch()


            mockFirework.verifyDisable()
        })
    })
})

