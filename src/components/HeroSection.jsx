import React from 'react'

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="relative">
            <div className="overlay w-full h-full absolute"></div>
            <div className="hero-content w-full lg:w-1/2 ml-auto relative">
                <div className="h-[80vh] flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <div className="content text-center lg:text-start space-y-5">
                            <h1 className="text-4xl lg:text-6xl">Donate Your Blood to Us, Save More Life Together</h1>
                            <p className="text-sm lg:text-md">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                            </p>
                            <button className="default-btn py-2 px-4">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
