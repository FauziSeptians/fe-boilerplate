export enum USER { 
    CLIENT,
    ADMIN
}

export const UserMapper : Record<USER, {title: string, color : string}> = { 
    [USER.CLIENT] : {
        title : "Client",
        color : "text-success-100"
    },
    [USER.ADMIN] : {
        title : "Admin",
        color : "text-danger-100"
    }
}