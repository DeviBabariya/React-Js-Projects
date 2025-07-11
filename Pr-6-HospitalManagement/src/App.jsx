import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

import Header from './Components/Header';
import AdmitForm from './Components/Form';
import Details from './Components/Details';

const App = () => {
  const [patients, setPatients] = useState(() => {
    const stored = localStorage.getItem('patients');
    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [editPatient, setEditPatient] = useState(null);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const handleAdd = () => {
    setEditPatient(null);
    setShowForm(true);
  };

  const handleSave = (formData) => {
    if (formData.id) {
     
      const updated = patients.map(p =>
        p.id === formData.id ? formData : p
      );
      setPatients(updated);
    } else {
    
      const newPatient = { ...formData, id: uuidv4() }; 
      setPatients(prev => [...prev, newPatient]);
    }

    setEditPatient(null);
    setShowForm(false);
  };

  const handleEdit = (patient) => {
    setEditPatient({ ...patient });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setPatients(prev => prev.filter(p => p.id !== id));
  };

  return (
    <>
      <Header onAdd={handleAdd} />
      {showForm ? (
        <AdmitForm
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
          initialData={editPatient}
        />
      ) : (
        <Details
          patients={patients}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default App;

