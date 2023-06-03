import Container from "@/components/widgets/Container";
import { Button, ButtonGroup, Card, Typography } from "@material-tailwind/react";
import { useState } from "react";

const users = () => {
    const [showPass, setShowPass] = useState();

    const TABLE_HEAD = ["", "Password", "Username", "نوع الحساب", "UID/رقم الحساب"];

    const TABLE_ROWS = [
        {
            Password: "password1",
            Username: "user1",
            Role: "admin",
            UID: "uid1",
        },
        {
            Password: "password2",
            Username: "user2",
            Role: "user",
            UID: "uid2",
        },
        {
            Password: "password3",
            Username: "user3",
            Role: "user",
            UID: "uid3",
        },
        {
            Password: "password4",
            Username: "user4",
            Role: "admin",
            UID: "uid4",
        },
        {
            Password: "password5",
            Username: "user5",
            Role: "user",
            UID: "uid5",
        },
        {
            Password: "password6",
            Username: "user6",
            Role: "user",
            UID: "uid6",
        },
        {
            Password: "password7",
            Username: "user7",
            Role: "admin",
            UID: "uid7",
        },
        {
            Password: "password8",
            Username: "user8",
            Role: "user",
            UID: "uid8",
        },
        {
            Password: "password9",
            Username: "user9",
            Role: "user",
            UID: "uid9",
        },
        {
            Password: "password10",
            Username: "user10",
            Role: "admin",
            UID: "uid10",
        },
    ];

    return (
        <Container>
            <div className="flex justify-between items-center  mt-10 mb-5">
                <h2 className="text-2xl font-bold">USERS LIST</h2>
                <Button color="green" className="flex items-center gap-3 float-right">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    Add New User
                </Button>
            </div>

            {/* Table */}
            <Card className="overflow-auto h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ Password, Username, Role, UID }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={index} className="even:bg-blue-gray-50/50">
                                    <td className={classes}>
                                        <ButtonGroup>
                                            {/* Save */}
                                            <Button size="sm" className="flex items-center gap-3  ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                                    />
                                                </svg>
                                                Save
                                            </Button>
                                            {/* Disable */}
                                            <Button size="sm" className="flex items-center gap-3  ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                                                    />
                                                </svg>
                                                Disable
                                            </Button>
                                        </ButtonGroup>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex items-center gap-1">
                                            <svg
                                                onClick={() => setShowPass(!showPass)}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <input
                                                className="max-w-[150px] bg-transparent py-2 px-2"
                                                type={showPass ? "text" : "password"}
                                                name=""
                                                id=""
                                                defaultValue="abcdefghid"
                                            />
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                defaultValue={Username}
                                                className="bg-transparent py-2 px-2"
                                            />
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                defaultValue={Role}
                                                className="bg-transparent py-2 px-2"
                                            />
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                defaultValue={UID}
                                                className="bg-transparent py-2 px-2"
                                            />
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </Container>
    );
};

export default users;
