import City from './filterBox/city';
import Product from './filterBox/product';
import State from './filterBox/state';
import { useEffect, useState } from "react";

export default function FilterBox() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("https://assessment-edvora.herokuapp.com")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )

    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        const nameElement = items.map(item => {
            return item.product_name;
        })
        const stateElement = items.map(item => {
            return item.address.state;
        })
        const cityElement = items.map(item => {
            return item.address.city;
        })

      return (
        <div>
            <p className="filterbox">Filters</p>
            <hr className="filterLine"></hr>
            <div className="box">
                <Product product_name={nameElement} />
                <State state={stateElement}v/>
                <City city={cityElement} />
            </div>
        </div>
      );
    }
}