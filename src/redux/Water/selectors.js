export const waterSelectors = {
  selectDayWater: (state) => state.water.itemsDay || [],
  selectMonthWater: (state) => state.water.itemsMonth || [],
  selectTotalWaterPerDay: (state) => state.water.totalWaterPerDay,
  selectWaterPercentage: (state) => state.water.waterPercentage,
  selectIsLoading: (state) => state.water.isLoading,
  selectIsError: (state) => state.water.isError,
};

export const { selectTotalWaterPerDay } = waterSelectors;
export const { selectIsLoading } = waterSelectors;
export const { selectDayWater } = waterSelectors;
