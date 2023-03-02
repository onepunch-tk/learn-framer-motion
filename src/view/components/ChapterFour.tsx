import {Variants} from "framer-motion";
import React from "react";
import {Box} from "../../styles/modules";
import {EVariantsLabels} from "../../defines/enums";

/*
* whileHover & whileTap
* */
const variants:Variants = {
    [EVariantsLabels.hover]:{
        scale:1.5,
        rotateZ:360
    },
    [EVariantsLabels.tap]:{
        borderRadius:"100px",
        scale:1
    }
}

function ChapterFour() {
    return (
        <Box variants={variants} whileHover={EVariantsLabels.hover} whileTap={EVariantsLabels.tap}/>
    );
}

export default ChapterFour;