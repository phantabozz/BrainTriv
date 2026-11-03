import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeRouteComponent,
})

function HomeRouteComponent() {
  return <div>Hello "/"!</div>
}
