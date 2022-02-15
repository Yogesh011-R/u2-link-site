import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { returnNRefundData } from '../../constants/supportData';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SupportHeader from '../../components/SupportHeader';

const ReturnNRefund = () => {
  return (
    <Layout title='Return and Refund - U2Lynk' description='Return and Refund'>
      <div className={'rnrContainer container mx-auto mb-24 px-4 sm:px-0'}>
        <SupportHeader title='Return and Refund' />
        <h2>
          We want our customers to love the experience of shopping with us and
          feel happy with their purchases, but if something is not right, let us
          know. You can return if the order is not as expected as what you
          expected. Once received, the customer care team at ____________ would
          inspect the product for the need for exchange, and based on their
          jurisdiction, we will refund.
        </h2>
        <div className={'rnrFaqs'}>
          <h1>Frequently asked questions</h1>
          <h3>
            You can return many items sold on __________________. When you
            return an item, you may see different return options depending on
            the seller, item, or reason for return.
          </h3>
        </div>
        <div
          className={`support--pages__accordion--styles`}
          style={{ marginBottom: '3.5rem' }}
        >
          {returnNRefundData?.map((faq, index) => {
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
    </Layout>
  );
};

export default ReturnNRefund;
