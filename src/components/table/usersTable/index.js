import React from "react";
import Table from "../Table";
// import { classNames } from "../shared/Utils";
import { SelectColumnFilter, StatusPill } from '../Functions'

const getData = () => [
    {
        firstName: "Jane",
        lastName: "Cooper",
        email: "jane.cooper@example.com",
        contact: "0236760000",
        campus: "UCC",
        status: "Active",
        role: "User",
        locate: "Locate1",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        firstName: "Cody",
        lastName: "Fisher",
        email: "cody.fisher@example.com",
        contact: "026464646",
        campus: "UCC",
        status: "Active",
        role: "Super Admin",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        firstName: "Esther",
        lastName: "Howard",
        email: "esther.howard@example.com",
        contact: "0546665434",
        campus: "UCC",
        status: "Active",
        role: "Customer Service",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        firstName: "Jenny",
        lastName: "Wilson",
        email: "jenny.wilson@example.com",
        contact: "Central Security Manager",
        campus: "UCC",
        status: "Active",
        role: "User",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        firstName: "Kristin",
        lastName: "Watson",
        email: "kristin.watson@example.com",
        contact: "Lean Implementation Liaison",
        campus: "UCC",
        status: "inActive",
        role: "User",
        locate: "Locate",
        imgUrl:
            "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
        firstName: "Cameron",
        lastName: "Williamson",
        email: "cameron.williamson@example.com",
        contact: "Internal Applications Engineer",
        campus: "UCC",
        status: "Active",
        role: "User",
        locate: "Locate",
        posCoords: [260, 900],
        imgUrl:
            "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    }
];

const UsersTable = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: "First Name",
                accessor: "firstName"
            },
            {
                Header: "Last Name",
                accessor: "lastName"
            },
            {
                Header: "Contact",
                accessor: "contact"
            },
            {
                Header: "Campus",
                accessor: "campus"
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: StatusPill
            },
            {
                Header: "Role",
                accessor: "role",
                Filter: SelectColumnFilter,
                filter: "includes"
            }
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

export default UsersTable;
