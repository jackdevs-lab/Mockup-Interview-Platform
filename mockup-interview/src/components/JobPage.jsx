import React, { useState } from 'react';
import styles from './JobPage.module.css';

function JobPage() {
  const [jobDescription, setJobDescription] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Description:', jobDescription);
    console.log('Years of Experience:', yearsOfExperience);
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Enter Job Details</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Job Description</label>
          <input
            type="text"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className={styles.input}
            placeholder="e.g. Software Engineer"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Years of Experience</label>
          <input
            type="number"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            className={styles.input}
            placeholder="e.g. 3"
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default JobPage;
