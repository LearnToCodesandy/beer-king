import { useEffect, useState } from "react";
import BeerCard from "./BeerCard";

const URL = "https://api.punkapi.com/v2/beers";

const Beers = () => {
  const [beers, setBeers] = useState([]);

  const getBeersData = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    let beerNames = data.map((beerobj) => {
      return {
        _id: beerobj.id,
        name: beerobj.name,
        tagline: beerobj.tagline,
        image_url: beerobj.image_url
      };
    });
    localStorage.setItem("beers", JSON.stringify(data));
    setBeers(beerNames);
  };

  useEffect(() => {
    getBeersData();
  }, []);

  return (
    <div className="beer-container">
      <h1>Beer Collection</h1>
      <p>We are famouse for beere!</p>
      <div className="beer-collection-container">
        {beers.map((beerObj) => (
          <BeerCard beerObj={beerObj} key={beerObj._id} />
        ))}
      </div>
    </div>
  );
};

export default Beers;
