import React, { useState } from 'react';
import FormList from './FormList';
import FormDetail from './FormDetail';

const FormsPage = () => {
  const [selectedFormId, setSelectedFormId] = useState(null);

  return (
    <div>
      {!selectedFormId ? (
        <FormList onSelectForm={setSelectedFormId} />
      ) : (
        <FormDetail formId={selectedFormId} onBack={() => setSelectedFormId(null)} />
      )}
    </div>
  );
};

export default FormsPage;