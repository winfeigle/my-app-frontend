import React from "react";

function MealPlans({mealPlans}){


    const renderMealplan = mealPlans.map(plan => {
        const {id, name, number_of_meals, price } = plan;
        return(
            <div key={id} className="mealplan">
                <div className="mealplan-card">
                    <div className="mealplan-price">
                        <b>{`$${price}.00`}</b>
                    </div>
                    <div className="mealplan-info">
                        <span className="mealplan-name">
                            {`${name} Feedplan`}
                        </span>
                        <span className="mealplan-meals">
                            {`${number_of_meals} meals`}
                        </span>
                    </div>
                </div>
                
                <div className="mealplan-subscribe">
                    <button>Subscribe</button>
                </div>
            </div>
        )
    })
    
    return(
        <div id="mealplans-container">
            {renderMealplan}
        </div>
    )

}

export default MealPlans;