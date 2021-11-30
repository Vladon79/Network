import React from "react";
import preloader from "../../../assents/image/preloader.svg"
import s from "./Preloader.module.css"


const Preloader = () =>{
    return <div className={s.preloaderContainer}><img src={preloader} className={s.preloader} /> </div>
}

export default Preloader