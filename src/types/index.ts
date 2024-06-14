import {  User } from "firebase/auth";
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
    avatar?: string,
    uid: string,
    blocked: string [],
}

export interface GlobalContextProps{
    user: UserProps | undefined,
    isLoading: boolean,
    sessionId: string,
    setSessionId: React.Dispatch<React.SetStateAction<string>>
}

export interface ReceiverProps {
    receiverId: string,
    lastMessage: string,
    isExist: boolean,
    receiverData?: UserProps
}

export interface ChatsProps {
    chats: ReceiverProps []
}