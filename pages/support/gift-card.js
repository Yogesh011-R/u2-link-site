import React from 'react';
import Layout from '../../components/Layout/Layout';
import SupportHeader from '../../components/SupportHeader';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { giftCardsData } from '../../constants/supportData';

const GiftCard = () => {
  return (
    <Layout title='Gift Card - U2Lynk' description='Gift Card '>
      <div className='container mx-auto mb-24 px-4 sm:px-0'>
        <SupportHeader title='Gift Card ' />
        <div>
          <div className={'cancellationMain'}>
            <h3>
              Gift cards are an ideal way to show your love and affection. If
              you’re one of those people who takes a long time to choose a gift
              or if you can’t decide what to get your family, friends, or a
              colleague, there’s a simple solution for this - ____________ gift
              cards.
              <br />
              <br />
              If you have irregular working hours and do not have time to do
              shopping or a special occasion is around the corner, and you’re
              still wondering what to get, then ____________ gift cards are the
              best option for you. Send your loved ones ____________ vouchers
              and give them the freedom of choosing what their heart desires the
              most.
              <br />
              <br />
              At ____________ redeem vouchers offer a great way to let the
              recipient choose what they want. Gift coupons range from [add
              price range]. You can choose a voucher as per the category
              provided by _______________. You can give them gift cards from
              various designers.
            </h3>
          </div>
          <div className={'cancellationFaqs'}>
            <h1>Frequently asked questions</h1>
          </div>
          <div
            className={`support--pages__accordion--styles`}
            style={{ marginBottom: '3.5rem' }}
          >
            {giftCardsData?.map((faq, index) => {
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

export default GiftCard;
