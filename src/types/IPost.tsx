export interface IPost {
    _id: string,
    description: string,
    comments: [],
    image: string,
    user: string,
    created_at: string,
    likes: number,
}

export type postState = {
    post: IPost[];
    isLoading: boolean;
}