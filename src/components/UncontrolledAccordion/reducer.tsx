type ActionType = {
    type: string
}
type StataType = {
    collapsed: boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export const reducer = (state: StataType, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_COLLAPSED: {
            return {
                ...state,
                collapsed: !state.collapsed
            }
        }
        default: {
            // return state
            throw new Error('bad action type')
        }
    }
}