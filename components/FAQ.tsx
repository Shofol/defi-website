import Image from 'next/image'
import React from 'react'

const FAQ = () => {


    return (
        <div id="faq" className="mt-32 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl lg:mx-auto bg-defi-dark text-white p-4 md:px-24 md:py-16">
            <h1 className="text-lg  text-center">FAQ's </h1>
            <p className="text-5xl text-center mt-3 mb-12">Questions</p>
            <div className="flex flex-col md:flex-row gap-0 lg:gap-24 text-xl ">
                <div className="flex-col flex-1">
                    <div className="mb-12">
                        <p className="font-bold">
                            Q: If I have my own development team, would you develop only the blockchain part of the application?
                        </p>
                        <p className="mt-4 text-defi-light">
                            A: Yes, we provide services according to your needs, even if that is only developing a small part of your project.
                        </p>
                    </div>
                    <div className="mb-12">
                        <p className="font-bold">
                            Q: Who has the ownership for the project?   </p>
                        <p className="mt-4 text-defi-light">
                            A: The complete ownership of the project remains with the client, unless otherwise decided upon.  </p>
                    </div>
                </div>
                <div className="flex-col flex-1">
                    <div className="mb-12">
                        <p className="font-bold">
                            Q: Do you sign an NDA? </p>
                        <p className="mt-4 text-defi-light">
                            A: Yes, we do sign an NDA or any other applicable legal documents. </p>
                    </div>
                    <div className="mb-12">
                        <p className="font-bold">
                            Q: Do you accept payment in cryptocurrency?  </p>
                        <p className="mt-4 text-defi-light">
                            A: Yes, we accept payment in cryptocurrency.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FAQ
