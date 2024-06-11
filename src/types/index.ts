import {  User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
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

export interface FirebaseProps {
    fn: (email: string, password: string) => Promise<User | undefined> | (() => Promise<void>)
} 

export interface UserProps {
    username: string,
    email: string,
    password?: string,
    avatar?: string,
    uid?: string
}

export interface GlobalContextProps{
    user: DocumentData | undefined,
    isLoading: boolean,
    sessionId: string,
    setSessionId: React.Dispatch<React.SetStateAction<string>>
}