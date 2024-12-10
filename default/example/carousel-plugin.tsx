'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/registry/default/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/default/ui/carousel"
import Image from "next/image"

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-xs flex items-center justify-center"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {[
          {
          title: 'Leaphoppers found',
          description: 'Observation to this date indicates moderate population of leaphoppers in rice',
          date: '13/02/2024',
          crop: 'rice',
          district: 'Kathmandu',
          link: '/crops.jpeg'
        },
        {
          title: 'Rice Vibrant and Healthy',
          description: 'Observation to this date indicates that the rice are vibrant and healthy',
          date: '13/02/2024',
          crop: 'rice',
          district: 'Kathmandu',
          link: '/rice.jpeg'
        }

      ].map((_, index) => (
          <CarouselItem key={index}>
                <>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image   className="border border-gray-400 rounded-lg" src={_.link} width={300} height={200} alt={_.title}/>
                </CardContent>

             <strong>
              {_.title}
              </strong> 
              <p>
              {_.description} ...
              </p> 
              </Card>

            </div>
         
            </>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
