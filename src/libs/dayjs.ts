import dayJS from 'dayjs'

import 'dayjs/locale/pt'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import * as duration from 'dayjs/plugin/duration'

dayJS.extend(relativeTime.default)
dayJS.extend(duration.default)
dayJS.locale('pt')

export const dayjs = dayJS
