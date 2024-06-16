import React from "react"
import { Oswald } from "next/font/google"

const oswald = Oswald({ weight: ["400"], subsets: ["latin"] })

export const metadata = {
    title: "About",
    description: "About Page",
    keywords: ["about", "about page"],
}

const getTime = async () => {
    try {
        const res = await fetch("http://localhost:3000/time")
        const data = await res.json()
        console.log(data.currentTime)
        return data.currentTime
    } catch (error) {
        console.error("Fetch failed", error)
        // Handle the error or return a default value
        return null // or a default time if appropriate
    }
}

const AboutPage = async () => {
    const currentTime = await getTime()
    return (
        <div className={oswald.className}>
            AboutPage
            <h3 className="text-3xl text-red-400 mt-12">Time: {currentTime}</h3>
        </div>
    )
}

export default AboutPage
