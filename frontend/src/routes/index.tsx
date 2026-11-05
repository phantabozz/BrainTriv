import { Button, buttonVariants } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from 'cn'

export const Route = createFileRoute('/')({
  component: HomeRouteComponent,
})

function HomeRouteComponent() {
  return (
    <>
      <video className="absolute h-screen w-full object-cover" autoPlay muted loop>
        <source src="videos/15863507-uhd_3840_2160_30fps.mp4"/>
      </video>
      <div className="flex flex-col h-screen items-center justify-center relative">
        <h1 className="mb-4 text-4xl text-black font-bold tracking-tight md:text-5xl lg:text-6xl">Brain <mark className="px-3 pb-0.5 text-white bg-brand bg-blue-500 rounded-3xl">Triv</mark></h1>
        <p className="text-lg font-normal text-stone-700 text-body lg:text-xl text-center">Turn your learning materials into AI-powered quizzes. Challenge friends,<br /> compete in real time, and make learning fun </p>
        <div className="flex mt-5 gap-2 [&>Button]:px-6 [&>Button]:py-6 [&>Button]:text-white">
          <Link
            to="/login"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-violet-500 hover:bg-violet-600 text-lg text-white px-6 py-6"
            )}
          >
          Login
          </Link>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-lg" variant="secondary">Join Game</Button>
        </div>
      </div>
    </>
  )
}
