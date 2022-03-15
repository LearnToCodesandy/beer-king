import { useState, useEffect } from "react";

const Modal = ({ beer_id }) => {
  const [beerDescription, setBeerDescription] = useState("");
  const [beerName, setBeerName] = useState("");
  const [beerTips, setBeerTips] = useState("");

  const handleBeerData = (id) => {
    const data = JSON.parse(localStorage.getItem("beers"));
    setBeerDescription(data[id - 1].description);
    setBeerName(data[id - 1].name);
    setBeerTips(data[id - 1].brewers_tips);
  };

  useEffect(() => {
    handleBeerData(beer_id);
  }, []);

  return (
    <div className="modal">
      <div className="modal-header">
        <p className="modal-title">{beerName}</p>
      </div>
      <div className="modal-body">
        <p className="modal-beer-data">{beerDescription}</p>
        <p className="tips">Tip : {beerTips}</p>
      </div>
    </div>
  );
};

export default Modal;
