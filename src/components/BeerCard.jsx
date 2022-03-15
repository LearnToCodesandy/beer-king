import { useState } from "react";
import Modal from "./Modal";

const BeerCard = ({ beerObj }) => {
  const [modalState, setModalState] = useState(false);
  const [modalId, setModalId] = useState("");

  const handleModal = (beer_Id) => {
    setModalId(beer_Id);
    setModalState(!modalState);
  };

  return (
    <div className="beer-item">
      <span className="count">{beerObj._id}</span>
      <div className="beer-item-header">
        <img className="beer-image" src={beerObj.image_url} alt="not found!" />
      </div>
      <div className="beer-item-body">
        <h1>{beerObj.name}</h1>
        <p>{beerObj.tagline}</p>
        <button className="beer-btn" onClick={() => handleModal(beerObj._id)}>
          Know Details
        </button>
      </div>
      {modalState ? <Modal beer_id={modalId} /> : ""}
    </div>
  );
};

export default BeerCard;
