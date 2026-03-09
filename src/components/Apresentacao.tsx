import {  motion } from 'framer-motion'
import { Button } from './ui/button'
import { Linkedin, Github, FileText } from 'lucide-react'


export function Aprensentacao() {
    const ButtonsList = [
        {label: "LinkedIn", icone:<Linkedin className='mr-2 h-5 w-5 group-hover:scale-110 transition-transform mx'/> ,url: "https://www.linkedin.com/in/arnaldo-abra%C3%A3o-064238339"},
        {label: "Github", icone:<Github className='mr-2 h-5 w-5 group-hover:scale-110 transition-transform mx'/> ,url:"https://github.com/cha-de-suco?tab=repositories"},
        {label: "Resumo", icone:<FileText/>,url:"#"}
    ]

    return (
        <section className="min-h-screen flex items-center justify-center static">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/5 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
            </div>

            <div className="section-container text-center relative z-10">
                <motion.div 
                    initial={{opacity: 0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                >
                    <motion.p
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration: 0.6, delay:0.2}}
                        className='text-primary font-medium mb-4 tracking-wide'>
                        Olá, eu sou
                    </motion.p>

                    <motion.h1
                        initial={{opacity: 0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.6,  delay:0.3}}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                        
                            <span className='gradient-text'>Arnaldo Janiski</span>
                    </motion.h1>

                    <motion.h2 
                        initial={{opacity: 0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.6,  delay:0.4}}
                        className='text-2xl md:text-3xl text-muted-foreground font-medium mb-8'>

                        Desenvolvedor Frontend Júnior
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className='text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed'>
                        
                        Criando interfaces de usuário escaláveis com {' '}
                        <span className='text-primary font-medium'>React </span>,{' '}
                        <span className='text-primary font-medium'>Typescript</span>,{' '}
                        <span className='text-primary font-medium'>Tailwindcss</span>.
                        Focado em código limpo e experiências de usuários exepcionais.
                    </motion.p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className='flex flex-wrap items-center justify-center gap-4'>

                    {ButtonsList.map((item, index) => (
                        <Button 
                            key={index}
                            size={"lg"}
                            className="group hover:bg-primary/90 text-primary-foreground font-medium px-8 py-5 rounded-lg"
                            asChild>
                            
                            <a href={item.url} target='_blank' rel='noopener noreferrer'
                               className='flex justify-center items-center gap-2 text-sm'>
                                {item.icone}
                                {item.label}
                            </a>
                        </Button>
                    ))}

                </motion.div>
            </div>
        </section>
    )
}