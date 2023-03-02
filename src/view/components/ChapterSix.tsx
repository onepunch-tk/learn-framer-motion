import {Box} from "../../styles/modules";
import {useMotionValue, useScroll, useTransform} from "framer-motion";
import {useEffect} from "react";

/*MotionValue

MotionValues는 애니메이션 값의 상태(state)와 속도(velocity)를 추적합니다. 모든 모션 컴포넌트는 내부적으로 MotionValues를 사용하여 애니메이션 값의 상태와 속도를 추적합니다. 일반적으로 이들은 자동으로 생성됩니다. (MotionValue는 React State가 아니기 때문에 Motion Value값이 바뀌어도 리랜더링이 일어나지 않는다.)
```
import { motion, useMotionValue } from "framer-motion"

export function MyComponent() {
const x = useMotionValue(0)
return < motion.div style={{ x }} />
}
```
const x = useMotionValue(0)
useMotionValue 후크로 MotionValues를 생성할 수 있습니다. useMotionValue에 전달된 값은 MotionValue의 초기 상태로 작동합니다.

x.set(100)
set 메서드로 업데이트할 수 있습니다.
이것은 React 리렌더링을 트리거하지 않습니다.

x.get() // 100
MotionValue는 문자열이나 숫자가 될 수 있습니다.
get 메소드로 값을 읽을 수 있습니다.
https://www.framer.com/docs/motionvalue/*/
function ChapterSix() {
    const x = useMotionValue(0);
    const {scrollY, scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress,[0, 1], [1,5]);

    //value.onChange(callback) is deprecated. Switch to value.on("change", callback).
    //useEffect(() => x.onChange(latest => {}), [])
    x.on("change", (lastValue) => console.log(lastValue));
    scrollY.on("change",(latestValue)=>console.log(latestValue));
    return (
        <Box
            drag="x"
            style={{x, scale}}
            dragSnapToOrigin
        />
    );
}

export default ChapterSix;