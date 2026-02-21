import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const education = [
    {
        degree: 'Licenciatura em Engenharia Informática',
        institution: 'ISCTEM – Instituto Superior de Ciências e Tecnologia de Moçambique',
        period: 'Actualmente no 4.º ano',
    },
];

const certifications = [
    {
        name: 'Ethical Hacker',
        institution: 'Cisco Networking Academy',
        date: 'Janeiro 2026',
    },
    {
        name: 'JavaScript Essentials 1',
        institution: 'Cisco Networking Academy',
        date: 'Janeiro 2026',
    },
];

export const Education: React.FC = () => {
    return (
        <SectionWrapper id="education">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-highlight dark:text-white mb-12">
                Formação & Certificações
            </h2>

            {/* Formação Académica */}
            <h3 className="text-xl font-bold text-accent dark:text-dark-accent mb-6 text-center uppercase tracking-widest">
                Formação Académica
            </h3>
            <div className="max-w-2xl mx-auto space-y-4 mb-16">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-secondary dark:bg-dark-secondary p-6 rounded-xl shadow-md flex items-center space-x-5"
                    >
                        <FaGraduationCap className="text-4xl text-accent dark:text-dark-accent flex-shrink-0" />
                        <div>
                            <h4 className="text-lg font-bold text-highlight dark:text-white">{item.degree}</h4>
                            <p className="text-secondary-text dark:text-dark-highlight">{item.institution}</p>
                            <p className="text-sm text-accent dark:text-dark-accent mt-1">{item.period}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Certificações */}
            <h3 className="text-xl font-bold text-accent dark:text-dark-accent mb-6 text-center uppercase tracking-widest">
                Certificações
            </h3>
            <div className="max-w-2xl mx-auto space-y-4">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-secondary dark:bg-dark-secondary p-6 rounded-xl shadow-md flex items-center space-x-5"
                    >
                        <FaCertificate className="text-4xl text-accent dark:text-dark-accent flex-shrink-0" />
                        <div>
                            <h4 className="text-lg font-bold text-highlight dark:text-white">{cert.name}</h4>
                            <p className="text-secondary-text dark:text-dark-highlight">{cert.institution}</p>
                            <p className="text-sm text-accent dark:text-dark-accent mt-1">{cert.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};