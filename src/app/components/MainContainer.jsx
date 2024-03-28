import React from 'react'

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const MainContainer = ({ children }) => {
    return (
        <div
            className={`bg-[url('/images/background.jpg')] bg-no-repeat bg-center bg-cover bg-fixed shadow-[inset_0_0_0_1000px_#00000000]`}
        >
            <Header />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default MainContainer