
let TOOGLE_SHOW_DESCRIP = "TOOGLE-SHOW-DESCRIP";
type TOOGLE_SHOW_DESCRIP_AType = {
    type: typeof TOOGLE_SHOW_DESCRIP,
    newId: number,
    newShow: boolean
}
let CHANGE_CALC = "CHANGE-CALC";
type TOOGLE_SHOWC_CALC_AType = {
    type: typeof CHANGE_CALC,
    newId: number,
    newShow: boolean,
    newCount: number

}
let CHANGE_NUMBER_DAYS = "CHANGE-NUMBER-DAYS";
type CHANGE_NUMBER_DAYS_AType = {
    type: typeof CHANGE_NUMBER_DAYS,
    newDays: number,
    newSumm: number
}

let CHANGE_ACTIVATE_COUPON = "CHANGE-ACTIVATE-COUPON";
type CHANGE_ACTIVATE_COUPON_Atype = {
    type: typeof CHANGE_ACTIVATE_COUPON
}

let CHANGE_INCREMENT_GUEST = "CHANGE-INCREMENT-GUEST";
type CHANGE_INCREMENT_GUEST_Atype = {
    type: typeof CHANGE_INCREMENT_GUEST
}

let CHANGE_DECREMENT_GUEST = "CHANGE-DECREMENT-GUEST";
type CHANGE_DECREMENT_GUEST_Atype = {
    type: typeof CHANGE_DECREMENT_GUEST
}

let DATE_CHECK_OUT = "DATE-CHECK-OUT";
type DATE_CHECK_OUT_Atype = {
    type: typeof DATE_CHECK_OUT,
    newCheckOut: any
}

let DATE_CHECK_IN = "DATE-CHECK-IN";
type DATE_CHECK_IN_Atype = {
    type: typeof DATE_CHECK_IN,
    newCheckIn: any
}

type initialStateItemType = {
    showDescrip: boolean,
    changeCalc: boolean
}
type initialStateAType = {
    item1: initialStateItemType,
    item2: initialStateItemType,
    item3: initialStateItemType,
    item4: initialStateItemType,
    item5: initialStateItemType,
    summ: number,
    days: number,
    summDays: number,
    coupon: boolean,
    countGuest: number,
    checkIn: string,
    checkOut: string
}
let initialState: initialStateAType = {
    item1: { showDescrip: false, changeCalc: false },
    item2: { showDescrip: false, changeCalc: false },
    item3: { showDescrip: false, changeCalc: false },
    item4: { showDescrip: false, changeCalc: false },
    item5: { showDescrip: false, changeCalc: false },
    summ: 0,
    days: 1,
    summDays: 3200,
    coupon: false,
    countGuest: 1,
    checkIn: null,
    checkOut: null,
}
const bookingPageReducer = (state = initialState, action: any): initialStateAType => {
    debugger;
    switch (action.type) {
        case TOOGLE_SHOW_DESCRIP: {
            switch (action.newId) {
                case 1: {
                    if (action.newShow) {
                        let stateCopy = { ...state };
                        stateCopy.item1 = { ...state.item1 };
                        stateCopy.item1.showDescrip = false;
                        return stateCopy;
                    }
                    else {
                        let stateCopy = { ...state };
                        stateCopy.item1 = { ...state.item1 };
                        stateCopy.item1.showDescrip = true;
                        return stateCopy;
                    }
                };
                case 2: {
                    if (action.newShow) {
                        let stateCopy = { ...state };
                        stateCopy.item2 = { ...state.item2 };
                        stateCopy.item2.showDescrip = false;
                        return stateCopy;
                    }
                    else {
                        let stateCopy = { ...state };
                        stateCopy.item2 = { ...state.item2 };
                        stateCopy.item2.showDescrip = true;
                        return stateCopy;
                    }
                }
                case 3: {
                    if (action.newShow) {
                        let stateCopy = { ...state };
                        stateCopy.item3 = { ...state.item3 };
                        stateCopy.item3.showDescrip = false;
                        return stateCopy;
                    }
                    else {
                        let stateCopy = { ...state };
                        stateCopy.item3 = { ...state.item3 };
                        stateCopy.item3.showDescrip = true;
                        return stateCopy;
                    }
                }
                case 4: {
                    if (action.newShow) {
                        let stateCopy = { ...state };
                        stateCopy.item4 = { ...state.item4 };
                        stateCopy.item4.showDescrip = false;
                        return stateCopy;
                    }
                    else {
                        let stateCopy = { ...state };
                        stateCopy.item4 = { ...state.item4 };
                        stateCopy.item4.showDescrip = true;
                        return stateCopy;
                    }
                }
                case 5: {
                    if (action.newShow) {
                        let stateCopy = { ...state };
                        stateCopy.item5 = { ...state.item5 };
                        stateCopy.item5.showDescrip = false;
                        return stateCopy;
                    }
                    else {
                        let stateCopy = { ...state };
                        stateCopy.item5 = { ...state.item5 };
                        stateCopy.item5.showDescrip = true;
                        return stateCopy;
                    }
                }
            }
        }
        case CHANGE_CALC: {
            switch (action.newId) {
                case 1: {
                    if (action.newShow) {
                        let stateCopy = { ...state };
                        stateCopy.item1 = { ...state.item1 };
                        stateCopy.item1.changeCalc = false;
                        stateCopy.summ = stateCopy.summ - action.newCount;
                        return stateCopy;
                    }
                    else {
                        let stateCopy = { ...state };
                        stateCopy.item1 = { ...state.item1 };
                        stateCopy.item2 = { ...state.item2 };
                        if (stateCopy.item2.changeCalc) {
                            stateCopy.item2.changeCalc = false;
                            stateCopy.summ = stateCopy.summ - 500;
                        }
                        stateCopy.item1.changeCalc = true;
                        stateCopy.summ = stateCopy.summ + action.newCount;
                        return stateCopy;
                    }
                }
                case 2: {
                    if (action.newShow) {
                        let stateCopy = { ...state };
                        stateCopy.item2 = { ...state.item2 };
                        stateCopy.item2.changeCalc = false;
                        stateCopy.summ = stateCopy.summ - action.newCount;
                        return stateCopy;
                    }
                    else {
                        let stateCopy = { ...state };
                        stateCopy.item2 = { ...state.item2 };
                        if (stateCopy.item1.changeCalc) {
                            stateCopy.item1.changeCalc = false;
                            stateCopy.summ = stateCopy.summ - 400;
                        }
                        stateCopy.item2.changeCalc = true;
                        stateCopy.summ = stateCopy.summ + action.newCount;
                        return stateCopy;
                    }
                }
                case 3: {
                    if (action.newShow) {
                        let stateCopy = { ...state };
                        stateCopy.item3 = { ...state.item3 };
                        stateCopy.item3.changeCalc = false;
                        stateCopy.summ = stateCopy.summ - action.newCount;
                        return stateCopy;
                    }
                    else {
                        let stateCopy = { ...state };
                        stateCopy.item3 = { ...state.item3 };
                        if (stateCopy.item4.changeCalc) {
                            stateCopy.item4.changeCalc = false;
                            stateCopy.summ = stateCopy.summ - 800;
                        }
                        stateCopy.item3.changeCalc = true;
                        stateCopy.summ = stateCopy.summ + action.newCount;
                        return stateCopy;
                    }
                }
                case 4: {
                    if (action.newShow) {
                        let stateCopy = { ...state };
                        stateCopy.item4 = { ...state.item4 };
                        stateCopy.item4.changeCalc = false;
                        stateCopy.summ = stateCopy.summ - action.newCount;
                        return stateCopy;
                    }
                    else {
                        let stateCopy = { ...state };
                        stateCopy.item4 = { ...state.item4 };
                        if (stateCopy.item3.changeCalc) {
                            stateCopy.item3.changeCalc = false;
                            stateCopy.summ = stateCopy.summ - 600;
                        }
                        stateCopy.item4.changeCalc = true;
                        stateCopy.summ = stateCopy.summ + action.newCount;
                        return stateCopy;
                    }
                }
                case 5: {
                    if (action.newShow) {
                        let stateCopy = { ...state };
                        stateCopy.item5 = { ...state.item5 };
                        stateCopy.item5.changeCalc = false;
                        stateCopy.summ = stateCopy.summ - action.newCount;
                        return stateCopy;
                    }
                    else {
                        let stateCopy = { ...state };
                        stateCopy.item5 = { ...state.item5 };
                        stateCopy.item5.changeCalc = true;
                        stateCopy.summ = stateCopy.summ + action.newCount;
                        return stateCopy;
                    }
                }

            }
        }
        case CHANGE_NUMBER_DAYS: {
            let stateCopy = { ...state };
            stateCopy.days = action.newDays;
            stateCopy.summDays = 3200 * action.newDays
            return stateCopy;
        }
        case CHANGE_ACTIVATE_COUPON: {
            let stateCopy = { ...state };
            stateCopy.coupon = true;
            stateCopy.summ = stateCopy.summ - 200;
            return stateCopy;
        }
        case CHANGE_INCREMENT_GUEST: {
            let stateCopy = { ...state };
            if (stateCopy.countGuest === 1) { stateCopy.countGuest = stateCopy.countGuest + 1 }
            return stateCopy;
        }
        case CHANGE_DECREMENT_GUEST: {
            let stateCopy = { ...state };
            if (stateCopy.countGuest === 2) { stateCopy.countGuest = stateCopy.countGuest - 1 }
            return stateCopy;
        }
        case DATE_CHECK_IN: {
            let stateCopy = { ...state };
            stateCopy.checkIn = action.newCheckIn;
            return stateCopy;
        }
        case DATE_CHECK_OUT: {
            let stateCopy = { ...state };
            stateCopy.checkOut = action.newCheckOut;
            return stateCopy;
        }
        default: return state
    }
}
export let showDescripAC = (id: number, show: boolean): TOOGLE_SHOW_DESCRIP_AType => ({ type: TOOGLE_SHOW_DESCRIP, newId: id, newShow: show });
export let changeCalcAC = (id: number, show: boolean, count: number): TOOGLE_SHOWC_CALC_AType => ({ type: CHANGE_CALC, newId: id, newShow: show, newCount: count });
export let changeDaysAC = (days: number, summ: number): CHANGE_NUMBER_DAYS_AType => ({ type: CHANGE_NUMBER_DAYS, newDays: days, newSumm: summ });
export let activateCouponAC = (): CHANGE_ACTIVATE_COUPON_Atype => ({ type: CHANGE_ACTIVATE_COUPON })
export let changeIncrementGuestAC = (): CHANGE_INCREMENT_GUEST_Atype => ({ type: CHANGE_INCREMENT_GUEST })
export let changeDecrementGuestAC = (): CHANGE_DECREMENT_GUEST_Atype => ({ type: CHANGE_DECREMENT_GUEST })
export let dateCheckInAC = (date): DATE_CHECK_IN_Atype => ({ type: DATE_CHECK_IN, newCheckIn: date })
export let dateCheckOuttAC = (date): DATE_CHECK_OUT_Atype => ({ type: DATE_CHECK_OUT, newCheckOut: date })
export default bookingPageReducer;