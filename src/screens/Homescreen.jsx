import React, { useEffect } from 'react'
import Nonveg from '../components/Nonveg'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFoods } from '../Actions/FoodActions'
import Navbar from '../components/Navbar'

function Homescreen() {





    const dispatch = useDispatch()

    const foodsstate = useSelector((state) => state.getAllFoodsReducer);

    const { foods, error, loading } = foodsstate

    useEffect(() => {
        dispatch(getAllFoods());
    }, []);



    return (
       
        <div>
        <Navbar/>
            <div>
                <div className='row justify-content-center'>

                    {loading ? (<h1>Loading</h1>) : error ? (<h1>Something went wrong</h1>) : (
                        foods.map((food) => {
                            return (

                                <div className='col-md-4' key={food._id} >
                                    <div>
                                        <Nonveg food={food} />
                                    </div>
                                </div>
                            )
                        })
                    )}




                </div>

            </div>
        </div>
    )
}

export default Homescreen