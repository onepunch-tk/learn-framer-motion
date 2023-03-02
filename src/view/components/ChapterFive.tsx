import styled from "styled-components";
import {Box} from "../../styles/modules";
import {useRef} from "react";

const Container = styled(Box)`
  background-color: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Item = styled(Box)`
  width: 80px;
  height: 80px;
  color: white;
  border-radius: 18px;
`

function ChapterFive() {
    const constraintsRef = useRef<HTMLDivElement>(null);
    return (
        <Container ref={constraintsRef} >
            <Item
                dragSnapToOrigin
                dragElastic={0.3}
                drag
                dragConstraints={constraintsRef}
            />
        </Container>
    );
}

export default ChapterFive;