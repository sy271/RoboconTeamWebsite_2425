import React from 'react';
import './previousHeader.css';
import { Link } from 'react-router-dom';

const PreviousHeader = ({ filteredYear, setFilteredYear }) => {
  const years = [
    'All',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
    '2005',
    '2004',
    '2003',
    '2002',
  ];

  const handleYearClick = (year) => {
    setFilteredYear(year);
  };

  return (
    <section className="previous">
      <div className="container previous-container">
        {years.map((year) => (
          <button
            key={year}
            className={year === filteredYear ? 'btn btn-primary btn-same2' : 'btn btn-same2'}
            onClick={() => handleYearClick(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PreviousHeader;
