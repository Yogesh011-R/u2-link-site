import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import SupportHeader from '../../components/SupportHeader';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { cancellations } from '../../constants/supportData';

const Cancellations = () => {
  return (
    <Layout title='Cancellations - U2Lynk' description='Privacy Policy'>
      <div className='container mx-auto mb-24 px-4 sm:px-0'>
        <SupportHeader title='Cancellations' />
        <div>
          <div className={'cancellationMain'}>
            <h3>
              We are well aware that you are all excited to receive your
              products ASAP. Regrettably, when you change your mind and choose
              to cancel your orders, please note that you can cancel the order
              before we process it. Once the order is processed, we do not
              entertain any cancellation requests.
              <br />
              <br />
              You may also send an email on ________________________
              <br />
              <br />
              Please be advised that some orders are shipped almost immediately,
              and it may not always be possible to cancel.
            </h3>
          </div>
          <div className={'cancellationFaqs'}>
            <h1>Frequently asked questions</h1>
          </div>
          <div
            className={`support--pages__accordion--styles`}
            style={{ marginBottom: '3.5rem' }}
          >
            {cancellations?.map((faq, index) => {
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

export default Cancellations;
