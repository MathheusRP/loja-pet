"use client"

import { useParams } from "next/navigation"
import { Header } from "@/app/components/header"
import './pageProductStyle.css'
import { ProductImage } from "@/app/components/productImage"
import { ProductDetail } from "@/app/components/productDetail"
import { Footer } from "@/app/components/footer"

const RoupaId = () => {

    // const params = useParams()
    const params = useParams<{id: string }>()

    return (
        <>
            <Header/> 
            <main className="productContainer">
                <section className="imageContainer">
                    <ProductImage/>
                </section>
                <section className="detailContainer">
                    <ProductDetail id={params.id}/>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default RoupaId

{/* <h1> Roupa de {params.id}</h1> */}