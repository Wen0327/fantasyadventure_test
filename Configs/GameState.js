export const GameState = {
  phase: "select_class",
  forgeUsed: false, // [NEW] 追蹤爐火是否已使用
  merchantRefreshed: false,
  combatTurn: 0, // [NEW] 追蹤戰鬥回合數
  enemyDominated: false, // [NEW] 舊日支配者效果
  currentEnemy: null,
  merchantStock: [],
  craftingCount: 0,
  log: [],
  isLoading: false,
  compendiumTab: "items",
  currentSinType: null, // [NEW] 紀錄當前罪惡類型，用於戰鬥鎖定
};
