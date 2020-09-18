import React, { memo } from 'react';
import { block } from 'bem-cn';

const bemCommissionBlock = block('commission-block');
const cnCommissionBlock = bemCommissionBlock('commission-block');
const cnCommissionLabel = bemCommissionBlock('commission-label');
const cnRewardText = bemCommissionBlock('reward-text');
const cnCommissionText = bemCommissionBlock('commission-text');
const cnHelpLink = bemCommissionBlock('help-link');
const cnLinkText = bemCommissionBlock('link-text');

export const CommissionBlock = memo(({
  translations, reward, link,
}) => {
  const {
    commissionLabel, commissionText, linkText,
  } = translations;

  return (
    <div className={ cnCommissionBlock }>
      <div className={ cnCommissionLabel }>
        { commissionLabel }
      </div>
      <div className={ cnRewardText }>
        { reward }
      </div>
      <div className={ cnCommissionText }>
        { commissionText }
      </div>
      <a
        href={ link }
        target="_blank"
        className={ cnHelpLink }
      >
        <div className={ cnLinkText }>
          { linkText }
        </div>
      </a>
    </div>
  );
});
