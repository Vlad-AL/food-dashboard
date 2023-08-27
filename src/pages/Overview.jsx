import React, { useEffect, useMemo, useState } from "react";
import Linklist from "../components/Linklist.jsx";
import AdditionalInfoBlock from "../components/AdditionalInfoBlock.jsx";
import SpicyRamenNoodle from '../assets/img/dish/spicy_ramen_noodle.png'
import Smoothies from '../assets/img/dish/smoothies.png'
import Tonkatsu from '../assets/img/dish/tonkatsu.png'
import ChickenSchnitzel from '../assets/img/dish/chicken_schnitzel.png'
import ShrimpFriedRice from '../assets/img/dish/shrimp_fried_rice.png'
import ChickenCordonBlue from '../assets/img/dish/chicken_cordon_blue.png'
import DishBlock from "../components/DishBlock.jsx";
import RightArrow from '../assets/icons/rightArrow';
import FilterIcon from "../assets/icons/filterIcon.jsx";
import '../styles/Overview.css';



function Overview() {

  const dishes = [
    {
      id: 1, 
      image: SpicyRamenNoodle, 
      title: 'Spicy Ramen Noodle', 
      calories: 190, 
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
      calories: 89, 
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
    },
    {
      id: 3, 
      image: Tonkatsu, 
      title: 'Tonkatsu', 
      calories: 523, 
      carbohydrates: '15', 
      fats: '37', 
      protein: '27', 
      time: '30 mins',  
      ings: ['pork', 'eggs', 'salt', 'flour', 'bread', 'onion', 'garlic'],
      steps: [
        "Pound the pork loin or pork chop flat until it's about ¾ inch thick. Using scissors or a knife, cut slits into the outer white membrane of the pork. This prevents it from curling up as it cooks. Next, coat it with flour and shake off the excess.",
        "Add a tablespoon of flour to the egg and mix them together. This creates a thicker egg wash that allows for more breadcrumbs to stick to. Dip the pork into the beaten egg and let the excess drip off.",
        "Transfer the pork to the panko bread crumbs and press firmly to create a thick layer of bread crumbs that won't flake off in the fryer. Be sure to cover any bare spots with breading.",
        "Heat the oil to 340 degrees F over medium heat. Medium heat is essential to cook the pork thoroughly without burning the bread crumbs."
      ]
    },
    {
      id: 4, 
      image: ChickenSchnitzel, 
      title: 'Chicken Schnitzel', 
      calories: 339, 
      carbohydrates: '20', 
      fats: '8', protein: '43', 
      time: '45 mins',  
      ings: ['chicken', 'salt', 'bread', 'flour', 'eggs', 'oil', 'lemon', 'potato'],
      steps: [
        "Prep the chicken. Remove chicken tenders from breasts and save them for later use. Working with one piece of chicken breast at a time, place it in a ziploc plastic bag or between two sheets of plastic wrap. If using a plastic bag, partially close the bag, but not all the way to allow air to flow out. Use a meat mallet to pound out the meat using the flat side of the mallet, gently so you don’t tear the meat, until it’s about ¼-inch in thickness. Repeat with the rest of chicken breasts. Season the chicken breasts with salt and pepper. Set aside.",
        "Prep the dredge. In one shallow plate whisk the flour with 1 tsp salt and pepper. In another shallow plate whisk the breadcrumbs with 1 tsp salt and pepper and in another plate, whisk the eggs with 1 tsp salt, pepper and the Dijon mustard.",
        "Dredge the chicken. Place a rack on a baking sheet. Place all plates next to each other like on an assembly line. Start by coating the chicken in the flour mixture first, shaking off any excess. Dip it into the egg mixture next, making sure it’s fully covered in egg, and lastly dredge it through the breadcrumb mixture. Place on the prepared baking sheet and repeat with the rest of the chicken.",
        "Fry the chicken. Heat about ½-inch of vegetable oil in a skillet over medium-high heat. Once the oil is hot enough (350F) place a schnitzel into the skillet and fry, the oil should sizzle. Usually I drop a breadcrumb to see if it sizzles. If your skillet is really big you may be able to fry two pieces of chicken at a time, otherwise don’t rush this process. I used a 10½-inch skillet, and was only able to fry one schnitzel at a time. Add more oil as necessary in between schnitzels. Fry for about 2 to 3 minutes per side or until the schnitzel is a deep golden brown. Transfer to a plate lined with paper towels or another baking sheet with a rack on top. Repeat with remaining chicken.",
        "Serve. Serve schnitzels with lemon wedges and mashed potatoes."
      ]
    },
    {
      id: 5, 
      image: ShrimpFriedRice, 
      title: 'Shrimp Fried Rice', 
      calories: 534, 
      carbohydrates: '78', 
      fats: '9', protein: '32', 
      time: '27 mins',  
      ings: ['rice', 'shrimp', 'oil', 'garlic', 'carrot', 'eggs', 'onion'],
      steps: [
        "In a large skillet or wok set over high heat, add 3 tablespoon oil. Once oil is hot. Add shrimps. Fry shrimp until 50% cooked. Remove cooked shrimp and set aside. Side Note: Shrimp cooks fast, so only cook for 15-20 seconds.",
        "Fry garlic for 10 seconds or until softened. Quickly add in carrots and fry for another 10 seconds. Push everything to the side of the wok.",
        "Add 1 tablespoon oil into empty side of the pan. Pour in beaten eggs and scramble before mixing with ingredients.",
        "Add cooked shrimp, rice and toss with ingredients.",
        "Remove off heat. Serve and enjoy with optional green onions as a garnish."
      ]
    },
    {
      id: 6, 
      image: ChickenCordonBlue, 
      title: 'Chicken Cordon Blue', 
      calories: 751, 
      carbohydrates: '41', 
      fats: '42', protein: '51', 
      time: '110 mins',  
      ings: ['chicken', 'pork', 'flour', 'eggs', 'bread', 'salt', 'oil', 'milk', 'cheese'],
      steps: [
        "Flatten chicken breasts: Lay a chicken breast between 2 sheets of plastic wrap. Use a meat mallet or rolling pin to pound the chicken until it's about ¼-inch thick. Repeat with remaining chicken breasts. Season each piece with salt and pepper on both sides.",
        "Roll: Lay a slice each of cheese and pork over one of the chicken breasts on a sheet of plastic wrap. You might need to use 2 slices of each depending on how big your cheese and ham slices are. Roll the chicken width-wise and wrap it tightly in the plastic wrap by rolling, then tying the ends together. Repeat with the remaining chicken breasts and allow them to chill in the freezer for 30 minutes to 1 hour.",
        "Dredge: Add the flour, eggs, and breadcrumbs to 3 separate shallow bowls. Season the flour and eggs with salt and pepper. Unwrap the chicken breasts and dredge them first in the flour, then eggs, and finally the breadcrumbs.",
        "Fry: Fill a deep skillet about 2-inch high with the vegetable oil. Heat to 325°F. Add the chicken breasts and cook for 5 minutes, flip, then cook for another 5 minutes or until the center reaches an internal temperature of 165°F.* Let the chicken rest for 5-10 minutes.",
        "Start the sauce: Melt the butter in a saucepan over medium heat. Add the flour, whisk well, and cook for 1-2 minutes.",
        "Finish and serve: Pour the milk slowly, while whisking, until fully incorporated and smooth. Add the dijon and parmesan cheese. Bring the sauce to a bubble, while continuously whisking, until it has thickened. Taste for salt and season as necessary. Serve the chicken with a scoop of sauce."
      ]
    }
  ]

  const [dish, setDish] = useState(dishes[0]);

  const handleDishClick = (id) => {
    setDish(dishes.find(dish => dish.id === id))
  }

  const [searchQuery, setSearchQuery] = useState('')
  let caloriesRange = []
  const [minCalorie, setMinCalorie] = useState(0)
  const [maxCalorie, setMaxCalorie] = useState(0)

  window.addEventListener('load', () => {
    caloriesRanger()
  })

  const caloriesRanger = () => {
    dishes.map(dish => {
      caloriesRange = [...caloriesRange, dish.calories]
    })
    setMaxCalorie(Math.max.apply(null, caloriesRange))
    setMinCalorie(Math.min.apply(null, caloriesRange))
  }

  const sortedAndFilteredDishes = useMemo(() => {
      return dishes.filter(dish => 
        dish.title.includes(searchQuery) && dish.calories >= minCalorie && dish.calories <= maxCalorie
      )
  }, [searchQuery, dishes, minCalorie, maxCalorie])



  const [isActive, setIsActive] = useState(false) 

  return (
    <div className="App">
      <Linklist/>
      <div className='overviewMainBlock'>
            <div className="container">
                <div className='overviewSearchBox'>
                  <div className="search_block">
                      <div className="search_icon"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a59fbf"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#a59fbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></div>
                      <input onChange={e => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='Search by food name'/>
                  </div>
                  <div className={`${isActive ? 'filter_active active' : 'filter_active'}`}> 
                    <div className="filter_content_block">
                      <div className="filter_content_title">Choose calories range</div>
                      <div className="filters_block">
                        <input onChange={e => setMinCalorie(e.target.value)} className="calories_filter min_calories" type="text" placeholder="Type min value" value={minCalorie}/>
                        <input onChange={e => setMaxCalorie(e.target.value)} className="calories_filter max_calories" type="text" placeholder="Type max value" value={maxCalorie}/>
                        <button onClick={() => caloriesRanger()} className="reset_button">Reset to default</button>
                      </div>
                    </div>
                  </div>
                  <button className="filter_block" onClick={() => setIsActive(!isActive)}>
                      <div className="filter_icon"><FilterIcon/></div>
                      <div className="filtertext">Filter</div>
                  </button>
                </div>
                <div className='sharingPoster'>
                  <div className="sharing_poster_title">Add your own recipe</div>
                  <div className="sharing_poster_description">Upload your own home-made recipe and share it with other members of our community</div>
                  {/* <div className="sharing_poster_image"></div> */}
                </div>
                <div className="recommendation_title">
                    <div className="recommendation_text">Based on the type of food you like</div>
                    <button>
                        <div className="button_view_text">View more</div>
                        <div className="button_view_icon"><RightArrow fill="#fb9200"/></div>
                    </button>
                </div>
                <div className='dishes_block'>
                    {sortedAndFilteredDishes.map(({id, image, title, time, calories, ings}, index) => 
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