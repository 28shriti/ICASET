// 'use client'
import { faq } from "@/app/data"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import MainContainer from "@/app/components/MainContainer"
import Title from "@/app/components/Title"

export const metadata = {
    title: 'FAQs',
    description: 'Get the answers to all the FAQs here',
}

export default function FAQ() {
    return (
        <MainContainer>
            <div className="py-10 backdrop-blur-md backdrop-contrast-50">
                <Title>FAQs</Title>
                <Accordion type="single" collapsible className="w-[50vw] bg-[#31363F] text-white rounded-md m-auto my-10 px-5 pb-5 bg-opacity-[0.85]" >
                    {/* <h1></h1> */}
                    {
                        faq.map((val, index) => {
                            return (
                                <AccordionItem value={`item-${index}`} key={index}>
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
        </MainContainer>
    )
}