import React from 'react';
import Typewriter from 'typewriter-effect';

const Typing: React.FC<any> = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'IAM Engineer',
          'Cloud Solution Architect',
          'Art Enthusiast',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
};

export default Typing;
