- Redux is a library for managing and updating application state based on the Flux architecture

- Redux makes code more predictable, testable, and maintainable by consolidating state in a single object. Components are just given data to render and can request changes using events called actions.

In a Redux application, data flows in one direction: from state to view to action back to state and so on.

State is the current information behind a web application.

An action is an object describing an event in the application. It must have a type property and it typically has a payload property as well.

A reducer is a function that determines the application’s next state given a current state and a specific action. It returns a default initial state if none is provided and returns the current state if the action is not recognized

A reducer must make follow these three rules:

They should only calculate the new state value based on the existing state and action.
They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
They must not do any asynchronous logic or other “side effects”.
In other words, a reducer must be a pure function and it must update the state immutably.

The store is a container for state, it provides a way to dispatch actions, and it calls the reducer when actions are dispatched. Typically there is only one store in a Redux application.

A basic example for redux needs 3 things: 
- a `reducer` function that takes current `state` and some data to identify the action
  - data might include `type` and `payload`, for example
  - returns a NEW creation of the state
    - `return { ...state, newThing: 'totally new object' }`
- a store object using `Redux.createStore(reducer)`
  - or use `configureStore` from @reduxjs/toolkit
- something that uses the state
- something that calls the `dispatch` object 

![Redux flow](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

# react example

prep
```
npm install react-redux @reduxjs/toolkit
```

```js
import React from 'react';
import { useDispatch } from 'react-redux';

const ACTIONS = { 
  INCREMENT: 'INCREMENT', 
  DECREMENT: 'DECREMENT'
}

const initialState = {
  count: 0
}

const reducer = (state, { type, data }) => {
  switch (type) {
    case ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
  }
}

const getCount = state => state.count;

const incrementCount = (dispatch) => dispatch({
  type: ACTIONS.INCREMENT,
});
const decrementCount = (dispatch) => dispatch({
  type: ACTIONS.DECREMENT,
});

const store = configureStore({
  reducer: reducer,
})

const index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  const onClickIncrement = () => {
    dispatch(incrementCount())
  }

  const onClickDecrement = () => {
    dispatch(decrementCount())
  }

  return (
    <div>
      <button onClick={onClickDecrement}>-</button>
      <h1>{count}</h1>
      <button onClick={onClickIncrement}>+</button>
    </div>
  )
}
```