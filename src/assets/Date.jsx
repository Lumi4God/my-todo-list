import React from 'react'
import "./DateTime.css";
import Moment from 'moment';
import { MdDateRange } from 'react-icons/md'

function App() {

  /* const formatDate = Moment().format('DD-MM-YYYY')  ANOTHER DATE FORMAT*/
  const formatDate = Moment().format("MMM Do YY");

  return (
    <div className='day'>
      <MdDateRange className='md'/> {formatDate}
    </div>
    
  );
}

export default App;