import React from 'react';
import Missions from './Missions';

export default function MissionsContainer() {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th> </th>
            </tr>
          </thead>
          <Missions />
        </table>
      </div>
    </>
  );
}
