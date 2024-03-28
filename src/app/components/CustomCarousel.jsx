"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"
import React, { useEffect, useRef, useState } from 'react'

function CustomCarousel() {

    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

    const [api, setApi] = useState(null)
    const [current, setCurrent] = useState(0)
    const [carouselIndex, setCarouselIndex] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCarouselIndex(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])


    return (
        <div className="flex flex-col">
            <Carousel plugins={[plugin.current]} opts={{ align: "start", loop: true }} setApi={setApi}>
                <CarouselContent >
                    {Array.from({ length: 3 }).map((_, index) => (<CarouselItem key={index} onClick={() => console.log(index)} className="h-[50vh]"><Image src={`/images/back${index + 1}.jpg`} className="w-full h-full object-center object-cover" width={1000} height={1000} alt="Carousel Image" />
                    </CarouselItem>))}
                </CarouselContent>
            </Carousel>
            <div className="flex flex-row gap-1 absolute bottom-0 mb-1.5 self-center">
                <div className="rounded-full h-2 w-2 border border-white border-solid cursor-pointer" style={{ backgroundColor: current === 0 ? "white" : "transparent" }} onClick={() => api.scrollTo(0)}></div>
                <div className="rounded-full h-2 w-2 border border-white border-solid cursor-pointer" style={{ backgroundColor: current === 1 ? "white" : "transparent" }} onClick={() => api.scrollTo(1)}></div>
                <div className="rounded-full h-2 w-2 border border-white border-solid cursor-pointer" style={{ backgroundColor: current === 2 ? "white" : "transparent" }} onClick={() => api.scrollTo(2)}></div>
            </div>
        </div>
    )
}

export default CustomCarousel