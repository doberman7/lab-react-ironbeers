import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const beersinfo = [
    {
      name: 'Beers',
      description: 'qwliuehrlqiweurlqiwuhe',
      id: 1,
    },
    {
      name: 'Newbeer',
      description: 'qwliuehrlqiweurlqiwuhe',
      id: 2,
    },
    {
      name: 'RandomBeer',
      description: 'qwliuehrlqiweurlqiwuhe',
      id: 3,
    },
  ];
  return (
    <div>
      <h1 className="title">Beer Topics</h1>
      <ul>
        {beersinfo.map((beerElement) => (
          <li>
            <Link to={`/beerElement/${beerElement.name}`}>
              {beerElement.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
