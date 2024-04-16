import React, { useEffect, useState } from "react";

export default function DateTime() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {setDate(new Date())}, 1000)
    })

    return <div className="date">{ date.toString() }</div>
}