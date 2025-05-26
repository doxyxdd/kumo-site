import type { CollectionEntry } from "astro:content"


export const baldursGateActs = ["Prologue", "Act 1", "Act 2", "Act 3"] as const
export type BaldursGateAct = typeof baldursGateActs[number]

export type BaldursGateSession = CollectionEntry<'baldursGate'>


export function mapByActs(sessions: BaldursGateSession[]): Record<BaldursGateAct, BaldursGateSession[]> {
  return sessions.reduce((map, value) => {
      if (!map.hasOwnProperty(value.data.act)) {
        map[value.data.act] = []
      }
      map[value.data.act].push(value)
      return map;
  }, {} as Record<BaldursGateAct, BaldursGateSession[]>)
}
