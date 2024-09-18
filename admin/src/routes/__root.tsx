import { Link } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { AuthContext } from '../libs/context/auth';
import { createRootRouteWithContext } from '@tanstack/react-router';

interface MyRouterContext {
  auth: AuthContext
}

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <h1>My App</h1>
      <ul>
        <li>
          <Link to="/" activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" activeProps={activeProps}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/u/dashboard" activeProps={activeProps}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile" activeProps={activeProps}>
            {({ isActive }) => <>Profile {isActive && '~'}</>}
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  ),
})
