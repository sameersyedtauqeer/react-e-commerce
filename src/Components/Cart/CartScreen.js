import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delCartProd  } from "../../Redux/actions/index";



const CartScreen = () => {

  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  const handleRemove = (productId) => {
    dispatch(delCartProd(productId))

  }

 

  return (
    <>
      <div className="row">

        {state.map((item) => (
          <>
            <div className="col-md-auto">
              <img src={item.image} alt="" width='160px' height='160px' />
            </div>

            <div className="col-md-2">
              <h6>{item.title}</h6>
            </div>

            <div className="col-md-2">
              <h6>{item.price}</h6>
            </div>



            <div className="col-md-4">
              <button type=""  className='btn btn-success me-2'>+</button>
              <button type="" className='btn btn-warning'>-</button>

            </div>

            <div className="col-md-auto">
              <button onClick={() => handleRemove(item.id)} type="" className='btn btn-danger '>remove</button>
            </div>
          </>

        ))}
      </div>
    </>
  )
}

export default CartScreen