import { useParams } from "react-router-dom";


export default function Cast() {
  const param = useParams()
  console.log(param)
  return (
    <ul>
      <li>
        <img src="/" alt="" />
        <p></p>
      </li>
   </ul>
  );
};
