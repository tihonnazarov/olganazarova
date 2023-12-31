import React from 'react';

const Service = ({ onClose }) => {
    return (
        <div>
            <button
                onClick={onClose}
                className="text-white mb-4 but rounded-full p-1 hover:text-green-900 transition duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <ul className="text-2xl grid gap-4 text-white">
                <li>
                    <h2>Изготовление мягких декораций для театра и кино</h2>
                </li>
                <li>
                    <h2>Изготовление штор</h2>
                </li>
                <li>
                    <h2>Ремонт мягких декораций</h2>
                </li>
            </ul>

        </div>
    );
};

export default Service;