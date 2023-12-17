import React, { useState } from "react";
import { calculateBMI } from "../components/Utils/BMICal";
import { calculateCalories } from "../components/Utils/CaloriesCal";
import { calculateBodyWeight } from "../components/Utils/BodyWeightCal";
import InputForm from "../components/Elements/InputForm";
import ResultDisplay from "../components/Fragments/ResultDisplay";
import Navbar from "../Components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import MyDataTable from "@/Components/Elements/MyDataTable";
import { Head } from "@inertiajs/react";

const ErrorMessage = ({ message }) => {
    return <div className="text-red-500 text-sm mt-2">{message}</div>;
};

const Calculator = ({ auth, calculators }) => {
    const [data, setData] = useState([]);
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [bmi, setBMI] = useState(null);
    const [calories, setCalories] = useState(null);
    const [bodyWeight, setbodyWeight] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleCalculate = () => {
        if (!gender || !weight || !height || !age) {
            setErrorMessage("Please fill the columns");
            return;
        }

        const calculatedBMI = calculateBMI(weight, height);
        setBMI(calculatedBMI);

        const calculatedCalories = calculateCalories(
            weight,
            height,
            age,
            gender
        );
        setCalories(calculatedCalories);

        const calculatedbodyWeight = calculateBodyWeight(height, gender);
        setbodyWeight(calculatedbodyWeight);

        const data = {
            gender,
            weight,
            height,
            age,
            bmi: calculatedBMI,
            calories: calculatedCalories,
            bodyWeight: calculatedbodyWeight,
        };

        axios
            .post("/calc-it/store", data)
            .then((response) => {
                const newData = response.data.data;
                setData(newData);
            })
            .catch((error) => {
                console.error(error);
            });
        setErrorMessage("");
    };
    return (
        <>
            <Head title="Calc-It" />

            <Navbar auth={auth.user}>
                <body className="min-h-screen">
                    <h1 className="text-center text-sky-800 text-2xl font-bold">
                        Calc BMI!
                    </h1>
                    <h4 className="text-center text-zinc-500 font-normal text-xl">
                        Welcome to Calc it! <br />
                        Maintaining a healthy weight is crucial for overall
                        well-being. <br />
                        Discover your Body Mass Index, Calories needs, and ideal
                        weight with our calculator.
                    </h4>

                    <div className="flex mx-[100px] justify-between py-10 gap-x-20">
                        <div className="w-[500px] h-[282px]">
                            <h3 className="text-center text-sky-800 text-2xl font-bold">
                                Calc It!
                            </h3>
                            <h5 className="text-center text-zinc-500 font-normal text-xl">
                                Input ur details here
                            </h5>
                            <InputForm
                                gender={gender}
                                setGender={setGender}
                                weight={weight}
                                setWeight={setWeight}
                                height={height}
                                setHeight={setHeight}
                                age={age}
                                setAge={setAge}
                                handleCalculate={handleCalculate}
                            />
                            <ErrorMessage message={errorMessage} />
                        </div>
                        <div className="w-[500px] h-[282px">
                            <ResultDisplay
                                bmi={bmi}
                                calories={calories}
                                bodyWeight={bodyWeight}
                            />
                        </div>
                    </div>
                    <p className="text-center text-sky-800 text-2xl font-bold mt-10">
                        Result History
                    </p>
                    {auth.user ? (
                        <>
                            <div className="px-20 py-4">
                                <MyDataTable
                                    data={calculators}
                                    pagination
                                    responsive
                                    highlightOnHover
                                />
                            </div>
                        </>
                    ) : (
                        <div className="px-20 py-4">
                            <div className="border h-10 flex items-center justify-center text-base">
                                Login to track your healthy weight
                            </div>
                        </div>
                    )}
                </body>
            </Navbar>
            <Footer />
        </>
    );
};

export default Calculator;
