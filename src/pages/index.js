import { Inter } from "next/font/google";
import { ActionButtonsContainer, ButtonWithCounter } from "@/components/shared/StyledComponents";
import NewOrders from "@/components/ui/dashboard/NewOrders";
import OverDueOrders from "@/components/ui/dashboard/OverDueOrders";
import Container from "@/components/widgets/Container";
import { Badge, Button, ButtonGroup } from "@material-tailwind/react";
import React, { useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [select, setSelect] = useState("overdue");
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <main className={`${inter.className}`}>
                <Container>
                    <div className="flex flex-col justify-center">
                        {/* Action Buttons */}
                        <div className="mt-10 mb-5 mx-auto">
                            <ButtonGroup size="lg">
                                <Button>New Order</Button>
                                <Button>All order</Button>
                                <Button onClick={() => setSelect("overdue")}>
                                    <span className="bg-red-500 p-2 rounded-full mr-3">78</span>
                                    Overdue Orders
                                </Button>
                                <Button onClick={() => setSelect("neworders")}>
                                    <span className="bg-red-500 p-2 rounded-full mr-3">12</span>
                                    New Orders
                                </Button>
                            </ButtonGroup>
                        </div>

                        {/* show overdue / neworders */}
                        {select === "overdue" && <OverDueOrders />}
                        {select === "neworders" && <NewOrders />}
                    </div>
                </Container>
            </main>
        </>
    );
}
