import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
    {
        arabic: "الملاحظات",
    },
    {
        arabic: "الموظف",
        english: "Employee",
    },
    {
        arabic: "حالة الطلب",
        english: "Status",
    },
    {
        arabic: "تاريخ إعادة المعالجة",
    },
    {
        arabic: "بنك الراتب",
        english: "Salary on Bank",
    },
    {
        arabic: "رقم الحوال",
        english: "Phone",
    },
    {
        arabic: "العميل",
        english: "Client Name",
    },
    {
        arabic: "نوع الطلب",
        english: "Order Type",
    },
];

const TABLE_ROWS = [
    {
        arabic_texts: "John Michael",
        employeeName: "Khalid",
        status: "Processing",
        date: "2023/06/21",
        salaryOnBank: "600000",
        phone: "0501654412",
        clientName: "Ahmed",
        orderType: "unknown",
    },
    {
        arabic_texts: "Sarah Johnson",
        employeeName: "Ali",
        status: "Completed",
        date: "2023/07/12",
        salaryOnBank: "450000",
        phone: "0551234567",
        clientName: "Mohammed",
        orderType: "Standard",
    },
    {
        arabic_texts: "Ahmed Hassan",
        employeeName: "Fatima",
        status: "Pending",
        date: "2023/08/05",
        salaryOnBank: "550000",
        phone: "0569876543",
        clientName: "Sara",
        orderType: "Express",
    },
    {
        arabic_texts: "Lina Ahmed",
        employeeName: "Karim",
        status: "Processing",
        date: "2023/08/19",
        salaryOnBank: "700000",
        phone: "0523456789",
        clientName: "Nadia",
        orderType: "Custom",
    },
    {
        arabic_texts: "Peter Smith",
        employeeName: "Aisha",
        status: "Completed",
        date: "2023/09/03",
        salaryOnBank: "800000",
        phone: "0576543210",
        clientName: "David",
        orderType: "Standard",
    },
    {
        arabic_texts: "Sara Khalid",
        employeeName: "Mohammed",
        status: "Pending",
        date: "2023/09/18",
        salaryOnBank: "400000",
        phone: "0509876543",
        clientName: "Hassan",
        orderType: "Express",
    },
    {
        arabic_texts: "Ahmed Ali",
        employeeName: "Layla",
        status: "Processing",
        date: "2023/10/01",
        salaryOnBank: "650000",
        phone: "0557890123",
        clientName: "Mariam",
        orderType: "Custom",
    },
    {
        arabic_texts: "Nadia Saleh",
        employeeName: "Khalid",
        status: "Completed",
        date: "2023/10/14",
        salaryOnBank: "500000",
        phone: "0561234567",
        clientName: "Omar",
        orderType: "Standard",
    },
    {
        arabic_texts: "Khaled Ahmed",
        employeeName: "Amina",
        status: "Pending",
        date: "2023/10/29",
        salaryOnBank: "750000",
        phone: "0534567890",
        clientName: "Lina",
        orderType: "Express",
    },
    {
        arabic_texts: "Layla Mohammed",
        employeeName: "Ali",
        status: "Processing",
        date: "2023/11/11",
        salaryOnBank: "600000",
        phone: "0587654321",
        clientName: "Youssef",
        orderType: "Custom",
    },
];

export default function OverDueOrders() {
    return (
        <Card className="overflow-auto h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4  ">
                                <div className="flex flex-col gap-2 ">
                                    <span>{head?.arabic}</span>
                                    <span>{head?.english}</span>
                                </div>
                                <br />
                                {(head?.english === "Employee" ||
                                    head?.english === "Status" ||
                                    head?.english === "Client Name" ||
                                    head?.english === "Order Type") && (
                                    <input type="text" className="max-w-[100px] py-1 px-2 mt-2" placeholder="Search" />
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map(
                        (
                            { arabic_texts, employeeName, status, date, salaryOnBank, phone, clientName, orderType },
                            index
                        ) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={index}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {arabic_texts}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {employeeName}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {status}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {salaryOnBank}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {date}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {phone}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {clientName}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {orderType}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </Card>
    );
}
