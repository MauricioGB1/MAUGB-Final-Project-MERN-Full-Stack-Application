import {
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    UPDATE_PROJECTS,
    UPDATE_CATEGORIES,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
  } from "./actions";

  const initialState = {
    cart: [],
    projects: [],
    categories: []
  }

  export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            return {
              ...state,
              cart: [...state.cart, action.project],
            };

        case UPDATE_PROJECTS:
            console.log(action);
            return {
              ...state,
              projects: [...action.projects || []]
            };

        case UPDATE_CATEGORIES:
            console.log(action);
            return {
               ...state,
               categories: [...action.categories || []]
            }; 
                
        case ADD_MULTIPLE_TO_CART:
            console.log(action);
            return {
                ...state,
                cart: [...state.cart, ...action.items || []],
            };

        case REMOVE_FROM_CART:
            console.log(action);
                let newState = state.cart.filter(project => {
                  console.log(project);
            return project._id !== action.item;
            });
            return {
                ...state,
                cart: newState
            };
              
        case UPDATE_CART_QUANTITY:
            console.log(action);
            return {
                  ...state,
                  cart: state.cart.map(project => {
                    if (action._id === project._id) {
                      project.purchaseQuantity = action.purchaseQuantity;
                    }
                    return project;
                })
            };

        case CLEAR_CART:
            return {
                  ...state,
                  cartOpen: false,
                  cart: []
                };
            default:
                return state;
    }
};