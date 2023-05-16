import InputNovaPublicacao from "@/components/InputNovaPublicacao";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AllPost from "@/components/PostUsersByFiltro";

export default async function HomePage() {

    const session = await getServerSession(authOptions);
    const nameUser = session?.user?.name;
    // console.log(session)
    return (
        <div className="bg-zinc-950 w-full h-[calc(100vh_-_3.5rem)] h-">
            <div className="w-[90%] flex flex-row gap-5 mx-auto text-white pt-10">
                <div className="w-80">
                    <h1>flex 1</h1>
                </div>
                <div className="flex-1">
                    <InputNovaPublicacao session={session} />
                    <AllPost />
                </div>
                <div className="w-80">
                    <h1>flex 1</h1>
                </div>
            </div>
        </div>
    )
}