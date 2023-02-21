export interface IUser {
    token: string,
    username: string,
    _id: string,
    avatar: string,
}

export type userState = {
    users: IUser[],
    isLoading: boolean,
}

export type userData = {
    username: string,
    password: string,
}