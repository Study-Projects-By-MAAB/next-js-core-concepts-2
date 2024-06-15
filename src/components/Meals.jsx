"use client"
import Image from "next/image"
import React, {  useState } from "react"

const Meals = () => {
    const [search, setSearch] = useState("")
    const [meals, setMeals] = useState([])
    const [error, setError] = useState("")

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json()
            setError("")
            setMeals(data.meals)
        } catch (error) {
            setError("No Data Found!")
        }
    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input
                onChange={handleSearch}
                className="p-4 outline-none border-transparent text-slate-900"
                type="text"
                placeholder="Search Meal"
            />
            <button onClick={loadData} className="bg-red-400 p-4">
                Search
            </button>
            <div className="mt-12 grid grid-cols-3 gap-12">
                {meals.length > 0 &&
                    !error &&
                    meals?.map((meal) => (
                        <div key={meal.idMeal}>
                            <Image src={meal.strMealThumb} alt={meal.strMeal} width={400} height={400}></Image>
                            <h6>{meal.strMeal}</h6>
                            <p>{meal.strInstructions}</p>
                        </div>
                    ))}
                {error && <h6>No Data Found</h6>}
            </div>
        </div>
    )
}

export default Meals
