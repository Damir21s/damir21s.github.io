import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./home.module.scss"
import intro1 from "../../picture/homePage/intro1.svg"
import intro2 from "../../picture/homePage/intro2.svg"
import picture1 from "../../picture/homePage/picture1.svg"
import picture2 from "../../picture/homePage/picture2.svg"
import picture3 from "../../picture/homePage/picture3.svg"
import picture4 from "../../picture/homePage/picture4.svg"
import icon1 from "../../picture/aboutUs/icon1.svg"
import icon2 from "../../picture/aboutUs/icon2.svg"
import icon3 from "../../picture/aboutUs/icon3.svg"
let Home = () => {
    return (
        <main className={s.all}>
            <section className={s.body}>
                <img alt="img" src={intro1} />
            </section>
            <div className={s.button_wrapper}>
                <NavLink to="/booking" className={s.button1}>Book now</NavLink>
                <NavLink to="/booking" className={s.button2}>
                    <p className={s.p1}>from</p>
                    <p className={s.p2}>€3.200</p>
                    <p className={s.p3}>per night</p>
                </NavLink>
            </div>
            <section className={s.wrapper}>
                <div className={s.text}>
                    <p className={s.header}>The Cabins</p>
                    <p className={s.header_description}>Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly,
                        are designed by architect Sigurd Larsen. They all have an open
                        space with a double bed, a double sofa bed, kitchen, separate
                        toilet and an outdoor shower. On the roof, surrounded by treetops,
                        there is a terrace, which is about nine meters above ground.
                        The cottages are built around tall, old trees that go through the
                        entire cottage from floor to ceiling.
                    </p>
                    <NavLink to="/aboutus" className={s.button3} >Read More</NavLink>
                </div>
                <div><img alt="img" src={intro2} /></div>
            </section>
            <section className={s.wrapper_picture}>
                <div><img alt="img" src={picture1} /></div>
                <div><img alt="img" src={picture2} /></div>
                <div><img alt="img" src={picture3} /></div>
            </section>
            <section className={s.wrapper_location}>
                <div><img alt="img" src={picture4} /></div>
                <div className={s.location_descrip}>
                    <span>The Forest</span>
                    <p>Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed
                        by architect Sigurd Larsen. They all have an open space with a double bed,
                        a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof,
                        surrounded by treetops, there is a terrace, which is about nine meters above ground.
                        he cottages are built around tall, old trees that go through the entire cottage
                        from floor to ceiling.</p>
                </div>
            </section>
            <header className={s.wrapper_title_connection}><p>Stay in touch with us</p></header>
            <address className={s.wrapper_connection}>
                <div className={s.wrapper_connection__contacts}>
                    <p>Vesterborg, Denmark</p>
                    <p>+123 456 789 000</p>
                    <p>info@theglasshuts.com</p>
                    <div>
                        <img alt="img" src={icon1} />
                        <img alt="img" src={icon2} />
                        <img alt="img" src={icon3} />
                    </div>
                </div>
            </address>
        </main>
    )
}
export default Home;