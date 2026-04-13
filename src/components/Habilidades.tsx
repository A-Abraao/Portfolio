import {motion, useInView} from 'framer-motion';
import { useRef } from 'react';
import { tecnologias } from './ui/Tecnologias';

export function Habilidades() {
    const ref = useRef(null);
    const isOnView = useInView(ref, {once: true, margin: '-100px'})

    return (
        <section id='Habilidades' className='relative' ref={ref}>
            <div className='section-container'>
                <motion.div initial={{opacity: 0, y:30}}
                    animate={isOnView ? {opacity: 1, y:0}: {}}
                    transition={{duration: 0.7, delay:0.2}}>
                        <div>
                            <span className='blue-text'>Conjunto Técnico</span>

                            <h2 className='section-titulo'>Habilidades e Tecnologias</h2>

                            <p className='section-subtitulo'>As ferramentas e tecnologias que uso para transformar ideias em realidade</p>
                        </div>
                </motion.div>
                
                <div className='flex gap-6'>
                    {tecnologias.map((item, index) => (
                        <motion.div key={index}
                            initial={{opacity:0, y: 30}}
                            animate={isOnView ? {opacity:1, y: 0} : {}}
                            transition={{duration: 0.6, delay:index * 0.15}}
                            className='glass-card-hover p-6 glow-effect w-full flex flex-col gap-5'>
                                <div>
                                    <h2 className='font-semibold text-white mb-1 text-lg'>{item.titulo}</h2>
                                    <p className='text-muted-foreground text-sm'>{item.descricao}</p>
                                </div>

                                <div className='flex flex-wrap gap-2'>
                                    {item.lista.map((item, index) => (
                                        <motion.div key={index}
                                            initial={{opacity: 0, scale:0.6}}
                                            animate={isOnView ? {opacity: 1, scale:1} : {}}
                                            transition={{duration: 0.4, delay: 0.4 + index * 0.1}}
                                            className="tech-bagde group cursor-default">
                                                <item.icone className='inline'/>
                                                {item.nomeLib}
                                        </motion.div>
                                    ))}
                                </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}