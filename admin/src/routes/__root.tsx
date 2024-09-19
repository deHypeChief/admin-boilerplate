import { Outlet } from '@tanstack/react-router'
import { AuthContext } from '../libs/context/auth';
import { createRootRouteWithContext } from '@tanstack/react-router';

interface MyRouterContext {
  auth: AuthContext
}


export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
    </>
  ),
})
