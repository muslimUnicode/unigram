export interface IUser {
    token: string,
    username: string,
    _id: string,
    avatar: string,
}

export type UserState = {
    user: IUser,
    isLoading: boolean,
    isAuth: boolean,
}

export type UserData = {
    username: string,
    password: string,
}