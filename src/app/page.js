import Header from "@/components/header"
import Footer from "@/components/footer"

import ClientOnlyWrapper from "@/components/clientOnlyWrapper"
import About from "@/components/about"
import Services from "@/components/services"
import Contactus from "@/components/contactus"
import HomePage from "@/components/home"

export default function Home() {
  return (
    <div>
   {/* <ClientOnlyWrapper> */}
        <Header />  

       {/* <main className="main">  */}
        {/* Hero Section */}
        <HomePage/>
       

        {/* Featured Services Section */}
        {/* <section id="featured-services" className="featured-services section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-heartbeat icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-pills icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Sed ut perspici
                    </a>
                  </h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-thermometer icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Magni Dolores
                    </a>
                  </h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-dna icon"></i>
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Nemo Enim
                    </a>
                  </h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Call To Action Section */}
         {/* <section id="call-to-action" className="call-to-action section accent-background">
          <div className="container">
            <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>In an emergency? Need help now?</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </p>
                  <a className="cta-btn" href="#appointment">
                    Make an Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

        {/* About Section */}
        <About/>
      

       {/* Services Section  */}
      <Services/>

        {/* Contact Section */}
         <Contactus/> 
     
       {/* </main>  */}

      <Footer />
    {/* </ClientOnlyWrapper>  */}
    </div>
  )
}
