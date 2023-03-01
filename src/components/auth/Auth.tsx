import { FC } from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../hooks/hooks"

interface isAuth {
    children: JSX.Element
}
const Auth: FC<isAuth> = ({children}) => {
    const isAuth = useAppSelector((state) => state.user.isAuth)

    if(!isAuth){
        return <Navigate to="/sign-in"/>
    }

    return children
}

export default Auth