import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaBriefcase, FaColumns, FaStream } from 'react-icons/fa';
import { SectionWrapper } from '../ui/SectionWrapper';

interface ExperienceItem {
    company: string;
    description: string;
}

const experience: ExperienceItem[] = [
    {
        company: 'Desenvolvimento em Java',
        description: 'Desenvolvimento de sistemas práticos em Java, incluindo um programa de gestão de ginásio, um sistema de gestão de seguros e outros sistemas orientados à resolução de problemas.',
    },
    {
        company: 'Desenvolvimento Web',
        description: 'Criação de aplicações e-commerce e sites informativos com HTML, CSS, JavaScript e React, com foco em interfaces modernas, responsivas e funcionais.',
    },
    {
        company: 'Bases de Dados',
        description: 'Modelagem e criação de bases de dados em SQL para suportar sistemas web e aplicações desenvolvidas em projetos académicos.',
    },
    {
        company: 'Eventos Tecnológicos',
        description: 'Participação no M-Pesa FinTalks (Vodacom Moçambique), MozTech e DataWave (MozDevz), com contacto com temas de inovação digital e desenvolvimento de software.',
    },
];

const TimelineItem: React.FC<ExperienceItem> = ({ company, description }) => (
    <>
        <h3 className="text-xl font-bold text-highlight dark:text-white mt-1">{company}</h3>
        <p className="text-secondary-text dark:text-dark-highlight mt-2">{description}</p>
    </>
);

export const Experience: React.FC = () => {
    const [isAlternating, setIsAlternating] = useState(false);

    const variantsLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const variantsRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <SectionWrapper id="experience">
            <div className="flex justify-center items-center text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-highlight dark:text-white">
                    Experiência Profissional
                </h2>
                <motion.button
                    onClick={() => setIsAlternating(!isAlternating)}
                    className="ml-4 p-3 bg-secondary dark:bg-dark-secondary rounded-full text-secondary-text dark:text-dark-highlight hover:text-accent dark:hover:text-dark-accent transition-colors"
                    aria-label="Alternar layout da linha do tempo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isAlternating ? <FaColumns size={20} /> : <FaStream size={20} />}
                </motion.button>
            </div>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-dark-secondary rounded-full"></div>

                {experience.map((item, index) => {
                    const isRightSide = !isAlternating && index % 2 !== 0;

                    return (
                        <motion.div
                            key={index}
                            className="mb-12 flex justify-between items-center w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={isRightSide ? variantsRight : variantsLeft}
                        >
                            <div className="w-1/2 pr-8 text-right">
                                {!isRightSide && <TimelineItem {...item} />}
                            </div>

                            <div className="absolute left-1/2 -translate-x-1/2 bg-accent dark:bg-dark-accent w-8 h-8 rounded-full flex items-center justify-center z-10 border-4 border-background dark:border-dark-background">
                                <FaBriefcase className="text-white dark:text-dark-background" />
                            </div>

                            <div className="w-1/2 pl-8 text-left">
                                {isRightSide && <TimelineItem {...item} />}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};