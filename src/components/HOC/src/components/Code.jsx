import React, {
  memo,
} from 'react';

import { block } from 'bem-cn';
import { Button } from "../../../styledComponent";


const bemCodeBlock = block('codeBlock');


export const Code = memo(({ code, translations }) => {

  const { codeLabel } = translations;

  return (
    <div className={ bemCodeBlock() }>
      <div>
        { `${codeLabel}: ${!code ? '-' : ''}` }
      </div>
      <div id="referralCode">
        { code }
      </div>
      <Button
        type="button"
        className="btn-copy-code"
        data-clipboard-action="copy"
        data-clipboard-target="#referralCode"
      >
          Copy
      </Button>
    </div>
  );
});
