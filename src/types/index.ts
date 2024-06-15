import {  User } from "firebase/auth";
import { FieldValue } from "firebase/firestore";
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
export interface AvatarProps {
    avatarUrl?: string,
    username: string,
    avatarStyles?: string
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
    receiverData?: UserProps,
    updatedAt: any,
    chatId: string
}

export interface ChatsProps {
    chats: ReceiverProps []
}

export interface MessageProps{
    type: "text" | "image" | "video",
    content: string,
    role: "sender" | "receiver"
}
export interface ChatDataProps{
    createdAt: FieldValue,
    messages: MessageProps[]
}
export interface ChatContextProps{
    currentReceiver: ReceiverProps | undefined,
    setCurrentReceiver: React.Dispatch<React.SetStateAction<ReceiverProps | undefined>>,
    chatData: ChatDataProps | undefined,
    setChatData: React.Dispatch<React.SetStateAction<ChatDataProps | undefined>>,
}

