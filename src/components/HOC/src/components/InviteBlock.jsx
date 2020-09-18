import React, { memo } from 'react';
import { block } from 'bem-cn';

import { Code } from './Code';
import { CommissionBlock } from './CommissionBlock';
import { Button } from "../../../styledComponent";

const bemInviteBlock = block('invite-block');
const cnInviteBlockSubHeader = bemInviteBlock('sub-header');
const cnInviteBlockInviteBtn = bemInviteBlock('invite-button');
const cnCodeWrapper = bemInviteBlock('code-wrapper');

export const InviteBlock = memo(({
  code, translations, createCode, reward, link,
}) => {
  const {
    subHeader, inviteButton,
  } = translations;

  return (
    <div className={ bemInviteBlock() }>
      <div className={ cnInviteBlockSubHeader }>
        { subHeader }
      </div>
      <Button
        onClick={ createCode }
        className={ cnInviteBlockInviteBtn }
      >
        { inviteButton }
      </Button>
      <div className={ cnCodeWrapper }>
        <Code code={ code } translations={ translations } />
        <CommissionBlock reward={ reward } link={ link } translations={ translations } />
      </div>
    </div>
  );
});
