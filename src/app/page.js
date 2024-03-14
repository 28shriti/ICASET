"use client"

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import data from "./data"
import Notice from "./components/Notice";
import Autoplay from "embla-carousel-autoplay"
import { CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"


const Home = () => {

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))
  const [api, setApi] = useState(CarouselApi)
  const [current, setCurrent] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCarouselIndex(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
      console.log('hello world')
    })
  }, [api])

  console.log(current)

  return (
    <div className="pb-10">
      <Notice />
      <div className="flex w-full justify-between p-10 mt-0">
        <div className="w-1/2 flex flex-col h-[50vh] p-10 rounded-xl backdrop-blur-sm backdrop-contrast-50 text-white mr-5">
          <h2 className="text-center text-lg font-bold mb-5">
            International Conference on Application of Science, Engineering and
            Technology - 2024
          </h2>
          <p style={{ margin: "2px 0" }}>
            Organized by: Computer Technology and Computer Science and
            Engineering
          </p>
          <p>
            Yeshwantrao Chavan College of Engineering, Hingna, Nagpur,
            Maharashtra, India
          </p>

          <div className="mt-auto w-auto rounded-3xl flex items-center text-lg">
            <div className="text-2xl text-white"><FontAwesomeIcon icon={faCalendarDays} /></div>
            <p className="ml-3">Date: {data.conferenceDate}</p>
          </div>
        </div>
        <div className="w-1/2  h-[50vh] rounded-xl backdrop-blur-sm backdrop-contrast-50 text-white no-scrollbar ml-5 realative flex flex-col overflow-hidden">
          <Carousel plugins={[plugin.current]} opts={{ align: "start", loop: true }} setApi = {setApi}>
            <CarouselContent >
              {Array.from({ length: 3 }).map((_, index) => (<CarouselItem key={index} onClick={() => console.log(index)} className="h-[50vh]"><Image src={`/images/back${index+1}.jpg`} className="w-full h-full" width={1000} height={1000} />
              </CarouselItem>))}
            </CarouselContent>
          </Carousel>
          <div className="flex flex-row gap-1 absolute bottom-0 mb-1.5 self-center">
            <div className="rounded-full h-2 w-2 border border-white border-solid cursor-pointer" style={{backgroundColor : current === 0?"white":"transparent"}} onClick={() => api.scrollTo(0)}></div>
            <div className="rounded-full h-2 w-2 border border-white border-solid cursor-pointer" style={{backgroundColor : current === 1?"white":"transparent"}} onClick={() => api.scrollTo(1)}></div>
            <div className="rounded-full h-2 w-2 border border-white border-solid cursor-pointer" style={{backgroundColor : current === 2?"white":"transparent"}} onClick={() => api.scrollTo(2)}></div>
          </div>
        </div>
      </div>

      <div className="w-full flex px-10">
        <Button className="text-white bg-[#31363F] hover:bg-[#222831] mr-3">
          Paper Submission
        </Button>
        <Button className="text-white bg-[#31363F] hover:bg-[#222831] mx-3">
          Registration
        </Button>
        <Button className="text-white bg-[#31363F] hover:bg-[#222831] mx-3">
          Downloads
        </Button>
      </div>

      <div className="w-full bg-white justify-between flex p-10 mt-10 -mb-10">
        <div>
          <p>Sponsor 1</p>
        </div>
        <div>
          <p>Sponsor 1</p>
        </div>
        <div>
          <p>Sponsor 1</p>
        </div>
        <div>
          <p>Sponsor 1</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
