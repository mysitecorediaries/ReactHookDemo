import React from 'react';
import{ useState, useReducer,useMemo, useCallback,useRef, useEffect} from 'react';

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':       
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function Counter(){

    const [name, setName] = useState('');
    const [state, dispatch] = useReducer( reducer,{ count:0 } );
    const amount = useMemo(() => {
        return state.count * state.count * 100;
    }, [state.count]);

    const handleIncrement = useCallback(() => {
        dispatch({ type: 'INCREMENT' });
    }, [dispatch]);

    const handleDecrement = useCallback(() => {
        dispatch({ type: 'DECREMENT' });
    }, [dispatch]);

    const inputRef = useRef(null);  

    useEffect(() => {
        inputRef.current.focus();
    }, []);    

    return(
        <div>
            <h1>Counter Component</h1>

            <div>
                <strong>Your Name</strong> <input type="text" ref={inputRef} value={name} 
                 onChange={(e) => setName(e.target.value)} />
                <br />
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <br />
            </div>
            <div>
                <p><strong>Your Name is : </strong> {name}</p>
                <p><strong>Counter Value is : </strong> {state.count}</p>
                <p><strong>Donation amont in Rs. : </strong> {amount}</p>
            </div>
        </div>
    );
}  
export default Counter;