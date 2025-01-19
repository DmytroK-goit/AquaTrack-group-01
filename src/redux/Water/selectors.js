export const waterSelectors = {
  selectDayWater: (state) => state.water.itemsDay || [],
  selectMonthWater: (state) => state.water.itemsMonth || [],
  selectTotalWaterPerDay: (state) => state.water.totalWaterPerDay || 0,
  selectWaterPercentage: (state) => state.water.waterPercentage || 0,
  selectIsLoading: (state) => state.water.isLoading,
  selectIsError: (state) => state.water.isError,
};

export const { selectTotalWaterPerDay } = waterSelectors;
export const { selectIsLoading } = waterSelectors;
export const { selectDayWater } = waterSelectors;
export const { selectMonthWater } = waterSelectors;
