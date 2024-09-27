const Display = (props) => {
  return (
    <>
      <tr>
        <td>
          {" "}
          {props.text} {props.num}
          {props.text1}
        </td>
      </tr>
    </>
  );
};
export default Display;
