import React from "react"
import "../Rating/Rating.css"

interface RatingProps {
  index: number
  setSelection: (item: number | null) => void
  selection: number | null
}

const Rating = ({ index, setSelection, selection }: RatingProps) => {
  const isSelected = selection === index
  return (
    <div
      className={`rating-button ${isSelected ? "selected" : ""}`}
      onClick={() => setSelection(index)}
    >
      {index}
    </div>
  )
}

export default Rating
