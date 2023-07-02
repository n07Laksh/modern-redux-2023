import Raect, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, setLocalVal } from "./counterSlice";


export function Counter() {
  const count = useSelector(state=> state.counter.value);
  const localValue = useSelector(state=> state.counter.localVal);
  const dispatch = useDispatch();

const handleChageVal = (e) =>{
  dispatch(setLocalVal(parseInt(e.target.value)))
}

const handleByAmount = () => {
  dispatch(incrementByAmount(localValue));
}

useEffect(()=>{
  dispatch(setLocalVal(localValue))
},[localValue, dispatch]);

  return (
   <div>
     <div>
       <button
         aria-label="Increment value"
         onClick={() => dispatch(increment())}
       >
         Increment
       </button>
       <span style={{padding:"10px 5pxs",backgroundColor:"black",color:"white"}}> {count} </span>
       <button
         aria-label="Decrement value"
         onClick={() => dispatch(decrement())}
       >
         Decrement
       </button>
       <input value={localValue} onChange={(e)=>handleChageVal(e)} type="number"/>
       <button
       onClick={handleByAmount}
       >incrementByAmount</button>
     </div>
   </div>
 )
}
