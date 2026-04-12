import {  motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Lightbulb, Target } from 'lucide-react'

export function Sobre() {
    const ref = useRef(null);
    const isOnView = useInView(ref, {once: true, margin: '-100px'})
    
    const highlights = [
        {
            icon: Code2,
            titulo: "Práticas de clean code",
            descricao: "Escrevo código de fácil manutenção, escalável e bem documentado, com o qual as equipes adorem trabalhar."
        },

        {
            icon: Lightbulb,
            titulo: "Resolvedor de problema",
            descricao: "Resolvo problemas com analise crítica e soluções criativas."
        },

        {
            icon: Target,
            titulo: "Foco no usuário",
            descricao: "Construo interfaces que priorizem acessibilidade e experiências de usuário marcantes."
        }
    ]

    return (
        <section id="Sobre" className="relative" ref={ref}>
            <div className="section-container">
                <motion.div 
                    initial={{opacity: 0, y:30}}
                    animate={isOnView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}>

                    <span className="text-primary text-medium text-sm tracking-wider uppercase  mb-4 block">
                        SOBRE MIM
                    </span>
                    
                    <h2 className="section-titulo">Transformando ideias em {""}
                            <span className="gradient-text">experiências digitais</span>
                    </h2>

                    <p className='section-subtitulo'>Preenchendo a lacuna entre desgin e funcionalidade</p>

                </motion.div>

                <div className='grid lg:grid-cols-2 gap-12 items-start'>
                    <motion.div 
                        initial={{opacity: 0, x:-30}}
                        animate={isOnView ? {opacity:1, x:0} : {}}
                        transition={{duration:0.6, delay:0.2}}
                        className='space-y-6 '>

                        <p className='section-subtitulo'>Como um <span className='text-white'>Desenvolvedor Front-end Júnior</span> embarcando no minha primeira experiência profissional. Eu trago uma perspectiva inovadora aliada a uma sólida base técnica.</p>

                        <p className='section-subtitulo'>Minha jornada no desenvolvimento web começou com a curiosidade sobre como os produtos digitais moldam experiência do usuário. Essa curiosidade se transformou em uma habilidade em cria interfaces que não sejam apenas visualmente atrantes, mas intuitivas e acessíveis.</p>

                        <p className='section-subtitulo'>Sou especialista na criação de interfaces de usuário escaláveis ​​usando tecnologias modernas como React e TypeScript, com forte ênfase em práticas de código limpo e arquitetura orientada a componentes. Minha experiência em visualização de dados com Python agrega uma dimensão analítica única à minha abordagem de desenvolvimento.</p>
                    </motion.div>

                    <motion.div initial={{opacity: 0, x: 30}}
                        animate={isOnView ? {opacity: 1, x:0, y:0}: {}}
                        transition={{duration: 0.6, delay:0.3}}
                        className='space-y-4 self-start'>
                        
                        {highlights.map((item, index) => (
                            <motion.div key={index}
                                initial={{opacity: 0, x: 30, y:15}}
                                animate={isOnView ? {opacity: 1,x:0 ,y:0}: {}}
                                transition={{duration: 0.4, delay:0.4 + index * 0.1}}
                                className=' glass-card-hover p-6 glow-effect w-full'>
                                    
                                <div className='flex items-start justify-start gap-4 flex'>
                                    <div className='p-3 rounded-lg bg-primary/10 text-primary text-center'>
                                        <item.icon className='h-6 w-6'/>
                                    </div>

                                    <div className='flex-col'>
                                        <h2 className='font-semibold text-white mb-1'>{item.titulo}</h2>
                                        <p className='text-muted-foreground text-sm'>{item.descricao}</p>
                                    </div>
                                </div>
                            </motion.div>

                        ))} 
                    </motion.div>
                </div>
            </div>
        </section>       
    )   
}