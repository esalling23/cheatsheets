

```js
// Adjusted from https://greensock.com/forums/topic/9352-wiggle-effect/
import gsap from 'gsap';
import { useCallback, useEffect, useRef, useState } from 'react';

const useGsapWiggle = (ref) => {
  const element = useRef(null) || ref;

  const [shouldWiggle, setShouldWiggle] = useState(false);

  const wiggleProp = useCallback((prop, min, max) => {
    const duration = Math.random() * (0.1 - 0.2) + 0.1;
    const tweenProps = {
      ease: 'power1.inOut',
      onComplete: wiggleProp,
      onCompleteParams: [prop, min, max],
      duration,
    };
    tweenProps[prop] = Math.random() * (max - min) + min;
    gsap.to(element.current, tweenProps);
  }, [element]);

  const wiggle = useCallback(() => {
    setShouldWiggle(true);

    gsap.delayedCall(() => setShouldWiggle(false), 3);
  }, []);

  useEffect(() => {
    if (shouldWiggle) {
      wiggleProp('scale', 0.93, 1);
      wiggleProp('rotation', -5, 5);
      wiggleProp('x', -3, 3);
      wiggleProp('y', -3, 3);
    } else if (element && element.current) {
      gsap.killTweensOf(element.current);
    }
  }, [shouldWiggle, element, wiggleProp]);

  return wiggle;
};

export default useGsapWiggle;

```