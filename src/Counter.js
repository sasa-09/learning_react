import React, { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    function incCount() {
        setCount((count) => ++count)
    }
    function decCount() {
        setCount((count) => --count)
    }

    return (
        <div className="container">
            <button className="base btnl" onClick={decCount}>-</button>
            <div className="base " >{count}</div>
            <button className="base btnr" onClick={incCount}>+</button>
        </div>
    )
}
