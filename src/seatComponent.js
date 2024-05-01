import "./App.css";
export default function Seat({
  seat,
  handleSelectedSeat,
  seatPrice,
  price,
  selectedSeat,
}) {
  const isSelected = seatPrice[seat];
  return (
    <div className="seat">
      <span
        className={`seatId ${isSelected ? "selectedSeat" : ""} ${
          selectedSeat ? "bookedSeat" : ""
        }`}
        onClick={() => handleSelectedSeat(seat, price)}
      >
        {seat}
      </span>
    </div>
  );
}


