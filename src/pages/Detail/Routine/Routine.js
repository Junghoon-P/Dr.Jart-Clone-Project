import React, { Component } from 'react';
import Card from '../../../components/Card/Card';
import './Routine.scss';

export default class Routine extends Component {
  render() {
    const { routineList, productName } = this.props;

    return (
      <div className="routineContainer">
        <h2>ROUTINE</h2>
        <div className="cardsWrapper">
          {routineList.map(card => {
            return (
              <div
                key={card.product_id}
                className={`
                  cardBox ${
                    productName === card.product_name ? ' currentProduct' : ''
                  }`}
              >
                <div
                  className={`currentItem ${
                    productName === card.product_name ? '' : 'hide'
                  }`}
                >
                  <span>CURRENT ITEM</span>
                </div>
                <Card
                  key={card.product_id}
                  id={card.product_id}
                  thumbnail={card.thumbnail_image}
                  hoverImg={card.hover_image}
                  price={card.option[0].price}
                  stock={card.stocks}
                  currentItem={card.current}
                  name={card.product_name}
                  option={card.option}
                  score={card.score}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
