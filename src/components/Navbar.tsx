import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import AvatarContainer from "./Avatar";
import DropdownMenuCotainer from "./DropdownComponent";

async function Navbar() {

    const session = await getServerSession(authOptions);
    // console.log(session)
    const nameUser = session?.user?.name;
    // console.log(nameUser)

    return (
        <div className="h-14 w-full bg-zinc-900 border-b border-b-green-400">
            <div className="flex flex-row items-center h-full text-white w-[90%] mx-auto justify-between">
                <h1 className="">Nome Projeto</h1>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <h1 className="bg-clip-text text-transparent uppercase bg-gradient-to-r font-semibold text-base from-green-500 to-green-300 w-150 overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {nameUser}
                    </h1>
                    <DropdownMenuCotainer />
                </div>
            </div>
        </div>
    )
}

export default Navbar;

