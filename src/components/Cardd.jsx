import React from 'react';
import { Link } from 'react-router-dom';
function RestaurantReviewCard({ name, rating, description, email }) {
    return (
        <div className="restaurant-card border border-secondary ms-5 p-3">
            <h2>{name}</h2>
            <p>Rating: {rating} stars ⭐️</p>
            <p>{description}</p>
            <p>Email: {email}</p>
        </div>
    );
}

function App() {
   
    
    const cards = [
        {
            name: 'Alice',
            rating: 5,
            description: 'The pasta was perfect!',
            email: 'alice@example.com',
        },
        {
            name: 'Bob',
            rating: 4,
            description: 'The steak was juicy and flavorful.',
            email: 'bob@example.com',
        },
        {
            name: 'Charlie',
            rating: 5,
            description: 'The Paneer was fresh and delightful.',
            email: 'charlie@example.com',
        },
    ];

    return (
        <div className="App col-12">

            <div className='col-12 d-flex  ms-4 ' style={{ justifyContent: 'space-evenly' }}>
                {cards.map((card, index) => (
                    <RestaurantReviewCard key={index} {...card} />
                ))}
               
            </div>



        </div>
    );
}

export default App;
