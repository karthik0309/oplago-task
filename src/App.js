import React,{useRef} from 'react'
import Card from './components/card/Card'
import Carousel from './components/carousel/Carousel'
import Slider from 'react-slick'
import upcomingCourses from './json/info.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

const App = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1254,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let sliderRef = useRef()

  const handlePrev=()=>{
    sliderRef.slickPrev()
  }

  const handelNext=()=>{
    sliderRef.slickNext()
  }

  return (
      <>
        <Carousel handleNext={handelNext} handlePrev={handlePrev}/>
        <div className="carousel">
        <Slider {...settings} ref={c=>sliderRef=c}>
            {upcomingCourses.map((ele,index)=>(
              <Card
                daysLeft={ele.daysLeft}
                title={ele.title}
                youtube={ele.youtube}
                notes={ele.notes}
                questions={ele.questions}
                key={index}
              />
            ))}
        </Slider>
        </div>
      </>
  )
}

export default App
