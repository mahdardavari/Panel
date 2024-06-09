interface CounterAction {
    type: 'INCREMENT' | 'DECREMENT' | 'RESET';
}

export interface CounterState {
    count: number
}

export function counterReducer(state: CounterState, action: CounterAction) {
    const changeValue = state.count >= 10 ? 10 : state.count <= -10 ? 5 : 1

    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + changeValue };

        case 'DECREMENT':
            return { ...state, count: state.count - changeValue };

        case 'RESET':
            return { count: 0 };

        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }


}