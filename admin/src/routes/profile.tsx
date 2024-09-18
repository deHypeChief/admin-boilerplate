import { redirect } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
    beforeLoad: ({ context }) => {
        if (!context.auth.isAuthenticated) {
            throw redirect({ to: '/login' })
        }
    },
    component: () => <div>Hello /profile!</div>,
})
