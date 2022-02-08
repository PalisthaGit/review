import React, { useState } from 'react';
import data from './data';


const Review = () => {
    const [index, setIndex] = useState(3);
    const {id, name, job, image, text} = data[index];

    const checkNumber = (number) => {

        if(number < 0) {
            return data.length - 1;
        }

        if(number > data.length - 1) {
            return 0;
        }

        return number;

    }

    const prev = () => {
        setIndex(()=>{
            const prevIndex = index - 1;
            return checkNumber(prevIndex);
        });
    }

    const next = () => {
        setIndex(()=>{
            const nextIndex = index + 1;
            return checkNumber(nextIndex);
        });
    }

    // const random = () => {
    //     setIndex(()=>{
    //         let randomIndex = Math.floor(Math.random()*data.length);
          
    //         if(randomIndex === index) {
    //             randomIndex = index + 1;
                
    //         }
    //         console.log(randomIndex);
    //         return checkNumber(randomIndex);
    //     })
    // }

    const random = () => {
        let randomNumber = Math.floor(Math.random() * data.length);
        if (randomNumber === index) {
          randomNumber = index + 1;
        }
        console.log(randomNumber);
        setIndex(checkNumber(randomNumber));
      };
    

  return (
      <article className='review'>
          <div className='img-container'>
              <img src = {image} alt={name} className="person-img"/>
              <span className='quote-icon'>
                "
              </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className="button-container">
              <button onClick= {prev} className='prev-btn'> Prev </button>
              <button onClick={next} className='next-btn'>Next</button>
          </div>
          <button onClick = {random} className='random-btn'>suprise me</button>

      </article>
  );

};

export default Review;
