import "./App.css";
export default function Input(props) {
  return (
    <div className="inputDiv">
      <label htmlFor="input"></label>
      <input
        className="input"
        {...props}
        type={props.type}
        placeholder={props.placeholder}
        value={props.input}
        required
      ></input>
      {props.error ? <span className="error">{props.error}</span> : null}
    </div>
  );
}
