import React from "react";
import classes from "./Getsby.module.scss";
import Input from "../../../UI/Input";

function MealItemForm(props) {
  return (
    <form className={classes.mealForm}>
      <Input label='Amount' input={{
          id:'amount_'+props.id,
          type:'number',
          min:'1',
          max:'5',
          step:'1',
          defaultValue:'1'
      }} />
      <button>+Add</button>
    </form>
  );
}

export default MealItemForm;
