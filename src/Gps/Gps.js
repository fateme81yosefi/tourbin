import "./Gps.css"
const Gps = () => {
    return (
        <div className="containGps">
            <img className="laptopShow" src="/img/PineTools.com_image_2024-08-21_12-09-42.png" />
            <img className="mobileShow" src="/img/1887c221-9abe-4629-891d-45abbe7ea55c.webp" />
            <div className="overlayMobileGps"></div>



            <div className="gpsTxt">
                <div className="containTitleGps">
                    <div className="circle"></div> <h4 className="aboutTitle">مسیریاب توربین</h4>
                </div>
                <p>یافتن بهترین مسیر سفر و تخمین مدت زمان پیمایش با توربین
                </p>
                <div className="containInputs">
                    <div className="row">
                        <p>از</p><input className="inputGps" placeholder="شهر مبدا را وارد کنید."/>
                    </div>
                    <div className="row">
                        <p>به</p><input  className="inputGps" placeholder="شهر مقصد را وارد کنید."/>
                    </div>
                    <div className="row">
                        <button className="transparentBtn"><img className="svgAdd" src="/img/add.svg"/>افزودن مقصد</button>
                    </div>
                    <div className="row">
                        <button className="searchBtn"> جستجو مسیر</button>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Gps