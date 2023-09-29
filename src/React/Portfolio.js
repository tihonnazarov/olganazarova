import React from 'react';
import med from '../images/med.jpg'
import iolanta from '../images/iolanta.jpg'
import aida from '../images/aida.jpg'
import zolshka from '../images/zolshka.jpg'

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: '',
            description: 'Спектакль "Медиум" ММТ Геликон Опера Мягкие декорации и скатерть',
            image: med,
            link: 'https://example.com/project1',
        },
        {
            id: 2,
            title: '',
            description: 'Спектакль "Иоланта" ММТ Геликон Опера Тюль',
            image: iolanta,
            link: 'https://example.com/project2',
        },
        {
            id: 3,
            title: '',
            description: 'Спектакль "Золушка" ММТ Геликон Опера Мягкие декорации',
            image: zolshka,
            link: 'https://example.com/project3',
        },
        {
            id: 4,
            title: '',
            description: 'Спектакль "Аида" ММТ Геликон Операgig Занавес',
            image: aida,
            link: 'https://example.com/project4',
        },
    ];

    return (
        <section className="py-12 cll h-full font">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-white grid place-items-center">Мои работы</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="box rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-80 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl text-white font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-white w-96">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="mt-4 inline-block but text-white py-2 px-4 rounded-md hover:text-green-900 transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
