/*The main component on product page, Productcard */
import {Link} from 'react-router-dom';
import "./Productcard.css"
/*Had to import all images, they disappered when i deployed this when i 
had them on Public/Images2, will try to solve it later */
import Img1 from '../Images/CupCake1.png';
import Img2 from '../Images/CupCake2.png';
import Img3 from '../Images/CupCake3.png';
import Img4 from '../Images/CupCake4.png';
import Img5 from '../Images/CupCake5.png';
import Img6 from '../Images/CupCake6.png';
import Img7 from '../Images/CupCake7.png';
import Img8 from '../Images/CupCake8.png';
import Img9 from '../Images/CupCake9.png';
import Img10 from '../Images/CupCake10.png';
import Img11 from '../Images/CupCake11.png';
import Img12 from '../Images/CupCake12.png';
import Img13 from '../Images/CupCake13.png';
import Img14 from '../Images/CupCake14.png';
import Img15 from '../Images/CupCake15.png';
import Img16 from '../Images/BirthdayCake1.png';
import Img17 from '../Images/BirthdayCake2.png';
import Img18 from '../Images/BirthdayCake3.png';
import Img19 from '../Images/BirthdayCake4.png';
import Img20 from '../Images/BirthdayCake5.png';
import Img21 from '../Images/BirthdayCake6.png';
import Img22 from '../Images/BirthdayCake7.png';
import Img23 from '../Images/BirthdayCake8.png';
import Img24 from '../Images/BirthdayCake9.png';
import Img25 from '../Images/BirthdayCake10.png';
import Img26 from '../Images/WeddingCake1.png';
import Img27 from '../Images/WeddingCake2.png';
import Img28 from '../Images/WeddingCake3.png';
import Img29 from '../Images/WeddingCake4.png';
import Img30 from '../Images/WeddingCake5.png';
import Img31 from '../Images/WeddingCake6.png';
import Img32 from '../Images/WeddingCake7.png';
import Img33 from '../Images/WeddingCake8.png';
import Img34 from '../Images/WeddingCake9.png';
import Img35 from '../Images/WeddingCake10.png';
export default function Productcard(Data) {  
const {id, type, name, price,description}=Data;
const formatedPrice=price.toFixed(2);
/*sets the right img for the current card */
const imgarray=[Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,
      Img11,Img12,Img13,Img14,Img15,Img16,Img17,Img18,Img19,Img20,Img21,
      Img22,Img23,Img24,Img25,Img26,Img27,Img28,Img29,Img30,
      Img31,Img32,Img33,Img34,Img35]
let src=imgarray[id-1];
 /*creats and returns the current card with props from productpage and from the
 start form Data.json. The images and the button is links to either 
 OrderCupCake ("/cupcake") or OrderCake("/cake"). It uses state to sent props to the order page */
  return (
    <div className='data'>
        <input type="hidden" id={id} />
        <input type="hidden" id={type} />
        <Link to=
        {type==="Cupcake"?"/cupcakes":"/cake"  }
        state={Data} >
        <img 
        src={src}
        alt="cake"  
        className='imgstyle'
        />
        </Link>
        <br/>
        <div className='name' >
          {name}
        </div>
        <br/>
        <div className='price' >
          ${formatedPrice}
        </div>
        <br/>
        <Link to=
        {type==="Cupcake"?"/cupcakes":"/cake"  }
        state={Data} >
          <button >Buy</button>
        </Link>  
    </div>
  )
}
