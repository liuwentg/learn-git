import React, { useContext } from 'react'
import { MyContext } from './MyContext'


const ChilrenContext = ()=>{
    const count = useContext(MyContext)
    return <h1>我是子组件{count}</h1>
}
export default ChilrenContext;