import { Ref } from 'vue-demi'
import {
  format,
  Duration,
} from 'date-fns'
import id from 'date-fns/locale/id/index'
import en from 'date-fns/locale/en-US/index'
import { getLang } from '../../global/store'
import { chunk } from 'lodash-es'

const localePacks = { en, id }

export interface CalendarItem {
  value: Date,
  text: string,
  disabled: boolean,
  readonly: boolean,
  active: boolean,
  head: boolean,
  tail: boolean,
}

export interface CalendarContext {
  cursor: Ref<Date>,
  start: Ref<Date>,
  end: Ref<Date>,
  min: Ref<Date | undefined>,
  max: Ref<Date | undefined>,
}

export interface CalendarAdapter {
  getItems: (this: this, context: CalendarContext) => CalendarItem[],
  getTitle: (this: this, context: CalendarContext) => string,
  getNextCursor: (this: this, context: CalendarContext) => Date,
  getPrevCursor: (this: this, context: CalendarContext) => Date,

  canNext: (this: this, context: CalendarContext) => boolean,
  canPrev: (this: this, context: CalendarContext) => boolean,
}

export const CalendarFormat = [
  'date',
  'month',
  'year',
] as const

export type CalendarMode = typeof CalendarFormat[number]

export function defineAdapter (adapter: CalendarAdapter): CalendarAdapter {
  return adapter
}

/**
 * Format date using date-fns/format,
 * Automatically switch local following global lang setting.
 * @param date Date
 * @param formatStr date format
 */
export function formatDate (date: Date, formatStr: string): string {
  return format(date, formatStr, { locale: localePacks[getLang()] })
}

const DURATION_SUFFIX = {
  Y: 'years',
  y: 'years',
  M: 'months',
  W: 'weeks',
  w: 'weeks',
  D: 'days',
  d: 'days',
  H: 'hours',
  h: 'hours',
  m: 'minutes',
  s: 'seconds',
} as const

type DURATION_TOKEN = keyof typeof DURATION_SUFFIX

const DURATION_REGEX = /((-?\d+)([DHMWYdhmswy]))/

export function validateDuration (duration?: string) {
  if (!duration)
    return false

  const match   = duration.split(DURATION_REGEX).filter(Boolean)
  const segment = chunk(match, 3)

  return segment.every(([text]) => text.match(DURATION_REGEX))
}

export function parseDuration (duration?: string): Duration | undefined {
  if (!duration)
    return

  const match   = duration.split(DURATION_REGEX).filter(Boolean)
  const segment = chunk(match, 3)

  const result: Duration = {}

  for (const item of segment) {
    const key   = DURATION_SUFFIX[item[2] as DURATION_TOKEN]
    const value = Number.parseInt(item[1])

    result[key] = value + (result[key] ?? 0)
  }

  return result
}
