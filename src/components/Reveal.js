import { useEffect, useRef } from "react"
import {motion, useInView, useAnimation} from "framer-motion"

const Reveal = ({children}) => {
    const scrollRef = useRef(null);

    const isInView = useInView(scrollRef, {once: true})
    const animationControl = useAnimation();

    useEffect(() => {
        if (isInView) {
            animationControl.start("visible")
        }
    }, [isInView])

    return (
        <>
            
            <div ref={scrollRef}>
                <motion.div
                    variants={{
                        hidden: {opacity: 0, y: 100, display: "flex"},
                        visible: {opacity: 1, y: 0, display: "flex", flexDirection: "column", margin: "0px", padding: "0px"}
                    }}
                    initial="hidden"
                    animate={animationControl}
                    transition={{duration: 0.5}}
                >
                    {children}
                </motion.div>
            </div>
    </>
    )

}

export default Reveal