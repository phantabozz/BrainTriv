import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field"

import loginLogo from "../assets/artificial-intelligence-14077.svg"
import registerLogo from "../assets/vecteezy_teamwork-people-holding-the-puzzle-team-work-that-gets_13810006.svg"
import { LoginForm } from "@/features/auth/components/forms/LoginForm"
import { RegisterForm } from "@/features/auth/components/forms/RegisterForm"

import { useNavigate, useLocation } from "@tanstack/react-router"

// Login and Register Form
export function LoginRegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const navigate = useNavigate();
  const location = useLocation();

  const isSignup = location.pathname === "/register";


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form 
            className={cn(
              "p-6 md:p-8 transition-transform duration-500 ease-in-out",
              isSignup ? "md:translate-x-full" : "md:translate-x-0"
            )}
          >
            <FieldGroup>
              {isSignup ? <RegisterForm /> : <LoginForm />}
              <FieldDescription className="text-center">
                {isSignup ? "Already have an account?" : "New to BrainTriv?"}
                <Button 
                  onClick={() => navigate({ to: isSignup ? '/login' : '/register' })}
                  variant="link"
                >
                  {isSignup ? "Login" : "Sign up"}
                </Button>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div 
            className={cn(
              "relative hidden bg-blue-200 md:block transition-transform duration-500 ease-in-out",
              isSignup ? "md:-translate-x-full" : "md:translate-x-0"
            )}
          >
            {!isSignup && (
              <img
                src={loginLogo}
                alt="brain-img"
                className="absolute inset-0 h-full w-full object-contain dark:brightness-[0.8]"
              />
            )}
            {isSignup && (
              <img
                src={registerLogo}
                alt="puzzle-img"
                className="absolute inset-0 h-full w-full object-contain dark:brightness-[0.8] bg-rose-500"
              />
            )}
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
