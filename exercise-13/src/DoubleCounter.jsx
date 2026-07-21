import { useReducer } from "react";

function DoubleCounter() {
  const initialState = {
    counterA: 0,
    counterB: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "incrementA":
        return { ...state, counterA: state.counterA + 1 };
      case "decrementA":
        return {
          ...state,
          counterA: state.counterA > 0 ? state.counterA - 1 : 0,
        };

      case "incrementB":
        return { ...state, counterB: state.counterB + 1 };
      case "decrementB":
        return {
          ...state,
          counterB: state.counterB > 0 ? state.counterB - 1 : 0,
        };
      case "reset":
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>Double Counter </h1>
        <h3>Counter A: {state.counterA} </h3>
        <button
          disabled={state.counterB === 0}
          onClick={() => dispatch({ type: "decrementA" })}
        >
          -A
        </button>
        <button onClick={() => dispatch({ type: "incrementA" })}>+A</button>
      </div>
      <div>
        <h3>Counter B: {state.counterB}</h3>
        <button
          disabled={state.counterB === 0}
          onClick={() => dispatch({ type: "decrementB" })}
        >
          -B
        </button>
        <button onClick={() => dispatch({ type: "incrementB" })}>+B</button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default DoubleCounter;
