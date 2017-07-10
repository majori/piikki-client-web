// @flow
import React from 'react';

import Card from '../../../common/Card';

type CardLoginProps = {
  showModal: (string, any) => void;
}

const CardLogin = (props: CardLoginProps) => {
  const handleLinkCardButton = () => {
    props.showModal('LINK_CARD', {});
  };

  return (
    <Card title="Cards">
      <div className="center-align">
        <button className="btn" onClick={handleLinkCardButton}>Link card</button>
      </div>
    </Card>
  );
};

export default CardLogin;
