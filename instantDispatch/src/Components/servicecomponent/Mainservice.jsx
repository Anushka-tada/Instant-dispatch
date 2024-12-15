import React from 'react'
import './mainservice.css' 
import service from '../../assets/Service.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

const Mainservice = () => {
  return (
    <div>
        {/* 1 */}
         <div className="services">
            <div className="service-header m-32 text-center justify-center">
                <h1> 
                    Services
                </h1>
                <p>Trusted Courier Delivery Services</p>
            </div>
         </div>
{/* 2 */}
         <div className="service-sec2 flex">
            <div className="service-text">
                <h1 className='text-4xl sec2-header'>We Provide The Most Reliable Delivery Service</h1>
                <p className='text-lg sec2-par'>At Instant Dispatch, our commitment to reliability sets us apart. 
                    We understand the importance of timely and secure deliveries for both businesses and individuals.
                     Our team of dedicated professionals, coupled with cutting-edge technology, ensures that your parcels
                      are handled with utmost care and delivered promptly. With real-time tracking and 24/7 customer support,
                       we offer peace of mind from the moment you dispatch your package until it reaches its destination. Trust us to deliver excellence, every time.</p>
            </div> 
            <div className="service-img">
                <img src= {service} alt="img"  />
            </div>
         </div>
{/* 3 */}
         <div className="service-cards flex">
            {/* 1 */}
               <div className="card1">
                     <div >
                           <img src= {card1} alt=""  className="card-img1"/>
                     </div>
                     <div className="card-par">
                     <h1 className='text-4xl head text-center justify-center'>Swift Biker</h1>
                     <p className='text-lg par pr-5 pl-5'>Quick and efficient city deliveries for small parcels and documents.
                         Our bike couriers navigate traffic with ease for timely service.</p>
                     </div>
               </div>
               {/* 2 */}
               <div className="card2">
               <div >
               <img src={card2} alt="" className="card-img2" /> 
                 </div>
                 <div className="card-par">
                    <h1 className='text-4xl head text-center justify-center'>Motocycle Rider</h1>
                        <p className='text-lg par pr-5 pl-5'>Eco-friendly and cost-effective for lightweight packages and short distances, 
                            combining speed and sustainability.</p>
                        </div>
               </div>
               {/* 3 */}
               <div className="card3">
               <div >
               <img src={card3} alt="" className="card-img3" />
                 </div>
                 <div className="card-par ">
                    <h1 className='text-4xl head text-center justify-center'>Pickup Driver</h1>
                        <p className='text-lg par pr-5 pl-5' >Ideal for larger items and multiple parcels.
                             Our small trucks ensure secure and efficient transport for safe and timely deliveries.</p>
                </div>
               </div>
         </div>

         {/* 4 */}
          <div className="service-sec4">


          </div>


    </div>
  )
}
export default Mainservice 