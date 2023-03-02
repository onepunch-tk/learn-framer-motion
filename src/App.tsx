import styled from "styled-components";
import {FlexBox} from "./styles/modules";
import ChapterOne from "./view/components/ChapterOne";
import ChapterTwo from "./view/components/ChapterTwo";
import ChapterThree from "./view/components/ChapterThree";

const Wrapper = styled(FlexBox)`
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
            <ChapterThree/>
        </Wrapper>
    )
}

export default App
