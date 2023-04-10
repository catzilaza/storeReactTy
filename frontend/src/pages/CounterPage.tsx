import { useAppSelector, useAppDispatch } from "../store/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../store/feature/counter/counterSlice";

import { useGetPokemonByNameQuery } from "../services/Pokemon/pokemon";
import { Link } from "react-router-dom";

function CounterPage() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.users);
  
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  console.log("CounterPage() : ")

  return (
    <div>
      <div><Link to="/userlogin">Linktototo</Link></div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment By amount"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By amount 5
        </button>
      </div>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default CounterPage;
