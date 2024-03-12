// 'use client'
import { faq } from "@/app/data"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function FAQ() {
    return <Accordion type="single" collapsible >
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
}