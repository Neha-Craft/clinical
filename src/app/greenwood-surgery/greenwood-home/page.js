
import GreenwoodSurgery from '@/components/greenwoosurgery/greenwoodheader';
import Servicesection from '@/components/servicesection';
import React from 'react';

export default function Page() {
  return (
    <div>
      <div>
      <GreenwoodSurgery/>
      </div>
      <div style={{ paddingTop: "4rem", paddingBottom: "1rem" }}>
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2   style={{paddingBottom:"1rem"}}>Greenwood Surgery</h2>
          <p 
          style={{fontSize:"18px",
            paddingTop:"1rem !important",
            paddingBottom:"1rem",
            marginBottom:"1rem"
          }}
          >
            A progressive medical practice supporting your family's health journey.
            </p>
          </div>

          <div className="container" style={{
            paddingTop:"1rem"
          }}>
            <div className="row gy-4 align-items-center village-contact">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="position-relative h-100">
                  <img 
                    src="/Greenwood.jpg" 
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
         
                    <p>Greenwood Surgery is a modern, friendly, and dynamic practice situated in Togher, on the outskirts of Cork City.  </p>
                    <p> We offer comprehensive general practice services to both public and private patients, serving the local and surrounding communities. </p>
                    <p>
                      Our philosophy is to deliver the highest standard of healthcare to all our patients in a holistic and empathetic manner, facilitated by our experienced and compassionate team.
                      </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
              
      </div>
      <div>
           <Servicesection/>
      </div>
          
    </div>
  );
}


