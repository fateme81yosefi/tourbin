import "./About.css"
const About = () => {
    return (
        <div className="containAbout">
            <img className="laptopShow" src="/img/about.png" />
            <img className="mobileShow" src="/img/708ba882-420b-42b9-8817-3bcd4e134ddb.webp" />
            <div className="overlayMobileAbout"></div>



            <div className="aboutTxt">
                <div className="containTitle">
                    <div className="circle"></div> <h4 className="aboutTitle">درباره توربین</h4>
                </div>
                <p>توربین یک پلتفرم جامع برای طبیعت گردی و سفر های کوتاه مدت بر پایه هوش مصنوعی است.
                    .به کمک هوش مصنوعی توربین شما میتوانید با توجه به شرایط و علایق شخصی، بهترین گزینه های برنامه سفر را با جزییات کامل دریافت کنید.
                    <br></br>علاوه بر این ...</p>
                <div className="containBtn">
                    <button className="continueBtn">ادامه...</button>
                </div>

            </div>
        </div>
    )

}
export default About