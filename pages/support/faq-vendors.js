import React from 'react';
import SupportHeader from '../../components/SupportHeader';
import { faqsVendorsData } from '../../constants/supportData';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from '../../components/Layout/Layout';

const FaqVendors = () => {
  return (
    <Layout
      title='FAQ Vendors - U2Lynk'
      description='Frequentle Asked Questions Vendors'
    >
      <div
        className={` support--pages__accordion--styles container mx-auto mb-24 px-4 sm:px-0 `}
      >
        <SupportHeader title='FAQs Vendors' />
        {faqsVendorsData?.map((faq, index) => {
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

export default FaqVendors;
