import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchDoctors } from '../features/doctors/doctorThunks';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: doctors, loading, error } = useSelector((state: RootState) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Healthcare Dashboard</h2>

      {loading && <p>Loading doctors...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Experience</th>
            <th>Hospital</th>
            <th>Shift</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr key={doc._id}>
              <td>{doc.name}</td>
              <td>{doc.specialization}</td>
              <td>{doc.email}</td>
              <td>{doc.phone}</td>
              <td>{doc.experience}</td>
              <td>{doc.hospital}</td>
              <td>{doc.shift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

const styles: { [key: string]: React.CSSProperties } = {
  container: { padding: '20px', maxWidth: '900px', margin: '0 auto' },
  title: { textAlign: 'center', marginBottom: '20px' },
  table: { width: '100%', borderCollapse: 'collapse' },
};