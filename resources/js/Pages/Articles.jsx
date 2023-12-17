import { useState } from "react";
import Carousel from "@/Components/Fragments/Carousel";
import Dropdown from "@/Components/Elements/Dropdown";
import Card from "@/Components/Fragments/Card";
import Navbar from "@/Components/Fragments/Navbar";
import Footer from "@/Components/Fragments/Footer";
import { Head } from "@inertiajs/react";


const Articles = ({ auth }) => {
    const [sortField, setSortField] = useState("date");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSortFieldChange = (field) => {
        setSortField(field);
    };

    const handleSortOrderChange = (order) => {
        setSortOrder(order);
    };

    return (
        <div>
            <Head title="Articles" />

            <Navbar auth={auth.user}>
                <body className="px-5 md:px-7 lg:px-20 md:py-10">
                    <div>
                        <h1 className="text-2xl font-bold">Latest Articles</h1>
                        <div>
                            <Carousel></Carousel>
                        </div>
                    </div>
                    <div className="pb-16">
                        <h1 className="font-bold text-2xl">All Articles</h1>
                        <div className="absolute md:right-0  py-3 md:py-0 md:px-7 lg:px-20">
                            <Dropdown
                                onSortFieldChange={handleSortFieldChange}
                                onSortOrderChange={handleSortOrderChange}
                            />
                        </div>
                    </div>
                    <div>
                        <Card sortField={sortField} sortOrder={sortOrder} />
                    </div>
                </body>
            </Navbar>
            <Footer />
        </div>
    );
};

export default Articles;
