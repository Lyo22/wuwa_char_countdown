
import { DateTime } from 'luxon';

export function parserTime(date:number, serverTimeZone: string | undefined, userTimeZone: string) {

const utc = DateTime.fromISO(new Date(date).toISOString(), { zone: 'utc' });
const inServer = utc.setZone(serverTimeZone);

const fromServerToUser = DateTime.fromObject(
  {
    year: utc.year,
    month: utc.month,
    day: utc.day,
    hour: utc.hour,
    minute: utc.minute,
    second: utc.second
  },
  { zone: serverTimeZone}
).setZone(userTimeZone);


  return [inServer.toISO(), fromServerToUser.toISO()]

}


