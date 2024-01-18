import { Link } from 'react-scroll';
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we&apos;re serious about is food</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas. Ut architecto excepturi itaque atque corporis veritatis hic? Deleniti voluptatem voluptate doloremque eius optio autem. Distinctio laborum commodi corrupti veniam aut labore soluta, quisquam natus, praesentium rerum incidunt qui similique nam illum quibusdam obcaecati doloremque quo atque consectetur beatae asperiores.
                </p>
                <Link to={"/"}>
                    Explore Menu{" "}
                    <span>
                        <HiOutlineArrowNarrowRight/>
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About