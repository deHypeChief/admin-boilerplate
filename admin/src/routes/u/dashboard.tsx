import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/u/dashboard')({
  component: () => <div>Hello /u/dashboard!</div>,
})
