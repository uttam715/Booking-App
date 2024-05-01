import { useEffect, useState } from "react";
import "./App.css";
import row from "./MockData/screen1.js";
import { Link } from "react-router-dom";
import SeatRow from "./rowComponent.js";

export default function BookingComponent({
  btnStatus,
  setBtnStatus,
  seatPrice,
  setSeatPrice,
  selectedSeat,
  setSelectedSeat,
}) {
  useEffect(() => {
    if (Object.keys(seatPrice).length > 0) {
      setBtnStatus(false);
    } else {
      setBtnStatus(true);
    }
  }, [seatPrice]);

  useEffect(() => {
    setSeatPrice({});
  }, []);

  function handleSelectedSeat(seat, price) {
    //converting seatprice object to array
    //if remove existing seat from selected seat array
    //else seat is new then add in selectedSeatarray
    // const selectedSeat=Object.keys(seatPrice);
    // if (selectedSeat.includes(seat)) {
    // const selectedSeatArray = selectedSeat.filter((item) => item !== seat);
    // setSelectedSeat(selectedSeatArray);

    //removing object from seatprice
    if (seatPrice[seat]) {
      const clonedSeatPrice = { ...seatPrice };
      delete clonedSeatPrice[seat];
      setSeatPrice(clonedSeatPrice);
    } else {
      // setSelectedSeat([...selectedSeat, seat]);
      setSeatPrice({ ...seatPrice, [seat]: { price } });
    }
  }

  return (
    <div className="home">
      <h4 className="commonCss">Book Tickets</h4>
      {row.map((row) => (
        <SeatRow
          key={row.id}
          row={row}
          price={row.price}
          handleSelectedSeat={handleSelectedSeat}
          // selectedSeat={selectedSeat}
          seatPrice={seatPrice}
          selectedSeat={selectedSeat}
        ></SeatRow>
      ))}
      <div className="commonCss">
        <span>Selected Seat:{Object.keys(seatPrice).join(" , ")} </span>
      </div>
      <div className="referenceDetails">
        <span className="bookedCircle"></span>
        <span>Already Booked</span>
        <span className="availableCircle"></span>
        <span>Available</span>
        <span className="selectedCircle"></span>
        <span>Selected</span>
      </div>
      {btnStatus ? (
        <button className="btn" disabled>
          Book
        </button>
      ) : (
        <Link to="/payment" className="btn enabledBtn">
          Book
        </Link>
      )}
    </div>
  );
}
