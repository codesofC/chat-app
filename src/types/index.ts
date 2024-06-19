import {  User } from "firebase/auth";
import { FieldValue, Timestamp } from "firebase/firestore";
import React from "react";

export interface PopoverProps {
    buttonOver: React.ReactNode,
    children: React.ReactNode,
    buttonClassName?: string,
    popOverClassName?: string,
    open?: boolean,
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AccordionProps {
    title: string,
    children: React.ReactNode,
    contentClassName?: string,
    triggerClassName?: string
}
export interface AvatarProps {
    avatarUrl?: string,
    email: string,
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
    isSeen: boolean,
    receiverData?: UserProps,
    updatedAt: Timestamp | number,
    chatId: string,
    isReceiverBlocked: boolean,
    isCurrentUserBlocked: boolean
}

export interface ChatsProps {
    chats: ReceiverProps []
}

export interface MessageProps{
    type: "text" | "media",
    content: string,
    senderId: string,
    sendedAt: Date
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
    showDetails: boolean,
    setShowDetails: React.Dispatch<React.SetStateAction<boolean>>
    showChatList: boolean,
    setShowChatList: React.Dispatch<React.SetStateAction<boolean>>
}
