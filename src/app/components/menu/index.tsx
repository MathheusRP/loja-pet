import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import './menu_style.css'

export const Menu = ({status}: {status: string}) => {

    return (
        <section className={`menu ${status}`}>
        <div className='iconContainer'>
            <FaSearch className='icon'/>
        </div>
        <div className='iconContainer'>
            <FaShoppingCart className='icon'/>
            <div className='circle'>
                <p>1</p>
            </div>
        </div>
        <div className='iconContainer'>
            <MdOutlineFavorite className='icon'/>
            <div className='circle'>
                <p>1</p>
            </div>
        </div>
        <div className='iconContainer'>
            <FaUser className='icon'/>
        </div>
    </section>
    )
}