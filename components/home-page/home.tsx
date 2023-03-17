import { useEffect, useState } from 'react';
import { Flex, Avatar, Box, Link, Button } from '@chakra-ui/react';
import { MotionBox, MotionFlex } from 'components/shared/animations/motion';
import Header from 'components/shared/header';
import { useLinkColor } from 'components/theme';
import Projects from 'pages/projects';
import { projectsList } from '../../data/projectData';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Typing from './typing';

const ANIMATION_DURATION = 0.5;
const ORANGE = '#ff9400';
const emojis = ['👋', '👍', '🖐'];

const Home: React.FC<any> = () => {
  const linkColor = useLinkColor();
  const [showEmogi, setShowEmoji] = useState(false);
  const [emojiCounter, setEmojiCounter] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= 3) setEmojiCounter(0);
    }, 500);
    return () => clearInterval(interval);
  }, [emojiCounter]);

  return (
    <Flex direction="column" align="center">
      <Flex direction={['column', 'column', 'row']}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size={'2xl'}
              showBorder={true}
              borderColor={linkColor}
              src={'/assets/images/dp.png'}
            />
          </MotionBox>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Box position="relative">
            <Box position="absolute" width="full" fontSize="2xl" textAlign="center">
              {emojis.map((item, index) => {
                return (
                  <MotionBox
                    key={index}
                    position="absolute"
                    right="80%"
                    animate={showEmogi && emojiCounter === index ? 'show' : 'hide'}
                    variants={{
                      hide: { translateY: -80, opacity: 0 },
                      show: {
                        translateY: [0, -40, -60],
                        opacity: [0, 1, 0]
                      }
                    }}
                    initial="hide"
                  >
                    {item}
                  </MotionBox>
                );
              })}
            </Box>
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                underlineColor={ORANGE}
                emoji="👋"
                mt={0}
                cursor="pointer"
                width="max-content"
                onClick={() => {
                  setEmojiCounter((prevCounter) => prevCounter + 1);
                  setShowEmoji(true);
                }}
              >
                Hi There!
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            I am{' '}
            <Box as="strong" fontWeight="600" color={linkColor}>
              Tejesh (TJ) Chauragade
            </Box>{' '}
            <Box as="strong" whiteSpace="nowrap" color={linkColor}>
              <Typing />
            </Box>{' '}
            {/* from{' '}
            <Box as="strong" whiteSpace="nowrap">
              India 🇮🇳.
            </Box> */}
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            I enjoy designing and developing solutions to challenging problems.
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            People say that, I get a handle on things quickly! 🤷‍♂️
          </Box>
          <Box mt={5} textAlign="left">
            <Link href="/resume">
              <Button colorScheme="accent" variant="outline" rightIcon={<AiOutlineArrowRight />}>
                View Resume
              </Button>
            </Link>
          </Box>
        </MotionFlex>
      </Flex>

      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
        zIndex={1}
      >
        <Box mt={10}>
          {/* <ContentBox linkColor={linkColor} /> */}
          {/* <PopularArticles posts={posts} /> */}
          <Projects projects={projectsList} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
