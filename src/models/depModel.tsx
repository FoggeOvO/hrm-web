
import { useEffect, useState } from 'react'



const depModel = () => {
     const [dep,setDept] = useState<API.DreeDataNode | null>()

    return {dep, setDept}
    
}
export default depModel