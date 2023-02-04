import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    
    initialState:{
        isSaving:false,
        messageSaved: '',
        todos:[
            {id:'A', todo:'hacer algo'},
            {id:'B', todo:'hacer algo'},
            {id:'C', todo:'hacer algo'},
            {id:'D', todo:'hacer algo'},
            {id:'E', todo:'hacer algo'},
            {id:'F', todo:'hacer algo'},
            {id:'G', todo:'hacer algo'},
            {id:'H', todo:'hacer algo'},
            {id:'j', todo:'hacer algo'},
            {id:'Hj', todo:'hacer algo'},
            {id:'Hjj', todo:'hacer algo'},
            {id:'Hg', todo:'hacer algo'},
            {id:'Hgd', todo:'hacer algo'},
            {id:'Hr', todo:'hacer algo'},
            {id:'Hew', todo:'hacer algo'},
            {id:'Hrgft', todo:'hacer algo'},
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