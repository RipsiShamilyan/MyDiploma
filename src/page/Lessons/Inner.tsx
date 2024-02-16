import React, { useEffect, useState } from "react";
import "./style.scss"
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";

export const Inner: React.FC = React.memo((): JSX.Element => {

    const {inner} = useAppSelector(selectUser)
    return (
        <div className="inner">
           <h3>{inner.name}</h3>
           <p>{inner.desc}</p>
        </div>
    )
})