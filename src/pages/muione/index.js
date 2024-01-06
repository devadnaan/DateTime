import * as React from 'react';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import styles from './style.module.css';

export default function index() {
  return (
    <>
      {/* first */}
      <div className={styles.container}>
        <DateTimePicker label="From" />
        <DateTimePicker label="To" />
      </div>

      {/* Second */}
      <div className={styles.container}>
        <DateTimePicker
          label="From"
          viewRenderers={{
            hours: null,
            minutes: null,
            seconds: null,
          }}
        />
        <DateTimePicker
          label="To"
          viewRenderers={{
            hours: null,
            minutes: null,
            seconds: null,
          }}
        />
      </div>
    </>
  )
}
