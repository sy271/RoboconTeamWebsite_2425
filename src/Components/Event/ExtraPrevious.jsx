import Activity2024 from '../../Components/Event/Activity2024'
import Activity2023 from '../../Components/Event/Activity2023'
import Activity2022 from '../../Components/Event/Activity2022'
import Activity2021 from '../../Components/Event/Activity2021'
import Activity2020 from '../../Components/Event/Activity2020'
import Activity2019 from '../../Components/Event/Activity2019'
import Activity2018 from '../../Components/Event/Activity2018'
import Activity2017 from '../../Components/Event/Activity2017'
import Activity2016 from '../../Components/Event/Activity2016'
import Activity2015 from '../../Components/Event/Activity2015'
import Activity2014 from '../../Components/Event/Activity2014'
import Activity2013 from '../../Components/Event/Activity2013'
import Activity2012 from '../../Components/Event/Activity2012'
import Activity2011 from '../../Components/Event/Activity2011'
import Activity2010 from '../../Components/Event/Activity2010'
import Activity2009 from '../../Components/Event/Activity2009'
import Activity2008 from '../../Components/Event/Activity2008'
import Activity2007 from '../../Components/Event/Activity2007'
import Activity2006 from '../../Components/Event/Activity2006'
import Activity2005 from '../../Components/Event/Activity2005'
import Activity2004 from '../../Components/Event/Activity2004'
import Activity2003 from '../../Components/Event/Activity2003'
import Activity2002 from '../../Components/Event/Activity2002'

import PreviousHeader from '../../Components/Event/previousHeader'


  import React, { useState, useRef } from 'react';
  import './previousHeader.css';
  import { Link } from 'react-router-dom';
  
  const ExtraPrevious = () => {
    const [selectedYear, setSelectedYear] = useState('All');
    const activitiesData = [
      {
        id: 0,
        year: "2024",
        status: "even",
        component: <Activity2024/>,
      },
      {
        id: 1,
        year: "2023",
        status: "odd",
        component: <Activity2023/> ,
      },
      {
        id: 2,
        year: "2022",
        status: "even",
        component: <Activity2022/>,
      },
      {
        id: 3,
        year: "2021",
        status: "odd",
        component: <Activity2021/>,
      },
      {
        id: 4,
        year: "2020",
        status: "even",
        component: <Activity2020/>,
      },
      {
        id: 5,
        year: "2019",
        status: "odd",
        component: <Activity2019/>,
      },
      {
        id: 6,
        year: "2018",
        status: "even",
        component: <Activity2018/>,
      },
      {
        id: 7,
        year: "2017",
        status: "odd",
        component: <Activity2017/>,
      },
      {
        id: 8,
        year: "2016",
        status: "even",
        component: <Activity2016/>,
      },
      {
        id: 9,
        year: "2015",
        status: "odd",
        component: <Activity2015/>,
      },
      {
        id: 10,
        year: "2014",
        status: "even",
        component: <Activity2014/>,
      },
      {
        id: 11,
        year: "2013",
        status: "odd",
        component: <Activity2013/>,
      },
      {
        id: 12,
        year: "2012",
        status: "even",
        component: <Activity2012/>,
      },
      {
        id: 13,
        year: "2011",
        status: "odd",
        component: <Activity2011/>,
      },
      {
        id: 14,
        year: "2010",
        status: "even",
        component: <Activity2010/>,
      },
      {
        id: 15,
        year: "2009",
        status: "odd",
        component: <Activity2009/>,
      },
      {
        id: 16,
        year: "2008",
        status: "even",
        component: <Activity2008/>,
      },
      {
        id: 17,
        year: "2007",
        status: "odd",
        component: <Activity2007/>,
      },
      {
        id: 18,
        year: "2006",
        status: "even",
        component: <Activity2006/>,
      },
      {
        id: 19,
        year: "2005",
        status: "odd",
        component: <Activity2005/>,
      },
      {
        id: 20,
        year: "2004",
        status: "even",
        component: <Activity2004/>,
      },
      {
        id: 21,
        year: "2003",
        status: "odd",
        component: <Activity2003/>,
      },
      {
        id: 22,
        year: "2002",
        status: "even",
        component: <Activity2002/>,
      },
    ];
    const yearSelectRef = useRef(null);

const filteredActivities = selectedYear === 'All'
? activitiesData
: activitiesData.filter(item => item.year === selectedYear);

const handleYearChange = (event) => {
  setSelectedYear(event.target.value);

  // Scroll to the yearSelect element
  yearSelectRef.current.scrollIntoView({ behavior: 'smooth' });
};

return (
<section id='Event' className='top'>
  <h5>What is our FUN</h5>
  <h2>Previous Event</h2>
  <div className="filter-container">
    <label htmlFor="yearSelect">Year you are interested:</label>
    <select
      id="yearSelect"
      ref={yearSelectRef} 
      value={selectedYear}
      onChange={handleYearChange}
      className="year-select"
    >
      <option value="All">All</option>
      <option value="2024">2024</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
      <option value="2009">2009</option>
      <option value="2008">2008</option>
      <option value="2007">2007</option>
      <option value="2006">2006</option>
      <option value="2005">2005</option>
      <option value="2004">2004</option>
      <option value="2003">2003</option>
      <option value="2002">2002</option>
    </select>
  </div>
  <div className="event-components">
    {filteredActivities.map((event) => (
      <div key={event.id}>{event.component}</div>
    ))}
  </div>
  <a href="#yearSelect" className="scroll_UP"> Scroll Up</a>
</section>
);
};

export default ExtraPrevious;