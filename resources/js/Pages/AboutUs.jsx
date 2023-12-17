import Profile from "../Components/Fragments/Profile";
import Members from "../Components/Fragments/Members";
import WhyUs from "../Components/Fragments/WhyUs";
import Navbar from "../Components/Fragments/Navbar";
import Footer from "../Components/Fragments/Footer";
import { Head } from "@inertiajs/react";

const AboutUs = ({ auth }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head title="About Us" />

            <Navbar auth={auth.user}>
                <body>
                    <Profile />
                    <WhyUs />
                    <Members />
                </body>
                <Footer />
            </Navbar>
        </div>
    );
};

export default AboutUs;
