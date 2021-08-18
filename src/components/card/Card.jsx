import React,{useState,useEffect} from 'react'
import Img from '../../assets/poster.png'
import YT from '../../assets/yt.png'
import Adobe from '../../assets/acrobat.png'
import BookMark from '../../assets/bookmark.png'
import './Card.css'

const Card = ({daysLeft,youtube,questions,notes,title}) => {
    
    const [backGrnd,setBackGrnd] = useState(["alert__contaniner"])
    const [alert,setAlert] = useState("")

    useEffect(()=>{

        if(daysLeft<=3){
            setAlert(`Batch closes in ${daysLeft} days`)
        }else if(daysLeft<=10 && daysLeft>3){
            setAlert(`${daysLeft} days left to enroll`)
        }else{
            setAlert(`Starts in ${daysLeft} days`)
        }

       daysLeft<=3 && setBackGrnd(["alert__contaniner","green__background"])
    },[daysLeft])

    return (
        <div className="card__container">
            <img src={Img} alt="poster" />
            <div className={backGrnd.join(" ")}>
                <i className="far fa-clock"></i>
                <h3 className="alert__content">
                    {alert}
                </h3>
            </div>
            <h2 className="course__title">
                {title}
            </h2>
            <div className="line"></div>
            <div className="course__info">
                <div className="single__info">
                    <img src={YT} alt="bookmark" className="icon"/>
                    <p>{youtube}+ Live classes</p>
                </div>
                <div></div>
                <div className="single__info">
                    <img src={BookMark} alt="bookmark" className="icon"/>
                    <p>{questions}+ Questions</p>
                </div>
                <div className="single__info">
                    <img src={Adobe} alt="bookmark" className="icon"/>
                    <p>{notes}+ Notes</p>
                </div>
            </div>
        </div>
    )
}

export default Card
