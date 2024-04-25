import { useState } from "react";

interface User{
    id?: number
    username?: string
    type?: string
    gender?: string
    lastname?: string
    level?: string
    workcode?: string
    position?: string
    depid?: number
    hiredate?: string
    access?: number
    deleted?: number
}


const userModel = () => {
    const [users, setUsers] = useState<User[]>([])
    return {
        users,
        setUsers
    }
}


export default userModel;