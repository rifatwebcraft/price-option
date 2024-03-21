
const PriceOptions = () => {
    
        const priceOptions = [
          {
            "id": 1,
            "plan_name": "Basic Plan",
            "price": "$29.99/month",
            "details": "Access to cardio and weightlifting areas only",
            "features": [
              "Unlimited access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access"
            ]
          },
          {
            "id": 2,
            "plan_name": "Silver Plan",
            "price": "$49.99/month",
            "details": "Access to all facilities excluding personal training",
            "features": [
              "Unlimited access to all gym facilities",
              "Access to group exercise rooms",
              "Swimming pool and sauna access",
              "Locker room access"
            ]
          },
          {
            "id": 3,
            "plan_name": "Gold Plan",
            "price": "$69.99/month",
            "details": "Access to all facilities including personal training sessions",
            "features": [
              "Unlimited access to all gym facilities",
              "Access to group exercise rooms",
              "Swimming pool and sauna access",
              "Locker room access",
              "2 personal training sessions per month"
            ]
          }
        ]
     
      
      


    return (
        <div>
            <h2 className="text-5xl">Best Price in the town</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)    
            }
        </div>
    );
};

export default PriceOptions;