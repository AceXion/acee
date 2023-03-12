import React from 'react';
import AnimatedCursor from "react-animated-cursor"

const Cursorapp = () => {
    return (
        <div>
             <div className="App">
             <AnimatedCursor
      innerSize={12}
      outerSize={70}
      color='199, 226, 230'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={1.2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
        </div>
    );
}

export default Cursorapp;
