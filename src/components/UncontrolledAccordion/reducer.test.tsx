import {reducer, TOGGLE_COLLAPSED} from './reducer';

test('toggle should be true', () => {
    const startState = {collapsed: false}
    const action = {type: TOGGLE_COLLAPSED}

    const endState = reducer(startState, action)

    expect(endState.collapsed).toBe(true)

})

test('toggle should be false', () => {
    const startState = {collapsed: true}
    const action = {type: TOGGLE_COLLAPSED}

    const endState = reducer(startState, action)

    expect(endState.collapsed).toBe(false)

})
test('should be error', () => {
    const startState = {collapsed: true}
    const action = {type: 'FAKETYPE'}

    const endState = reducer(startState, action)

    expect(endState.collapsed).toBe(false)

})