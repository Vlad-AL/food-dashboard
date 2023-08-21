import React, { useState } from "react";
import Linklist from "../components/Linklist.jsx";
import AdditionalInfoBlock from "../components/AdditionalInfoBlock.jsx";
import SpicyRamenNoodle from '../assets/img/dish/spicy_ramen_noodle.png'
import Smoothies from '../assets/img/dish/smoothies.png'
import OverviewSearchBox from "../components/OverviewSearchBox.jsx";
import SharingPoster from "../components/SharingPoster.jsx";
import DishBlock from "../components/DishBlock.jsx";
import RightArrow from '../assets/icons/rightArrow';
import '../styles/OverviewMainBlock.css'



function Overview() {

const dishes = [
  {
    id: 1, 
    image: SpicyRamenNoodle, 
    title: 'Spicy Ramen Noodle', 
    calories: '190', 
    carbohydrates: '27', 
    fats: '8', protein: '4', 
    time: '15 mins',  
    ings: ['chicken', 'noodle', 'eggs', 'carrot', 'pepper', 'onion', 'garlic', 'salt'],
    steps: [
      "Cook noodles. Bring a pot of water to a boil and cook noodles according to package instructions. Ramen cook much more quickly than other noodles, so be sure to check the package for proper instructions.",
      "Saute. Add the chopped green onion, ginger, garlic and oil to a small sauce pan and saute for about 3-5 minutes.",
      "Make sauce. Add in all remaining sauce ingredients and whisk well. Simmer over low heat for about 5 minutes.",
      "Combine. Combine the cooked noodles with the sauce and let simmer for a few minutes to let the flavors blend."
    ]
  },
  {
    id: 2, 
    image: Smoothies, 
    title: 'Smoothies', 
    calories: '89', 
    carbohydrates: '21', 
    fats: '1', 
    protein: '2', 
    time: '10 mins',  
    ings: ['banana', 'avocado', 'raspberry', 'milk', 'almond', 'mango'],
    steps: [
      "Mix all the ingredients in a blender until creamy",
      "Pour into a deep bowl",
      "Add the topping and enjoy"
    ]
  }
]

const [dish, setDish] = useState(dishes[0]);

const handleDishClick = (id) => {
  setDish(dishes.find(dish => dish.id === id))
}


  return (
    <div className="App">
      <Linklist/>
      <div className='overviewMainBlock'>
            <div className="container">
                <OverviewSearchBox/>
                <SharingPoster/>
                <div className="recommendation_title">
                    <div className="recommendation_text">Based on the type of food you like</div>
                    <button>
                        <div className="button_view_text">View more</div>
                        <div className="button_view_icon"><RightArrow fill="#fb9200"/></div>
                    </button>
                </div>
                <div className='recommended_dishes_block'>
                    {dishes.map(({id, image, title, time, calories, ings}, index) => 
                        <DishBlock 
                          id={id} 
                          key={index} 
                          dishImage={image} 
                          title={title} 
                          calories={calories} 
                          time={time} 
                          ings={ings}
                          onClick={() => handleDishClick(id)} 
                        />
                    )}
                </div>
            </div>
        </div>
      <AdditionalInfoBlock dish={dish}/>
    </div>
  );
}

export default Overview;