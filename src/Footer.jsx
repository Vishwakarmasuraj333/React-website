import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-blue-600 text-white p-20 ">

            {/* Top Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                <div>
                    <h2 className="font-bold text-2xl mb-3 ">About Section</h2>
                    <ul className="text-center text-cyan-300 space-y-1">
                        <li>Website Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Resources</li>
                        <li>Fraud Warning</li>
                        <li>UK Tax Strategy</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold text-2xl mb-3 ">Cookies Section</h2>
                    <ul className="text-center text-cyan-300 space-y-1">
                        <li>Environment Policy</li>
                        <li>Modern Slavery Statement</li>
                        <li>Code of Conduct</li>
                        <li>Red Bull Groups</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold text-2xl mb-3">Emergency Contact</h2>
                    <ul className="text-center text-cyan-300 space-y-1">
                        <li>+9370944696</li>
                        <li>itxsurajofficial@gmail.com</li>
                        <li>24x7 Available</li>
                        <li>Safety Health Policy</li>
                    </ul>
                </div>

            </div>

            {/* Divider Line */}
            <hr className="w-full h-[2px] bg-blue-400 border-none my-8" />

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-center md:text-left">
                    © Copyright Red Bull Technology Limited. All Rights Reserved
                </p>

                <div className="text-center">
                    <h2 className="mb-2">Contact Via</h2>
                    <ul className="flex gap-4 justify-center text-2xl">
                        <li><FaFacebookSquare /></li>
                        <li><FaInstagram /></li>
                        <li><FaTwitter /></li>
                        <li><FaLinkedin /></li>
                    </ul>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="fixed bottom-5 right-5 bg-blue-600 text-white px-3 py-2  rounded border-2 border-white cursor-pointer"
                    >
                        ↑ Top
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Footer
