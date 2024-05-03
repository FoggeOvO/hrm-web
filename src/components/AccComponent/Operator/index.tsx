import React, { Dispatch, SetStateAction, useState } from 'react'
import { Button } from 'antd';
import { SettingTwoTone } from '@ant-design/icons';
import Choose from '@/components/DeptComponent/Choose';


const AddDepAuth = () => {

    const [searched,setSearched] = useState(false);
    const [newdep,setNewdep] = useState<{key?:number,title?:string}>({})
    const depCheckbox = true

    const onSearch = () => {
        setSearched(true)
    }

  
    return (
        <>
            <Button type="link" onClick={onSearch} icon={<SettingTwoTone />}>
                部门授权
            </Button>
            <Choose {...{depCheckbox, searched, setSearched, setNewdep}}/>
        </>

    )
}

export default AddDepAuth
