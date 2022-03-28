import s from "./footer.module.scss"
import icon5 from "../../picture/bookingPage/icon5.svg"
import pay1 from "../../picture/bookingPage/pay1.svg"
import pay2 from "../../picture/bookingPage/pay2.svg"
import pay3 from "../../picture/bookingPage/pay3.svg"
import pay4 from "../../picture/bookingPage/pay4.svg"
let Footer = () => {
    return (
        <footer className={s.all}>
            <div className={s.footer}>
                <div className={s.wrapper_newsLetter}>
                    <h3>Newsletter</h3>
                    <input placeholder='Email Address'></input>
                    <img src={icon5} />
                    <div className={s.wrapper_newsLetter_line}></div>
                    <p>Sign up to our newsletter for special things and receive 10% off your next order.</p>
                    <p className={s.site_date}>© 2021 The Glass Huts</p>
                </div>
                <div className={s.wrapper_pay}>
                    <div>
                        <p>TERMS AND CONDITIONS</p>
                        <p>CENCELLATION POLICY</p>
                        <p>PRIVACY POLICY</p>
                    </div>
                    <div className={s.wrapper_pay_item}>
                        <img src={pay1} />
                        <img src={pay2} />
                        <img src={pay3} />
                        <img src={pay4} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;