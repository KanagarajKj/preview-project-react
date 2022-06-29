import React from 'react'
import Review from './components/Review'



const App = () => {
  return (
    <main className='review_contaniner'>
      <div className="review_title">
        <h2>My Review</h2>
        <div className="title_underline"></div>
      </div>
      <Review />
    </main>
  )
}

export default App
