const cutoffs = [
  60, // minute
  3600, // hour
  86400, // day
  86400 * 7, // week
  86400 * 30, // month
  86400 * 365, // year
  Infinity
];

const units: Intl.RelativeTimeFormatUnit[] = [
  "second",
  "minute",
  "hour",
  "day",
  "week",
  "month",
  "year"
]

export function getRelativeTime(date: Date, lang = navigator.language) {
  const deltaSeconds = Math.round((date.getTime() - Date.now()) / 1000)

  const absDiff = Math.abs(deltaSeconds)

  const unitIndex = cutoffs.findIndex(cutoff => cutoff > absDiff)

  const divisor = unitIndex === 0 ? 1 : cutoffs[unitIndex - 1]

  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" })
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
}
