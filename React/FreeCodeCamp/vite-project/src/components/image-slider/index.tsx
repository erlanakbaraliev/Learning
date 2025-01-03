import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

interface Props {
    url: string;
    limit: number;
    page: number;
}


function ImageSlider({url, limit, page}: Props) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState("")
    const [loading, setLoading] = useState(false)
    
    async function fetchImages(getUrl: string) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();    
        
            if(data) {
                setImages(data)
                setLoading(false)
            }
            
        } catch(e) {
            if (e instanceof Error) {
                setErrorMsg(e.message);
            } else {
                setErrorMsg("An unknown error occurred");
            }
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(url !== "") {
            fetchImages(url)                    
        }
    }, [url])
    
    if(loading) {
        return <div>Please wait, images are loading.</div>
    }
    if(errorMsg !== "") {
        return <div>errorMsg</div>
    }

    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left"/>
    </div>
}

export default ImageSlider