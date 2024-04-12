import {getDept} from '@/services/hrm/api'
import { useEffect, useState } from 'react'

type depInfo = {
    id?: number;
    depname?: string;
    depcode?: any;
    parent?: any;
    type?: any;
    visable?: any;
    deleted?: any;
}

const depModel = async () => {
    const [dep,setDept] = useState<Array<depInfo>>([{}])
    useEffect(() => {
        getDept()
        .then(res => {
            console.log('@@depdata --->',res.data)
            setDept(res.data)
        })
        .catch(
            err => console.log(err)
        )
    },[])

    return{
        dep
    }
}
export default depModel