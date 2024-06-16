import { Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"

// const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] })

export const metadata = {
    title: {
        default: "Next App 2",
        template: "%s | Next App 2",
    },
    description: "Super Next App",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Navbar></Navbar>
                {children}
                <footer className="bg-blue-600 text-white">This is footer</footer>
            </body>
        </html>
    )
}
