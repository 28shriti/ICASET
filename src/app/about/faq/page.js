// 'use client'
import { accordionData } from "@/app/data"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function Attend() {
    return <Accordion type="single" collapsible >
        {/* <h1></h1> */}
        {
            accordionData.map((val, index) => {
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
}