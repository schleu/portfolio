export const filterOptions = ["recente", "antigo"] as const;

export type FilterAboutType = (typeof filterOptions)[number];