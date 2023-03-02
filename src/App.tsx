import styled from "styled-components";
import ChapterOne from "./view/components/ChapterOne";
import ChapterTwo from "./view/components/ChapterTwo";
import ChapterThree from "./view/components/ChapterThree";
import ChapterFour from "./view/components/ChapterFour";
import {FlexBox} from "./styles/modules";
import ChapterFive from "./view/components/ChapterFive";
import ChapterSix from "./view/components/ChapterSix";

const Wrapper = styled(FlexBox)`
  height: 150vh;
  width: 100vw;
  background: linear-gradient(135deg, #e09, #d0e);
`;

/*
* framer motion lib 는 일단 html tag 로는 사용할 수 없다.
* framer motion 에서 제공하는 tag 사용. e.g. motion.div, motion.button...
* */

function App() {

    return (
        <Wrapper>
            <ChapterSix/>
        </Wrapper>
    )
}

export default App
