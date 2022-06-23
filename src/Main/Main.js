import React, { useEffect, useState } from 'react';
import { categories, cards } from '../utils';
import Select from 'react-select';
import Card from '../Card/Card';
import './Main.css';

const Main = () => {
  const [category, setCategory] = useState({
    value: 'show_all',
    label: 'Show All',
  });

  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    cards.map((item) => {
      localStorage.setItem(item.title.toLocaleLowerCase(), JSON.stringify(item));
    });

    const items = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)));
    setSavedCards(items);
  }, []);

  return (
    <div className="main">
      <Select
        className="dropdown onlyForMobile"
        defaultValue={{
          value: 'show_all',
          label: 'Show All',
        }}
        onChange={setCategory}
        options={categories}
      />
      <nav className="navigation onlyForDesktop">
        {categories.map((item) => (
          <div className="navigation__category" onClick={() => setCategory(item)}>
            {item.label}
          </div>
        ))}
      </nav>
      <div className="cards-grid">
        {category.label === 'Show All'
          ? savedCards.map((card) => <Card title={card.title} category={card.category} img={card.img} />)
          : savedCards
              .filter((savedCard) => savedCard.category.toLocaleLowerCase() === category.label.toLocaleLowerCase())
              .map((filteredCard) => {
                console.log(filteredCard);
                return <Card title={filteredCard.title} category={filteredCard.category} img={filteredCard.img} />;
              })}
      </div>
    </div>
  );
};

export default Main;
