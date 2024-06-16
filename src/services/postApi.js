// import { redirect } from "next/navigation"

export const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const data = await res.json()
    // if (data) {
    //     redirect(`/posts/${data[0].id}`)
    // }
    return data
}

export const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}
