import {
  LoginButton,
  LogoutButton,
} from "@/components/buttons.component";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home");
  }

  return (
    <main className="bg-zinc-950 w-full h-screen">
      <nav className="h-14 w-full bg-zinc-900 border-b border-b-green-400">
        <div className="flex flex-row items-center h-full text-white w-[90%] mx-auto justify-between">
          <h1 className="">Nome Projeto</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <LoginButton />
          </div>
        </div>
      </nav>
      <h1 className="text-white flex h-[calc(100vh_-_3.5rem)] w-full justify-center items-center">Pagina Inicial do Projeto.</h1>
    </main>
  );
}
