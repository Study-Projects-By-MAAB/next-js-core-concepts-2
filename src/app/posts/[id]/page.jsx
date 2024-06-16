import { getDetailsPost } from "@/services/postApi"
import React from "react"

export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json()
    console.log(postData)
    return {
        title: `${postData.title}`,
        description: postData.body,
        keywords: postData.body.split(" "),
    }
}

const PostDetailsPage = async ({ params }) => {
    console.log(params?.id)
    const { title, body } = await getDetailsPost(params?.id)
    return (
        <div>
            <h2>Title: {title}</h2>
            <p>Description:{body}</p>
        </div>
    )
}

export default PostDetailsPage
