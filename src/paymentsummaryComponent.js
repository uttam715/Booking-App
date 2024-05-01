import { Link } from "react-router-dom";
import BookingComponent from "./home";

export default function PaymentSummary({seatPrice}){
    const totalprice=Object.values(seatPrice).reduce((acc, item) => acc + item.price, 0);
    
    let serviceTax = +(14 / 100 * totalprice).toFixed(2)
    let otherTaxes = 0.5 / 100 * totalprice
    const total=totalprice+serviceTax+otherTaxes*2;
    return(
        <div className="home">
            <h4 className="commonCss">Book Tickets</h4>
            <div className='ticket-summary'>
            <div>Subtotal: Rs.{totalprice}</div>
            <div>Service Tax @14%: Rs.{serviceTax}</div>
            <div>Swachh Bharat Cess @0.5%: Rs.{otherTaxes}</div>
            <div>Krishi Kalyan Cess @0.5%: Rs.{otherTaxes}</div>
            <div>Total: Rs.{total}</div>
        
           </div>
           <div className="paymentbtn">
           <Link to="/home"  className="btn enabledBtn" >
          cancel
        </Link>
        <Link to="/paymentcompleted" className="btn enabledBtn" >
          confirm
        </Link>
        </div>

        </div>
    )

}