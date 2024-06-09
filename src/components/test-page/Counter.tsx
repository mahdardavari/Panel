import { useReducer } from "react";
import { counterReducer, CounterState } from "src/reducer/counterReducer";

const initialState: CounterState = { count: 0 };

export function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button className="p-2 border" onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
      <button  className="p-2 border" onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
      <button  className="p-2 border" onClick={() => dispatch({ type: "RESET" })}> Reset </button>
    </div>
  );
}
