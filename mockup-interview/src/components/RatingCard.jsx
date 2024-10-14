import React from 'react';
import styles from './RatingCard.module.css';

function RatingCard({ rating, feedback }) {
  const stars = Array(rating).fill('★').join('');

  return (
    <div className={styles.card}>
      <div className={styles.stars}>{stars}</div>
      <p className={styles.feedback}>{feedback}</p>
    </div>
  );
}

export default RatingCard;
