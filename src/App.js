
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './redux/reducer/counterSlice';
function App() {
  const count = useSelector ((state) => state.counter.value)
  const dispatch =useDispatch();
  return (
    <div className="App">
      <div> Count :{count} </div>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
