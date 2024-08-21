import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="image-container">
                <img
                    src="/img/fb704e29-1bfb-4c4c-9c4d-803b864e88fd.png"
                    alt="Main Background"
                    className="responsive-image"
                />
                <img src="/img/Group1.png" alt="Centered Image" className="centered-image" />     
                           <div className="overlay"></div>

                <h1 className='titlePage'>پلتفرم جامع طبیعت گردی و سفر های کوتاه مدت
                    <br></br>بر پایه هوش مصنوعی</h1>


            </div>
            <div className='containIcons'>
                <div className='imageAndText'>
                    <img src='/img/location.png' />
                    <h3>مسیریاب توربین</h3>
                </div>
                <div className='imageAndText'>
                    <img src='/img/trip.png' />
                    <h3>سفرساز توربین</h3>
                </div>
                <div className='imageAndText'>
                    <img src='/img/event.png' />
                    <h3> جشن ها و رویداد ها</h3>
                </div>
                <div className='imageAndText'>
                    <img src='/img/locate.png' />
                    <h3>مکان های گردشگری</h3>
                </div>
                <div className='imageAndText'>
                    <img src='/img/food.png' />
                    <h3>سوغات و غذاها</h3>
                </div>
            </div>
        </>
    );
}

export default Home;
