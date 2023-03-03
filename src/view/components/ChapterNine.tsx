import {AnimatePresence, Variants} from "framer-motion";
import {Box, FlexBox, FlexBox_Column} from "../../styles/modules";
import styled from "styled-components";
import {useState} from "react";
import {EVariantsLabels} from "../../defines/enums";

const Item = styled(Box)`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px
`;

interface IVariantsProps {
    isPrev: boolean
}

const variants: Variants = {
    [EVariantsLabels.init]: ({isPrev}: IVariantsProps) => ({
        x: isPrev ? -500 : 500,
        opacity: 0,
        scale: 0
    }),
    [EVariantsLabels.animate]: ({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7
        }
    }),
    [EVariantsLabels.exit]: ({isPrev}: IVariantsProps) => ({
        x: isPrev ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.7
        }
    })
}

function ChapterNine() {
    const [visible, setVisible] = useState(1);
    const [isPrev, setIsPrev] = useState(false);
    const nextItem = () => {
        setIsPrev(false);
        setVisible(prev => prev === 10 ? 10 : prev + 1)
    };
    const prevItem = () => {
        setIsPrev(true);
        setVisible(prev => prev === 1 ? 1 : prev - 1)
    };
    return (
        <>
            <AnimatePresence mode="wait" custom={{isPrev}}>
                {/*
                component 의 key 를 변경하는 것 만으로도,
                react 는 해당 컴포넌트가 사라지고 새로운 컴포넌트가 생겼다고 인식함(re-render)
                그로인해 AnimatePresence 의 이벤트가 발생
                */}
                <Item
                    custom={{isPrev}}
                    variants={variants}
                    initial={EVariantsLabels.init}
                    animate={EVariantsLabels.animate}
                    exit={EVariantsLabels.exit}
                    key={visible}
                >
                    {visible}
                </Item>
            </AnimatePresence>
            <div>
                <button onClick={prevItem}>Prev Item</button>
                <button onClick={nextItem}>Next Item</button>
            </div>
        </>

    );
}

export default ChapterNine;