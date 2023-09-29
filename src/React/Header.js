import React, { useState, useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import ContactForm from './ContactForm';
import Service from "./Service";


const Header = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const contactButtonRef = useRef(null);

    const openContactForm = () => {
        setIsContactFormOpen(true);
    };

    const closeContactForm = () => {
        setIsContactFormOpen(false);
    };

    const transitions = useTransition(isContactFormOpen, {
        from: {opacity: 0, transform: 'translateY(100%)'},
        enter: {opacity: 1, transform: 'translateY(0%)'},
        leave: {opacity: 0, transform: 'translateY(100%)'},
    });

    const [isServiceOpen, setIsServiceOpen] = useState(false)
    const serviceButtonRef = useRef(null)

    const openService = () => {
        setIsServiceOpen(true)
    }

    const closeService = () => {
        setIsServiceOpen(false)
    }

    const transitions2 = useTransition(isServiceOpen, {
        from: {opacity: 0, transform: 'translateY(100%)'},
        enter: {opacity: 1, transform: 'translateY(0%)'},
        leave: {opacity: 0, transform: 'translateY(100%)'},
    });


        return (
            <header className="cl p-4 font">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="text-white text-2xl font-semibold">
                            Н.О
                        </div>
                        <nav className="hidden md:flex justify-between items-center">
                            <ul className="flex space-x-4">
                                <li className="flex row-auto gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                                    </svg>
                                    <button
                                        onClick={openService}
                                        className="text-white hover:text-green-600 transition duration-300"
                                        ref={serviceButtonRef}
                                    >Услуги
                                    </button>
                                </li>
                                <li className="flex row-auto gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
                                    </svg>
                                    <button
                                        onClick={openContactForm}
                                        className="text-white hover:text-green-600 transition duration-300"
                                        ref={contactButtonRef}
                                    >
                                        Контакты
                                    </button>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
                {transitions(
                    (style, item) =>
                        item && (
                            <animated.div
                                style={style}
                                className="fixed inset-0 flex justify-center items-center z-50"
                            >
                                <div className="box p-6 rounded-lg shadow-lg">
                                    <ContactForm onClose={closeContactForm}/>
                                </div>
                            </animated.div>
                        )
                )}
                {transitions2(
                    (style, item) =>
                        item && (
                            <animated.div
                                style={style}
                                className="fixed inset-0 flex justify-center items-center z-50"
                            >
                                <div className="box p-6 rounded-lg shadow-lg">
                                    <Service onClose={closeService}/>
                                </div>
                            </animated.div>
                        )
                )}
            </header>
        )
}


export default Header;



