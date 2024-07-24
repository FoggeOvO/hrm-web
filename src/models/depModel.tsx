
import { TreeDataNode } from 'antd'
import {  useState } from 'react'


interface SelectdInfo {
    title: string | undefined
    key: number | undefined
    code: string | undefined
    type: number | undefined
    note: string | undefined
    status: number | undefined
  }





const depModel = () => {
    const [dep, setDept] = useState<TreeDataNode[]>()
    const [depinfo, setDepinfo] = useState<SelectdInfo>()
    const [depids, setDepids] = useState<string>('')
    return { dep, setDept, depinfo, setDepinfo, depids, setDepids}
}
export default depModel