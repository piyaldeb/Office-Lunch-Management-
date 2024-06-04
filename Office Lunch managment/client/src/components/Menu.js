import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
   const [menu, setMenu] = useState([]);
   const [date, setDate] = useState('');

   useEffect(() => {
      if (date) {
         axios.get(`http://localhost:5000/api/menu/${date}`)
            .then(response => setMenu(response.data.options))
            .catch(error => console.error(error));
      }
   }, [date]);

   const handleDateChange = (e) => {
      setDate(e.target.value);
   };

   return (
      <div>
         <h2>Daily Menu</h2>
         <input type="date" onChange={handleDateChange} />
         <ul>
            {menu.map((option, index) => (
               <li key={index}>{option}</li>
            ))}
         </ul>
      </div>
   );
};

export default Menu;
