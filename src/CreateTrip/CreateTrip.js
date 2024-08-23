import "./CreateTrip.css"
const CreateTrip = () => {
    return (
        <div className="containTrip">
            <img className="laptopShowTrip" src="/img/Vector3.png" />
            <img className="mobileShowTrip" src="/img/2bab8810-d984-4a3a-988b-0336f0509c10.webp" />
            <div className="overlayMobileTrip"></div>



            <div className="TripTxt">
                <div className="containTitle">
                    <div className="circle"></div> <h4 className="TripTitle"> سفرساز توربین</h4>
                </div>
                <p>پیشنهاد بهترین برنامه سفر با توجه به شرایط و ویژگی های شما</p>
                <div className="containInputTrip">
                    <div className="row">
                        <p className="titleInputTrip">مبدا</p><input className="inputTrip" placeholder="شهر مبدا را وارد کنید." />
                    </div>
                    <div className="row">
                        <p className="titleInputTrip">فاصله</p><input className="inputTrip" placeholder="فاصله زمانی حدودی را وارد کنید." />
                    </div>
                    <div className="row ">
                        <p className="titleInputTrip">نفرات</p><input className="inputTrip" placeholder="تعداد مسافران را وارد کنید." />
                    </div>
                    <div className="row ">
                        <p className="titleInputTrip"></p><input className="inputTrip inputTripHalf" placeholder="زیر 12 سال" /><input className="inputTrip inputTripHalf" placeholder="بالای 60 سال" />
                    </div>

                    <div className="row">
                        <p className="titleInputTrip">زمان</p><input className="inputTrip" placeholder="مدت زمان سفر را وارد کنید." />
                    </div>
                    <div className="row">
                        <p className="titleInputTrip">وسیله</p><input className="inputTrip" placeholder="وسیله سفر را وارد کنید." />
                    </div>
                    <div className="row">
                        <p className="titleInputTrip">سبک</p><input className="inputTrip" placeholder="سبک سفر را وارد کنید." />
                    </div>
                    <div className="row">
                        <p className="titleInputTrip">جهت</p><input className="inputTrip" placeholder="جهت سفر را وارد کنید." />
                    </div>

                    <div className="row">
                        <button className="searchBtn"> پیشنهاد بده </button>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default CreateTrip