import { mockPmsAdapter } from "@/lib/pms/mock";
import { ownerRezPmsAdapter } from "@/lib/pms/ownerrez";
import { PmsAdapter } from "@/lib/pms/types";

/**
 * Single switch point for the whole app's booking-engine data source.
 * Set PMS_PROVIDER=ownerrez in .env.local once real API credentials
 * exist. Defaults to sample data so the site is fully demoable today.
 */
function selectAdapter(): PmsAdapter {
  const provider = process.env.PMS_PROVIDER ?? "mock";
  switch (provider) {
    case "ownerrez":
      return ownerRezPmsAdapter;
    case "mock":
    default:
      return mockPmsAdapter;
  }
}

export const pms = selectAdapter();
export * from "@/lib/pms/types";
