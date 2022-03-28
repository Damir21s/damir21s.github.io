import s from "./aboutUS.module.scss"
import intro1 from "../../picture/aboutUs/intro1.svg"
import picture1 from "../../picture/aboutUs/picture1.svg"
import picture2 from "../../picture/aboutUs/picture2.svg"
import picture3 from "../../picture/aboutUs/picture3.svg"
import icon1 from "../../picture/aboutUs/icon1.svg"
import icon2 from "../../picture/aboutUs/icon2.svg"
import icon3 from "../../picture/aboutUs/icon3.svg"
import { useEffect, useState } from "react"
import axios from "axios"
let AboutUs = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=3&_page=1').then(
            res => setData(res.data)
        )
    }, [])
    return (
        <main className={s.all}>
            <div><img alt="img" src={intro1} /></div>
            <section className={s.wrapper1}>
                <div>
                    <img alt="img" src={picture1} />
                </div>
                <div>
                    <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.”</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. </p>
                </div>
            </section>
            <div className={s.wrapper2}><h2>Lorem ipsum dolor sit amet, consectetur adipiscing...</h2></div>
            <section className={s.wrapper_picture}>
                <div><img alt="img" src={picture2} /></div>
                <div><img alt="img" src={picture3} /></div>
                {data.map(picture => (
                    <div><img alt="img" className={s.item} src={picture.thumbnailUrl} /></div>
                ))}
            </section>
            <header className={s.wrapper_title_connection}><p>Stay in touch with us</p></header>
            <section className={s.wrapper_connection}>
                <address className={s.wrapper_connection__contacts}>
                    <div>
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
                <div className={s.wrapper_connection__inputs}>
                    <div className={s.wrapper_connection__input}>
                        <div><input placeholder="First Name" id="input" /></div>
                        <div><input placeholder="Last Name" id="input" /></div>
                    </div>
                    <div><input placeholder="Email" /></div>
                    <div><input placeholder="Subject" /></div>
                    <div className={s.wrapper_textarea}><textarea placeholder="Message" /></div>
                    <button><a>send</a></button>
                </div>
            </section>
        </main>
    )
}

export default AboutUs;