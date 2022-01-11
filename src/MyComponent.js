// import { useEffect, useState } from "react";


// function MyComponent() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);
  
//     useEffect(() => {
//       fetch("https://assessment-edvora.herokuapp.com")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             setIsLoaded(true);
//             setItems(result);
//           },
//           (error) => {
//             setIsLoaded(true);
//             setError(error);
//           }
//         )
//         .then(result => console.log(result))
//     }, [])
  
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.product_name}>
//               {item.product_name} {item.brand_name} {item.price} 
//               {item.address.state} {item.address.city}
//               {item.discription} {item.date} {item.time} {item.image}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }

//   export default MyComponent;