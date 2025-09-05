// Mock for lucide-react/dynamic
const DynamicIcon = ({ name, ...props }) => {
    return <div data-testid="dynamic-icon" data-name={name} {...props} />;
};

const iconNames = [
    "roller-coaster",
    "home",
    "user",
    "settings",
    "search",
    "menu",
    "close",
    "arrow-left",
    "arrow-right",
    "arrow-up",
    "arrow-down",
    "check",
    "x",
    "plus",
    "minus",
    "edit",
    "trash",
    "heart",
    "star",
    "bookmark",
];

export { DynamicIcon, iconNames };
export default DynamicIcon;
