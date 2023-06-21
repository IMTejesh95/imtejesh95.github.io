import { Box, Button, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import PageLayout from 'components/layouts/pageLayout';
import { PageSlideFade } from 'components/shared/animations/page-transitions';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import Link from 'next/link';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import styled from '@emotion/styled';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resume = '/assets/pdfs/TejeshChauragadeResume.pdf';
const updatedOn = (
  <i>
    22<sup>nd</sup> June 2023
  </i>
);

const Resume: NextPage = () => {
  const [width, setWidth] = useState(1200);

  const PDFDocumentWrapper = styled.div`
    canvas {
      width: 100% !important;
      height: auto !important;
    }
    .react-pdf__Page__canvas {
      width: 100% !important;
      height: auto !important;
    }
  `;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <PageLayout title="Resume" keywords="resume, tejesh, chauragade, software, engineer">
      <PageSlideFade>
        <VStack marginTop={3} marginBottom={5}>
          <PDFDocumentWrapper>
            <Document file={resume}>
              <Box border="#e2e8f0 solid 15px" _dark={{ border: '#4e5b70 solid 15px' }}>
                <Page
                  pageNumber={1}
                  // scale={width > 786 ? 1.7 : 0.6}
                />
              </Box>
            </Document>
          </PDFDocumentWrapper>
          <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.200' }} textAlign="left">
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
