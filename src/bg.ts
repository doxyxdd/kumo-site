import type { CollectionEntry } from "astro:content"


export const baldursGateActs = ["Prologue", "Act 1", "Act 2", "Act 3"] as const
export type BaldursGateAct = typeof baldursGateActs[number]

export type BaldursGateSession = CollectionEntry<'baldursGate'>

const actIndexes = baldursGateActs.entries().reduce((acc, entry) => {
  acc[entry[1]] = entry[0]
  return acc;
}, {} as Record<BaldursGateAct, number>)



export function mapByActs(sessions: BaldursGateSession[]): Record<BaldursGateAct, BaldursGateSession[]> {
  return sessions.reduce((map, value) => {
      if (!map.hasOwnProperty(value.data.act)) {
        map[value.data.act] = []
      }
      map[value.data.act].push(value)
      return map;
  }, {} as Record<BaldursGateAct, BaldursGateSession[]>)
}
