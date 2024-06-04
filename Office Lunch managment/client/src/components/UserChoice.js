import React, { useState } from 'react';
import axios from 'axios';

const UserChoice = () => {
   const [name, setName] = useState('');
   const [lunchChoice, setLunchChoice] = useState('');
   const [response, setResponse] = useState(null);

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.put('http://localhost:5000/api/user/choice', { name, lunchChoice })
         .then(response => setResponse(response.data))
         .catch(error => console.error(error));
   };

   return (
      <div>
         <h2>Select Your Lunch</h2>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Lunch Choice" value={lunchChoice} onChange={(e) => setLunchChoice(e.target.value)} required />
            <button type="submit">Submit</button>
         </form>
         {response && <p>Lunch choice updated for {response.name}</p>}
      </div>
   );
};

export default UserChoice;
