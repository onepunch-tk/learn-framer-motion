import styled from "styled-components";
import {Box, FlexBox} from "../../styles/modules";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const Wrapper = styled(FlexBox)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }

  width: 50vw;
`;

const Item = styled(Box)`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ChapterTen() {
    const [isOverlay, setIsOverlay] = useState(false);
    const [selectedId, setSelectedId] = useState("");
    const selectedBox = (layoutId:string) => {
        setSelectedId(layoutId);
        setIsOverlay(true);
    };

    return (
        <>
            <Wrapper >
                {["첫번째 박스","두번째 박스","세번째 박스","네번째 박스"].map(item=>
                    <Item
                        key={item}
                        layoutId={item}
                        onClick={() => selectedBox(item)}
                    >
                        {item}
                    </Item>)}
            </Wrapper>
            <AnimatePresence>
                {isOverlay &&
                    <Overlay
                        onClick={() => setIsOverlay(false)}
                        initial={{backgroundColor:"rgba(0,0,0,0)"}}
                        animate={{backgroundColor:"rgba(0,0,0,0.5)"}}
                        exit={{backgroundColor:"rgba(0,0,0,0)"}}
                    >
                        <Item
                            style={{width:400, height:200}}
                            layoutId={selectedId}
                        />
                    </Overlay>}
            </AnimatePresence>
        </>
    );
}

export default ChapterTen;