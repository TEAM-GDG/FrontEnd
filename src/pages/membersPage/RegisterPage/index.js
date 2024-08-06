import React, { useState } from 'react';
import PurposeSelect from './PurposeSelect';
import RegisterMain from './RegisterMain';

const RegisterPage = () => {
  const [purpose, setPurpose] = useState(undefined);

  const [completeSelect, setCompleteSelect] = useState(false);

  return (
    <div className="container">
      {!completeSelect ? (
        <PurposeSelect
          purpose={purpose}
          setPurpose={setPurpose}
          setCompleteSelect={setCompleteSelect}
        />
      ) : purpose ? (
        <RegisterMain purpose={purpose} />
      ) : null}
    </div>
  );
};

export default RegisterPage;
