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
* 1. 대부분의 애니매이션은 "animate" prop 와 함께 사용된다.
* 1-1. animate 에 적용된 값으로 애니매이션 업데이트 된다..
*
* 2. transition prop 로 애니매이션 유형을 정의한다.
*
* 3. initial prop 로 초기값 정의가 가능함.
* */

function ChapterOne() {
    return (
        <Box
            initial={{scale: 0}}
            transition={{type: "spring", delay:1}}
            animate={{scale: 1, rotateZ: 360}}
        />
    );
}

export default ChapterOne;