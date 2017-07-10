// @flow
import React from 'react';

type CardsProps = {
  showModal: (string, any) => void;
}

const Cards = (props: CardsProps) => {
  const handleLinkCardButton = () => {
    props.showModal('LINK_CARD', {});
  };

  return (
    <div className="card">
      <div className="card-title">
        <h4>Cards</h4>
      </div>
      <div className="card-content">
        <div className="center-align">
          <button className="btn" onClick={handleLinkCardButton}>Link card</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
