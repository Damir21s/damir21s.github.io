import { connect } from "react-redux";
import {
    changeDaysAC, changeCalcAC, showDescripAC, activateCouponAC,
    changeDecrementGuestAC, changeIncrementGuestAC, dateCheckInAC, dateCheckOuttAC
} from "../../redux/reducerBooking.ts";
import Booking from "./booking.tsx";

let mapStateToProps = (state) => {
    return {
        state: state.bookingPage,
        summ: state.bookingPage.summ,
        days: state.bookingPage.days,
        summDays: state.bookingPage.summDays,
        countGuest: state.bookingPage.countGuest,
        checkIn: state.bookingPage.checkIn, 
        checkOut: state.bookingPage.checkOut, 
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        toogleShowDescrip: (id, show) => {
            dispatch(showDescripAC(id, show))
        },
        changeCalc: (id, show, count) => {
            dispatch(changeCalcAC(id, show, count))
        },
        changeDays: (days, summ) => {
            dispatch(changeDaysAC(days, summ))
        },
        activateCoupon: () => {
            dispatch(activateCouponAC())
        },
        changeIncrementCountGuest: () => {
            dispatch(changeIncrementGuestAC())  
        },
        changeDecrementCountGuest: () => {
             dispatch(changeDecrementGuestAC())
        },
        dateCheckIn: (date) =>{
            dispatch(dateCheckInAC(date))
        },
        dateCheckOut: (date) =>{
            dispatch(dateCheckOuttAC(date))
        },

    }
}

let BookingContainer = connect(mapStateToProps, mapDispatchToProps)(Booking)
export default BookingContainer;