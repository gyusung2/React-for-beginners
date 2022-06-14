import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim' , age : 26},
    reducers : {
        changeName(state) {
             state.name = 'lee'
            
        },
        increase(state){
            state.age += 1;
        }
    }
})
 

    export let {changeName , increase} = user.actions 
    export default user