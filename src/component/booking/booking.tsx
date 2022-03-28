import React from "react";
import "./booking.scss"
import intro1 from "../../picture/bookingPage/intro1.svg"
import icon1 from "../../picture/bookingPage/icon1.svg"
import icon2 from "../../picture/bookingPage/icon2.svg"
import icon3 from "../../picture/bookingPage/icon3.svg"
import icon4 from "../../picture/bookingPage/icon4.svg"
import minus from "../../picture/bookingPage/minus.svg"
import plus from "../../picture/bookingPage/plus.svg"
import { NavLink } from "react-router-dom";
type propsType = {
    summ: number,
    days: number,
    summDays: number,
    countGuest: number,
    toogleShowDescrip: (id: number, show: boolean) => void,
    changeCalc: (id: number, show: boolean, count: number) => void,
    changeDays: (id: number, summ: number) => void,
    activateCoupon: () => void,
    changeIncrementCountGuest: () => void,
    changeDecrementCountGuest: () => void,
    dateCheckIn: (date: any) => void,
    dateCheckOut: (date: any) => void,
    state: { item1, item2, item3, item4, item5, coupon }
}
let Booking: React.FC<propsType> = ({
    state, summ, days, summDays, countGuest, toogleShowDescrip, changeCalc, changeDays,
    activateCoupon, changeIncrementCountGuest, changeDecrementCountGuest, dateCheckIn, dateCheckOut }) => {
    let refDateStart: React.RefObject<HTMLInputElement> = React.createRef();
    let refDateEnd: React.RefObject<HTMLInputElement> = React.createRef();
    let refCoupon: React.RefObject<HTMLInputElement> = React.createRef();
    let showDescripItem = (id, show) => {
        toogleShowDescrip(id, show)
    }
    let onChageCount = (id, show) => {
        let count: number = 0;
        switch (id) {
            case 1: count = 400; break;
            case 2: count = 500; break;
            case 3: count = 600; break;
            case 4: count = 800; break;
            case 5: count = 800; break;
        }
        changeCalc(id, show, count);
    }
    let dateShow = () => {
        let dateStart: string | number = ((refDateStart.current) as HTMLInputElement).value;
        dateCheckIn(dateStart);
        let dateEnd: string | number = ((refDateEnd.current) as HTMLInputElement).value;
        dateCheckOut(dateEnd);
        if ((dateStart && dateEnd) !== '') {
            dateStart = Date.parse(dateStart);
            dateEnd = Date.parse(dateEnd);
            let days: number = 0;
            for (let i = dateStart; i < dateEnd; i = i + 24 * 60 * 60 * 1000) {
                days++;
            }
            if (dateEnd > dateStart) { changeDays(days, summ) };
        }
    }
    let onChangeICountGuest = () => {
        changeIncrementCountGuest();
    }
    let onChangeDCountGuest = () => {
        changeDecrementCountGuest();
    }
    let onActivateCoupon = () => {
        let couponCode: string = ((refCoupon.current) as HTMLInputElement).value;
        if (couponCode === "code" && state.coupon === false) {
            activateCoupon();
        }
    }
    return (
        <main className="all">
            <section><img alt="img" src={intro1} /></section>
            <section className="wrapper">
                <div className="additional_sevices">
                    <div className="additional_sevices__header">Choose Additional Services</div>
                    <div className="line"/>
                    <div className="additional_sevice">
                        <img alt="img" onClick={() => { onChageCount(1, state.item1.changeCalc) }}
                            className="additional_sevice__icon" src={(!state.item1.changeCalc) ? icon1 : icon2} />
                        <div className="additional_sevice__wrap">
                            <p className="additional_sevice__title">Fresh Breakfast for one</p>
                            <p className="additional_sevice__price">400kr</p>
                        </div>
                        <img alt="img" onClick={() => { showDescripItem(1, state.item1.showDescrip) }}
                            className="additional_sevice__icon3" src={(state.item1.showDescrip) ? icon4 : icon3} />
                    </div>
                    {state.item1.showDescrip &&
                        <div className='additional_sevice__descrip'>
                            <h3>Classic Breakfast</h3>
                            <p>Bread, Coffee, milk, juice, and a selection of spreads + toppings for one.</p>
                        </div>}
                    <div className="additional_sevice">
                        <img alt="img" onClick={() => { onChageCount(2, state.item2.changeCalc) }}
                            className="additional_sevice__icon" src={(!state.item2.changeCalc) ? icon1 : icon2} />
                        <div className="additional_sevice__wrap">
                            <p className="additional_sevice__title">Fresh Breakfast for two</p>
                            <p className="additional_sevice__price">500kr</p>
                        </div>
                        <img alt="img" onClick={() => { showDescripItem(2, state.item2.showDescrip) }}
                            className="additional_sevice__icon3" src={(state.item2.showDescrip) ? icon4 : icon3} />
                    </div>
                    {state.item2.showDescrip &&
                        <div className='additional_sevice__descrip'>
                            <h3>Classic Breakfast</h3>
                            <p>Bread, Coffee, milk, juice, and a selection of spreads + toppings for two.</p>
                        </div>}
                    <div className="additional_sevice">
                        <img alt="img" onClick={() => { onChageCount(3, state.item3.changeCalc) }}
                            className="additional_sevice__icon" src={(!state.item3.changeCalc) ? icon1 : icon2} />
                        <div className="additional_sevice__wrap">
                            <p className="additional_sevice__title">Classic Dinner for one</p>
                            <p className="additional_sevice__price">600kr</p>
                        </div>
                        <img alt="img" onClick={() => { showDescripItem(3, state.item3.showDescrip) }}
                            className="additional_sevice__icon3" src={(state.item3.showDescrip) ? icon4 : icon3} />
                    </div>
                    {state.item3.showDescrip &&
                        <div className="additional_sevice__descrip">
                            <h3>Classic Dinner</h3>
                            <p>Classic Dinner for one</p>
                        </div>}
                    <div className="additional_sevice">
                        <img alt="img" onClick={() => { onChageCount(4, state.item4.changeCalc) }}
                            className="additional_sevice__icon" src={(!state.item4.changeCalc) ? icon1 : icon2} />
                        <div className="additional_sevice__wrap">
                            <p className="additional_sevice__title">Classic Dinner for two</p>
                            <p className="additional_sevice__price">800kr</p>
                        </div>
                        <img alt="img" onClick={() => { showDescripItem(4, state.item4.showDescrip) }}
                            className="additional_sevice__icon3" src={(state.item4.showDescrip) ? icon4 : icon3} />
                    </div>
                    {state.item4.showDescrip &&
                        <div className='additional_sevice__descrip'>
                            <h3>Classic Dinner</h3>
                            <p>Classic Dinner for two</p>
                        </div>}
                    <div className="additional_sevice">
                        <img alt="img" onClick={() => { onChageCount(5, state.item5.changeCalc) }}
                            className="additional_sevice__icon" src={(!state.item5.changeCalc) ? icon1 : icon2} />
                        <div className="additional_sevice__wrap">
                            <p className="additional_sevice__title">Electric Car Charge</p>
                            <p className="additional_sevice__price">800kr</p>
                        </div>
                        <img alt="img" onClick={() => { showDescripItem(5, state.item5.showDescrip) }}
                            className="additional_sevice__icon3" src={(state.item5.showDescrip) ? icon4 : icon3} />
                    </div>
                    {state.item5.showDescrip &&
                        <div className='additional_sevice__descrip'>
                            <h3>Electric Car Charge</h3>
                            <p>Electric Car Charge</p>
                        </div>}
                    <div className="wrapper_descrip_service">
                        <h3>Hut rules</h3>
                        <div className="line"></div>
                        <p>Check-in:  2:00 PM - 11:00 PM</p>
                        <p>Checkout: 11:00 AM</p>
                        <p>Not suitable for children and infants</p>
                        <p>No smoking</p>
                        <p>No pets</p>
                    </div>
                    <div className="wrapper_descrip_service">
                        <h3>Cancellation policy</h3>
                        <div className="line"></div>
                        <p>Free cancellation until 1:00 PM on Mar 27<br />
                            After that, cancel before 2:00 PM on Apr 1 and get a 50% refund,
                            minus the first night and service fee.</p>
                        <p>You need to hike a steep hill to arrive at the treehouses, it takes approx
                            20-30 minutes on a trail with stairs and uneven ground.</p>
                    </div>
                    <div className="wrapper_descrip_service">
                        <h3>Important Information</h3>
                        <div className="line"></div>
                        <p>You need to hike a steep hill to arrive at the treehouses, it takes approx
                            20-30 minutes on a trail with stairs and uneven ground.</p>
                    </div>
                    <div className="button_read_faq"><NavLink to="/aboutus">About Us</NavLink></div>
                </div>
                <div className="calculator_wrap">
                    <div className="service_price">3200kr<span>/ night</span></div>
                    <div className="table">
                        <div className="cell">Check in<div><input onChange={dateShow} ref={refDateStart} type="date" /></div></div>
                        <div className="line"></div>
                        <div className="cell">Check out<div><input onChange={dateShow} ref={refDateEnd} type="date" /></div></div>
                        <div className="line"></div>
                        <div className="cell"><span>Guests</span>
                            <div className="guests">
                                <div><img alt="img" onClick={onChangeDCountGuest} src={minus} /></div>
                                <div>{countGuest}</div>
                                <div><img alt="img" onClick={onChangeICountGuest} src={plus} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="button_book"><NavLink to="/payment">Book</NavLink></div>
                    <div className="calculator_account">
                        <div>
                            <p>3.200kr x {days} nights</p>
                            {state.item1.changeCalc && <p>Fresh Breakfast for one </p>}
                            {state.item2.changeCalc && <p>Fresh Breakfast for two </p>}
                            {state.item3.changeCalc && <p>Classic Dinner for one </p>}
                            {state.item4.changeCalc && <p>Classic Dinner for two </p>}
                            {state.item5.changeCalc && <p>Electric Car Charge</p>}
                            {state.coupon && <p className="style1">10% discount</p>}
                            <div className="line"></div>
                            <p className="style2">Total</p>
                        </div>
                        <div className="calculator_account_value">
                            <p>{summDays}</p>
                            {state.item1.changeCalc && <p>400kr</p>}
                            {state.item2.changeCalc && <p>500kr</p>}
                            {state.item3.changeCalc && <p>600kr</p>}
                            {state.item4.changeCalc && <p>800kr</p>}
                            {state.item5.changeCalc && <p>800kr</p>}
                            {state.coupon && <p className="style1">-200kr</p>}
                            <div className="line"></div>
                            <p className="style2">{summ + summDays}</p>
                        </div>
                    </div>
                    <div className="coupon_wrap">
                        <input className="coupon_input" placeholder="Coupon Code" ref={refCoupon}></input>
                        <button onClick={onActivateCoupon} className="coupon_button">Apply</button>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Booking;