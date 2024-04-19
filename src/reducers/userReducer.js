// reducers/userSlice.js
import { ContactSupportOutlined } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    notificationState:{isVisible:false, text:''},
    windowWidth:window.innerWidth,
    cartState: {
      isOpen: false,
      items: [],
    },
    viewerVisible:false,
    summaryVisible:false
    
  },
  reducers: {
    toggleNotState: (state,actions) => {
      const {text} = actions.payload
      console.log(text)
      if(text){ 
        state.notificationState.text = text
      }
      state.notificationState.isVisible = !state.notificationState.isVisible
    },
    toggleViewerState: (state,actions) => {
      state.viewerVisible = !state.viewerVisible
    },
    toggleCartState: (state,actions) => {
      state.cartState.isOpen = !state.cartState.isOpen
    },
    toggleSummaryState: (state,actions) => {
      state.summaryVisible = !state.summaryVisible
      console.log(state.summaryVisible)
    },
    handleItemAmount: (state, action) => {
      const { act, id } = action.payload;
      const itemIndex = state.cartState.items.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        const updatedItems = [...state.cartState.items];
        if (act === 'decrement') {
          updatedItems[itemIndex].quantity -= 1;
          // Elimina el artículo si su cantidad llega a cero
          if (updatedItems[itemIndex].quantity === 0) {
            updatedItems.splice(itemIndex, 1);
          }
        } else if (act === 'increment') {
          updatedItems[itemIndex].quantity += 1;
        }
        state.cartState.items = updatedItems;
      }
    },
    clearCartItems:(state)=>{
      state.cartState.items=[]
    },
    handleCartItem: (state, action) => {
      const { act, item } = action.payload;
    
      if (act === 'add') {
        // Verificar si el objeto ya está en el carrito
        const existingItem = state.cartState.items.find(i => i.id === item.id);
        if (!existingItem) {
          // Si el objeto no está en el carrito, lo agregamos con cantidad 1
          state.cartState.items.push({ ...item, quantity: 1 });
        } else {
          // Si el objeto ya está en el carrito, incrementamos su cantidad
          existingItem.quantity += 1;
        }
      } else if (act === 'delete') {
        // Eliminamos el objeto paint del carrito
        const updatedItems = state.cartState.items.filter(i => i.id !== item.id);
        state.cartState.items = updatedItems;
      }
    }
    
  },
});

export const { toggleNotState,clearCartItems,toggleViewerState,toggleCartState, toggleSummaryState, addCartItem, handleItemAmount, handleCartItem } = userSlice.actions;

export default userSlice.reducer;
