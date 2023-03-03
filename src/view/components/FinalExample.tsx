import React, {useState} from 'react';
import styled from "styled-components";
import {AnimatePresence, delay, motion, Variants} from "framer-motion";

const enum EVarLabels {
    init = "init",
    hover = "hover",
    exit = "exit"
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const Item = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoveCircle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: blue;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

`;

interface IDirection {
    x: "left" | "right";
    y: "top" | "bottom";
}

interface IAnimationBox {
    originDirection: IDirection;
    id: number;
}

const itemList: IAnimationBox[] = [
    {id: 0, originDirection: {y: "bottom", x: "right"}},
    {id: 1, originDirection: {y: "bottom", x: "left"}},
    {id: 2, originDirection: {y: "top", x: "right"}},
    {id: 3, originDirection: {y: "top", x: "left"}},
];

const scaleVariants: Variants = {
    [EVarLabels.init]: ({y: originY, x: originX}: IDirection) => ({
        originY,
        originX,
        scale: 1
    }),
    [EVarLabels.hover]: ({y: originY, x: originX}: IDirection) => ({
        originY,
        originX,
        scale: 1.2,
    }),
}

function FinalExample() {
    const [moveIndex, setMoveIndex] = useState(0);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    return (
        <>
            <AnimatePresence>
            <Grid key={"wrapper"}>
                {itemList.map(({id, originDirection}) =>
                    <Item
                        key={id}
                        custom={originDirection}
                        variants={scaleVariants}
                        initial={EVarLabels.init}
                        whileHover={EVarLabels.hover}
                        onClick={() => setSelectedId(id + "")}
                        layoutId={id + ""}
                    >
                        {moveIndex === id && <MoveCircle layoutId="moveId"/>}
                    </Item>
                )}
            </Grid>
            <button onClick={() => setMoveIndex(prev => prev === 3 ? 0 : prev + 1)}>
                Switch
            </button>
            {selectedId &&
                <Overlay key={"overlay"}
                    onClick={() => setSelectedId(null)}
                    initial={{backgroundColor: "rgba(0,0,0,0)"}}
                    animate={{backgroundColor: "rgba(0,0,0,0.4)"}}
                    exit={{backgroundColor: "rgba(0,0,0,0)"}}
                >
                    <Item
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        layoutId={selectedId}
                    />
                </Overlay>
            }
            </AnimatePresence>
        </>
    );
}

export default FinalExample;