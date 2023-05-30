import { Button } from "@material-tailwind/react";

export const ActionButtonsContainer = ({ children }) => <div>{children}</div>;
export const ActionButtonsContainer1 = ({ children }) => <div>{children}</div>;
export const ButtonWithCounter = ({ count, children }) => (
    <Button>
        <span className="bg-red-300 p-2 rounded-full mr-3">20</span>
        New Orders
    </Button>
);
