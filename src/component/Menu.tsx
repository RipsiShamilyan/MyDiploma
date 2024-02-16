import React from "react";
import "./styles.css"
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

export const Menu: React.FC = React.memo((): JSX.Element => {

    const navigate = useNavigate()
    return (
        <header className="header">
            <nav className="nav">
                <a href="#" className="nav-logo">JavaCourse</a>

                {localStorage.token ?

                    <ul className="nav_items1">
                        <li className="nav_item1">
                            <form className="form">
                                <input type="text" placeholder="Որոնել․.." name="search" />
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg></button>
                            </form>
                            <NavLink to={"/profile"} className={"nav_link"}>Պրոֆիլ</NavLink>
                            <NavLink to={"/aboutMe"} className={"nav_link"}>Մեր Մասին</NavLink>
                            <NavLink to={"/advantage"} className={"nav_link"}>Առավելություններ</NavLink>
                            <select onChange={(e) => {
                                navigate("/lessons/"+e.target.value)
                            }}>
                                <option hidden>Դասընթացներ</option>
                                <option value={"html"}>HTML Կլասներ</option>
                                <option value={"css"}>CSS Ֆայլերի մշակում</option>
                                <option value={"js"}>JS Մեթոդներ</option>
                                <option value={"java"}>Java Ձեռնարկ</option>
                                <option value={"node"}>node Օրինակներ</option>
                            </select>
                            <button onClick={() => {
                                delete localStorage.token;
                                navigate("/")
                            }} className={"nav_link"}>Դուրս գալ</button>
                        </li>
                    </ul>
                    :
                    <ul className="nav_items">
                        <li className="nav_item">
                            <button className="button2"><NavLink to="/">Գլխավոր</NavLink></button>
                            <button className="button"><NavLink to="/login">Մուտք</NavLink></button>
                            <button className="button1"><NavLink to="/register">Գրանցվել</NavLink></button>
                        </li>
                    </ul>
                }
            </nav>
        </header>
    )
}) 