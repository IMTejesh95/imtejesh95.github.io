import { Button, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import PageLayout from 'components/layouts/pageLayout';
import { PageSlideFade } from 'components/shared/animations/page-transitions';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import Link from 'next/link';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import styles from './resume.module.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resume = '/assets/pdfs/tejesh_chauragade_230522.pdf';
const updatedOn = (
  <i>
    23<sup>rd</sup> May 2022
  </i>
); 

const Resume: NextPage = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <PageLayout title="Resume" keywords="resume, tejesh, chauragade, software, engineer">
      <PageSlideFade>
        <VStack marginTop={3} marginBottom={5}>
          <Document file={resume} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              className={styles['resume_page_light']}
            />
          </Document>
          <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.200')} textAlign="left">
            <i>Latest updated on {updatedOn}</i>
          </Text>
        </VStack>
        <VStack>
          <Link href={resume}>
            <a target="_blank">
              <Button colorScheme="accent" variant="outline" style={{ maxWidth: '250px' }}>
                <AiOutlineCloudDownload />
                &nbsp;Download
              </Button>
            </a>
          </Link>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
};

export default Resume;
