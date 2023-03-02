import styled from "styled-components";
import {motion} from "framer-motion";

export const FlexBox =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexBox_Column = styled(FlexBox)`
  flex-direction: column;
`;

export const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

