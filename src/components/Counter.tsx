import { useReducer } from 'react'
import reducer, { init, initialState } from '../reducer/reducer';
import { decreaseAgeAction, increaseAgeAction, increaseXAgeAction } from '../reducer/actions';

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


const Counter = () => {

    // const [state, setState] = useState<{ age: number }>({
    //     age: 26
    // })

    const [state, dispatch] = useReducer(reducer, initialState, init);

    /**
     * Tham số thứ 3 là một function
     * thay thể cho initialState
     */
    init(initialState);
    
    const increaseAge = () => {
        // setState((prev) => ({
        //   ...prev,
        //   age: prev.age + 1
        // }))
        //dispatch('INCREASE_AGE');
        //dispatch({ type: 'INCREASE_AGE' });
        dispatch(increaseAgeAction());
        //console.log(state.age); // 30 not 31 (Browser is 30)
        /**
         * Lấy giá trị hiện tại sau khi dispatch
         */
        const nextState = reducer(state, increaseAgeAction())
        console.log(nextState.age);
        
        
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
