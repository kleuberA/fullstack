import Navbar from '@/components/Navbar';
import '../globals.css'
import { NextAuthProvider } from "../providers";

export const metadata = {
    title: "Home Page",
    description: "Home Page",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NextAuthProvider>
                    <Navbar />
                    {children}
                </NextAuthProvider>
            </body>
        </html>
    );
}
