import { ActionType } from "./actions"

export const initialState = {
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
 */

export const init = (initialArg: typeof initialState) => {
    return {
        ...initialArg,
        age: initialArg.age + 4
    }
}

const reducer = (state: typeof initialState, action: ActionType) => {
    // if(action.type === 'INCREASE_AGE'){
    //     return {
    //         ...state,
    //         age: state.age + 1
    //     }
    // }
    // if(action.type === 'DECREASE_AGE'){
    //     return {
    //         ...state,
    //         age: state.age - 1
    //     }
    // }
    // if(action.type === 'INCREASE_XAGE'){
    //     return {
    //         ...state,
    //         age: state.age + action.payload
    //     }
    // }
    // //return state;
    // throw Error('Invalid Action', action)
    switch(action.type) {
        case 'INCREASE_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'DECREASE_AGE':
            return {
                ...state,
                age: state.age - 1
            }
        case 'INCREASE_XAGE':
            return {
                ...state,
                age: state.age + action.payload
            }
        default:
            throw Error('Invalid Action', action)
    }
}

export const log = () => {
    return (state: typeof initialState, action: ActionType) => {
        console.group("Action Type: ", action.type);
        console.log("Previous state: ", state); // {age: 31}
        const nextState = reducer(state, action)
        console.log("Next state: ", nextState); // {age: 32}
        console.groupEnd(); // Phải có cái này khi dùng console.group
        return nextState
    }
}

export default reducer;