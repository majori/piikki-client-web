// @flow
import React from 'react';

type CardProps = {
  title: string;
  biggerHeader: boolean;
  children: JSX.Element;
  className: string;
}

const Card = (props: CardProps) => {
  let header = null;
  let content = null;

  if (props.title) {
    header = (
      <div className="card-title">
        { props.biggerHeader && <h3>{props.title}</h3>}
        { !props.biggerHeader && <h5>{props.title}</h5>}
      </div>
    );
  }

  if (props.children) {
    content = (
      <div className="card-content">
        {props.children}
      </div>
    );
  }

  return (
    <div className={`card ${props.className}`}>
      {header}
      {content}
    </div>
  );
};

export default Card;
