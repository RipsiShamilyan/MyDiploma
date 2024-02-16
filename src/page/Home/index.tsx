import React from "react";
import "./style.scss"
import { Link } from "react-router-dom";
export const Home: React.FC = React.memo((): JSX.Element => {
    return (
        <div className="divHome">
            <div className="home">
                <div className="div1">
                    <h1>Սովորեք Java առցանց հետաքրքիր տարբերակով</h1>
                    <p>Ի՞նչ է Java ծրագրավորման լեզուն </p>
                    <p>
                        Java-ն բարձր մակարդակի, օբյեկտի վրա հիմնված ծրագրավորման լեզու է, որը նախատեսված է platform-ից անկախ լինելու համար, ինչը նշանակում է, որ Java ծրագրերը կարող են աշխատել ցանկացած սարքի վրա, որն ունի Java վիրտուալ մեքենա (JVM): Այն մշակվել է Sun Microsystems-ի կողմից (այժմ պատկանում է Oracle Corporation-ին) և առաջին անգամ թողարկվել է 1995 թվականին: Java-ն հայտնի է իր պարզությամբ, դյուրատարությամբ և բազմաֆունկցոնալությամբ։
                    </p>
                </div>
                <div className="div2">
                    <img src={require('./img/img1.png')} alt="" />
                </div>
            </div>
            <div className="home1">
                <div className="div3">
                    <h1>Ինչու՞ սովորել Java հենց մեզ հետ</h1>
                    <h5>Դուք ստանում եք գիտելիքներ, վարժություններ, և պրակտիկ փորձ</h5>
                    <p>JavaCourse-ը պարզապես ուսուցման դասընթաց չէ, այն նաև պրակտիկ գիտելիք է տալիս է: Դուք բարձրացնում եք ձեր գիտելիքները նոր մակարդակների, բացում եք նոր որոնումներ և ստանում ձեռքբերումներ: Սկսելուց հետո դուք շարժվում եք դեպի նպատակակետ՝ ինքներդ ձեզ որպես կոդավորման մասնագետ:</p>
                    <img src={require('./img/img2.png')} alt="" />
                </div>
                <div className="div4">
                    <div className="svg1"><img src={require("./img/space.png")} alt="" /></div>
                    <h4>ՍԿՍԵԼ</h4>
                    <p>Ստացեք անհատականացված վերապատրաստման ծրագիր՝ հիմնված ձեր նախասիրությունների վրա</p>
                    <div className="svg2"><img src={require("./img/study.png")} alt="" /></div>
                    <h4>ՍՈՎՈՐԵԼ</h4>
                    <p>Կարդացեք դասախոսություններ Java ծրագրավորման տեսության մասին</p>
                    <div className="svg3"><img src={require("./img/training.png")} alt="" /></div>
                    <h4>ՊՐԱԿՏԻԿ</h4>
                    <p>Սկզբից գրեք կոդը և անմիջապես ստուգեք ձեր լուծումները</p>
                    <div className="svg4"><img src={require("./img/lamp.png")} alt="" /></div>
                    <h4>ՍՏԵՂԾԵԼ</h4>
                    <p>Գրեք ծրագրեր, որոնք լուծում են իրական խնդիրներ</p>
                    <button><Link to={"/login"}>Սկսեք սովորել անվճար</Link></button>
                </div>
            </div>
        </div>
    )
})