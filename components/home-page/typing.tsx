import React from 'react';
import Typewriter from 'typewriter-effect';

const Typing: React.FC<any> = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'Python Developer',
          'Node.js Developer',
          'Full Stack Developer',
          'Open Source Contributor',
          'Art Enthusiast',
          'A Cook'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
};

export default Typing;
