import {Box} from "../../styles/modules";
import {AnimatePresence, Variants} from "framer-motion";
import {useState} from "react";
import {EVariantsLabels} from "../../defines/enums";

const variants:Variants = {
    [EVariantsLabels.init]:{
        opacity:0,
        scale:0,
    },
    [EVariantsLabels.animate]:{
        opacity:1,
        scale:1,
        rotateZ:360
    },
    [EVariantsLabels.exit]:{
        opacity:0,
        scale:0,
        y:60
    }
}

function ChapterEight() {
    const [visible, setVisible] = useState(false);
    const onClick = () => setVisible(prev => !prev);

    return (
        <>
            <AnimatePresence>
                {visible && <Box
                    variants={variants}
                    initial={EVariantsLabels.init}
                    animate={EVariantsLabels.animate}
                    exit={EVariantsLabels.exit}
                />}
            </AnimatePresence>
            <button style={{marginTop:200}} onClick={onClick}>Show</button>
        </>
    );
}

export default ChapterEight;