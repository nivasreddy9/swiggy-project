import { LOGO_URL } from "../UTILS/images";

export {LOGO_URL} from "../UTILS/images"
const Header=()=>{
    return(
<div className="header">
    <div className="logo">
   <img src={LOGO_URL} />
</div>
<div className="nav">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Cart</a></li>

        
    </ul>
</div>

</div>

    )
}

export default Header;