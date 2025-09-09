
import Servicesection from '@/components/servicesection';
import VillageHome from '@/components/villagemedical/villagehome';
import React from 'react';

export default function Page() {
  return (
    <div>
      <div>
          <VillageHome/>
          </div>
       <div style={{ paddingTop: "6rem", paddingBottom: "1rem" }}>
         <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2   style={{paddingBottom:"1rem"}}>The Village Medical Center</h2>
            <p style={{fontSize:"18px", paddingTop:"1rem",paddingBottom:"2rem"

            }}>
The Village Medical Center is a modern, friendly, and dynamic practice situated in the picturesque village of Ballinhassig.
            </p>
          </div>

          <div className="container">
            <div className="row gy-4 align-items-center village-contact">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="position-relative h-100">
                  <img 
                    src="/TVMC.jpg" 
                    className="img-fluid rounded" 
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      maxHeight: '400px'
                    }}
                    alt="About The Village Medical Centre"
                  />
                </div>
              </div>

              <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
               
      <p>We offer comprehensive general practice services to both public and private patients, serving the local and surrounding communities.

Our philosophy is to deliver the highest standard of healthcare to all our patients in a holistic and empathetic manner, facilitated by our experienced and compassionate team</p>
              </div>
            </div>
          </div>
        </section> 
      </div> 
         <div>
      <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
     
      </div>
      
    </div>
    <div>

      </div>
    <div>
          <Servicesection/>  
    </div>


    </div>
  );
}






