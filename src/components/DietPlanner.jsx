import React, { useState } from 'react';


const DietPlanner = () => {
  const [calories, setCalories] = useState('');
  const [dietType, setDietType] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [mealPlan, setMealPlan] = useState(null);

  const handleGenerateMealPlan = () => {
    let plan = [];
    switch (dietType) {
      case 'gluten-free':
        plan = glutenFreeMeals;
        break;
      case 'dairy-free':
        plan = dairyFreeMeals;
        break;
      case 'egg-free':
        plan = eggFreeMeals;
        break;
      case 'soy-free':
        plan = soyFreeMeals;
        break;
      case 'nut-free':
        plan = nutFreeMeals;
        break;
      case 'low-carb':
        plan = lowCarbMeals;
        break;
      case 'low-fat':
        plan = lowFatMeals;
        break;
      case 'ketogenic':
        plan = ketogenicMeals;
        break;
      default:
        plan = [];
    }
    setMealPlan(plan);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setPreferences((prevPreferences) =>
      checked ? [...prevPreferences, value] : prevPreferences.filter((pref) => pref !== value)
    );
  };

  const glutenFreeMeals = [
    {
      name: 'Breakfast',
      items: ['Quinoa porridge with berries and almond milk'],
      nutritionalValue: 'Calories: 300, Protein: 10g, Carbs: 50g, Fat: 8g',
    },
    {
      name: 'Lunch',
      items: ['Grilled chicken salad with mixed greens and olive oil dressing'],
      nutritionalValue: 'Calories: 400, Protein: 30g, Carbs: 30g, Fat: 20g',
    },
    {
      name: 'Dinner',
      items: ['Baked salmon with quinoa and steamed vegetables'],
      nutritionalValue: 'Calories: 500, Protein: 35g, Carbs: 40g, Fat: 25g',
    },
    {
      name: 'Snacks',
      items: ['Greek yogurt with honey and gluten-free granola'],
      nutritionalValue: 'Calories: 200, Protein: 10g, Carbs: 30g, Fat: 5g',
    },
  ];

  const dairyFreeMeals = [
    {
      name: 'Breakfast',
      items: ['Oatmeal with almond milk, chia seeds, and fresh fruit'],
      nutritionalValue: 'Calories: 300, Protein: 10g, Carbs: 50g, Fat: 8g',
    },
    {
      name: 'Lunch',
      items: ['Quinoa salad with chickpeas, cucumbers, and tomatoes'],
      nutritionalValue: 'Calories: 400, Protein: 15g, Carbs: 60g, Fat: 12g',
    },
    {
      name: 'Dinner',
      items: ['Stir-fried tofu with mixed vegetables and brown rice'],
      nutritionalValue: 'Calories: 500, Protein: 20g, Carbs: 70g, Fat: 15g',
    },
    {
      name: 'Snacks',
      items: ['Apple slices with almond butter'],
      nutritionalValue: 'Calories: 200, Protein: 5g, Carbs: 30g, Fat: 10g',
    },
  ];

  const eggFreeMeals = [
    {
      name: 'Breakfast',
      items: ['Smoothie with banana, spinach, and almond milk'],
      nutritionalValue: 'Calories: 300, Protein: 5g, Carbs: 50g, Fat: 10g',
    },
    {
      name: 'Lunch',
      items: ['Veggie burger with a side salad'],
      nutritionalValue: 'Calories: 450, Protein: 20g, Carbs: 60g, Fat: 15g',
    },
    {
      name: 'Dinner',
      items: ['Lentil soup with a side of whole grain bread'],
      nutritionalValue: 'Calories: 500, Protein: 25g, Carbs: 70g, Fat: 10g',
    },
    {
      name: 'Snacks',
      items: ['Hummus with carrot sticks'],
      nutritionalValue: 'Calories: 200, Protein: 5g, Carbs: 20g, Fat: 12g',
    },
  ];

  const soyFreeMeals = [
    {
      name: 'Breakfast',
      items: ['Overnight oats with almond milk and berries'],
      nutritionalValue: 'Calories: 300, Protein: 10g, Carbs: 50g, Fat: 8g',
    },
    {
      name: 'Lunch',
      items: ['Turkey wrap with lettuce, tomato, and avocado'],
      nutritionalValue: 'Calories: 400, Protein: 30g, Carbs: 30g, Fat: 15g',
    },
    {
      name: 'Dinner',
      items: ['Grilled chicken with roasted sweet potatoes and green beans'],
      nutritionalValue: 'Calories: 500, Protein: 40g, Carbs: 50g, Fat: 15g',
    },
    {
      name: 'Snacks',
      items: ['Apple slices with peanut butter'],
      nutritionalValue: 'Calories: 200, Protein: 5g, Carbs: 30g, Fat: 10g',
    },
  ];

  const nutFreeMeals = [
    {
      name: 'Breakfast',
      items: ['Smoothie with banana, spinach, and oat milk'],
      nutritionalValue: 'Calories: 300, Protein: 5g, Carbs: 50g, Fat: 10g',
    },
    {
      name: 'Lunch',
      items: ['Quinoa salad with chickpeas, cucumbers, and tomatoes'],
      nutritionalValue: 'Calories: 400, Protein: 15g, Carbs: 60g, Fat: 12g',
    },
    {
      name: 'Dinner',
      items: ['Stir-fried tofu with mixed vegetables and brown rice'],
      nutritionalValue: 'Calories: 500, Protein: 20g, Carbs: 70g, Fat: 15g',
    },
    {
      name: 'Snacks',
      items: ['Carrot sticks with hummus'],
      nutritionalValue: 'Calories: 200, Protein: 5g, Carbs: 20g, Fat: 12g',
    },
  ];

  const lowCarbMeals = [
    {
      name: 'Breakfast',
      items: ['Greek yogurt with nuts and seeds'],
      nutritionalValue: 'Calories: 300, Protein: 20g, Carbs: 20g, Fat: 15g',
    },
    {
      name: 'Lunch',
      items: ['Grilled chicken Caesar salad'],
      nutritionalValue: 'Calories: 400, Protein: 30g, Carbs: 15g, Fat: 20g',
    },
    {
      name: 'Dinner',
      items: ['Steak with sautéed spinach and mushrooms'],
      nutritionalValue: 'Calories: 500, Protein: 35g, Carbs: 20g, Fat: 25g',
    },
    {
      name: 'Snacks',
      items: ['Cheese sticks'],
      nutritionalValue: 'Calories: 200, Protein: 10g, Carbs: 5g, Fat: 15g',
    },
  ];

  const lowFatMeals = [
    {
      name: 'Breakfast',
      items: ['Oatmeal with banana and cinnamon'],
      nutritionalValue: 'Calories: 300, Protein: 10g, Carbs: 60g, Fat: 5g',
    },
    {
      name: 'Lunch',
      items: ['Turkey sandwich with whole grain bread, lettuce, and tomato'],
      nutritionalValue: 'Calories: 400, Protein: 25g, Carbs: 50g, Fat: 10g',
    },
    {
      name: 'Dinner',
      items: ['Baked cod with steamed broccoli and brown rice'],
      nutritionalValue: 'Calories: 500, Protein: 30g, Carbs: 70g, Fat: 5g',
    },
    {
      name: 'Snacks',
      items: ['Fruit salad'],
      nutritionalValue: 'Calories: 200, Protein: 5g, Carbs: 45g, Fat: 2g',
    },
  ];

  const ketogenicMeals = [
    {
      name: 'Breakfast',
      items: ['Egg muffins with spinach and cheese'],
      nutritionalValue: 'Calories: 300, Protein: 20g, Carbs: 5g, Fat: 25g',
    },
    {
      name: 'Lunch',
      items: ['Avocado and bacon salad'],
      nutritionalValue: 'Calories: 400, Protein: 15g, Carbs: 10g, Fat: 35g',
    },
    {
      name: 'Dinner',
      items: ['Grilled salmon with asparagus and butter'],
      nutritionalValue: 'Calories: 500, Protein: 25g, Carbs: 5g, Fat: 40g',
    },
    {
      name: 'Snacks',
      items: ['Cheese and olives'],
      nutritionalValue: 'Calories: 200, Protein: 10g, Carbs: 5g, Fat: 15g',
    },
  ];

  return (
    <div className="diet-planner">
      <section className="introduction">
        <h1>Meal Planner for PCOS</h1>
        <h2>Enter your calorie goal and select your dietary preferences to get a personalized meal plan.</h2>
      </section>

      <section className="input-section">
        <label htmlFor="calories">Calorie Goal:</label>
        <input
          type="number"
          id="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="e.g., 2000"
        />

        <label htmlFor="diet-type">Diet Type:</label>
        <select id="diet-type" value={dietType} onChange={(e) => setDietType(e.target.value)}>
          <option value="">Select</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="dairy-free">Dairy-Free</option>
          <option value="egg-free">Egg-Free</option>
          <option value="soy-free">Soy-Free</option>
          <option value="nut-free">Nut-Free</option>
          <option value="low-carb">Low-Carb</option>
          <option value="low-fat">Low-Fat</option>
          <option value="ketogenic">Ketogenic</option>
        </select>

        

        <button onClick={handleGenerateMealPlan}>Generate Meal Plan</button>
      </section>

      {mealPlan && (
        <section className="meal-plan-section">
          <h2>Generated Meal Plan</h2>
          <div className="meal-plans">
            {mealPlan.map((meal, index) => (
              <div key={index} className="meal-plan">
                <h3>{meal.name}</h3>
                <ul>
                  {meal.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>{meal.nutritionalValue}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default DietPlanner;
