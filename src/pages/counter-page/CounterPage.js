import { useReducer } from 'react';
import produce from 'immer';

import Button from '../../components/button/Button';
import Panel from '../../components/panel/Panel';

const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const SET_VALUE_TO_ADD = 'SET_VALUE_TO_ADD';
const ADD_VALUE_TO_COUNT = 'ADD_VALUE_TO_COUNT';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row gap-2">
        <Button onClick={increment} primary rounded outline>
          Increment
        </Button>
        <Button onClick={decrement} primary rounded outline>
          Decrement
        </Button>
      </div>
      <form className="mt-2" onSubmit={handleSubmit}>
        <label className="text-blue-500">Add a lot</label>
        <input
          className="p-1 m-3 bg-gray-100 text-gray-500 rounded border-blue-500 w-20 text-center"
          type="number"
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <Button primary rounded outline>
          Add it!
        </Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
