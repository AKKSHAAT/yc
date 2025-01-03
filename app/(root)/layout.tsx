import { ReactNode } from "react";
import Navbar from "../components/Navbar";

export default function layout({ children }: Readonly<{children: ReactNode}>) {
    return (
        <main className="font-work-sans bg-gray-100 text-gray-800">
            <Navbar />
            {children}
        </main>
    )
}