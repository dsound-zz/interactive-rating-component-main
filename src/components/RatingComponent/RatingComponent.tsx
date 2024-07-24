import React, { useState } from "react"
import "./RatingComponent.css"
import iconStar from "../../assets/images/icon-star.svg"
import Rating from "../Rating/Rating"

const RatingComponent = () => {
  const [selection, setSelection] = useState<number | null>(null)
  console.log(selection)
  return (
    <div className='container'>
      <div className='image-background'>
        <img src={iconStar} alt='icon star' />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support <br /> request. All
        feedback is appreciated to help us <br /> imporve our offering!
      </p>
      <div className='rating-row'>
        {new Array(5).fill(0).map((_, index) => (
          <Rating
            index={index + 1}
            setSelection={setSelection}
            selection={selection}
            key={index + 1}
          />
        ))}
      </div>
    </div>
  )
}

export default RatingComponent
