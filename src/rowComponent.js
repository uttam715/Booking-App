import Seat from "./seatComponent.js";
export default function SeatRow({ row,handleSelectedSeat , price,seatPrice,selectedSeat }) {
  
  return (
    <div className="seatRow">
      {
       
      row.seats.map((seats) => (
        <Seat key={seats.name} seat={seats.name}  handleSelectedSeat={handleSelectedSeat}  price={price} seatPrice={seatPrice} selectedSeat={selectedSeat}
         ></Seat>
      ))}
    </div>
  );
}
