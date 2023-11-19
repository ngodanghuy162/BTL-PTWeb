import "@/styles/global.scss";

import style from "./Landing.module.scss";

import Header from "@/components/header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/ScrollUp/ScrollUp";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
            <ScrollUp />
        </div>
    );
};

export default LandingPage;
