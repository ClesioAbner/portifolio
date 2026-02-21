import React, { useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiPostgresql } from 'react-icons/si';

interface Skill {
    name: string;
    icon: React.ElementType;
    color: string;
    level: number;
    usage: string;
}

const skills: Skill[] = [
    { name: 'Java', icon: FaJava, color: '#f89820', level: 85, usage: 'Backend, APIs REST, Spring Boot' },
    { name: 'JavaScript', icon: FaJs, color: '#f7df1e', level: 80, usage: 'Frontend e Backend (Node.js)' },
    { name: 'HTML', icon: FaHtml5, color: '#e34f26', level: 90, usage: 'Estrutura de páginas web' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572b6', level: 85, usage: 'Estilização e layouts responsivos' },
    { name: 'React', icon: FaReact, color: '#61dafb', level: 80, usage: 'Desenvolvimento de interfaces modernas' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 75, usage: 'Tipagem estática em projetos frontend' },
    { name: 'SQL', icon: FaDatabase, color: '#00758f', level: 80, usage: 'Consultas e gestão de bases de dados' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 75, usage: 'Base de dados relacional avançada' },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = skill.icon;

    const cardVariants: Variants = {
        initial: { opacity: 0, scale: 0.9 },
        inView: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
        hover: { y: -8, transition: { type: 'spring', stiffness: 300 } }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="inView"
            whileHover="hover"
            viewport={{ once: true, amount: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative bg-background dark:bg-dark-background rounded-2xl p-4 flex flex-col items-center justify-center aspect-square cursor-pointer shadow-neumorphic-light dark:shadow-neumorphic-dark hover:shadow-neumorphic-inset-light dark:hover:shadow-neumorphic-inset-dark transition-shadow duration-300"
            style={{ willChange: 'transform, box-shadow' }}
        >
            <Icon size={48} style={{ color: skill.color }} />
            <span className="mt-3 font-semibold text-highlight dark:text-white text-center">{skill.name}</span>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-2 left-2 right-2 p-2"
                    >
                        <div className="w-full bg-gray-200 dark:bg-dark-secondary rounded-full h-2.5">
                            <motion.div
                                className="h-2.5 rounded-full"
                                style={{ backgroundColor: skill.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full mb-3 w-max max-w-xs p-2 bg-secondary dark:bg-dark-secondary text-highlight dark:text-white text-xs rounded-lg shadow-lg z-10"
                    >
                        {skill.usage}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const Skills: React.FC = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-highlight dark:text-white mb-16">
                Habilidades Técnicas
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </SectionWrapper>
    );
};