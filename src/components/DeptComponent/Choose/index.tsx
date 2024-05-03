import React, { Dispatch, Key, SetStateAction, useState } from 'react'
import { Card, Modal, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface ChooseSate{
    depCheckbox:boolean
    searched:boolean
    setSearched:Dispatch<SetStateAction<boolean>>
    setNewdep:Dispatch<SetStateAction<{ key: number; title: string; } | {}>>
}
const Choose = (props:ChooseSate) => {

    const {depCheckbox,searched, setSearched, setNewdep} = props

    //使用数据流获取全局dep数据，并传给tree
    const depModel = useModel('depModel')
    const { dep } = depModel
    const treeData: TreeDataNode[] | undefined = dep

    const onCancel = () =>{
        setSearched(false) 
    }

    const onSelect: TreeProps['onSelect'] = async (selectedKeys, info) => {
        console.log('info--->' ,info);
        const {key, title} = info.node
        console.log('data --->', key)
        setNewdep({
            key : key as number,
            title: title as string,
        })
        onCancel()
      }

    const [checked,setChecked] = useState<Key[] | { checked: Key[]; halfChecked: Key[]; }>([])

    const onCheckd:TreeProps['onCheck'] = (checkedKeys) => {
        setChecked( checkedKeys )
    }

    const onOk = () => {
        //TODO 这里需要加入权限列表的请求方法
        console.log('@@e --->', checked)
    };

    return (
        <Modal
            title="选择部门"
            style={{ height: '100%', width: '100%' }}
            open={searched}
            onOk={onOk}
            destroyOnClose={true}
            onCancel={onCancel}
        >
            <Card id='content-right' style={{ height: '100%', width: '100%' }}>
                <Tree
                    showLine
                    checkable={depCheckbox}
                    onCheck={onCheckd}
                    switcherIcon={<DownOutlined />}
                    defaultExpandedKeys={['1', '2']}
                    onSelect={onSelect}
                    treeData={treeData}
                    // className={styles.container}
                    height={260} //这里可以控制组件大小，用以生成滚动条
                />
            </Card>
        </Modal>

    )
}

export default Choose
