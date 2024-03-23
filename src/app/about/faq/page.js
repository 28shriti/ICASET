// 'use client'
import { faq } from "@/app/data"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function FAQ() {
    return (
        <div className="py-10 backdrop-blur-md backdrop-contrast-50">
<<<<<<< HEAD
            <h1 className="title font-black text-4xl text-center mb-5 text-[#222831] drop-shadow-md hover:drop-shadow-2xl ">FAQ</h1>
            <Accordion type="single" collapsible className="sm:w-[50vw] w-[80vw] bg-[#31363F] text-white rounded-md sm:ml-[25vw] ml-[10vw] px-5 pb-5 bg-opacity-[0.85]" >
=======
            <h1 className="title font-black text-4xl text-center mb-5 text-[#222831] drop-shadow-md hover:drop-shadow-2xl ">FAQs</h1>
            <Accordion type="single" collapsible className="w-[50vw] bg-[#31363F] text-white rounded-md ml-[25vw] px-5 pb-5 bg-opacity-[0.85]" >
>>>>>>> main
                {/* <h1></h1> */}
                {
                    faq.map((val, index) => {
                        return (
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>{val.question}</AccordionTrigger>
                                <AccordionContent>
                                    {val.answer}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }

            </Accordion>
        </div>
    )
}