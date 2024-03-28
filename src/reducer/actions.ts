/**
 * 
 * Bug 2 : 
const increaseAgeAction: () => {
    type: string;
}
 * Giải pháp : Thêm as { type: 'INCREASE_AGE' }
 */

//type ActionType = 'INCREASE_AGE' | 'DECREASE_AGE'
//type ActionType = { type: 'INCREASE_AGE' } | { type: 'DECREASE_AGE' } | { type: 'INCREASE_XAGE', payload: number }
export type ActionType = IncreaseAgeAction | DecreaseAgeAction | IncreaseXAgeAction

/**
 * Áp dụng code dưới do các code trước lặp lại nhau quá nhiều
 *  
 */

type IncreaseAgeAction = { type: 'INCREASE_AGE' }
type DecreaseAgeAction = { type: 'DECREASE_AGE' }
type IncreaseXAgeAction = { type: 'INCREASE_XAGE' }

export const increaseAgeAction = () => {
    return { type: 'INCREASE_AGE' } as { type: 'INCREASE_AGE' }
}

export const decreaseAgeAction = () => {
    return { type: 'DECREASE_AGE' } as { type: 'DECREASE_AGE' }
}

export const increaseXAgeAction = (value: number) => {
    return { type: 'INCREASE_XAGE', payload: value } as { type: 'INCREASE_XAGE', payload: number }
}