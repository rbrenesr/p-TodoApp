import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    
    initialState:{
        isSaving:false,
        messageSaved: '',
        todos:JSON.parse(localStorage.getItem('Todos')) || [],
        // todos:[
        //     {id:'A', todo:'hacer algo'},
        //     {id:'B', todo:'hacer algo'},
        //     {id:'C', todo:'hacer algo'},
          
        // ],
       

    },

    reducers:{
        addTodo: ( state, action ) =>{
            state.todos.push(action.payload);            
        },

        deleteTodo: ( state, action ) =>{

        },

        toggleTodo:( state, action )=>{

        }
    }

})


// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;