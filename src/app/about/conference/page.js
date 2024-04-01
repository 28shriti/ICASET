import ComingSoon from "@/app/components/ComingSoon"
import MainContainer from "@/app/components/MainContainer"

export const metadata = {
    title: 'About Conference',
    description: 'Get all the information about the ICASET - 2024 happening in YCCE',
}

export default function Conference() {
    return (
        <MainContainer>
            <ComingSoon />
        </MainContainer>
    )
}