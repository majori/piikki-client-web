// @flow
import React from 'react';
import * as moment from 'moment';

type LinkCardProps = {
  card: string;
  readAt: number | null;
  socket: boolean;
  username: string;
  createAlternativeLogin: (string, string) => void;
  clearCard: () => void;
  hideModal: () => void;
}

const LinkCard = (props: LinkCardProps) => {
  const linkCard = async () => {
    await props.createAlternativeLogin(props.username, props.card);
    props.clearCard();
    props.hideModal();
  };

  if (!props.socket) {
    return <span>Can not connect to reader</span>;
  }

  if (!props.card) {
    return <span>Insert card</span>;
  }

  return (
    <div>
      <h2>Card ID: {props.card}</h2>
      { props.readAt && (<span>Card read at: {moment(props.readAt).format('HH:mm:ss')}</span>)}
      <button className="btn" onClick={linkCard}>Link card</button>
    </div>
  );

};

export default LinkCard;
