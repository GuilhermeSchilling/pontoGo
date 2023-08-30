import "./Card.css"
import React from "react"
interface CardProps{
    personname: string;
    personid: string;
    date: string;
    hour: string;
}

// card com typescript

export const Card = ({personname, personid, date, hour}:CardProps) => {
    return (

        <div className="card">
            <div className="decoration"></div>
            <div className="identifier">
                <div className="personname">{personname}</div>
                <div className="personid">{personid}</div>
            </div>
            <div className="date">{date}</div>
            <div className="hour">{hour}</div>
        </div>
    )
}

export default Card