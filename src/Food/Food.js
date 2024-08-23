import "./Food.css"
const Food = () => {
    return (
        <div className="containfood">
            <img className="laptopShowFood" src="/img/foodImage.png" />
            <img className="mobileShowFood" src="/img/4578c692-b2f8-42cf-85b9-aabf4f972608.webp" />
            <div className="overlayMobilefood"></div>



            <div className="foodTxt">
                <div className="containTitlefood">
                    <div className="circle circleDark"></div> <h4 className="aboutTitle"> سوغات و غذاها</h4>
                </div>
                <p>سوغات، نوشیدنی‌ها و غذاهای محلی شهرها و قومیت‌های مختلف ایران به همراه دستور طبخ آنها</p>
                <div className="containInputs">
                    <div className="row">
                        <p  className="titleInputfood">نام غذا</p><input className="inputfood" placeholder="نام غذا را وارد کنید." />
                    </div>
                    <div className="row">
                        <p  className="titleInputfood">نام شهر</p><input className="inputfood" placeholder="نام شهر را وارد کنید." />
                    </div>
                    <div className="row">
                        <button className="searchBtn marginTop10"> جستجو</button>
                    </div>
                 
                    <div className="row">
                        <button className="searchBtn marginTop10 foodBtn">صفحه سوغات و غذاها</button>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Food