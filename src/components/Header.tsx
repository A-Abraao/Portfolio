import { motion } from "framer-motion"
import { useState } from "react"
import { useEffect } from "react"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const ListaOpcoes = [
        {label:"Sobre", href:"#"},
        {label:"Habilidades", href:"#"},
        {label:"Projetos", href:"#"},
        {label:"Experiência", href:"#"},
        {label:"Contato", href:"#"},
    ]

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'glass-card py-4 animate-blind' : 'py-6 animate-darken'
            }`}
            >

            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold gradient-text">Portfolio</a>

                <ul className="hidden md:flex items-center gap-8">
                    {ListaOpcoes.map((item,index) => (
                        <motion.li
                            key={item.label}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}>

                            <a href={item.href} className="nav-link text-sm font-medium">{item.label}</a>
                        </motion.li>
                    ))}
                </ul>
            </div>

            
        </motion.nav>
    )
}