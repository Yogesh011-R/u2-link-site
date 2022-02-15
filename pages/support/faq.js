import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqsData } from '../../constants/supportData';
import SupportHeader from '../../components/SupportHeader';

const Faq = () => {
  return (
    <Layout title='FAQ - U2Lynk' description='Frequentle Asked Questions'>
      <div
        className={` support--pages__accordion--styles container mx-auto mb-24 px-4 sm:px-0 `}
      >
        <SupportHeader title='FAQs' />
        {faqsData?.map((faq, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <h1>{faq.question}</h1>
              </AccordionSummary>
              <AccordionDetails>
                <h4>{faq.answer}</h4>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </Layout>
  );
};

export default Faq;
