import Display from "./Display";

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      <td>{props.text1}</td>
    </tr>
  );
};
export default Statistic;

/*

const g = props.good;
  const b = props.bad;
  const n = props.neutral;
  const total = g + n + b;
  const v = g - b;
  let avar = v / total;
  let pavra = (g / total) * 100;
  if (total == 0) {
    avar = 0;
    pavra = 0;
  }
  if (total != 0) {
    return (
      <>
        <Display text="good" num={g} />
        <Display text="neutral" num={n} />
        <Display text="bad" num={b} />
        <Display text="Total" num={total} />
        <Display text="Avarage" num={avar} />
        <Display text="Positive" num={pavra} text1=" %" />
      </>
    );
  } else {
    return (
      <>
        <Display text="No feedback given" />
      </>
    );
  }

*/
