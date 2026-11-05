import { LoginRegisterForm } from '@/components/login-register-form'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <>
      <video className="absolute h-screen w-full object-cover" autoPlay muted loop>
        <source src="videos/15863507-uhd_3840_2160_30fps.mp4"/>
      </video>
      <div className="flex relative w-full h-screen justify-center items-center">
        <LoginRegisterForm
          className="w-4xl"
        />
      </div>
      <Outlet />
    </>
  )
}
