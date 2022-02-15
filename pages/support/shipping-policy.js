import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import SupportHeader from '../../components/SupportHeader';
import { shippingPolicyData } from '../../constants/supportData';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ShippingPolicy = () => {
  return (
    <Layout title='Shipping - U2Lynk' description='Shipping Policy'>
      <div className='container mx-auto mb-24 px-4 sm:px-0'>
        <SupportHeader title='Shipping Policy' />
        <div>
          <div className={'cancellationMain'}>
            <h3>
              We’re partnered with delivery merchants like __________ to secure
              the best national/international shipping with the best rates for
              you to know and trust.
              <b>Free shipping is available for customers in India.</b>
            </h3>
          </div>
          <div className={'cancellationFaqs'}>
            <h1>Frequently asked questions</h1>
          </div>
          <div
            className={`support--pages__accordion--styles`}
            style={{ marginBottom: '3.5rem' }}
          >
            {shippingPolicyData?.map((faq, index) => {
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
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPolicy;
