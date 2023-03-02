import styled from "styled-components";
import {motion} from "framer-motion";


const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

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