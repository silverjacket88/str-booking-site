import { galleryPhotos } from "@/lib/data/galleryPhotos";
import { deterministicShuffle } from "@/lib/utils/weeklyRotation";

const CABIN_POOLS = [galleryPhotos.riverCabin, galleryPhotos.chasingSunset, galleryPhotos.wthCabin];
const COUNTS = [7, 7, 6]; // 20 total, roughly even across the 3 cabins

/** Picks a fresh-feeling set of 20 photos (evenly split across cabins) for a given week. */
export function pickWeeklyPhotos(weekNumber: number): string[] {
  const picks: string[] = [];
  CABIN_POOLS.forEach((pool, i) => {
    const count = Math.min(COUNTS[i], pool.length);
    const start = (weekNumber * count) % pool.length;
    for (let j = 0; j < count; j++) {
      picks.push(pool[(start + j) % pool.length]);
    }
  });
  return deterministicShuffle(picks, weekNumber);
}
