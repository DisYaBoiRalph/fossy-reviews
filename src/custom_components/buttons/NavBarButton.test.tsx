import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavBarButton } from "./NavBarButton";

describe("NavBarButton", () => {
    it("renders with the given label", () => {
        render(<NavBarButton label="Home" />);
        expect(screen.getByText("Home")).toBeInTheDocument();
    });

    it("uses primary color by default", () => {
        render(<NavBarButton label="Default" />);
        const button = screen.getByText("Default");
        expect(button).toBeInTheDocument();
    });

    it("calls onClick when clicked", async () => {
        const user = userEvent.setup();
        const handleClick = jest.fn();

        render(<NavBarButton label="Click me" onClick={handleClick} />);

        await user.click(screen.getByText("Click me"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
