import {AuthServer, User} from './Types'

// Fakeの役割を果たすように書き換えてください
export default class FakeAuthServer implements AuthServer {
    private authedUsers: string[] = []

    login(userId: string): void {
        //authedUsersにuserIdを入れる
        this.authedUsers.push(userId)
    }

    // ログイン済みだったらUserを返す
    // ログイン済みでなかったらundefinedを返す
    // [].includes("")
    getUser(userId: string): Promise<User | undefined> {
        if(this.authedUsers.includes(userId)){
            return Promise.resolve({name: "user name", email: "example@mail.com"})
        }
        return Promise.resolve(undefined)
    }
}