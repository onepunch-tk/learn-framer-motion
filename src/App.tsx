import {FlexBox_Column} from "./styles/modules";
import styled from "styled-components";
import ChapterOne from "./view/components/ChapterOne";
import ChapterTwo from "./view/components/ChapterTwo";
import ChapterThree from "./view/components/ChapterThree";
import ChapterFour from "./view/components/ChapterFour";
import ChapterFive from "./view/components/ChapterFive";
import ChapterSix from "./view/components/ChapterSix";
import ChapterSeven from "./view/components/ChapterSeven";
import ChapterEight from "./view/components/ChapterEight";
import ChapterNine from "./view/components/ChapterNine";

const Wrapper = styled(FlexBox_Column)`
  height: 100vh;
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
            <ChapterNine/>
        </Wrapper>
    )
}

export default App
