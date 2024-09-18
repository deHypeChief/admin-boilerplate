import { Outlet } from '@tanstack/react-router'
import {
  createFileRoute,
  redirect,
  useNavigate,
  useRouter,
} from '@tanstack/react-router'
import { useAuth } from '../../libs/context/auth'

export const Route = createFileRoute('/u/')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: () => ProtectedLayout,
})

function ProtectedLayout() {
  const { logout } = useAuth()
  const router = useRouter()
  const navigate = useNavigate()

  async function handleLogout() {
    logout()
    await router.invalidate()
    await navigate({ to: '/login' })
  }
  return (
    <>
      <h1>Protected</h1>
      {/* <Outlet /> */}

      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
