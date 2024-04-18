
import { TreeDataNode } from 'antd'
import { useEffect, useState } from 'react'



const depModel = () => {
    const [dep, setDept] = useState<TreeDataNode[]>()
    return { dep, setDept }

}
export default depModel