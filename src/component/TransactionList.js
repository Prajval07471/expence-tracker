import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';




const TransactionList = () => {

  const context = useContext(GlobalContext);
  console.log(context);

  
  return (
    <>
    <h3>History</h3>
      <ul  className='list' > 
        <li className='minus' > 
            cash <span>-$400</span><button className='delete-btn'>X</button>
             </li>
      </ul>
    </>
  )
}

export default TransactionList
