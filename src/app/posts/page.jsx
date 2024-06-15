import { getPosts } from "@/services/postApi"
import Link from "next/link"
import React from "react"

const PostPage = async () => {
    const postsData = await getPosts()
    console.log(postsData)
    return (
        <div className="">
            <h6>All Posts</h6>
            <div className="grid grid-cols-4 gap-6">
                {postsData?.slice(0, 20).map(({ title, id, body }) => (
                    <div key={id } className="flex flex-col items-start">
                        <h6>{title}</h6>
                        <p>{body}</p>
                        <Link className="bg-red-400 px-4 py-2 mt-2" href={`/posts/${id}`}>See Details</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostPage
