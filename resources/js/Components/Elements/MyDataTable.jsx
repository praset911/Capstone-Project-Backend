import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const MyDataTable = ({ data }) => {
    const columns = [
        {
            name: "Weight",
            selector: (row) => row.weight,
            sortable: true,
        },
        {
            name: "Height",
            selector: (row) => row.height,
            sortable: true,
        },
        {
            name: "Age",
            selector: (row) => row.age,
            sortable: true,
        },
        {
            name: "BMI",
            selector: (row) => row.bmi,
            sortable: true,
        },
        {
            name: "Calories",
            selector: (row) => row.calories,
            sortable: true,
        },
        {
            name: "Body Weight",
            selector: (row) => row.body_weight,
            sortable: true,
        },
        {
            name: "Tanggal",
            selector: (row) => row.tanggal,
            sortable: true,
        },
        {
            name: "Jam",
            selector: (row) => row.jam,
            sortable: true,
        },
    ];

    return (
        <DataTable title="User Data" columns={columns} data={data} pagination />
    );
};

export default MyDataTable;
