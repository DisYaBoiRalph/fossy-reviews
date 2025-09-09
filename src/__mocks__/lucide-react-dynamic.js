import React from "react";

const DynamicIcon = ({ name, ...props }) => {
    return React.createElement("div", {
        "data-testid": "dynamic-icon",
        "data-name": name,
        ...props,
    });
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

module.exports = { DynamicIcon, iconNames, default: DynamicIcon };
