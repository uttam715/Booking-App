import { Link } from "react-router-dom"
export default function Paymentcompleted({seatPrice,selectedSeat,setSelectedSeat}){
    const totalPrice=Object.values(seatPrice).reduce((acc, item) => acc + item.price, 0);
    let serviceTax = +(14 / 100 * totalPrice).toFixed(2)
    let otherTaxes = 0.5 / 100 * totalPrice
    // if(seatPrice[booked])
    // setSelectedSeat(true);
    return(
        <div className="home">
        <h4 className="commonCss">Book Tickets</h4>
        <div className='ticket-summary'>
        <div>Successfully Booked </div>
        <div>Revenue: Rs.{totalPrice}</div>
            <div>Service Tax: Rs.{serviceTax}</div>
            <div>Swachh Bharat Cess: Rs.{otherTaxes}</div>
            <div>Krishi Kalyan Cess: Rs.{otherTaxes}</div>
    
       </div>
       <div className="paymentbtn">
       <Link to="/home"  className="btn enabledBtn" >
      Home
    </Link>
    </div>

    </div>
    )
}