import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { useAuth } from '../libs/context/auth'
import { useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
    beforeLoad: ({ context }) => {
        if (context.auth.isAuthenticated) {
            throw redirect({ to: '/profile' })
        }
    },
    component: () => <Login />,
})


function Login() {
    const { isAuthenticated, login, logout } = useAuth()
    const router = useRouter()
    const navigate = useNavigate()


    async function handleLogin(){
        login("hello")
        await router.invalidate()
        await navigate({ to: '/profile'})
    }

    async function handleLogout(){
        logout()
        await router.invalidate()
        await navigate({ to: '/login'})
    }

    return (
        <>
            <h1>Login Section</h1>
            {
                isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <button onClick={handleLogin}>Login</button>
                )
            }
        </>
    )
}