import { FOOD_URL } from "../UTILS/images";

export {FOOD_URL} from "../UTILS/images"
const Products=(props)=>{
    const {resData}=props;
     console.log(props);
 
     const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime}=resData?.data
     console.log("Restaurant Data:", resData?.data);

     
     return(
         <div className="rescard" style={{
             backgroundColor:"#f0f0f0"
         }}>
            <img src={FOOD_URL+cloudinaryImageId}/>
               

             <h3>{name}</h3>
             <h4>{cuisines.join(", ")}</h4>
             <h4>{avgRating} Stars</h4>
             <h4>{deliveryTime} minutes </h4>
             <h4>Rs. {costForTwo/100} FOR TWO</h4>
     </div>
     )
 }
export default Products;