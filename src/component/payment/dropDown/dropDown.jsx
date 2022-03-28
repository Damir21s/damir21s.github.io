import { useState } from "react";
import s from "./dropDown.module.scss"
let Dropdown = ({ selectedCountry, setSelectedCountry })=> {
  const [isActive, setIsActive] = useState(false);
  const countryArr = ["Denmark", "Finland", "Germany", "Great Britain"];
  return (
    <div className={s.dropdown}>
      <div className={s.dropdown_btn} onClick={(e) => setIsActive(!isActive)}>
        {selectedCountry}
        <i class={s.arrow_down}></i>
      </div>
      {isActive && (
        <div className={s.dropdown_content}>
          {countryArr.map((country) => (
            <div className={s.dropdown_item} onClick={() => {setSelectedCountry(country); setIsActive(false)}}>
              {country}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown;