import { useReducer } from 'react'

const initialState = {
    age: 26
}

/**
 * 
 * Bug 1 : (yêu cầu undifined)
const reducer: (state: typeof initialState, action: any) => {
    age: number;
} | undefined
 *  Giải pháp 1 : return state
 *  Giải pháp 2 : throw Error('Invalid Action', action)
 * 
 * Bug 2 : 
 const increaseAgeAction: () => {
    type: string;
}
 * Giải pháp : Thêm as { type: 'INCREASE_AGE' }
 */


//type ActionType = 'INCREASE_AGE' | 'DECREASE_AGE'
type ActionType = { type: 'INCREASE_AGE' } | { type: 'DECREASE_AGE' } | { type: 'INCREASE_XAGE', payload: number }

const increaseAgeAction = () => {
    return { type: 'INCREASE_AGE' } as { type: 'INCREASE_AGE' }
}

const decreaseAgeAction = () => {
    return { type: 'DECREASE_AGE' } as { type: 'DECREASE_AGE' }
}

const increaseXAgeAction = (payload: number) => {
    return { type: 'INCREASE_XAGE', payload } as { type: 'INCREASE_XAGE', payload: number }
}

const reducer = (state: typeof initialState, action: ActionType) => {
    if(action.type === 'INCREASE_AGE'){
        return {
            ...state,
            age: state.age + 1
        }
    }
    if(action.type === 'DECREASE_AGE'){
        return {
            ...state,
            age: state.age - 1
        }
    }
    if(action.type === 'INCREASE_XAGE'){
        return {
            ...state,
            age: state.age + action.payload
        }
    }
    //return state;
    throw Error('Invalid Action', action)
}

const Counter = () => {

    // const [state, setState] = useState<{ age: number }>({
    //     age: 26
    // })

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const increaseAge = () => {
        // setState((prev) => ({
        //   ...prev,
        //   age: prev.age + 1
        // }))
        //dispatch('INCREASE_AGE');
        //dispatch({ type: 'INCREASE_AGE' });
        dispatch(increaseAgeAction());
    }
    
    const decreaseAge = () => {
        // setState((prev) => ({
        //   ...prev,
        //   age: prev.age - 1
        // }))
        //dispatch('DECREASE_AGE');
        //dispatch({ type: 'DECREASE_AGE' });
        dispatch(decreaseAgeAction());
    }

    const increaseXAge = (value: number) => {
        dispatch(increaseXAgeAction(value));
    }

    return (
        <>
            <button onClick={decreaseAge} style={{ color: 'red' }}>
                Decrease Age
            </button>
            <p>Hello! You are {state.age}</p>
            <button onClick={increaseAge} style={{ color: 'green' }}>
                Increase Age
            </button>
            <button onClick={() => increaseXAge(3)} style={{ color: 'blue' }}>
                Increase X Age
            </button>
        </>
    )
}

export default Counter
