import {SpyFirework} from './SpyFirework'
import {LaunchFireworkImpl} from './LaunchFirework'
import FakeAuthServer from './FakeAuthServer'

// 単純にパスワードが正しいかだけでなく、認証サーバーでのログインが必要になった場合について考えてみましょう
// 認証サーバーを使うには、会社のセキュリティー部門とも打ち合わせや、面倒な手続き、さらには管理者の作業のリードタイムもかかります。
// このままでは、それがブロッカーになってプロジェクトが進みません。
// Fake（行動模倣）を使って、進められるところだけでも進めていきましょう。
// 認証サーバーにユーザーID渡した時、認証済みならユーザー情報を、認証できていなければundefinedを返します。
// ただし、Fakeにはロジックが含まれるため、Fakeに対してのテストも必要となります。

// Fakeのテスト
describe('認証サーバーのFakeのテスト', () => {
    it('ログイン済みのユーザーなら、ユーザー情報を返す', async () => {
        const fakeAuthServer = new FakeAuthServer()
        fakeAuthServer.login("someone")

        const user = await fakeAuthServer.getUser("someone")

        expect(user).toEqual({name: "user name", email: "example@mail.com"})
    })
    // ナイス最小限👍
    it('ユーザーがログイン済みでない場合、undefinedを返す', async () => {
        const fakeAuthServer = new FakeAuthServer()

        const user = await fakeAuthServer.getUser("someone")

        expect(user).toBeUndefined()
    })

    it('ログインしていないユーザーIDをgetUserに渡して実行するとundefinedを返す', async () => {
        const fakeAuthServer = new FakeAuthServer()
        fakeAuthServer.login("someone")


        const user = await fakeAuthServer.getUser("other user id")


        expect(user).toBeUndefined()
    })
})

// 実装のテスト
describe('LaunchFireworkImplのテスト', () => {
    it('launchBy()にログイン済みのユーザーIDを渡した場合、花火が打ち上げられる', async () => {
        const fakeAuthServer = new FakeAuthServer()
        const spyFirework = new SpyFirework()
        const launchFirework = new LaunchFireworkImpl(spyFirework, fakeAuthServer)
        launchFirework.login("user1")

        await launchFirework.launchBy("user1")

        expect(spyFirework.fire_wasCalled).toBeTruthy()
    })

    it('launchBy()にログイン済みでないユーザーIDを渡した場合、花火が打ち上げられない', async () => {
        const fakeAuthServer = new FakeAuthServer()
        const spyFirework = new SpyFirework()
        const launchFirework = new LaunchFireworkImpl(spyFirework, fakeAuthServer)
        launchFirework.login("user1")

        await launchFirework.launchBy("user not authorized")

        expect(spyFirework.fire_wasCalled).not.toBeTruthy()
    })
})