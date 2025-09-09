import Button from "@/components/button";

export interface INavBarButtonProps {
    color?: LkColorWithOnToken;
    label: string;
    onClick?: () => void;
}
export const NavBarButton = ({ color = "primary", label, onClick }: INavBarButtonProps) => {
    return <Button label={label} variant="text" color={color} size="lg" onClick={onClick} />;
};
