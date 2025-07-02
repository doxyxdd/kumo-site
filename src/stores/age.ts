import { persistentAtom } from "@nanostores/persistent";

export type AdultStatus = 'yes' | 'no' | 'unknown';

export const adult = persistentAtom<AdultStatus>('adult', 'unknown');
