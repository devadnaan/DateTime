import { DateRangePicker } from 'rsuite';

import styles from './style.module.css';
import 'rsuite/dist/rsuite.min.css'


export default function index() {
  return (
    <>
      <div className={styles.container}>
        <DateRangePicker placeholder={'Date Range Picker'} />
      </div>
      <div className={styles.container}>
        <DateRangePicker
          placeholder={'Date Time Picker'}
          format="yyyy-MM-dd HH:mm:ss"
          defaultCalendarValue={[new Date('2022-02-01 00:00:00'), new Date('2022-05-01 23:59:59')]}
        />
      </div>


      {/* Date Time picker with AM and PM */}
      <div className={styles.container}>
        <DateRangePicker
          placeholder={'Date Time Picker'}
          format="yyyy-MM-dd HH:mm:ss"
          showMeridian
          defaultCalendarValue={[new Date('2022-02-01 00:00:00'), new Date('2022-05-01 23:59:59')]}
        />
      </div>
    </>
  )
}
