import {Canvas} from "@react-three/fiber";
import Boi from "../3d/Boi";
import {OrbitControls} from "@react-three/drei";
import {motion} from "framer-motion";
import styles from '../../styles/About.module.css'

function About() {
    return (
        <div className="flex items-center flex-col md:flex-row pt-6 md:pt-1">
            <div className="text-gray-50 md:w-1/2 md:pl-16">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 }
                    }}
                    className="font-staatliches text-7xl text-center md:text-left">À propos</motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 }
                    }}
                    className="font-roboto-mono mt-4 text-justify px-4 md:px-0">
                        Je suis kodjo roland afanvi,un passionné d'informatique âgé de 21 ans. Actuellement en <span className="text-secondary">cycle d'ingenieur informatique </span> au <span className="text-secondary">CESI</span>, j'ai acquis une solide formation dans ce domaine. 
                        Je suis passionné par l’informatique et j’aspire à faire de ma passion mon métier. Je suis passionné par la création de solutions informatiques innovantes qui répondent aux besoins des utilisateurs. Mon objectif est de continuer à développer mes compétences techniques, d'explorer de nouveaux domaines et de contribuer à des projets stimulants.
                </motion.p>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 }
                    }}
                    className="mt-3 font-roboto-mono text-center md:text-left">
                    <p>Voici quelques-unes de mes compétences:</p>
                    <div className="w-full">
                        <ul className={`${styles.list_triangle} mt-1 marker:text-secondary inline-block md:block`}>
                            <li className="w-fit md:w-full">Java</li>
                            <li className="w-fit md:w-full">Python</li>
                            <li className="w-fit md:w-full">ReactJS</li>
                            <li className="w-fit md:w-full">VueJS</li>
                            <li className="w-fit md:w-full">Docker</li>
                            <li className="w-fit md:w-full">NodeJS</li>
                            <li className="w-fit md:w-full">C#</li>
                            <li className="w-fit md:w-full">Git</li>
                            <li className="w-fit md:w-full">SQL</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
            <div className=" h-128 md:w-1/2 w-full relative">
                <div className="absolute w-full h-full z-10"></div>
                <Canvas className="rounded" camera={{ zoom: 1 }}>
                    <OrbitControls enableZoom={false} enableRotate={false} autoRotate={false} />
                    <Boi />
                </Canvas>

            </div>
        </div>
    )
}

export default About
