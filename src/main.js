import Mainhead from "./mainheader"
import Ccc from "./main.module.css"
import clsx from "clsx"
import Mainfun from "./mainbody"

function Main(){
    return(
        <div className={clsx(Ccc.main)}>
            <Mainhead />
            <Mainfun></Mainfun>
        </div>
    )
}
export default Main
