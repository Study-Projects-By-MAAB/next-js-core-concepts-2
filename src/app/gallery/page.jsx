import Image from "next/image"
import React from "react"

const GalleryPage = () => {
    return (
        <div>
            <h2>GalleryPage</h2>
            {[...Array(3).keys()].map((img) => (
                <Image key={img} src={`/images/${img+1}.jpg`} alt={`${img+1}`} height={1080} width={1920} />
            ))}

            {/* <Image
                src="/images/concept-nebula-with-galaxies-deep-space-cosmos-discovery-outer-space-stars-universe.jpg"
                alt=""
                height={1080}
                width={1920}
            /> */}
        </div>
    )
}

export default GalleryPage
