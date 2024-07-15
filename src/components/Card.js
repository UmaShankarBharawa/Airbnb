import KatieImg from '../images/katie.png'
import StarImg from '../images/star.png'
import WeddingImg from '../images/wedding-photography.png'
import BikeImg from '../images/mountain-bike.png'

export default function Card() {
    return (
        <div className="card-container">
            <div className="cards" >
                <div className='cards--imgAndBtn'>
                    <img src={KatieImg} alt='katie' className='cards--img'/>
                    <button className='cards--btn'>SOLD OUT</button>
                </div>
                <div className='cards--stats'>
                    <img src={StarImg} alt='star' className='card--star'/>
                    <p>5.0<span className='location'> (6) - USA</span></p>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span className='price'>From $136</span> / person</p>
                </div>
            </div>

            <div className="cards" >
                <div className='cards--imgAndBtn'>
                    <img src={WeddingImg} alt='wedding' className='cards--img'/>
                    <button className='cards--btn'>ONLINE</button>
                </div>
                <div className='cards--stats'>
                    <img src={StarImg} alt='star' className='card--star'/>
                    <p>5.0<span className='location'> (30) - USA</span></p>
                    <p>Learn wedding photography</p>
                    <p><span className='price'>From $125</span> / person</p>
                </div>
            </div>

            <div className="cards" >
                <div className='cards--imgAndBtn'>
                    <img src={BikeImg} alt='bike' className='cards--img'/>
                    {/* <button className='cards--btn'>SOLD OUT</button> */}
                </div>
                <div className='cards--stats'>
                    <img src={StarImg} alt='star' className='card--star'/>
                    <p>4.8<span className='location'> (2) - USA</span></p>
                    <p>Group Mountain Biking</p>
                    <p><span className='price'>From $50</span> / person</p>
                </div>
            </div>
        </div>
    )
}