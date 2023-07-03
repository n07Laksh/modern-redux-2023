import Raect, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  setLocalVal,
} from "./counterSlice";
import { add, remove } from "./productSlice";
import productImage from "./TikTok-Logo.wine.png";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const localValue = useSelector((state) => state.counter.localVal);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const item = {
    name: "TikTok-Logo",
    type: "png",
    imgurl: productImage,
  };

  const handleChageVal = (e) => {
    dispatch(setLocalVal(parseInt(e.target.value)));
  };

  const handleByAmount = () => {
    dispatch(incrementByAmount(localValue));
  };

  useEffect(() => {
    dispatch(setLocalVal(localValue));
  }, [localValue, dispatch]);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span
          style={{
            padding: "10px 5pxs",
          }}
        >
          {" "}
          {count}{" "}
        </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input
          value={localValue}
          onChange={(e) => handleChageVal(e)}
          type="number"
        />
        <button onClick={handleByAmount}>incrementByAmount</button>
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <div>
          <div>
            <img src={item.imgurl} width="200px" height="150px" />
          </div>
          <div>{item.name}</div>
          <div>{item.type}</div>
          <button
            onClick={() => dispatch(add(item))}
            style={{
              marginTop: "20px",
            }}
          >
            Add to Cart
          </button>
        </div>
        <button
          style={{
            marginTop: "20px",
          }}
        >
          Cart item = {products.length}{" "}
        </button>
        <div>
          <button
            onClick={() => dispatch(remove())}
            style={{
              marginTop: "20px",
            }}
          >
            Remove to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
