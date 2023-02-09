export const addToCart =(product)=>{
    return{
        type:'ADD_ITEM',
        payload : product
    }
}

export const delCartProd=(product)=>{
    return {
        type : "DELETE_ITEM",
        payload: product
    }
}