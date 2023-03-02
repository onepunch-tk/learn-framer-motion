import {Box} from "../../styles/modules";


/*
* Variants prop 으로 Clean Code 작성
* */

/*
* variants prop 의 object value */
const variants = {
    init: {
        scale: 0
    },
    finish: {
        scale: 1,
        rotateZ: 360,
        transition: {
            delay: 0.5,
            type: "spring"
        }
    }
}


function ChapterTwo() {
    return (
        <Box
            variants={variants}
            initial="init"
            animate="finish"
        />
    );
}

export default ChapterTwo;