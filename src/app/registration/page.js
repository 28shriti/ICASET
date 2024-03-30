import ComingSoon from "../components/ComingSoon";
import MainContainer from "../components/MainContainer";

export const metadata = {
    title: 'Registration Page',
    description: 'Register for the conference on this page.'
}

export default function Registration() {
    return (
        <MainContainer>
            <ComingSoon />
        </MainContainer>
    )
}