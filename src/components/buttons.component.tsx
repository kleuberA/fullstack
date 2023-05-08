"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
    return (
        <button className="bg-green-400 text-zinc-900 p-1 text-sm font-medium rounded w-24 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300" onClick={() => signIn()}>
            Sign in
        </button>
    );
};


export const LogoutButton = () => {
    return (
        <button className="bg-green-400 text-zinc-900 p-1 text-sm font-medium rounded w-24 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300" onClick={() => signOut()}>
            Sign Out
        </button>
    );
};

