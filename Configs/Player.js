export const Player = {
    hp: 100,
    maxHp: 100,
    baseMaxHp: 100,
    baseAtk: 5,
    gold: 100,
    depth: 0,
    class: null,

    permanentCritBonus: 0,
    lilithBlessing: false,      // 是否獲得祝福 (在場證明 - 莉莉絲生存/真愛結局用)
    lilithSacrificed: false,    // [NEW] 莉莉絲是否已犧牲 (防止重複觸發/勝利結局用)
    lastInspirationTurns: 0,    // 最後的鼓舞剩餘回合
    chaosRoll: 1,
    transcendenceRoll: 1, // [新增] 用於儲存超越魔方的倍率
    fairyEnhanceCount: 0,   // 精靈強化次數 (一般世界)
    elderEnhanceCount: 0,   // 長老強化次數 (煉獄世界)
    // [NEW] 新增：永久生命加成 (末世之鎧用)
    permanentHpBonus: 0,
    equipment: { weapon: null, armor: null, shield: null, accessories: [null, null, null] },
    inventory: {
        equipment: [],
        consumable: [
            { name: "治療藥水", type: "consumable", val: 30, rarity: "common", price: 25, icon: "🧪", desc: "恢復30點生命" }
        ],
        material: [],
        accessory: []
    },
    buff: null,
    debuff: null,
    achievements: new Set(),
    history: { items: new Set() },
    kill1000Boss: false,
    inInferno: false,
    chaosRoll: 1,

    // [FIX] 變數必須放在這裡，程式才讀得到
    souls: 0,
    ghostTurns: 0,
    bloodContractAtk: 0,

    // [NEW] 新增七宗罪狀態追蹤
    sinState: {
        slothCount: 0,     // 懶惰詛咒剩餘場次
        wrathRevive: 0,    // 狂戰士復活次數
        lustActive: false, // 是否有媚氣環繞
        greedActive: false // 是否有黃金枷鎖
    },
    succubusStage: 0, // [NEW] 0=初遇, 1=認識, 2=害羞, 3=完成

    // [NEW] 自動略過祈禱聖像
    autoSkipStatue: false
};