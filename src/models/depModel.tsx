import {getDept} from '@/services/hrm/api'
import { useEffect, useState } from 'react'

type depInfo = {
    id: number;
    depname: string;
    depcode?: string;
    parent: number;
    type?: number;
    visable?: number;
    deleted?: number;
}

const depModel =  () => {
    const [dep,setDept] = useState<Array<depInfo>>([])

    useEffect(() => {
        getDept()
        .then(res => {
            console.log('@@depdata --->',res.data)
            setDept(res.data)
        })
        .catch(
            err => console.log(err)
        )
        console.log('@@dep1 --->',dep)
    },[])

    return{
        dep
    }
}
export default depModel