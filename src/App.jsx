import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "./action";
const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);

  return (
    <div>
      <h1>Counter</h1>
      <span>{counter}</span>
      <button onClick={() => dispatch(increase)}>increase</button>
      <button onClick={() => dispatch(decrease)}>decrease</button>
      <button onClick={() => dispatch(reset)}>reset</button>
    </div>
  );
};

export default App;
