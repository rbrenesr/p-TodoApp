import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    
    initialState:{
        isSaving:false,
        messageSaved: '',
        todos:[
            {id:'A', todo:'hacer algo'},
            {id:'B', todo:'hacer algo'},
            {id:'D', todo:'hacer algo'},
        ],
        
    },

    reducers:{
        addTodo: ( state, action ) =>{

        },

        deleteTodo: ( state, action ) =>{

        },

        toggleTodo:( state, action )=>{

        }
    }

})


// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;