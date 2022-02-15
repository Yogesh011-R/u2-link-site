import React from 'react';
import Layout from '../../components/Layout/Layout';
import SupportHeader from '../../components/SupportHeader';
import { TermNConditionsData } from '../../constants/supportData';

const TermsNConditions = () => {
  let styles;
  return (
    <Layout
      title='Term and Conditions - U2Lynk'
      description='Term and Conditions'
    >
      <div className='container mx-auto mb-24 px-4 sm:px-0'>
        <SupportHeader title='Terms & Conditions' />
        <div className={'termsMain'}>
          <h2>
            These are the terms and conditions which apply to any competition,
            prize draw, or promotion that our partners and we may run, whether
            on our websites or theirs, social media platforms, and more. In
            these terms and conditions, '<b>we</b>' , '<b>us</b> ', '<b>our</b>{' '}
            ' and '<b>Promoter</b> ' all mean _____________. Our registered
            address is:
          </h2>
        </div>
        <div className={'TermNConditionsList'}>
          <h1>Following are the terms and conditions you should know:</h1>
          <ul>
            {TermNConditionsData?.map((data, index) => {
              return <li key={data.id}>{data.term}</li>;
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default TermsNConditions;
