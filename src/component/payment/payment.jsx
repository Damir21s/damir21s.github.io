import React, { useState } from "react"
import s from "./payment.module.scss"
import icon1 from "../../picture/paymentPage/icon1.svg"
import icon2 from "../../picture/paymentPage/icon2.svg"
import icon3 from "../../picture/paymentPage/icon3.svg"
import icon1but from "../../picture/bookingPage/icon1.svg"
import pay1 from "../../picture/paymentPage/pay1.svg"
import pay2 from "../../picture/paymentPage/pay2.svg"
import pay3 from "../../picture/paymentPage/pay3.svg"
import pay4 from "../../picture/paymentPage/pay4.svg"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { Formik } from "formik"
import * as yup from "yup"
import Dropdown from "./dropDown/dropDown.jsx"
let Payment = () => {
    let state = useSelector(state => state.bookingPage)
    const [selectedCountry, setSelectedCountry] = useState("Сhoose a country");
    const [buttonAccept, setButtonAccept] = useState(false)
    const validationsSchema = yup.object().shape({
        firstName: yup.string().matches(/^[A-Za-z\s]{1,}$/, 'Incorrect firstname'),
        email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Incorrect email'),
        address: yup.string().matches(/^[a-zA-Z0-9\s,.'-]{3,}$/, 'Incorrect address. At least 3 characters'),
        city: yup.string().matches(/^[A-Za-z\s-]{1,}$/, 'Incorrect city'),
        lastName: yup.string().matches(/^[A-Z,a-z\s]{1,}$/, 'Incorrect lastname'),
        phoneNumber: yup.string().matches(/^[0-9]{1,}$/, 'Incorrect phone number. Only numbers'),
        postalCode: yup.string().matches(/^[0-9]{5}$/, 'Incorrect postal code, must be 5 characters'),
        cardNumber: yup.string().matches(/^[0-9]{16}$/, 'Incorrect card number, must be 16 characters'),
        expiration: yup.string().matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Incorrect expiration. Format: mm/yy'),
        zipCode: yup.string().matches(/^[0-9]{5}$/, 'Incorrect zipCode, must be 5 characters'),
        cvv: yup.string().matches(/^[0-9]{3}$/, 'Incorrect cvv, must be 3 characters'),
    })
    return (
        <main className={s.all}>
            <div className={s.wrapper}>
                <Formik
                    initialValues={{
                        firstName: '', email: '', address: '', city: '',
                        lastName: '', phoneNumber: '', postalCode: '', cardNumber: '',
                        expiration: '', zipCode: '', cvv: ''
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }}
                    validationSchema={validationsSchema}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (<form onSubmit={handleSubmit}>
                        <div className={s.back_page}>
                            <p><NavLink to="/booking"><img alt="img" src={icon1} /></NavLink></p>
                            <p>Confirm and Pay</p>
                        </div>
                        <section className={s.wrapper_information}>
                            <div className={s.information}>
                                <h2>Personal Information</h2>
                                <div className={s.line}></div>
                                <div className={s.wrapper_inputs}>
                                    <div className={s.inputs_left}>
                                        <div className={s.wrapper_input}>
                                            <input name="firstName" onChange={handleChange} onBlur={handleBlur}
                                                value={values.firstName} placeholder="First Name">
                                            </input>
                                        </div>
                                        <div className={s.errors}>{errors.firstName && touched.firstName && errors.firstName}</div>
                                        <div className={s.wrapper_input}>
                                            <input name="email" onChange={handleChange} onBlur={handleBlur}
                                                value={values.email} placeholder="Email">
                                            </input>
                                        </div>
                                        <div className={s.errors}>{errors.email && touched.email && errors.email}</div>
                                        <div className={s.wrapper_input}>
                                            <input name="address" onChange={handleChange} onBlur={handleBlur}
                                                value={values.address} placeholder="Address"></input>
                                        </div>
                                        <div className={s.errors}>{errors.address && touched.address && errors.address}</div>
                                        <div className={s.wrapper_input}>
                                            <input name="city" onChange={handleChange} onBlur={handleBlur}
                                                value={values.city} placeholder="City"></input>
                                        </div>
                                        <div className={s.errors}>{errors.city && touched.city && errors.city}</div>
                                    </div>
                                    <div className={s.inputs_right}>
                                        <div className={s.wrapper_input}>
                                            <input name="lastName" onChange={handleChange} onBlur={handleBlur}
                                                value={values.lastName} placeholder="Last Name"></input>
                                        </div>
                                        <div className={s.errors}>{errors.lastName && touched.lastName && errors.lastName}</div>
                                        <div className={s.wrapper_input}>
                                            <div className={s.phone_country}><img alt="img" src={icon2} /></div>
                                            <input name="phoneNumber" onChange={handleChange} onBlur={handleBlur}
                                                value={values.phoneNumber} placeholder="Phone number"></input>
                                        </div>
                                        <div className={s.errors}>{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</div>
                                        <div className={s.wrapper_input}>
                                            <input name="postalCode" onChange={handleChange} onBlur={handleBlur}
                                                value={values.postalCode} placeholder="Postal code"></input>
                                        </div>
                                        <div className={s.errors}>{errors.postalCode && touched.postalCode && errors.postalCode}</div>
                                        <div className={s.wrapper_input}>
                                            <div>
                                                <Dropdown selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.calculator_wrap}>
                                <div className={s.service_price}>The Glass Hut</div>
                                <div className={s.table}>
                                    <div className={s.cell}><span>Check in</span><div>{state.checkIn}</div></div>
                                    <div className={s.line}></div>
                                    <div className={s.cell}><span>Check out</span><div>{state.checkOut}</div></div>
                                    <div className={s.line}></div>
                                    <div className={s.cell}>Guests<div className={s.guest}>{state.countGuest}</div></div>
                                </div>
                                <div className={s.calculator_account}>
                                    <div>
                                        <p>3.200kr x {state.days} nights</p>
                                        {state.item1.changeCalc && <p>Fresh Breakfast for one </p>}
                                        {state.item2.changeCalc && <p>Fresh Breakfast for two </p>}
                                        {state.item3.changeCalc && <p>Classic Dinner for one </p>}
                                        {state.item4.changeCalc && <p>Classic Dinner for two </p>}
                                        {state.item5.changeCalc && <p>Electric Car Charge</p>}
                                        {state.coupon && <p className={s.style1}>10% discount</p>}
                                        <div className={s.line}></div>
                                        <p className={s.style2}>Total</p>
                                    </div>
                                    <div className={s.calculator_account_value}>
                                        <p>{state.summDays}</p>
                                        {state.item1.changeCalc && <p>400kr</p>}
                                        {state.item2.changeCalc && <p>500kr</p>}
                                        {state.item3.changeCalc && <p>600kr</p>}
                                        {state.item4.changeCalc && <p>800kr</p>}
                                        {state.item5.changeCalc && <p>800kr</p>}
                                        {state.coupon && <p className={s.style1}>-200kr</p>}
                                        <div className={s.line}></div>
                                        <p className={s.style2}>{state.summ + state.summDays}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={s.information}>
                            <div className={s.wrapper_pay_item}>
                                <div><img alt="img" src={pay1} /></div>
                                <div><img alt="img" src={pay2} /></div>
                                <div><img alt="img" src={pay3} /></div>
                                <div><img alt="img" src={pay4} /></div>
                            </div>
                            <h2>Pay with</h2>
                            <div className={s.line}></div>
                            <div className={s.wrapper_inputs__pay}>
                                <div className={s.wrapper_input}>
                                    <input name="cardNumber" onChange={handleChange} onBlur={handleBlur}
                                        value={values.cardNumber} placeholder="Card number"></input>
                                </div>
                                <div className={s.errors}>{errors.cardNumber && touched.cardNumber && errors.cardNumber}</div>
                                <div className={s.wrapper_inputs__flex}>
                                    <div className={s.inputs_left}>
                                        <div className={s.wrapper_input_left}>
                                            <input name="expiration" onChange={handleChange} onBlur={handleBlur}
                                                value={values.expiration} placeholder="Expiration"></input>
                                        </div>
                                        <div className={s.errors}>{errors.expiration && touched.expiration && errors.expiration}</div>
                                        <div className={s.wrapper_input}>
                                            <input name="zipCode" onChange={handleChange} onBlur={handleBlur}
                                                value={values.zipCode} placeholder="ZIP code "></input>
                                        </div>
                                        <div className={s.errors}>{errors.zipCode && touched.zipCode && errors.zipCode}</div>
                                    </div>
                                    <div className={s.inputs_right}>
                                        <div className={s.wrapper_input_right}>
                                            <input name="cvv" onChange={handleChange} onBlur={handleBlur}
                                                value={values.cvv} placeholder="CCV"></input>
                                        </div>
                                        <div className={s.errors}>{errors.cvv && touched.cvv && errors.cvv}</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={s.information}>
                            <h2>Additional Information</h2>
                            <div className={s.wrapper_input_add_inform}><input placeholder="Leave a message"></input></div>
                            <div className={s.wrapper_accept_an_agreement}>
                                <img onClick={() => { setButtonAccept(!buttonAccept) }}
                                    src={!buttonAccept ? icon1but : icon3}></img>
                                <p>I have read and accepts<span><NavLink to="#">Terms and Conditions</NavLink></span></p>
                            </div>
                            <button className={s.button_confirm_and_pay} type="submit" onClick={handleSubmit}
                                disabled={errors.firstName || errors.email || errors.address || errors.city ||
                                    errors.lastName || errors.phoneNumber || errors.postalCode || errors.cardNumber ||
                                    errors.expiration || errors.zipCode || errors.cvv || values.firstName === '' ||
                                    values.address === '' || values.city === '' || values.lastName === '' ||
                                    values.phoneNumber === '' || values.postalCode === '' || values.cardNumber === '' ||
                                    values.expiration === '' || values.zipCode === '' || values.cvv === '' || values.email === '' ||
                                    !buttonAccept ? !isSubmitting : isSubmitting}>
                                <NavLink to="#">Confirm and pay</NavLink>
                            </button>
                        </section>
                    </form>)}
                </Formik>
            </div>
        </main>
    )
}

export default Payment;