import { FaStar } from "react-icons/fa"
import { useState } from "react"
import './styles.css'

interface StarRatingProps {
    noOfStars?: number
}

function StarRating({noOfStars=5}: StarRatingProps) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(index:number) {
        setRating(index)
    }
    function handleMouseEnter(index:number) {
        setHover(index)
    }
    function handleMouseLeave() {
        setHover(rating)
    }

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_, index)=> {
                index += 1
                return <FaStar
                    className={index <= (rating | hover)? 'active': 'inactive'}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    key={index}
                    size={40}
                />
            })
        }
    </div>
}

export default StarRating