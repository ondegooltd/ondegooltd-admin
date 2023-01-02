import React from "react";
import Table from "../Table";
import { classNames } from "../shared/Utils";
import { SelectColumnFilter } from '../Functions'

const getData = () => [
    {
        id: "1",
        customer: "Jane Cooper",
        contact: "0236760000",
        address: "Amamoma Taxi rank",
        cylinderType: '10KG',
        serviceFee: 5.60,
        deliveryCost: 5.00,
        fill: 65.00,
        totalAmount: 75.60,
        status: "Processing",
        date: '05/01/2023'
    },
    {
        id: "2",
        customer: "Cody Fisher",
        contact: "026464646",
        address: "Amamoma Taxi rank",
        cylinderType: '10KG',
        serviceFee: 5.60,
        deliveryCost: 5.00,
        fill: 65.00,
        totalAmount: 75.60,
        status: "Awaiting payment",
        date: '05/01/2023'
    },
    {
        id: "3",
        customer: "Esther Howard",
        contact: "0546665434",
        address: "Amamoma Taxi rank",
        cylinderType: '10KG',
        serviceFee: 5.60,
        deliveryCost: 5.00,
        fill: 65.00,
        totalAmount: 75.60,
        status: "Served",
        date: '05/01/2023'
    },
    {
        id: "4",
        customer: "Joe Howard",
        contact: "0546665434",
        address: "Amamoma Taxi rank",
        cylinderType: '10KG',
        serviceFee: 5.60,
        deliveryCost: 5.00,
        fill: 65.00,
        totalAmount: 75.60,
        status: "Cancelled",
        date: '05/01/2023'
    },

];

function StatusPill({ value }) {
    const status = value ? value.toLowerCase() : "unknown";

    return (
        <span
            className={classNames(
                "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
                status.startsWith("processing") ? "bg-blue-100 text-blue-700" : null,
                status.startsWith("awaiting payment") ? "bg-yellow-100 text-yellow-700" : null,
                status.startsWith("served") ? "bg-green-100 text-green-700" : null,
                status.startsWith("cancelled") ? "bg-red-100 text-red-700" : null
            )}
        >
            {status}
        </span>
    );
}

const OrdersTable = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "Customer",
                accessor: "customer"
            },
            {
                Header: "Contact",
                accessor: "contact"
            },
            {
                Header: "Address",
                accessor: "address"
            },
            {
                Header: "Cylinder Type",
                accessor: "cylinderType"
            },
            {
                Header: "Fill",
                accessor: "fill"
            },
            {
                Header: "Service Fee",
                accessor: "serviceFee"
            },
            {
                Header: "Delivery Cost",
                accessor: "deliveryCost"
            },
            {
                Header: "Total",
                accessor: "totalAmount"
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: StatusPill,
                Filter: SelectColumnFilter,
                filter: "includes"
            },
            {
                Header: "Date",
                accessor: "date",
            },
        ],
        []
    );

    const data = React.useMemo(() => getData(), []);
    return (
        <>
            <div className="App" style={{ height: "100%" }}>
                <div className="min-h-screen bg-gray-100 text-gray-900">
                    <main className="max-w-8xl bodrer-2 border-red-600 mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                        <div className="mt-4">
                            <Table columns={columns} data={data} />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default OrdersTable;
