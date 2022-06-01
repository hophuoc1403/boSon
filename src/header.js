import clsx from "clsx"
import headerst from './header.module.css'

function Header(){
    return(
        <div >
            <h1 className={clsx(headerst.head)}>Phan mem quan li cong viec</h1>
        </div>
    )
}
export default Header