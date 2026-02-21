import { motion } from 'framer-motion';
import React from 'react';
import { FaServer, FaCode, FaDatabase, FaRocket } from 'react-icons/fa';
import { SectionWrapper } from '../ui/SectionWrapper';

const badges = [
    {
        name: 'Dev Backend',
        icon: FaServer,
        description: 'Desenvolvimento de aplicações robustas com Java e JavaScript, criando sistemas escaláveis e de alta qualidade.',
    },
    {
        name: 'Web Dev',
        icon: FaCode,
        description: 'Criação de interfaces modernas e responsivas com React, HTML e CSS, focando em experiência do utilizador.',
    },
    {
        name: 'Database',
        icon: FaDatabase,
        description: 'Modelagem e gestão de bases de dados com Oracle, SQL e PostgreSQL, garantindo integridade e performance dos dados.',
    },
    {
        name: 'Performance',
        icon: FaRocket,
        description: 'Otimização de aplicações para máxima velocidade, eficiência e melhor experiência do utilizador final.',
    },
];

const BadgeCard: React.FC<{ badge: typeof badges[0] }> = ({ badge }) => {
    const Icon = badge.icon;
    return (
        <div className="group relative flex flex-col items-center text-center">
            <motion.div
                className="w-24 h-24 rounded-full bg-secondary dark:bg-dark-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-accent dark:group-hover:bg-dark-accent shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
            >
                <Icon className="text-5xl text-highlight dark:text-dark-highlight group-hover:text-white dark:group-hover:text-dark-background transition-colors duration-300" />
            </motion.div>
            <h4 className="mt-4 font-bold text-highlight dark:text-white">{badge.name}</h4>
            <div className="absolute top-full mt-2 w-48 p-3 bg-secondary dark:bg-dark-secondary rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <p className="text-sm text-secondary-text dark:text-dark-highlight">{badge.description}</p>
            </div>
        </div>
    );
};

export const About: React.FC = () => {
    return (
        <SectionWrapper id="about">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-highlight dark:text-white mb-12">
                Sobre Mim
            </h2>
            <p className="max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed mb-20 text-secondary-text dark:text-dark-highlight">
                Desenvolvedor de software focado na criação de aplicações modernas e responsivas, utilizando Java, React , JavaScript, com integração de APIs e desenvolvimento de soluções web.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-center text-highlight dark:text-white mb-12">
                Conquistas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {badges.map((badge, index) => (
                    <BadgeCard key={index} badge={badge} />
                ))}
            </div>
        </SectionWrapper>
    );
};