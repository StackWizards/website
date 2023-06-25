import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const sectionVariant = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.2 }
    },
    hidden: {
        opacity: 0, scale: 0
    }
};

export const Section = ({ children }) => {

    const control = useAnimation();
    const [ref, inView] = useInView({ threshold: 0 });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (<div ref={ref}>
        <motion.div
            className="section"
            variants={sectionVariant}
            initial="hidden"
            animate={control}
        >
            <div >
                {children}
            </div>
        </motion.div>
    </div>
    );
};