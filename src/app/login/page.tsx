import Textanimation from "@/components/textAnimation";
import AuthForm from "./components/FormAuth";

export default function LoginPage() {
    return (
        <div className="h-screen bg-zinc-900">
            <h1 className="text-white text-2xl font-bold text-center pt-8">Bem vindo ao <Textanimation /></h1>
            <AuthForm />
        </div>
    )
}