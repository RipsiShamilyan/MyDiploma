import React, { useEffect, useState } from "react";
import "./style.scss"
import { Outlet, useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { filterinner } from "../../features/user/userSlice";

export const Lessons: React.FC = React.memo((): JSX.Element => {
    const { name } = useParams()
    const [innermenu, setinnermenu] = useState<string[]>([])
    const dispatch = useAppDispatch()
    const list: { name: string, lists: string[] }[] = [
        {
            name: "html",
            lists: [
                "html 1",
                "html 2",
                "html 3",
                "html 4",
            ]
        },
        {
            name: "css",
            lists: [
                "css 1",
                "css 2",
                "css 3",
                "css 4",
            ]
        },
        {
            name: "js",
            lists: [
                "js 1",
                "js 2",
                "js 3",
                "js 4",
            ]
        },
        {
            name: "java",
            lists: [
                "java 1",
                "java 2",
                "java 3",
                "java 4",
            ]
        },
        {
            name: "node",
            lists: [
                "node 1",
                "node 2",
                "node 3",
                "node 4",
            ]
        }
    ]
    useEffect(() => {
        const x = list.find(elm => elm.name == name);
        console.log(x);
        if (x) {
            setinnermenu(x.lists)
        }


    }, [name])
    return (
        <div className="divLess">
            <div className="menu">
                <ul>

                    {
                        innermenu.map((elm, i) => {
                            return (
                                <li key={i} onClick={()=>{
                                    console.log("=>", elm);
                                    dispatch(filterinner(elm))
                                }}>{elm}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
})