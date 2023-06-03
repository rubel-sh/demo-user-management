import { Button } from "@material-tailwind/react";

export const ActionButtonsContainer = ({ children }) => <div>{children}</div>;
export const ActionButtonsContainer1 = ({ children }) => <div>{children}</div>;
export const ButtonWithCounter = ({ count, children }) => (
    <Button>
        <span className="bg-red-300 p-2 rounded-full mr-3">20</span>
        New Orders
    </Button>
);
export const NewOrderSectionContainer = ({ children }) => <div className="space-y-2">{children}</div>;

export const NewOrderSection = ({ children }) => <div>{children}</div>;

export const BlackBgTitleBar = ({ children }) => (
    <div className="bg-gray-800 text-white text-center py-2 text-lg ">{children}</div>
);

export const NewOrderSectionFormContainer = ({ children }) => (
    <div className="p-5 grid grid-cols-2 lg:grid-cols-4 gap-4 ">{children}</div>
);
