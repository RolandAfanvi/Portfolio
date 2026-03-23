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
                        
                        Data Engineer spécialisé dans la conception et l’optimisation de pipelines de données.
                        J’interviens sur l’ensemble du cycle de traitement de la donnée : <span className="text-secondary">collecte, transformation et structuration </span>, afin de construire des systèmes fiables et exploitables pour l’analyse et la prise de décision.
                        Au cours de mes expériences, j’ai développé des pipelines <span className="text-secondary">ETL/ELT</span> , automatisé des flux de données, mis en place des contrôles de qualité et créé des <span className="text-secondary">tableaux de bord Power BI </span>pour faciliter le suivi des indicateurs clés.
                        Je travaille principalement avec <span className="text-secondary">Python, SQL, Snowflake, l’ecosystème Azure , Talend, FiveTran </span>et bien d’autres outils et des frameworks de création d’API pour rendre les données accessibles et exploitables par les équipes métier.
                        Mon objectif est de concevoir des systèmes data performants et scalables qui transforment les données brutes en informations à forte valeur, permettant d’améliorer la performance et la prise de décision dans les entreprises.
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
                            <li className="w-fit md:w-full">SQL</li>
                            <li className="w-fit md:w-full">Python</li>
                            <li className="w-fit md:w-full">Snowflake</li>
                            <li className="w-fit md:w-full">Azure Data Factory (ADF)</li>
                            <li className="w-fit md:w-full">Power BI</li>
                            <li className="w-fit md:w-full">Talend </li>
                            <li className="w-fit md:w-full">Hadoop</li>
                            <li className="w-fit md:w-full">Git</li>
                            <li className="w-fit md:w-full">SQL</li>
                            <li className="w-fit md:w-full">Git</li>
                            <li className="w-fit md:w-full">API</li>

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
