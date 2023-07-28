import React from 'react';
import Missions from './Missions';
import styles from './MissionContainer.module.css';

export default function MissionsContainer() {
  return (
    <>
      <div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.table_titles}>
              <th className={styles.table_title_mission}>Mission</th>
              <th className={styles.table_title_description}>Description</th>
              <th className={styles.table_title_status}>Status</th>
              <th className={styles.table_title_empty}> </th>
            </tr>
          </thead>
          <Missions />
        </table>
      </div>
    </>
  );
}
