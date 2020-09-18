import React, { memo } from 'react';
import { block } from 'bem-cn';


import { InviteBlock } from './components/InviteBlock.jsx';



const bemReferral = block('referral');
const cnHeader = bemReferral('header');

export const Referral  = memo(({ theme }) => {
  const code = '234490';
  const reward = '5%';
  const handleCreatePromoCode = () => console.log('CREATE REFERRAL CODE');
  const address = 'https://tokenexus.com/faq/';
  const translations = {
    header: 'Referral Program',
    subHeader: 'InviteBlock your friends to register and trade on Tokenexus.com, and you and your friends can share up to 40% of the referral commissions from their trading fees.',
    inviteButton: 'Invite Now',
    codeLabel: 'Your referral code',
    commissionLabel: 'You receive:',
    commissionText: 'of Trading Commission',
    linkText: 'Detailed Rules',
  };

  return (
    <div>
      <div className={ bemReferral() }>
        <div className={ cnHeader }>
          { translations.header }
        </div>
        <InviteBlock
          reward={ reward }
          code={ code }
          translations={ translations }
          createCode={ handleCreatePromoCode }
          link={ address }
        />
      </div>
    </div>
  );
});

