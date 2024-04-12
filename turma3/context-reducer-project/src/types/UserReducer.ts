type User = {
    id: number
    name: string
}

export type UserState = {
    user: User | null
}

type SignInUser = {
    type: 'SIGNIN'
    payload: { user: User }
}

type SignOutUser = {
    type: 'SIGNOUT'
}

export type UserAction = SignInUser | SignOutUser