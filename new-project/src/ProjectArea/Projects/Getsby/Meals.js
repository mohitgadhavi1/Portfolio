import React, { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import MealSummary from './MealSummary';

function Meals() {
    return (
        <Fragment>
           
            <AvailableMeals/>
            <MealSummary/>
        </Fragment>
    )
}

export default Meals;
