import { getDetailsPost } from "@/services/postApi"
import React from "react"

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
