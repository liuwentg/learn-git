import React ,{useMemo}from 'react'

const ChildrenMemo=({a,b}:any)=>{

    let res = useMemo(()=>{
        return {a,b}
    },[a])

    return <h1>子组件{res.a}-{res.b}</h1>
}
export default ChildrenMemo;