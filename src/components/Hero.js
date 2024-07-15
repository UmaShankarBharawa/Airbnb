import HeroBanner from '../images/hero-banner.png'

export default function Hero() {
    return (
        <section className="hero-container">
            <img src={HeroBanner} alt="banner" className="hero--banner" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}