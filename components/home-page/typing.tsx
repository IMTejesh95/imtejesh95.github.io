import React from 'react';
import Typewriter from 'typewriter-effect';

const Typing: React.FC<any> = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'Cloud Solution Architect',
          'Full Stack Developer',
          'Node.js Developer',
          'Python Developer',
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
