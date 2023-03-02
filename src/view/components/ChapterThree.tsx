import styled from "styled-components";
import {motion, Variants} from "framer-motion";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
  display: grid;
  grid-template-columns: repeat(2,1fr);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
  place-self: center;
`

/*
* variants 상속
* 부모의 variants object 의 속성 이름을 똑같이 적용한다.
* 부모 컴포넌트 e.g. <Box>
* 자식 컴포넌트 e.g. <Circle>
* 부모 컴포넌트에 적용될 variants e.g. containerVariants
* 자식 컴포넌트에 적용될 variants e.g. itemVariants
* */

const containerVariants:Variants = {
    init: {
        scale:0,
        rotate:0.2
    },
    finish: {
        rotate:0.2,
        scale: 1,
        transition:{
            delay:0.5,
            duration:0.5,
            bounce:0.5,
            type:"spring",
            staggerChildren:0.3,
            when:"beforeChildren"
        }
    }
};

const itemVariants:Variants = {
    init:{
        opacity: 0,
        y:20,
    },
    finish: {
        opacity:1,
        y:0,
    }
}

function ChapterThree() {
    return (
        <Box
            variants={containerVariants}
            initial="init"
            animate="finish"
        >
            <Circle variants={itemVariants}/>
            <Circle variants={itemVariants}/>
            <Circle variants={itemVariants}/>
            <Circle variants={itemVariants}/>
        </Box>
    );
}

export default ChapterThree;