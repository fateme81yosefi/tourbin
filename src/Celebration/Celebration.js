import "./Celebration.css"
const Celebration = () => {
    return (
        <div className="containCelebration">
            <img className="laptopShowCelebration" src="/img/vector 5.png" />
            <img className="mobileShowCelebration" src="/img/2bab8810-d984-4a3a-988b-0336f0509c10.webp" />
            <div className="overlayMobileCelebration"></div>



            <div className="CelebrationTxt">
                <div className="containTitle">
                    <div className="circle circleDark"></div> <h4 className="CelebrationTitle"> جشن‌ها و رویدادها</h4>
                </div>
                <p>آیین‌ها، جشن‌ها و رویدادهای قومیتی، تاریخی و ملی به تفکیک شهر و استان </p>
                <div className="containInputCelebration">
                    <div className="row">
                        <p className="titleInputCelebration">مناسبت</p><input className="inputfood" placeholder="نام مناسبت یا رویداد را بنویسید." /> <button className="continueBtn customSearch"> جستجو</button>
                    </div>

                    <div className="row">
                        <button className="searchBtn foodBtn">ورود به صفحه جشن‌ها و رویدادها </button>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Celebration