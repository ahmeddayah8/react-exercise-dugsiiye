import { useReducer } from "react";
function Counter() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <h1>coutn : {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Icrement</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default Counter;
