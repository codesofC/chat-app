import React from "react";

export interface PopoverProps {
    buttonOver: React.ReactNode,
    children: React.ReactNode,
    buttonClassName?: string,
    popOverClassName?: string
}

export interface AccordionProps {
    title: string,
    children: React.ReactNode,
    contentClassName?: string,
    triggerClassName?: string
}

export interface LoginProps {
    setHandleSign: React.Dispatch<React.SetStateAction<boolean>>,
}