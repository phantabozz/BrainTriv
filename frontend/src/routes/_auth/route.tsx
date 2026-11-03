import { LoginRegisterForm } from '@/components/login-register-form'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center">
        <LoginRegisterForm
          className="w-4xl"
        />
      </div>
      <Outlet />
    </>
  )
}
