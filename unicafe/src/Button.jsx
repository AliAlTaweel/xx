const Button = (props) => {
  return (
    <>
      <button onClick={props.onHandle}>{props.text} </button>
    </>
  );
};
export default Button;
