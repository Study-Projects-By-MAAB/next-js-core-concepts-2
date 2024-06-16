import Meals from "@/components/Meals"
import styles from "./styles.module.css"

export const metadata = {
    title: {
        absolute: "Meals",
    },
    description: "Meals Page",
}

const MealsPage = () => {
    return (
        <div className="p-12">
            <h2 className="text-3xl font-semibold text-red-400">Choose Your meals</h2>
            <p className={styles.text_large}>Choose meals of your choice by searching.....</p>
            <Meals></Meals>
        </div>
    )
}

export default MealsPage
