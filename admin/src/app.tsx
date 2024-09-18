import { RouterProvider } from "@tanstack/react-router"
import { AuthProvider, useAuth } from "./libs/context/auth"
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
    routeTree,
    context: { auth: undefined! }
});


declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}


function AppCore() {
    const auth = useAuth()
    return (
        <RouterProvider router={router} context={{ auth }} />
    )
}

export function App() {
    return (
        <AuthProvider>
            <AppCore />
        </AuthProvider>
    )
}
