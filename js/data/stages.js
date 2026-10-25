/**
 * 关卡档案 · 数据来源：BWIKI（wiki.biligame.com/sr）
 *
 * 每期只记录页面明确给出的内容：
 * - 期名、版本、开始 / 结束时间
 * - 环境效果原文（记忆紊流 / 战意机制 / 末法余烬等）
 * - 混沌回忆的层级、波次、敌人名称与建议属性
 * - 虚构叙事的上下半与波次敌人
 * - 末日幻影的首领幻影名称
 * - 异相仲裁的骑士 / 王棋节点与波次敌人
 *
 * 未给出的敌方组合、奖励与难度评分不生成，不用推算值填充。
 * 期号在不同页面存在不一致时保留原文；界面以版本 + 期名为主。
 * 本项目与 miHoYo / HoYoverse 无任何隶属或授权关系。
 */

export const STAGE_TYPES = {
  "moc": {
    "key": "moc",
    "name": "混沌回忆",
    "en": "Memory of Chaos",
    "icon": "✦",
    "color": "#8f7bff",
    "startVersion": "1.0",
    "cadence": "约每 6 周轮换",
    "desc": "忘却之庭的常驻高难关卡。按期轮换敌人与「记忆紊流」环境效果，设多层节点，每层可分别编队。"
  },
  "pf": {
    "key": "pf",
    "name": "虚构叙事",
    "en": "Pure Fiction",
    "icon": "❖",
    "color": "#4fc3a1",
    "startVersion": "1.6",
    "cadence": "约每 6 周轮换",
    "desc": "以「战意值」与连续击杀为核心的高难关卡。每期四个关卡，各分上下半，按波次累计积分。"
  },
  "as": {
    "key": "as",
    "name": "末日幻影",
    "en": "Apocalyptic Shadow",
    "icon": "◈",
    "color": "#e0a34f",
    "startVersion": "2.3",
    "cadence": "每 42 天轮换",
    "desc": "双队伍挑战首领幻影的高难关卡。每关分两个节点，以两场战斗总积分结算，并设「末法余烬」与「终焉公理」。"
  },
  "aa": {
    "key": "aa",
    "name": "异相仲裁",
    "en": "Anomaly Arbitration",
    "icon": "♛",
    "color": "#ff7a9c",
    "startVersion": "3.6",
    "cadence": "随版本轮换",
    "desc": "3 名骑士 + 1 个王棋的高难关卡。骑士关使用三支不重复队伍，每关 6 轮行动值；通关骑士关可削弱王棋。"
  }
};

export const STAGES = [
  {
    "id": "moc-10-第001003期-琥珀恩赐",
    "mode": "moc",
    "name": "第001 ~ 003期-琥珀恩赐",
    "season": null,
    "version": "1.0",
    "startDate": "2023-05-29",
    "endDate": "2023-06-12",
    "effects": [
      "第003期持续时间：2023/05/29 04:00 ~ 2023/06/12 03:59",
      "第002期持续时间：2023/05/15 04:00 ~ 2023/05/29 03:59",
      "第001期持续时间：2023/04/26 04:00 ~ 2023/05/15 03:59",
      "记忆紊流：每个轮开始时，随机使1名我方「巡猎」或「智识」命途目标立即行动，并使其造成的伤害提高50%，持续1回合。"
    ],
    "levels": [
      {
        "label": "琥珀恩赐其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "银鬃射手",
              "银鬃近卫",
              "银鬃炮手"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "银鬃尉官"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "银鬃炮手",
              "布洛妮娅（敌方）"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•战犬"
            ],
            "elements": [
              "量子",
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•战犬",
              "自动机兵•齿狼"
            ],
            "elements": [
              "量子",
              "雷",
              "冰"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者"
            ],
            "elements": [
              "量子",
              "雷",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "琥珀恩赐其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "霜晶造物",
              "永冬灾影"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "霜晶造物",
              "深寒徘徊者"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "外宇宙之冰"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•战犬",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "琥珀恩赐其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "守护者之影"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "外宇宙之冰",
              "守护者之影"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "反重子",
              "虚卒•抹消者",
              "虚卒•掠夺者",
              "虚卒•篡改者"
            ],
            "elements": [
              "虚数",
              "风",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "重子",
              "虚卒•掠夺者",
              "虚卒•践踏者",
              "虚卒•抹消者"
            ],
            "elements": [
              "虚数",
              "风",
              "物理"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "风",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "琥珀恩赐其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "永冬灾影",
              "无想面具"
            ],
            "elements": [
              "虚数",
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "永冬灾影",
              "兴风者",
              "无想面具"
            ],
            "elements": [
              "虚数",
              "冰",
              "火"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "兴风者"
            ],
            "elements": [
              "虚数",
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•战犬",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•战犬",
              "自动机兵•齿狼",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷"
            ]
          }
        ]
      },
      {
        "label": "琥珀恩赐其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "炎华造物",
              "火焚灾影"
            ],
            "elements": [
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "火焚灾影",
              "炽燃徘徊者"
            ],
            "elements": [
              "冰"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "外宇宙之炎"
            ],
            "elements": [
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "虚数织叶者",
              "无想面具"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "外宇宙之冰",
              "无想面具"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "可可利亚（敌方）",
              "外宇宙之冰"
            ],
            "elements": [
              "量子",
              "火"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-11-006",
    "mode": "moc",
    "name": "风暴止息",
    "season": "006",
    "version": "1.1",
    "startDate": "2023-07-10",
    "endDate": "2023-07-24",
    "effects": [
      "记忆紊流：每个轮开始时，使当前生命值百分比大于80%的我方目标攻击力提高50%，持续1回合。"
    ],
    "levels": [],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-11-005",
    "mode": "moc",
    "name": "蹈冰寻火",
    "season": "005",
    "version": "1.1",
    "startDate": "2023-06-26",
    "endDate": "2023-07-10",
    "effects": [
      "记忆紊流：每个轮开始时，对敌方全体施加一层【记忆印记】，目标每有一个其他负面效果，额外叠加一层【记忆印记】，每层【记忆印记】使目标防御力降低6%，最多叠加5层，该效果在下个轮开始时重置。"
    ],
    "levels": [],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-11-004",
    "mode": "moc",
    "name": "寒铁砥砺",
    "season": "004",
    "version": "1.1",
    "startDate": "2023-06-12",
    "endDate": "2023-06-26",
    "effects": [
      "记忆紊流：每个轮开始时，对敌方全体施加一层【记忆印记】，目标每有一个其他负面效果，额外叠加一层【记忆印记】，每层【记忆印记】使目标造成的伤害降低4%，最多叠加5层，该效果在下个轮开始时重置。"
    ],
    "levels": [
      {
        "label": "其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流浪者",
              "自动机兵•甲虫"
            ],
            "elements": [
              "虚数",
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷",
              "冰"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "炽燃徘徊者"
            ],
            "elements": [
              "虚数",
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "肃风之杪",
              "繁花之杪"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "入魔机巧•灯昼龙鱼",
              "金人司阍"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "丰饶玄鹿"
            ],
            "elements": [
              "量子"
            ]
          }
        ]
      },
      {
        "label": "其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "炎华造物",
              "永冬灾影"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "永冬灾影",
              "外宇宙之炎"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "守护者之影",
              "外宇宙之炎"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "流浪者",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•战犬",
              "自动机兵•齿狼",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "重子",
              "虚卒•篡改者",
              "虚卒•掠夺者"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "鸣雷造物",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "霜晶造物",
              "炎华造物",
              "永冬灾影"
            ],
            "elements": [
              "风",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "蚕食者之影"
            ],
            "elements": [
              "风",
              "火"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "外宇宙之冰",
              "蚕食者之影"
            ],
            "elements": [
              "风",
              "火"
            ]
          }
        ]
      },
      {
        "label": "其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴身士卒",
              "鸣雷造物"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "魔阴身士卒",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "兴风者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "虚数织叶者",
              "无想面具"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "外宇宙之冰",
              "无想面具"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "可可利亚（敌方）",
              "外宇宙之冰"
            ],
            "elements": [
              "量子",
              "火"
            ]
          }
        ]
      },
      {
        "label": "其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•浓云金蟾",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "入魔机巧•率从狻猊",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "守护者之影",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "云骑巡防士卒"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "鸣雷造物",
              "「药王秘传」炼形者",
              "巽风造物"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "鸣雷造物",
              "云骑巡防士卒",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-12-009",
    "mode": "moc",
    "name": "药王垂迹",
    "season": "009",
    "version": "1.2",
    "startDate": "2023-08-21",
    "endDate": "2023-09-04",
    "effects": [
      "记忆紊流：每个轮开始时，使敌方全体当前承受的所有持续伤害立即产生相当于原伤害200%的伤害。"
    ],
    "levels": [],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-12-008",
    "mode": "moc",
    "name": "泪雨长战",
    "season": "008",
    "version": "1.2",
    "startDate": "2023-08-07",
    "endDate": "2023-08-21",
    "effects": [
      "记忆紊流：我方角色施放追加攻击后，使受到攻击的敌方目标全属性抗性降低30%，持续2回合。"
    ],
    "levels": [],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-12-007",
    "mode": "moc",
    "name": "孤航天海",
    "season": "007",
    "version": "1.2",
    "startDate": "2023-07-24",
    "endDate": "2023-08-07",
    "effects": [
      "记忆紊流：我方目标受到攻击或消耗生命值时，获得1层【记忆印记】。每层【记忆印记】使目标受到的伤害降低12%，该效果最多叠加3层。每个轮开始时，依据我方目标当前最高的【记忆印记】层数对敌方全体造成固定数值的伤害，并解除我方全体所有的【记忆印记】。"
    ],
    "levels": [
      {
        "label": "其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•奎木",
              "丰饶灵兽•娄金"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "丰饶灵兽•娄金",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "云骑巡防士卒"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "云骑骁卫•彦卿"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流浪者",
              "自动机兵•战犬",
              "自动机兵•甲虫"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "炽燃徘徊者",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃射手",
              "银鬃近卫",
              "银鬃炮手"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银鬃炮手",
              "银鬃尉官"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "银鬃尉官",
              "布洛妮娅（敌方）"
            ],
            "elements": [
              "物理"
            ]
          }
        ]
      },
      {
        "label": "其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•奎木",
              "丰饶灵兽•娄金"
            ],
            "elements": [
              "风",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "火"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "外宇宙之冰"
            ],
            "elements": [
              "风",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "炎华造物",
              "永冬灾影"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "外宇宙之炎"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "守护者之影",
              "外宇宙之炎"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」器元士",
              "魔阴身士卒"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•战犬",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•战犬",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷"
            ]
          }
        ]
      },
      {
        "label": "其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "巽风造物",
              "虚数织叶者",
              "无想面具"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者",
              "巽风造物"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第3波",
            "team": 1,
            "enemies": [
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "魔阴身士卒",
              "「药王秘传」器元士"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "「药王秘传」器元士"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第3波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-13-012",
    "mode": "moc",
    "name": "魔阴空劫",
    "season": "012",
    "version": "1.3",
    "startDate": "2023-10-02",
    "endDate": "2023-10-16",
    "effects": [
      "记忆紊流：每个波次或轮开始时，召唤1只扑满到场上，该扑满受到的战技和终结技伤害提高200%。扑满被消灭后，使敌方全体陷入易伤状态，受到的伤害提高30%，持续2回合，该效果最多叠加2层。"
    ],
    "levels": [],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-13-011",
    "mode": "moc",
    "name": "天裂一射",
    "season": "011",
    "version": "1.3",
    "startDate": "2023-09-18",
    "endDate": "2023-10-02",
    "effects": [
      "记忆紊流：每个波次或轮开始时，召唤1只扑满到场上，该扑满受到的普攻和终结技伤害提高200%。扑满被消灭后，对敌方全体造成1次固定数值的伤害。"
    ],
    "levels": [],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-13-010",
    "mode": "moc",
    "name": "迷梦造舸",
    "season": "010",
    "version": "1.3",
    "startDate": "2023-09-04",
    "endDate": "2023-09-18",
    "effects": [
      "记忆紊流：每个波次或轮开始时，召唤1只扑满到场上，该扑满受到的普攻和持续伤害提高200%。扑满被消灭后，为我方恢复2个战技点。",
      "该敌方单位的攻击属性 约为普通同名敌方单位的105.26%；生命属性 约为普通同名敌方单位的150.00%"
    ],
    "levels": [
      {
        "label": "其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "火焚灾影",
              "外宇宙之炎",
              "永冬灾影"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "守护者之影",
              "外宇宙之炎",
              "虚数织叶者"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃炮手",
              "自动机兵•齿狼",
              "自动机兵•甲虫",
              "自动机兵•战犬"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "杰帕德（敌方）"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "火焚灾影",
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "蚕食者之影",
              "深寒徘徊者"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "火焚灾影",
              "兴风者",
              "永冬灾影"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者",
              "兴风者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•浓云金蟾",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "外宇宙之冰",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•奎木",
              "丰饶灵兽•长右",
              "丰饶灵兽•娄金"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•长右",
              "兴风者"
            ],
            "elements": [
              "冰",
              "火"
            ]
          }
        ]
      },
      {
        "label": "其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "蚕食者之影",
              "深寒徘徊者"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "「药王秘传」内丹士"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          }
        ]
      },
      {
        "label": "其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•灯昼龙鱼",
              "承露天人",
              "「药王秘传」器元士"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "银鬃尉官"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "重子",
              "虚卒•践踏者",
              "反重子"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "云骑骁卫•彦卿"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-14-015",
    "mode": "moc",
    "name": "镇伏玄根",
    "season": "015",
    "version": "1.4",
    "startDate": "2023-11-13",
    "endDate": "2023-11-27",
    "effects": [
      "记忆紊流：我方目标施放终结技或发动追加攻击后，对受到攻击的敌方目标造成4次等同于角色攻击力60%的随机属性附加伤害。"
    ],
    "levels": [],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-14-014",
    "mode": "moc",
    "name": "建木降临",
    "season": "014",
    "version": "1.4",
    "startDate": "2023-10-30",
    "endDate": "2023-11-13",
    "effects": [
      "记忆紊流：每个波次或轮开始时，使一个精英级别及以上的敌方目标获得【记忆印记】。持有【记忆印记】的目标受到伤害时，其他敌方目标受到等同于原伤害30%的伤害，该效果持续到下个轮开始。"
    ],
    "levels": [],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-14-013",
    "mode": "moc",
    "name": "生劫火劫",
    "season": "013",
    "version": "1.4",
    "startDate": "2023-10-16",
    "endDate": "2023-10-30",
    "effects": [
      "记忆紊流：我方相同目标连续行动时，获得1层【记忆印记】。【记忆印记】的持有者施放攻击后，每层【记忆印记】有40%固定概率使目标陷入【离神】 状态，持续1回合。拥有【记忆印记】的目标造成的伤害提高40%，该效果不可以叠加。在行动者改变后，移除场上所有【记忆印记】。 【离神】：被视为冻结状态，期间无法行动，当该状态解除时，目标受到等同于生命上限15%的冰属性附加伤害。"
    ],
    "levels": [
      {
        "label": "其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」炼形者",
              "「药王秘传」器元士"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "炽燃徘徊者",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•长右",
              "资深员工•组长"
            ],
            "elements": [
              "火",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•率从狻猊",
              "金人司阍",
              "入魔机巧•浓云金蟾"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "守护者之影"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "「药王秘传」内丹士"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "承露天人",
              "杰帕德（敌方）"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "基层员工•外勤",
              "资深员工•组长"
            ],
            "elements": [
              "火",
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "兴风者",
              "资深员工•组长"
            ],
            "elements": [
              "火",
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "火焚灾影",
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "云骑骁卫•彦卿"
            ],
            "elements": [
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "基层员工•安保",
              "资深员工•组长"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "外宇宙之冰"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶玄鹿"
            ],
            "elements": [
              "火",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴身士卒",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "巽风造物",
              "兴风者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-15-017",
    "mode": "moc",
    "name": "饮月之乱",
    "season": "017",
    "version": "1.5",
    "startDate": "2023-12-11",
    "endDate": "2023-12-27",
    "effects": [
      "记忆紊流：我方目标施放终结技时，获得【记忆印记】，该效果最多叠加10层。 每个轮开始时，为我方全体恢复基于【记忆印记】层数的能量（每层恢复10点能量），该效果恢复的能量可以超出目标的能量上限。"
    ],
    "levels": [
      {
        "label": "饮月之乱其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "魔阴武弁"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "深寒徘徊者",
              "外宇宙之冰"
            ],
            "elements": [
              "火",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "饮月之乱其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "兴风者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幽府武弁",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "布洛妮娅（敌方）",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "饮月之乱其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•甲虫"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "饮月之乱其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•率从狻猊",
              "入魔机巧•灯昼龙鱼",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "承露天人"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "基层员工•安保"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "饮月之乱其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "金人司阍"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "守护者之影"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "外宇宙之炎",
              "火焚灾影"
            ],
            "elements": [
              "物理",
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "物理",
              "火",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "饮月之乱其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "魔阴武弁"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "深寒徘徊者",
              "外宇宙之冰"
            ],
            "elements": [
              "火",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "饮月之乱其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "兴风者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幽府武弁",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "布洛妮娅（敌方）",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "饮月之乱其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•甲虫"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "饮月之乱其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•率从狻猊",
              "入魔机巧•灯昼龙鱼",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "承露天人"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "基层员工•安保"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "饮月之乱其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "金人司阍"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "守护者之影"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "外宇宙之炎",
              "火焚灾影"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-15-016",
    "mode": "moc",
    "name": "万载盟誓",
    "season": "016",
    "version": "1.5",
    "startDate": "2023-11-27",
    "endDate": "2023-12-11",
    "effects": [
      "记忆紊流：我方目标施放战技或终结技进行攻击后，为【记忆紊流】增加1段攻击段数，最多叠加10段。 每个轮开始时，每段攻击对随机敌方目标造成1次基于目标生命上限的伤害。"
    ],
    "levels": [
      {
        "label": "万载盟誓其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "魔阴武弁"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "深寒徘徊者",
              "外宇宙之冰"
            ],
            "elements": [
              "火",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "万载盟誓其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "兴风者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幽府武弁",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "布洛妮娅（敌方）",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "万载盟誓其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•甲虫"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "万载盟誓其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•率从狻猊",
              "入魔机巧•灯昼龙鱼",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "承露天人"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "基层员工•安保"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "万载盟誓其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "金人司阍"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "守护者之影"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "外宇宙之炎",
              "火焚灾影"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "万载盟誓其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "魔阴武弁"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "深寒徘徊者",
              "外宇宙之冰"
            ],
            "elements": [
              "火",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "万载盟誓其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "兴风者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幽府武弁",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "布洛妮娅（敌方）",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "万载盟誓其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•甲虫"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "万载盟誓其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•率从狻猊",
              "入魔机巧•灯昼龙鱼",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "承露天人"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "基层员工•安保"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "万载盟誓其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚卒•掠夺者",
              "虚卒•践踏者",
              "虚卒•篡改者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者",
              "杰帕德（敌方）"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "外宇宙之炎",
              "火焚灾影"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-16-019",
    "mode": "moc",
    "name": "重燃之光",
    "season": "019",
    "version": "1.6",
    "startDate": "2024-01-22",
    "endDate": "2024-03-04",
    "effects": [
      "记忆紊流：每个波次或轮开始时，对敌方全体随机施加10次以下负面效果：攻击力降低8%、防御力降低8%、速度降低8%、效果抵抗降低8%、受到追加攻击伤害提高20%。每种效果最多叠加3层，持续3回合；并使1名我方「巡猎」或「毁灭」命途目标立即行动。",
      "该敌方单位的生命属性 约为普通同名敌方单位的142.86%"
    ],
    "levels": [
      {
        "label": "重燃之光其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚卒•掠夺者",
              "虚卒•践踏者",
              "虚卒•篡改者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•灰熊",
              "承露天人"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "外宇宙之炎"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "火焚灾影",
              "外宇宙之冰",
              "永冬灾影"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "外宇宙之冰"
            ],
            "elements": [
              "火",
              "风"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "幽府武弁",
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "兴风者",
              "金人勾魂使"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "云骑骁卫•彦卿"
            ],
            "elements": [
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "守护者之影"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "「药王秘传」内丹士"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "金人司阍"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚卒•掠夺者",
              "虚卒•践踏者",
              "虚卒•篡改者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•灰熊",
              "承露天人"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "外宇宙之炎"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "火焚灾影",
              "外宇宙之冰",
              "永冬灾影"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "外宇宙之冰"
            ],
            "elements": [
              "火",
              "风"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "幽府武弁",
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "兴风者",
              "金人勾魂使"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "云骑骁卫•彦卿"
            ],
            "elements": [
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "守护者之影"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "「药王秘传」内丹士"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "金人司阍"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "布洛妮娅（敌方）"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之冰",
              "金人司阍"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "金人司阍"
            ],
            "elements": [
              "火",
              "风"
            ]
          }
        ]
      },
      {
        "label": "重燃之光其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "承露天人",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶玄鹿"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "兴风者",
              "金人勾魂使"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「星核猎手」卡芙卡",
              "金人勾魂使"
            ],
            "elements": [
              "虚数"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-16-018",
    "mode": "moc",
    "name": "藏于深空之秘",
    "season": "018",
    "version": "1.6",
    "startDate": "2023-12-27",
    "endDate": "2024-02-05",
    "effects": [
      "记忆紊流：我方目标击破敌方目标弱点或攻击处于弱点击破状态的敌方目标后，为【记忆紊流】增加1段攻击段数，最多叠加10段。 每个轮开始时，每段攻击对随机敌方目标造成1次基于目标生命上限的伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的142.86%"
    ],
    "levels": [
      {
        "label": "藏于深空之秘其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "魔阴武弁"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "炽燃徘徊者"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "云骑巡防士卒",
              "金人勾魂使",
              "幽府武弁"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "布洛妮娅（敌方）",
              "幽府武弁"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "永冬灾影",
              "兴风者",
              "流浪者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "流浪者",
              "自动机兵•灰熊",
              "兴风者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "金人司阍"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人司阍",
              "外宇宙之冰"
            ],
            "elements": [
              "风",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "兴风者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "守护者之影",
              "虚数织叶者"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "守护者之影"
            ],
            "elements": [
              "风"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "资深员工•组长"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幽府武弁",
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "火焚灾影",
              "外宇宙之炎",
              "虚数织叶者"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "魔阴武弁"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "炽燃徘徊者"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "云骑巡防士卒",
              "金人勾魂使",
              "幽府武弁"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "布洛妮娅（敌方）",
              "幽府武弁"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "永冬灾影",
              "兴风者",
              "流浪者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "流浪者",
              "自动机兵•灰熊",
              "兴风者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "金人司阍"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人司阍",
              "外宇宙之冰"
            ],
            "elements": [
              "风",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "兴风者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "守护者之影",
              "虚数织叶者"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "守护者之影"
            ],
            "elements": [
              "风"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "资深员工•组长"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幽府武弁",
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "火焚灾影",
              "外宇宙之炎",
              "虚数织叶者"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "杰帕德（敌方）"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•长右",
              "资深员工•组长"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶玄鹿"
            ],
            "elements": [
              "火",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "藏于深空之秘其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "承露天人",
              "银鬃尉官"
            ],
            "elements": [
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-16-002",
    "mode": "pf",
    "name": "羁鸟奇谭",
    "season": "002",
    "version": "1.6",
    "startDate": "2024-02-05",
    "endDate": "2024-03-18",
    "effects": [
      "怪诞逸闻 敌方目标受到的持续伤害提高50%。受到持续伤害的敌方目标造成的伤害降低35%，被攻击后行动提前35%。",
      "荒腔走板其一 毁谤 敌方受到持续伤害时，对相邻目标造成原伤害60%的同属性持续伤害。",
      "荒腔走板其二 谣诼 我方攻击敌方目标后，会使目标陷入风化状态，每回合开始时受到固定数值的风属性持续伤害。",
      "荒腔走板其三 诋訾 敌方受到持续伤害时，为当前生命值百分比最低的我方目标恢复等同于生命上限10%的生命值，并使其行动提前8%。",
      "该敌方单位较普通同名敌方单位增加 了弱点；减少 了弱点",
      "该敌方单位的速度属性 约为普通同名敌方单位的144.58%",
      "该敌方单位的速度属性 约为普通同名敌方单位的140.53%",
      "该敌方单位的速度属性 约为普通同名敌方单位的137.15%"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "丰饶灵兽•长右",
              "丰饶灵兽•娄金",
              "「药王秘传」器元士",
              "霜晶造物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "云骑巡防士卒",
              "永冬灾影",
              "火焚灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "外宇宙之炎",
              "丰饶灵兽•娄金",
              "云骑巡防士卒",
              "霜晶造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "承露天人",
              "入魔机巧•灯昼龙鱼",
              "虚数织叶者",
              "入魔机巧•浓云金蟾"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "自动机兵•战犬",
              "银鬃炮手"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "入魔机巧•灯昼龙鱼",
              "虚数织叶者",
              "入魔机巧•浓云金蟾"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "蚕食者之影",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛",
              "火焚灾影"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "虚卒•掠夺者",
              "虚卒•篡改者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "蚕食者之影",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛",
              "火焚灾影"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "外宇宙之冰",
              "永冬灾影",
              "虚数织叶者",
              "霜晶造物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "虚卒•抹消者",
              "魔阴身士卒",
              "反重子"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "外宇宙之冰",
              "永冬灾影",
              "虚数织叶者",
              "霜晶造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "守护者之影",
              "幽府武弁",
              "银鬃射手",
              "鸣雷造物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "「药王秘传」器元士",
              "丰饶灵兽•娄金",
              "鸣雷造物"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "幽府武弁",
              "银鬃射手",
              "鸣雷造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "金人勾魂使",
              "自动机兵•甲虫",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "银鬃炮手",
              "自动机兵•战犬",
              "入魔机巧•浓云金蟾"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "自动机兵•甲虫",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "蚕食者之影",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛",
              "霜晶造物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "银鬃近卫",
              "自动机兵•战犬",
              "入魔机巧•浓云金蟾"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "云骑骁卫•彦卿",
              "云骑巡防士卒",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "流浪者",
              "虚卒•抹消者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银枝（敌方）",
              "「授勋」",
              "「枪尖」",
              "「盾」"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-16-001",
    "mode": "pf",
    "name": "游辞漫说",
    "season": "001",
    "version": "1.6",
    "startDate": "2024-01-08",
    "endDate": "2024-02-19",
    "effects": [
      "怪诞逸闻 我方施放终结技攻击敌方目标时，为目标附上【爆裂】，最多叠加6层。目标的回合开始或目标被消灭时，根据【爆裂】层数对该目标及其相邻目标造成固定数值的伤害。",
      "荒腔走板其一 迸发 我方施放终结技攻击敌方目标后，将为目标附上2层【爆裂】。",
      "荒腔走板其二 激扬 敌方目标进入战斗时，有80%概率立刻叠加1层【爆裂】。",
      "荒腔走板其三 崩裂 持有【爆裂】的敌方目标被消灭时，使我方全体本场战斗中终结技造成的伤害提高15%，最多叠加20次。",
      "该敌方单位的生命属性 约为普通同名敌方单位的122.22%；速度属性 约为普通同名敌方单位的144.58%",
      "该敌方单位的生命属性 约为普通同名敌方单位的122.22%；速度属性 约为普通同名敌方单位的140.53%",
      "该敌方单位的生命属性 约为普通同名敌方单位的87.50%",
      "该敌方单位的生命属性 约为普通同名敌方单位的122.22%；速度属性 约为普通同名敌方单位的137.15%"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "炽燃徘徊者",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛",
              "巽风造物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "虚卒•掠夺者",
              "虚卒•篡改者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "炽燃徘徊者",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛",
              "巽风造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "丰饶灵兽•长右",
              "魔阴武弁",
              "「药王秘传」器元士",
              "丰饶灵兽•娄金"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "幽府武弁",
              "云骑巡防士卒",
              "入魔机巧•率从狻猊"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶灵兽•长右",
              "魔阴武弁",
              "「药王秘传」器元士",
              "丰饶灵兽•娄金"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "永冬灾影",
              "鸣雷造物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "魔阴身士卒",
              "魔阴武弁",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "永冬灾影",
              "鸣雷造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "兴风者",
              "流浪者",
              "基层员工•安保",
              "霜晶造物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "兴风者",
              "流浪者",
              "基层员工•安保",
              "霜晶造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "入魔机巧•灯昼龙鱼",
              "巽风造物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "虚数织叶者",
              "自动机兵•甲虫",
              "炎华造物"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "入魔机巧•灯昼龙鱼",
              "巽风造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "资深员工•组长",
              "基层员工•安保",
              "基层员工•外勤"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "虚卒•抹消者",
              "流浪者",
              "重子"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "基层员工•安保",
              "基层员工•外勤"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "银鬃尉官",
              "银鬃射手",
              "银鬃炮手",
              "自动机兵•战犬"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "火焚灾影",
              "虚数织叶者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "杰帕德（敌方）",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "虚数织叶者",
              "流浪者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "流浪者",
              "自动机兵•蜘蛛",
              "巽风造物"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "史瓦罗（敌方）",
              "流浪者",
              "自动机兵•蜘蛛",
              "巽风造物"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-20-021",
    "mode": "moc",
    "name": "一晌荒宴",
    "season": "021",
    "version": "2.0",
    "startDate": "2024-03-18",
    "endDate": "2024-04-29",
    "effects": [
      "记忆紊流：每个波次或轮开始时，召唤1只扑满到场上，该扑满受到的普攻和持续伤害提高200%。 在消灭扑满后，若敌方目标处于裂伤、触电、灼烧或风化状态，使其当前承受的对应状态立即产生相当于原伤害50%的伤害，并对敌方全体大概率施加裂伤、触电、灼烧、风化状态，持续3回合。",
      "该敌方单位的生命属性 约为普通同名敌方单位的114.29%；韧性属性 约为普通同名敌方单位的116.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的154.55%；韧性属性 约为普通同名敌方单位的120.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的143.75%",
      "该敌方单位的攻击属性 约为普通同名敌方单位的105.26%；生命属性 约为普通同名敌方单位的166.67%"
    ],
    "levels": [
      {
        "label": "一晌荒宴其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的十七分熟",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "兴风者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•率从狻猊",
              "金人司阍"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶玄鹿"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流浪者",
              "自动机兵•灰熊",
              "银鬃炮手"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "承露天人"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "守护者之影",
              "外宇宙之冰"
            ],
            "elements": [
              "风",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟",
              "惊梦剧团的弹簧荷官"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "深寒徘徊者"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "守护者之影",
              "金人司阍"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "可可利亚（敌方）",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的十七分熟",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "兴风者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•率从狻猊",
              "金人司阍"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶玄鹿"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流浪者",
              "自动机兵•灰熊",
              "银鬃炮手"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "承露天人"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "守护者之影",
              "外宇宙之冰"
            ],
            "elements": [
              "风",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟",
              "惊梦剧团的弹簧荷官"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "深寒徘徊者"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "承露天人",
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "承露天人",
              "杰帕德（敌方）"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "守护者之影",
              "金人司阍"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "可可利亚（敌方）",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的十七分熟",
              "蚕食者之影",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "一晌荒宴其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "云骑骁卫•彦卿"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "承露天人",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "「星核猎手」萨姆"
            ],
            "elements": [
              "雷"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-20-020",
    "mode": "moc",
    "name": "难舍梦乡",
    "season": "020",
    "version": "2.0",
    "startDate": "2024-02-19",
    "endDate": "2024-04-01",
    "effects": [
      "记忆紊流：我方全体普攻和战技造成的伤害提高50%，且每消耗1点战技点，为【记忆紊流】增加1段攻击段数，最多增加10段。 每个轮开始时，每段攻击对随机敌方目标造成1次基于目标生命上限的伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的142.86%",
      "该敌方单位的生命属性 约为普通同名敌方单位的143.75%",
      "该敌方单位的生命属性 约为普通同名敌方单位的154.55%；韧性属性 约为普通同名敌方单位的120.00%"
    ],
    "levels": [
      {
        "label": "难舍梦乡其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃炮手",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "守护者之影",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的十七分熟",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幼蛰虫",
              "兴风者",
              "次蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "丰饶灵兽•娄金"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "基层员工•安保",
              "资深员工•组长"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "外宇宙之冰"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的弹簧荷官",
              "惊梦剧团的十七分熟",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "金人司阍"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "魔阴武弁",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃炮手",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "守护者之影",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的十七分熟",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幼蛰虫",
              "兴风者",
              "次蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "丰饶灵兽•娄金"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "基层员工•安保",
              "资深员工•组长"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "外宇宙之冰"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的弹簧荷官",
              "惊梦剧团的十七分熟",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "金人司阍"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "史瓦罗（敌方）",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "兴风者"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「星核猎手」萨姆",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "难舍梦乡其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "金人司阍",
              "炽燃徘徊者"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "炽燃徘徊者",
              "杰帕德（敌方）"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「何物朝向死亡」"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-20-003",
    "mode": "pf",
    "name": "舌灿莲花",
    "season": "003",
    "version": "2.0",
    "startDate": "2024-03-04",
    "endDate": "2024-04-15",
    "effects": [
      "怪诞逸闻 我方施放的追加攻击造成伤害后，累计造成的伤害值。当伤害值累计达到100%时，对敌方全体造成固定数值的伤害。",
      "荒腔走板其一 献谄 角色的追加攻击造成的伤害提高50%，且触发【怪诞逸闻】的效果后会额外再触发1次效果。",
      "荒腔走板其二 阿谀 施放终结技对敌方目标造成伤害时，被视为发动了追加攻击。",
      "荒腔走板其三 便侫 角色施放追加攻击击中敌方目标时，我方全体行动提前14%。该效果每次攻击只能触发1次。",
      "该敌方单位的生命属性 约为普通同名敌方单位的122.22%；速度属性 约为普通同名敌方单位的144.58%",
      "该敌方单位的生命属性 约为普通同名敌方单位的122.22%；速度属性 约为普通同名敌方单位的140.53%",
      "该敌方单位的生命属性 约为普通同名敌方单位的122.22%；速度属性 约为普通同名敌方单位的137.15%",
      "该敌方单位的生命属性 约为普通同名敌方单位的250.00%"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "银鬃尉官",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "「药王秘传」器元士",
              "幽府武弁",
              "炎华造物"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银鬃尉官",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "蚕食者之影",
              "自动机兵•蜘蛛",
              "自动机兵•甲虫",
              "霜晶造物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的弹簧荷官",
              "惊梦剧团的舞鸫假面"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "蚕食者之影",
              "自动机兵•蜘蛛",
              "自动机兵•甲虫",
              "霜晶造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "外宇宙之冰",
              "永冬灾影",
              "虚数织叶者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "魔阴身士卒",
              "流浪者",
              "无想面具"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "外宇宙之冰",
              "永冬灾影",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "承露天人",
              "忆域迷因「我心支离破碎」",
              "魔阴武弁",
              "巽风造物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "惊梦剧团的圆幕先生",
              "虚数织叶者",
              "忆域迷因「视线无处不在」"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "忆域迷因「我心支离破碎」",
              "魔阴武弁",
              "巽风造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "虚卒•抹消者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "永冬灾影",
              "虚数织叶者",
              "霜晶造物"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "虚卒•抹消者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "惊梦剧团的十七分熟",
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的圆幕先生",
              "惊梦剧团的弹簧荷官"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "自动机兵•蜘蛛",
              "自动机兵•战犬",
              "鸣雷造物"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的十七分熟",
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的圆幕先生",
              "惊梦剧团的弹簧荷官"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "兴风者",
              "流浪者",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "基层员工•安保",
              "基层员工•外勤"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶玄鹿",
              "肃风之杪",
              "缃叶之杪",
              "繁花之杪"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "炽燃徘徊者",
              "自动机兵•甲虫",
              "入魔机巧•灯昼龙鱼",
              "入魔机巧•浓云金蟾"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "惊梦剧团的圆幕先生",
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的舞鸫假面"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "浮烟",
              "入魔机巧•灯昼龙鱼",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-21-022",
    "mode": "moc",
    "name": "白夜梦国记",
    "season": "022",
    "version": "2.1",
    "startDate": "2024-04-15",
    "endDate": "2024-05-27",
    "effects": [
      "记忆紊流：我方每次攻击后使敌方全体陷入1层【记忆印记】，处于【记忆印记】状态中的敌方目标受到的伤害提高5%，该效果最多叠加6层。当【记忆印记】叠加至上限时，立即对敌方全体造成1次基于各自生命上限一定百分比的伤害。 当敌方目标进入战斗时，若场上其他目标处于【记忆印记】状态，则使其获得同样层数的【记忆印记】。 每个波次或轮开始时，清除敌方全体的【记忆印记】。",
      "该敌方单位的攻击属性 约为普通同名敌方单位的105.26%；生命属性 约为普通同名敌方单位的166.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的141.67%；韧性属性 约为普通同名敌方单位的114.29%",
      "该敌方单位的生命属性 约为普通同名敌方单位的114.29%；韧性属性 约为普通同名敌方单位的116.67%"
    ],
    "levels": [
      {
        "label": "白夜梦国记其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "守护者之影",
              "无想面具"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "守护者之影",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "承露天人",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "炽燃徘徊者"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的十七分熟",
              "金人司阍"
            ],
            "elements": [
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "幽府武弁",
              "金人勾魂使"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "基层员工•安保",
              "忆域迷因「狂怒褪去之壳」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "火焚灾影",
              "蚕食者之影",
              "永冬灾影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「星核猎手」萨姆"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "守护者之影",
              "无想面具"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "守护者之影",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "承露天人",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人",
              "炽燃徘徊者"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的十七分熟",
              "金人司阍"
            ],
            "elements": [
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "幽府武弁",
              "金人勾魂使"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "忆域迷因「狂怒褪去之壳」",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "雷",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "金人司阍"
            ],
            "elements": [
              "雷",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "外宇宙之冰",
              "惊梦剧团的十七分熟",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「星核猎手」萨姆",
              "炽燃徘徊者"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "云骑骁卫•彦卿",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚卒•践踏者",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "布洛妮娅（敌方）"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "白夜梦国记其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "雷",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "可可利亚（敌方）"
            ],
            "elements": [
              "雷",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "承露天人",
              "资深员工•组长"
            ],
            "elements": [
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「石心十人」诡弈砂金"
            ],
            "elements": [
              "冰"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-21-005",
    "mode": "pf",
    "name": "作言造语",
    "season": "005",
    "version": "2.1",
    "startDate": "2024-04-29",
    "endDate": "2024-06-10",
    "effects": [
      "怪诞逸闻 我方施放的追加攻击造成伤害后，累计造成的伤害值。当伤害值累计达到100%时，对敌方全体造成固定数值的伤害。",
      "荒腔走板其一 追问 【怪诞逸闻】效果不再需要累计追加攻击造成的伤害值，改为我方每施放3次追加攻击后触发，并使该效果造成的伤害提高60%。",
      "荒腔走板其二 引申 触发【怪诞逸闻】效果时，同时为我方全体恢复等同于能量上限35%的能量。该效果恢复的能量可以超出目标的能量上限。",
      "荒腔走板其三 归谬 我方造成的除追加攻击以外的其他所有类型的伤害也都可以累计等同于原数值18%的进度。",
      "该敌方单位的生命属性 约为普通同名敌方单位的77.78%；韧性属性 约为普通同名敌方单位的144.58%",
      "该敌方单位的生命属性 约为普通同名敌方单位的55.00%；韧性属性 约为普通同名敌方单位的75.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的50.00%；韧性属性 约为普通同名敌方单位的60.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的45.83%；韧性属性 约为普通同名敌方单位的50.00%"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "银鬃尉官",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "幽府武弁",
              "「药王秘传」器元士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银鬃尉官",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "炽燃徘徊者",
              "自动机兵•甲虫",
              "自动机兵•战犬"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "入魔机巧•灯昼龙鱼",
              "魔阴武弁"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "炽燃徘徊者",
              "自动机兵•甲虫",
              "自动机兵•战犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "丰饶灵兽•长右",
              "忆域迷因「我心支离破碎」",
              "流浪者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶灵兽•长右",
              "忆域迷因「我心支离破碎」",
              "流浪者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "惊梦剧团的圆幕先生",
              "自动机兵•甲虫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "虚卒•掠夺者",
              "虚卒•篡改者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "惊梦剧团的圆幕先生",
              "自动机兵•甲虫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚卒•践踏者",
              "云骑巡防士卒",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "虚卒•践踏者",
              "云骑巡防士卒",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "蚕食者之影",
              "火焚灾影",
              "虚数织叶者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "惊梦剧团的圆幕先生",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "蚕食者之影",
              "火焚灾影",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "丰饶灵兽•长右",
              "流浪者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "「药王秘传」器元士",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶灵兽•长右",
              "布洛妮娅（敌方）",
              "忆域迷因「视线无处不在」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•战犬",
              "自动机兵•甲虫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "惊梦剧团的圆幕先生",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "自动机兵•齿狼",
              "「星核猎手」萨姆",
              "惊梦剧团的舞鸫假面"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-21-004",
    "mode": "pf",
    "name": "撒诈捣虚",
    "season": "004",
    "version": "2.1",
    "startDate": "2024-04-01",
    "endDate": "2024-05-13",
    "effects": [
      "怪诞逸闻 我方施放终结技攻击敌方目标时，为目标附上【爆裂】，最多叠加6层。目标的回合开始或目标被消灭时，根据【爆裂】层数对该目标及其相邻目标造成固定数值的伤害。",
      "荒腔走板其一 诱发 我方施放战技攻击敌方目标时，有80%固定概率为目标附上【爆裂】。",
      "荒腔走板其二 殉爆 敌方目标施放技能时使自身及相邻目标陷入1层【灼伤】。处于【灼伤】状态中的敌方目标受到的伤害提高10%，该效果最多叠加3层，且对触发怪诞逸闻效果造成的固定伤害也生效。",
      "荒腔走板其三 喷溅 角色施放终结技进行攻击后，行动提前25%，且造成的伤害提高100%，持续1回合。",
      "该敌方单位的生命属性 约为普通同名敌方单位的77.78%；韧性属性 约为普通同名敌方单位的144.58%",
      "该敌方单位的生命属性 约为普通同名敌方单位的41.67%；韧性属性 约为普通同名敌方单位的60.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的42.31%；韧性属性 约为普通同名敌方单位的42.86%",
      "该敌方单位的生命属性 约为普通同名敌方单位的42.31%；韧性属性 约为普通同名敌方单位的60.00%"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "金人勾魂使",
              "「药王秘传」内丹士",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "银鬃炮手",
              "银鬃射手"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "「药王秘传」内丹士",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "流浪者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "虚卒•掠夺者",
              "虚卒•抹消者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "流浪者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "守护者之影",
              "火焚灾影",
              "银鬃近卫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "幽府武弁",
              "惊梦剧团的发条暴徒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "火焚灾影",
              "银鬃近卫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "承露天人",
              "魔阴武弁",
              "「药王秘传」器元士"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "魔阴武弁",
              "「药王秘传」器元士"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "基层员工•安保",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "永冬灾影",
              "流浪者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "基层员工•安保",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•甲虫",
              "自动机兵•战犬"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "虚卒•掠夺者",
              "虚卒•篡改者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•甲虫",
              "自动机兵•战犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "银鬃尉官",
              "银鬃炮手",
              "银鬃射手"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "惊梦剧团的气泡锂犬",
              "幽府武弁"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银鬃尉官",
              "杰帕德（敌方）",
              "炎华造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "蚕食者之影",
              "虚数织叶者",
              "自动机兵•蜘蛛"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的发条暴徒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "蚕食者之影",
              "可可利亚（敌方）",
              "霜晶造物"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-22-024",
    "mode": "moc",
    "name": "弦外之声",
    "season": "024",
    "version": "2.2",
    "startDate": "2024-06-10",
    "endDate": "2024-07-22",
    "effects": [
      "记忆紊流：每个波次或轮开始时，召唤1只扑满到场上，扑满的弱点被击破时会立刻被消灭。 扑满被消灭后，使攻击者行动提前100%，随后为我方全体施加【记忆印记】。每层【记忆印记】使目标的攻击力提高15%，击破特攻提高30%，最多叠加5层。",
      "该敌方单位的攻击属性 约为普通同名敌方单位的105.26%；生命属性 约为普通同名敌方单位的166.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的162.50%",
      "该敌方单位的生命属性 约为普通同名敌方单位的218.18%；韧性属性 约为普通同名敌方单位的120.00%"
    ],
    "levels": [
      {
        "label": "弦外之声其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚卒•掠夺者",
              "虚卒•践踏者",
              "虚卒•抹消者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "守护者之影"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "守护者之影",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "云骑骁卫•彦卿"
            ],
            "elements": [
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「视线无处不在」",
              "「醉于盛会的此刻」",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "物理",
              "火"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「星核猎手」萨姆",
              "炽燃徘徊者"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚卒•掠夺者",
              "虚卒•践踏者",
              "虚卒•抹消者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚卒•践踏者",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "守护者之影"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "守护者之影",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "云骑骁卫•彦卿"
            ],
            "elements": [
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "丰饶灵兽•长右",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「视线无处不在」",
              "「醉于盛会的此刻」",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "物理",
              "火"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "炽燃徘徊者",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「星核猎手」萨姆",
              "炽燃徘徊者"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "外宇宙之冰",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "史瓦罗（敌方）",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「虚荣永无餍足」",
              "金人勾魂使",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "杰帕德（敌方）"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "弦外之声其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•灯昼龙鱼",
              "承露天人",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "昔在、今在、永在的剧目",
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火",
              "雷"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-22-023",
    "mode": "moc",
    "name": "梦中之梦",
    "season": "023",
    "version": "2.2",
    "startDate": "2024-05-13",
    "endDate": "2024-06-19",
    "effects": [
      "记忆紊流：我方每次攻击后为我方全体附上1层【记忆印记】，处于【记忆印记】状态中的我方目标造成的伤害提高5%，该效果最多叠加6层。当【记忆印记】叠加至上限时，立即为我方全体恢复25%能量，该效果恢复的能量可以超出目标的能量上限。 每个波次或轮开始时，清除我方全体的【记忆印记】。",
      "该敌方单位的生命属性 约为普通同名敌方单位的162.50%",
      "该敌方单位的生命属性 约为普通同名敌方单位的218.18%；韧性属性 约为普通同名敌方单位的120.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的200.00%"
    ],
    "levels": [
      {
        "label": "梦中之梦其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「醉于盛会的此刻」",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "承露天人"
            ],
            "elements": [
              "物理"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「身陷樊笼的往昔」",
              "自动机兵•灰熊"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「何物朝向死亡」"
            ],
            "elements": [
              "火",
              "风"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "雷",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "深寒徘徊者"
            ],
            "elements": [
              "雷",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的十七分熟",
              "虚卒•践踏者"
            ],
            "elements": [
              "风"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「同音共律的来日」",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "炽燃徘徊者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「醉于盛会的此刻」",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "承露天人"
            ],
            "elements": [
              "物理"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「身陷樊笼的往昔」",
              "自动机兵•灰熊"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「何物朝向死亡」"
            ],
            "elements": [
              "火",
              "风"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "雷",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "深寒徘徊者"
            ],
            "elements": [
              "雷",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的十七分熟",
              "虚卒•践踏者"
            ],
            "elements": [
              "风"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「同音共律的来日」",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "资深员工•组长"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的十七分熟",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "史瓦罗（敌方）",
              "蚕食者之影"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之冰",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶玄鹿"
            ],
            "elements": [
              "火",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "梦中之梦其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "「身陷樊笼的往昔」",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「身陷樊笼的往昔」",
              "杰帕德（敌方）"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚卒•践踏者",
              "金人勾魂使",
              "幽府武弁"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-22-006",
    "mode": "pf",
    "name": "新词迷离",
    "season": "006",
    "version": "2.2",
    "startDate": "2024-05-27",
    "endDate": "2024-07-08",
    "effects": [
      "怪诞逸闻 敌方目标受到的持续伤害提高50%。受到持续伤害的敌方目标造成的伤害降低35%，被攻击后行动提前35%。",
      "荒腔走板其一 批驳 敌方目标被消灭时，持有的持续伤害有100%基础概率转移给全体敌人。",
      "荒腔走板其二 立论 敌方目标进入战斗时，陷入风化状态，每回合开始时受到固定数值的风属性持续伤害，并使自身与相邻敌方目标陷入风化状态。",
      "荒腔走板其三 辨伪 我方队伍中存在3名或以上的[虚无] 命途角色时，我方全体造成的伤害提高60%，速度提高30%。",
      "该敌方单位的生命属性 约为普通同名敌方单位的77.78%；速度属性 约为普通同名敌方单位的144.58%",
      "该敌方单位的生命属性 约为普通同名敌方单位的50.00%；韧性属性 约为普通同名敌方单位的60.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的45.83%；韧性属性 约为普通同名敌方单位的50.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的50.00%；速度属性 约为普通同名敌方单位的83.72%；韧性属性 约为普通同名敌方单位的60.00%"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "自动机兵•齿狼",
              "虚卒•掠夺者",
              "魔阴武弁"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "自动机兵•齿狼",
              "虚卒•掠夺者",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "丰饶灵兽•长右",
              "云骑巡防士卒",
              "幽府武弁"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "惊梦剧团的幸运贩售",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶灵兽•长右",
              "云骑巡防士卒",
              "幽府武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "兴风者",
              "丰饶灵兽•奎木",
              "流浪者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "兴风者",
              "丰饶灵兽•奎木",
              "流浪者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "蚕食者之影",
              "自动机兵•甲虫",
              "虚数织叶者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "入魔机巧•灯昼龙鱼",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "蚕食者之影",
              "自动机兵•甲虫",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "自动机兵•齿狼",
              "虚卒•掠夺者",
              "魔阴武弁"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "自动机兵•齿狼",
              "虚卒•掠夺者",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "丰饶灵兽•长右",
              "云骑巡防士卒",
              "幽府武弁"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "惊梦剧团的幸运贩售",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶灵兽•长右",
              "云骑巡防士卒",
              "幽府武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "「醉于盛会的此刻」",
              "永冬灾影",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "「醉于盛会的此刻」",
              "「星核猎手」卡芙卡",
              "霜晶造物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "惊梦剧团的十七分熟",
              "惊梦剧团的幸运贩售",
              "自动机兵•甲虫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "序列扑满",
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的发条暴徒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的十七分熟",
              "史瓦罗（敌方）",
              "惊梦剧团的弹簧荷官"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-23-001",
    "mode": "as",
    "name": "冽风骑士",
    "season": "001",
    "version": "2.3",
    "startDate": "2024-06-19",
    "endDate": "2024-08-05",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体恢复战技点并激活终结技。 敌方全体受到的弱点击破伤害提高15%，超击破伤害额外提高25%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "无望冽风的幻灭者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "芒寒色正的银骑士",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-23-025",
    "mode": "moc",
    "name": "曲尽梦散",
    "season": "025",
    "version": "2.3",
    "startDate": "2024-07-22",
    "endDate": "2024-09-02",
    "effects": [
      "记忆紊流：我方目标施放追加攻击或战技进行攻击后，为【记忆紊流】增加1段攻击段数，最多叠加10段。 每个轮开始时，每段攻击对随机敌方目标造成1次基于目标生命上限的伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的154.29%；韧性属性 约为普通同名敌方单位的116.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的200.00%"
    ],
    "levels": [
      {
        "label": "曲尽梦散其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流浪者",
              "兴风者",
              "自动机兵•甲虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "兴风者",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「身陷樊笼的往昔」",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "银鬃炮手",
              "银鬃尉官"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "银鬃尉官",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "外宇宙之冰",
              "丰饶灵兽•长右",
              "丰饶灵兽•娄金"
            ],
            "elements": [
              "火",
              "风"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "忆域迷因「狂怒褪去之壳」",
              "炽燃徘徊者"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "入魔机巧•灯昼龙鱼",
              "金人勾魂使",
              "幽府武弁"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「石心十人」诡弈砂金"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "基层员工•外勤",
              "资深员工•组长"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "资深员工•组长"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "银鬃尉官"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶玄鹿"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流浪者",
              "兴风者",
              "自动机兵•甲虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "兴风者",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「身陷樊笼的往昔」",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "银鬃炮手",
              "银鬃尉官"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "银鬃尉官",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "外宇宙之冰",
              "丰饶灵兽•长右",
              "丰饶灵兽•娄金"
            ],
            "elements": [
              "火",
              "风"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "忆域迷因「狂怒褪去之壳」",
              "炽燃徘徊者"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "入魔机巧•灯昼龙鱼",
              "金人勾魂使",
              "幽府武弁"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「石心十人」诡弈砂金"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "基层员工•外勤",
              "资深员工•组长"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "资深员工•组长"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "银鬃尉官"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶玄鹿"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "外宇宙之冰"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "可可利亚（敌方）",
              "深寒徘徊者"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "云骑巡防士卒",
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "云骑巡防士卒",
              "「星核猎手」卡芙卡",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "曲尽梦散其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "昔在、今在、永在的剧目",
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "守护者之影",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "物理"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-23-007",
    "mode": "pf",
    "name": "向壁虚造",
    "season": "007",
    "version": "2.3",
    "startDate": "2024-07-08",
    "endDate": "2024-08-19",
    "effects": [
      "怪诞逸闻 我方发动追加攻击攻击敌方目标后，根据本次攻击的目标数量为【怪诞逸闻】充能。当充能达到10点时，对随机敌方目标造成10次固定数值的伤害。",
      "荒腔走板其一 篡改 触发【怪诞逸闻】效果需要的充能点数减少4，造成的伤害次数增加4。",
      "荒腔走板其二 妄言 我方角色施放终结技时造成的伤害提高30%，且施放终结技后可令【怪诞逸闻】额外获得2点充能。",
      "荒腔走板其三 夸大 我方角色攻击敌方目标后，可令【怪诞逸闻】额外获得1点充能。",
      "该敌方单位的生命属性 约为普通同名敌方单位的9.00%；韧性属性 约为普通同名敌方单位的25.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的87.50%",
      "该敌方单位的生命属性 约为普通同名敌方单位的295.45%",
      "该敌方单位较普通同名敌方单位抗性降低 了20%"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "守护者之影",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "魔阴武弁",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "忆域迷因「我心支离破碎」",
              "虚卒•抹消者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "外宇宙之炎",
              "丰饶灵兽•娄金",
              "虚卒•抹消者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "魔阴身士卒",
              "魔阴武弁"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "外宇宙之炎",
              "丰饶灵兽•娄金",
              "虚卒•抹消者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的幸运贩售",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "基层员工•安保",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的幸运贩售",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "守护者之影",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "魔阴武弁",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "忆域迷因「我心支离破碎」",
              "虚卒•抹消者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "「药王秘传」器元士"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "「药王秘传」内丹士",
              "次蛰虫"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "杰帕德（敌方）",
              "银鬃炮手",
              "自动机兵•战犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "外宇宙之冰",
              "永冬灾影",
              "银鬃近卫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "虚卒•抹消者",
              "魔阴武弁"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶玄鹿",
              "肃风之杪",
              "缃叶之杪",
              "繁花之杪"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-24-002",
    "mode": "as",
    "name": "支配恶兽",
    "season": "002",
    "version": "2.4",
    "startDate": "2024-08-05",
    "endDate": "2024-09-16",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体行动提前100%并激活终结技。 敌方全体受到的追加攻击伤害提高15%，反击伤害额外提高25%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "勾魂摄魄的支配者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "诛尽杀绝的灭星兽",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-24-026",
    "mode": "moc",
    "name": "长眠不醒",
    "season": "026",
    "version": "2.4",
    "startDate": "2024-09-02",
    "endDate": "2024-10-14",
    "effects": [
      "记忆紊流：我方每次攻击后为我方全体附上1层【记忆印记】，处于【记忆印记】状态中的我方目标造成的伤害提高8%，该效果最多叠加6层。当【记忆印记】叠加至上限时，立即对敌方全体造成1次基于各自生命上限一定百分比的伤害。 每个波次或轮开始时，清除我方全体的【记忆印记】。",
      "该敌方单位的生命属性 约为普通同名敌方单位的218.18%；韧性属性 约为普通同名敌方单位的120.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的162.50%",
      "该敌方单位的生命属性 约为普通同名敌方单位的200.00%"
    ],
    "levels": [
      {
        "label": "长眠不醒其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长"
            ],
            "elements": [
              "火",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "「同音共律的来日」",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「同音共律的来日」",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "咆哮灵柩",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的发条暴徒",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "火焚灾影",
              "兴风者",
              "流浪者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "承露天人",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "蚀月狼卒",
              "咆哮灵柩",
              "玄爪狼卒"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「同音共律的来日」",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "昔在、今在、永在的剧目",
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "基层员工•外勤",
              "资深员工•组长"
            ],
            "elements": [
              "火",
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "兴风者"
            ],
            "elements": [
              "火",
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•娄金",
              "丰饶灵兽•长右",
              "丰饶灵兽•奎木"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "「同音共律的来日」",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「同音共律的来日」",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "咆哮灵柩",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的发条暴徒",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "火焚灾影",
              "兴风者",
              "流浪者"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "承露天人",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "蚀月狼卒",
              "咆哮灵柩",
              "玄爪狼卒"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「同音共律的来日」",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "昔在、今在、永在的剧目",
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•灯昼龙鱼",
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "入魔机巧•灯昼龙鱼",
              "杰帕德（敌方）",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之冰",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "火",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "外宇宙之冰"
            ],
            "elements": [
              "火",
              "风"
            ]
          }
        ]
      },
      {
        "label": "长眠不醒其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "蚀月狼卒",
              "咆哮灵柩",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃炮手",
              "外宇宙之炎",
              "银鬃尉官"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「石心十人」诡弈砂金"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-24-008",
    "mode": "pf",
    "name": "欺人虚言",
    "season": "008",
    "version": "2.4",
    "startDate": "2024-08-19",
    "endDate": "2024-09-30",
    "effects": [
      "怪诞逸闻 我方施放终结技攻击敌方目标时，为目标附上【爆裂】，最多叠加6层。目标的回合开始或目标被消灭时，根据【爆裂】层数对该目标及其相邻目标造成固定数值的伤害。",
      "荒腔走板其一 崩裂 持有【爆裂】的敌方目标被消灭时，使我方全体本场战斗中终结技造成的伤害提高15%，最多叠加20次。",
      "荒腔走板其二 谗慝 【爆裂】造成的伤害提高20%，触发时为相邻目标附上1层【爆裂】。",
      "荒腔走板其三 诤语 我方施放追加攻击击中敌方目标时，有60%固定概率为目标附上1层【爆裂】。该效果每次攻击对每个敌方目标只能触发1次。",
      "该敌方单位的生命属性 约为普通同名敌方单位的9.00%；韧性属性 约为普通同名敌方单位的25.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的232.14%",
      "该敌方单位的生命属性 约为普通同名敌方单位的214.29%"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "守护者之影",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "惊梦剧团的发条暴徒",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "自动机兵•甲虫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "惊梦剧团的圆幕先生",
              "虚卒•掠夺者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "自动机兵•甲虫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "兴风者",
              "虚卒•抹消者",
              "流浪者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "兴风者",
              "虚卒•抹消者",
              "流浪者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "蚕食者之影",
              "自动机兵•甲虫",
              "自动机兵•战犬"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "惊梦剧团的气泡锂犬",
              "云骑巡防士卒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "蚕食者之影",
              "自动机兵•甲虫",
              "自动机兵•战犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "守护者之影",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "惊梦剧团的发条暴徒",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "自动机兵•甲虫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "惊梦剧团的圆幕先生",
              "虚卒•掠夺者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "自动机兵•甲虫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "银鬃尉官",
              "银鬃炮手",
              "银鬃射手"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "魔阴身士卒",
              "魔阴武弁"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "「星核猎手」卡芙卡",
              "银鬃近卫",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "「身陷樊笼的往昔」",
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "可可利亚（敌方）",
              "永冬灾影",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-25-003",
    "mode": "as",
    "name": "煽动博弈",
    "season": "003",
    "version": "2.5",
    "startDate": "2024-09-16",
    "endDate": "2024-10-28",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体行动提前并恢复战技点。 敌方全体受到的追加攻击伤害提高25%，终结技伤害提高15%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "孤注一掷的掷骰者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "乘间抵隙的煽动者",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-25-027",
    "mode": "moc",
    "name": "鳞渊潮动",
    "season": "027",
    "version": "2.5",
    "startDate": "2024-10-14",
    "endDate": "2024-11-25",
    "effects": [
      "记忆紊流：敌人拥有虚韧性，且弱点被击破时使其行动延后30%，同时为【记忆紊流】增加1段攻击段数，若目标是精英级别及以上的目标，则额外增加2段攻击段数，最多叠加10段。 每个轮开始时，【记忆紊流】的每段攻击对随机敌方目标造成1次固定数值的伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的154.29%；韧性属性 约为普通同名敌方单位的116.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的200.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的172.73%"
    ],
    "levels": [
      {
        "label": "鳞渊潮动其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "「药王秘传」内丹士",
              "承露天人"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "无想面具",
              "守护者之影"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "永冬灾影",
              "守护者之影"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的圆幕先生",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「身陷樊笼的往昔」",
              "兴风者"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚀月狼卒",
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "守护者之影"
            ],
            "elements": [
              "风"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "惊梦剧团的圆幕先生",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "风",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「何物朝向死亡」"
            ],
            "elements": [
              "风",
              "火"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「同音共律的来日」",
              "惊梦剧团的幸运贩售",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「醉于盛会的此刻」",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "基层员工•外勤",
              "资深员工•组长"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "火"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "蚀月狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "咆哮灵柩"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "深寒徘徊者",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "量子",
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "可可利亚（敌方）",
              "深寒徘徊者"
            ],
            "elements": [
              "量子",
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」器元士",
              "「药王秘传」内丹士",
              "承露天人"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "承露天人",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "无想面具",
              "守护者之影"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "永冬灾影",
              "守护者之影"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的圆幕先生",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「身陷樊笼的往昔」",
              "兴风者"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚀月狼卒",
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "守护者之影"
            ],
            "elements": [
              "风"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "忆域迷因「何物藏于镜中」",
              "惊梦剧团的圆幕先生",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "风",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「何物朝向死亡」"
            ],
            "elements": [
              "风",
              "火"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「同音共律的来日」",
              "惊梦剧团的幸运贩售",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「醉于盛会的此刻」",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "基层员工•外勤",
              "资深员工•组长"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "火"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "蚀月狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "咆哮灵柩"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "永冬灾影",
              "深寒徘徊者",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "量子",
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "可可利亚（敌方）",
              "深寒徘徊者"
            ],
            "elements": [
              "量子",
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "金人勾魂使",
              "守护者之影"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "守护者之影",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之冰",
              "深寒徘徊者",
              "永冬灾影"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "繁花之杪",
              "丰饶玄鹿",
              "肃风之杪"
            ],
            "elements": [
              "量子",
              "火"
            ]
          }
        ]
      },
      {
        "label": "鳞渊潮动其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的幸运贩售",
              "「身陷樊笼的往昔」",
              "惊梦剧团的圆幕先生",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「同音共律的来日」",
              "「身陷樊笼的往昔」",
              "昔在、今在、永在的剧目",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "步离战首•呼雷"
            ],
            "elements": [
              "风",
              "火"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-25-009",
    "mode": "pf",
    "name": "巧言如流",
    "season": "009",
    "version": "2.5",
    "startDate": "2024-09-30",
    "endDate": "2024-11-11",
    "effects": [
      "怪诞逸闻 我方目标击破敌方目标的弱点时会为【怪诞逸闻】充能。当充能达到6点时，对随机敌方目标造成10次固定数值的伤害。",
      "荒腔走板其一 咏怀 敌方目标受到的击破伤害提高10%，我方攻击后若对敌方造成超击破伤害，则额外为【怪诞逸闻】充能1点。",
      "荒腔走板其二 画境 追加攻击造成的伤害提高50%，追加攻击的弱点击破效率提高50%。",
      "荒腔走板其三 漫笔 角色施放终结技进行攻击时，无视敌方目标的弱点造成韧性削减。",
      "该敌方单位的生命属性 约为普通同名敌方单位的45.83%；韧性属性 约为普通同名敌方单位的60.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的10.00%；韧性属性 约为普通同名敌方单位的41.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的60.00%；韧性属性 约为普通同名敌方单位的60.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的45.83%；韧性属性 约为普通同名敌方单位的50.00%"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "金人勾魂使",
              "自动机兵•战犬",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "惊梦剧团的气泡锂犬",
              "虚卒•掠夺者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "自动机兵•战犬",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "外宇宙之冰",
              "永冬灾影",
              "虚数织叶者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "魔阴身士卒",
              "惊梦剧团的发条暴徒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "外宇宙之冰",
              "永冬灾影",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "丰饶灵兽•长右",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "幽府武弁",
              "云骑巡防士卒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶灵兽•长右",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "玄爪狼卒",
              "虚卒•抹消者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "金人勾魂使",
              "自动机兵•战犬",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "惊梦剧团的气泡锂犬",
              "虚卒•掠夺者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "自动机兵•战犬",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "外宇宙之冰",
              "永冬灾影",
              "虚数织叶者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "魔阴身士卒",
              "惊梦剧团的发条暴徒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "外宇宙之冰",
              "永冬灾影",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "虚数织叶者",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "魔阴武弁",
              "丰饶灵兽•娄金"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "可可利亚（敌方）",
              "反重子"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "「身陷樊笼的往昔」",
              "玄爪狼卒",
              "云骑巡防士卒"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "银鬃炮手",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "「身陷樊笼的往昔」",
              "布洛妮娅（敌方）",
              "霜晶造物"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-26-004",
    "mode": "as",
    "name": "支配指挥",
    "season": "004",
    "version": "2.6",
    "startDate": "2024-10-28",
    "endDate": "2024-12-09",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体角色恢复战技点并激活终结技。 敌方全体受到的弱点击破伤害提高20%，追加攻击伤害提高20%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "勾魂摄魄的支配者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "万籁齐响的指挥家",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-26-028",
    "mode": "moc",
    "name": "与梦共舞",
    "season": "028",
    "version": "2.6",
    "startDate": "2024-11-25",
    "endDate": "2025-01-06",
    "effects": [
      "记忆紊流：敌方目标的弱点被击破时，为【记忆紊流】增加1段攻击段数，若目标是精英级别及以上的目标，则额外增加1段攻击段数，最多叠加15段。 每个轮开始时，【记忆紊流】的每段攻击对随机敌方目标造成1次固定数值的伤害，且不清除攻击段数。",
      "该敌方单位的攻击属性 约为普通同名敌方单位的105.26%；生命属性 约为普通同名敌方单位的250.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的138.89%",
      "该敌方单位的生命属性 约为普通同名敌方单位的162.50%"
    ],
    "levels": [
      {
        "label": "与梦共舞其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "炽燃徘徊者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "承露天人",
              "金人勾魂使"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「醉于盛会的此刻」",
              "惊梦剧团的发条暴徒",
              "惊梦剧团的幸运贩售"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「醉于盛会的此刻」",
              "资深员工•组长"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "蚀月狼卒"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "风",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "咆哮灵柩"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "云骑骁卫•彦卿"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "幽府武弁",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「醉于盛会的此刻」",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「同音共律的来日」",
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "「同音共律的来日」",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•长右",
              "蚕食者之影"
            ],
            "elements": [
              "风",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "步离战首•呼雷"
            ],
            "elements": [
              "风",
              "火"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「药王秘传」内丹士",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「药王秘传」炼形者",
              "炽燃徘徊者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "承露天人"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "承露天人",
              "金人勾魂使"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「醉于盛会的此刻」",
              "惊梦剧团的发条暴徒",
              "惊梦剧团的幸运贩售"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「醉于盛会的此刻」",
              "资深员工•组长"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "蚀月狼卒"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "风",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚卒•践踏者",
              "咆哮灵柩"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "云骑骁卫•彦卿"
            ],
            "elements": [
              "虚数",
              "风"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "幽府武弁",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「醉于盛会的此刻」",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「同音共律的来日」",
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "「同音共律的来日」",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•长右",
              "蚕食者之影"
            ],
            "elements": [
              "风",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "步离战首•呼雷"
            ],
            "elements": [
              "风",
              "火"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "银鬃尉官",
              "外宇宙之炎"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「石心十人」诡弈砂金"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "与梦共舞其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "咆哮灵柩"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "史瓦罗（敌方）",
              "咆哮灵柩"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "玄爪狼卒",
              "「身陷樊笼的往昔」",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "奇想林中的蕉研组"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-26-010",
    "mode": "pf",
    "name": "论黄数黑",
    "season": "010",
    "version": "2.6",
    "startDate": "2024-11-11",
    "endDate": "2024-12-23",
    "effects": [
      "怪诞逸闻 敌方目标受到的持续伤害提高35%。受到持续伤害的敌方目标造成的伤害降低35%，被攻击后行动提前35%。",
      "荒腔走板其一 噱头 我方全体击破特攻提高30%，击破敌方目标时会令敌方全体陷入风化状态，每回合开始时受到固定数值的风属性持续伤害。 敌方全体免疫控制类负面状态。",
      "荒腔走板其二 醉话 我方目标施放终结技攻击敌方目标后，若目标当前承受1/2/3种持续伤害状态，则会使其当前承受的每种持续伤害状态立即产生相当于原伤害60%/100%/150%的伤害。",
      "荒腔走板其三 谣诼 我方攻击敌方目标后，会使目标陷入风化状态，每回合开始时受到固定数值的风属性持续伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的55.00%；韧性属性 约为普通同名敌方单位的75.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的10.00%；韧性属性 约为普通同名敌方单位的41.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的42.31%；韧性属性 约为普通同名敌方单位的42.86%",
      "该敌方单位的生命属性 约为普通同名敌方单位的34.38%；韧性属性 约为普通同名敌方单位的50.00%"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "银鬃尉官",
              "银鬃炮手",
              "银鬃近卫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银鬃尉官",
              "银鬃炮手",
              "银鬃近卫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "自动机兵•灰熊",
              "忆域迷因「我心支离破碎」",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "虚卒•抹消者",
              "虚卒•掠夺者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "自动机兵•灰熊",
              "忆域迷因「我心支离破碎」",
              "基层员工•安保"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "流浪者",
              "银鬃炮手"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "咆哮灵柩",
              "自动机兵•甲虫",
              "蚀月狼卒"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的幸运贩售"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "咆哮灵柩",
              "自动机兵•甲虫",
              "蚀月狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "银鬃尉官",
              "银鬃炮手",
              "银鬃近卫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银鬃尉官",
              "银鬃炮手",
              "银鬃近卫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "自动机兵•灰熊",
              "忆域迷因「我心支离破碎」",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "虚卒•抹消者",
              "虚卒•掠夺者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "自动机兵•灰熊",
              "忆域迷因「我心支离破碎」",
              "基层员工•安保"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "「醉于盛会的此刻」",
              "丰饶灵兽•奎木",
              "玄爪狼卒"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "云骑巡防士卒",
              "次蛰虫"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "「醉于盛会的此刻」",
              "布洛妮娅（敌方）",
              "入魔机巧•率从狻猊"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "蚕食者之影",
              "惊梦剧团的气泡锂犬",
              "蚀月狼卒"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "王下一桶",
              "自动机兵•甲虫",
              "自动机兵•战犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "蚕食者之影",
              "云骑骁卫•彦卿",
              "入魔机巧•浓云金蟾"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-27-005",
    "mode": "as",
    "name": "冽风猢狲",
    "season": "005",
    "version": "2.7",
    "startDate": "2024-12-09",
    "endDate": "2025-01-20",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体行动提前并恢复战技点。 敌方全体受到的弱点击破伤害提高20%，追加攻击伤害提高20%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "无望冽风的幻灭者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "心蕉如火的猴把戏",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-27-029",
    "mode": "moc",
    "name": "舸舰迷津",
    "season": "029",
    "version": "2.7",
    "startDate": "2025-01-06",
    "endDate": "2025-02-17",
    "effects": [
      "记忆紊流：每个波次或轮开始时，召唤2只扑满到场上，扑满被消灭时对所有精英级别及以上的目标造成1次固定数值的伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的218.18%；韧性属性 约为普通同名敌方单位的120.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的154.29%；韧性属性 约为普通同名敌方单位的116.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的200.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的150.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的206.25%；韧性属性 约为普通同名敌方单位的116.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的133.33%"
    ],
    "levels": [
      {
        "label": "舸舰迷津其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "承露天人"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "外宇宙之冰"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "兴风者"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "可可利亚（敌方）",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "承露天人"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "外宇宙之冰"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "兴风者"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "可可利亚（敌方）",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "承露天人",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「星核猎手」卡芙卡",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「身陷樊笼的往昔」",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「星核猎手」萨姆",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "舸舰迷津其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "蚕食者之影",
              "咆哮灵柩"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "史瓦罗（敌方）",
              "咆哮灵柩"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-27-011",
    "mode": "pf",
    "name": "深文巧诋",
    "season": "011",
    "version": "2.7",
    "startDate": "2024-12-23",
    "endDate": "2025-02-03",
    "effects": [
      "战技攻击我方施放战技攻击敌方目标后，每击中1个敌方目标，使我方额外积累5点「战意值」。",
      "战熄潮平 战斗开始时，我方施放战技攻击敌方目标后，对每个被攻击的敌方目标造成固定数值的伤害。",
      "战意汹涌 进入「战意汹涌」时，我方全体行动提前100%，期间敌方目标受到的伤害提高50%，且我方施放战技攻击敌方目标后，额外对每个被攻击的敌方目标的相邻目标造成固定数值的伤害。",
      "荒腔走板其一 肤廓 「战意汹涌」期间，我方全体战技不消耗战技点。角色施放战技或终结技后，每击中1个敌方目标获得1层【热潮】，每层使该角色造成的战技和终结技伤害提高4% ，速度提高4%，最多叠加10层。",
      "战意机制：我方施放终结技攻击敌方目标后，每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其二 乌有 「战意汹涌」期间，我方全体造成的追加攻击伤害提高40%，发动追加攻击后，对每个被攻击的敌方目标及其相邻目标造成固定数值的伤害。",
      "战意机制：我方发动追加攻击后，每击中1个敌方目标，使我方额外积累2点「战意值」。",
      "荒腔走板其三 空头 「战意汹涌」期间，敌方目标受到的击破伤害提高30%，我方角色击破敌方目标弱点时，自身行动提前12%。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "幽府武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "银鬃炮手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "虚卒•践踏者",
              "虚卒•掠夺者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "玄爪狼卒",
              "丰饶灵兽•奎木",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "「身陷樊笼的往昔」",
              "云骑巡防士卒",
              "流浪者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "虚卒•抹消者",
              "魔阴武弁",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "魔阴武弁",
              "魔阴身士卒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银鬃尉官",
              "银鬃近卫",
              "银鬃炮手"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "幽府武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "银鬃炮手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "虚卒•践踏者",
              "虚卒•掠夺者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "自动机兵•甲虫",
              "入魔机巧•灯昼龙鱼",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「身陷樊笼的往昔」",
              "玄爪狼卒",
              "火焚灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "杰帕德（敌方）",
              "自动机兵•战犬",
              "银鬃炮手"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "流浪者",
              "「药王秘传」器元士",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶玄鹿",
              "缃叶之杪",
              "繁花之杪"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-30-006",
    "mode": "as",
    "name": "煽动螟蝗",
    "season": "006",
    "version": "3.0",
    "startDate": "2025-01-20",
    "endDate": "2025-03-03",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体解除控制状态、恢复战技点并激活终结技。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "遮天蔽日的噬星蠹",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "乘间抵隙的煽动者",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-30-030",
    "mode": "moc",
    "name": "创世纷争",
    "season": "030",
    "version": "3.0",
    "startDate": "2025-02-17",
    "endDate": "2025-03-31",
    "effects": [
      "记忆紊流：每个轮开始时，为我方全体角色恢复20%能量，该效果恢复的能量可以超出目标的能量上限，并使场上所有忆灵下一次行动后可立即再次行动。",
      "该敌方单位的生命属性 约为普通同名敌方单位的122.22%"
    ],
    "levels": [
      {
        "label": "创世纷争其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「身陷樊笼的往昔」",
              "惊梦剧团的弹簧荷官"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「身陷樊笼的往昔」",
              "「醉于盛会的此刻」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "魔阴身士卒",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人司阍",
              "外宇宙之冰"
            ],
            "elements": [
              "量子",
              "风"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "蚀月狼卒"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃尉官"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴斗士",
              "天谴先锋",
              "天谴哲人"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴斗士",
              "天谴先锋",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "基层员工•外勤",
              "资深员工•组长",
              "基层员工•安保"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "咆哮灵柩",
              "守护者之影"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "步离战首•呼雷",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「身陷樊笼的往昔」",
              "惊梦剧团的弹簧荷官"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「身陷樊笼的往昔」",
              "「醉于盛会的此刻」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "魔阴身士卒",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人司阍",
              "外宇宙之冰"
            ],
            "elements": [
              "量子",
              "风"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "蚀月狼卒"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃尉官"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴斗士",
              "天谴先锋",
              "天谴哲人"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴斗士",
              "天谴先锋",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "承露天人",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "蛮神，疯王，纷争的化身",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "咆哮灵柩",
              "守护者之影"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "步离战首•呼雷",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "咆哮灵柩"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「石心十人」诡弈砂金"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "奇想林中的蕉研组"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "创世纷争其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "炽燃徘徊者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虫群•真蛰虫",
              "炽燃徘徊者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的发条暴徒",
              "天谴先锋",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "颁赐者，千军首，天谴之矛"
            ],
            "elements": [
              "量子",
              "雷",
              "冰"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-30-012",
    "mode": "pf",
    "name": "陈腔滥调",
    "season": "012",
    "version": "3.0",
    "startDate": "2025-02-03",
    "endDate": "2025-03-17",
    "effects": [
      "终结技攻击我方施放终结技攻击敌方目标后，每击中1个敌方目标，使我方额外积累5点「战意值」。",
      "战熄潮平 敌方目标被任意单位消灭后，为我方全体附上1层【回音】。",
      "战意汹涌 进入「战意汹涌」时，消耗所有【回音】，每层【回音】对随机敌方目标造成1次固定数值的伤害。「战意汹涌」期间，敌方目标受到的伤害提高50%，且被任意单位消 灭后额外为我方全体附上1层【回音】，当【回音】叠加至10层或以上时，消耗所有【回音】，每层【回音】对随机敌方目标造成1次固定数值的伤害。",
      "荒腔走板其一 共相 「战意汹涌」期间，我方全体速度提高40%，消耗所有【回音】攻击时恢复1个战技点。",
      "战意机制：我方施放战技攻击敌方目标后，每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其二 辉光 「战意汹涌」期间，敌方目标被任意单位消灭后，有50%概率为我方全体附上1层【回音】。",
      "战意机制：我方发动追加攻击后，每击中1个敌方目标，使我方额外积累2点「战意值」。",
      "荒腔走板其三 潜在 进入「战意汹涌」时，激活我方编队中第一位角色的终结技，并使其在「战意汹涌」期间施放终结技造成的伤害提高50%。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "「药王秘传」器元士",
              "幽府武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "银鬃炮手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「醉于盛会的此刻」",
              "虚卒•掠夺者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "幽府武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "银鬃炮手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "虚卒•践踏者",
              "虚卒•掠夺者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "忆域迷因「我心支离破碎」",
              "魔阴身士卒",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "基层员工•安保",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "银鬃炮手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「醉于盛会的此刻」",
              "虚卒•掠夺者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "魔阴武弁",
              "自动机兵•甲虫",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴斗士",
              "天谴猎手"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "可可利亚（敌方）",
              "虚数织叶者",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃炮手",
              "银鬃射手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "幽府武弁",
              "「药王秘传」器元士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银枝（敌方）",
              "「授勋」",
              "「枪尖」"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-31-007",
    "mode": "as",
    "name": "猢狲博弈",
    "season": "007",
    "version": "3.1",
    "startDate": "2025-03-03",
    "endDate": "2025-04-14",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体解除控制状态、恢复战技点并回复生命值。 敌方全体受到的普攻伤害提高15%，战技伤害提高25%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "孤注一掷的掷骰者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "心蕉如火的猴把戏",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-31-031",
    "mode": "moc",
    "name": "出故乡记",
    "season": "031",
    "version": "3.1",
    "startDate": "2025-03-31",
    "endDate": "2025-05-12",
    "effects": [
      "记忆紊流：我方全体生命上限提高30%，每次受到攻击时恢复等同于生命上限5%的生命值，并为【记忆紊流】增加1段攻击段数；每次消耗生命值时恢复等同于生命上限10%的生命值，并为【记忆紊流】增加2段攻击段数，该效果每次攻击只可触发1次，最多增加20段。 每个轮开始时，【记忆紊流】的每段攻击对随机敌方目标造成1次真实伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的230.77%；韧性属性 约为普通同名敌方单位的133.33%",
      "该敌方单位的生命属性 约为普通同名敌方单位的333.33%；韧性属性 约为普通同名敌方单位的200.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的154.29%；韧性属性 约为普通同名敌方单位的116.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的65.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的88.89%",
      "该敌方单位的生命属性 约为普通同名敌方单位的138.46%",
      "该敌方单位的生命属性 约为普通同名敌方单位的145.45%"
    ],
    "levels": [
      {
        "label": "出故乡记其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴斗士",
              "天谴先锋",
              "天谴哲人"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴斗士",
              "天谴先锋",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的发条暴徒",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "深寒徘徊者"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴猎手",
              "天谴先锋"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "外宇宙之炎",
              "天谴先锋"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "流浪者",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "蚀月狼卒"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃尉官"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「身陷樊笼的往昔」",
              "惊梦剧团的弹簧荷官"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「身陷樊笼的往昔」",
              "「醉于盛会的此刻」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "魔阴身士卒",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人司阍",
              "外宇宙之冰"
            ],
            "elements": [
              "量子",
              "风"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的发条暴徒",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "深寒徘徊者"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴猎手",
              "天谴先锋"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "外宇宙之炎",
              "天谴先锋"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "流浪者",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "月夜天马"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "可可利亚（敌方）",
              "月夜天马"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「身陷樊笼的往昔」",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "奇想林中的蕉研组"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "守护者之影",
              "虚卒•践踏者"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "步离战首•呼雷"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "天谴先锋"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "颁赐者，千军首，天谴之矛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "出故乡记其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "外宇宙之炎",
              "天谴先锋"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "至黑之剑，盗火行者"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "正阳狮鹫",
              "月夜天马"
            ],
            "elements": [
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "月夜天马",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "虚数"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-31-013",
    "mode": "pf",
    "name": "自证预言",
    "season": "013",
    "version": "3.1",
    "startDate": "2025-03-17",
    "endDate": "2025-04-28",
    "effects": [
      "终结技/普攻攻击我方施放普攻或终结技攻击敌方目标后，每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "战熄潮平 我方施放普攻或终结技攻击敌方目标时，为目标附上【爆裂】，最多叠加3层。目标的回合开始或被任意单位消灭时，根据【爆裂】层数对该目标造成真实伤害。",
      "战意汹涌 进入「战意汹涌」时，立即为我方全体恢复30%能量，该效果恢复的能量可以超出目标的能量上限。期间敌方目标受到的伤害提高50%，且触发【爆裂】时会对该目标及其相邻目标造成真实伤害。",
      "荒腔走板其一 显化 「战意汹涌」期间，我方对处于【爆裂】的敌方目标施放战技或发动追加攻击后可以直接触发【爆裂】。",
      "战意机制：我方施放战技或发动追加攻击后，每击中1个敌方目标，使我方额外积累2点「战意值」。",
      "荒腔走板其二 灵知 「战意汹涌」期间，敌方目标受到的击破伤害提高30%，且处于【爆裂】状态的目标被任意单位消灭时会对相邻敌方目标造成10点无视弱点属性的削韧。",
      "战意机制：敌方目标的弱点被击破时，使我方额外积累3点「战意值」。",
      "荒腔走板其三 神智 「战意汹涌」期间，我方全体施放战技时消耗等同于自身当前生命值20%的生命值，并在施放战技后回复等同于自身生命上限20%的生命值。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴哲人",
              "魔阴身士卒",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃近卫",
              "幽府武弁",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "正阳狮鹫",
              "天谴歌队",
              "流星铁鹰"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "云骑巡防士卒",
              "「药王秘传」器元士",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "惊梦剧团的气泡锂犬",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "银鬃近卫",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "火焚灾影",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴哲人",
              "魔阴身士卒",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "流浪者",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃近卫",
              "幽府武弁",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "正阳狮鹫",
              "天谴歌队",
              "流星铁鹰"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴哲人",
              "天谴歌队",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "自动机兵•齿狼",
              "惊梦剧团的圆幕先生",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "虫群•真蛰虫",
              "天谴歌队",
              "幼蛰虫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "虚数织叶者",
              "永冬灾影",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "魔阴武弁",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "蛮神，疯王，纷争的化身",
              "天谴斗士",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-32-008",
    "mode": "as",
    "name": "螟蝗战首",
    "season": "008",
    "version": "3.2",
    "startDate": "2025-04-14",
    "endDate": "2025-05-26",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体解除控制状态、立即行动并回复生命值。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "遮天蔽日的噬星蠹",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "雷奔云谲的恶狼主",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-32-032",
    "mode": "moc",
    "name": "彼岸之息",
    "season": "032",
    "version": "3.2",
    "startDate": "2025-05-12",
    "endDate": "2025-06-23",
    "effects": [
      "记忆紊流：我方全体战技等级+3，忆灵技等级+2。我方全体施放战技或忆灵技后，为随机1名攻击目标添加1个未拥有的随机属性弱点。 每个轮开始时，【记忆紊流】对敌方全体目标造成1次真实伤害，若目标持有3个以上的弱点，每多1个弱点额外受到1次真实伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的230.77%；韧性属性 约为普通同名敌方单位的133.33%",
      "该敌方单位的生命属性 约为普通同名敌方单位的333.33%；韧性属性 约为普通同名敌方单位的200.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的162.50%"
    ],
    "levels": [
      {
        "label": "彼岸之息其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴斗士",
              "天谴先锋",
              "天谴哲人"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴斗士",
              "天谴先锋",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的发条暴徒"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的发条暴徒",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "天谴先锋",
              "深寒徘徊者"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴猎手",
              "天谴先锋"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "外宇宙之炎",
              "天谴先锋"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "流浪者",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩",
              "蚀月狼卒"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃尉官"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「身陷樊笼的往昔」",
              "惊梦剧团的弹簧荷官"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「身陷樊笼的往昔」",
              "「醉于盛会的此刻」",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "魔阴身士卒",
              "金人司阍"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人司阍",
              "外宇宙之冰"
            ],
            "elements": [
              "量子",
              "风"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴猎手",
              "天谴先锋"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "外宇宙之炎"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "玄爪狼卒",
              "「醉于盛会的此刻」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "昔在、今在、永在的剧目",
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮蚀斧",
              "黑潮蚀魔",
              "黑潮蚀刃"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "正阳狮鹫",
              "黑潮蚀魔",
              "黑潮蚀斧"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "丰饶灵兽•奎木",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "兴风者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟",
              "黑潮蚀斧"
            ],
            "elements": [
              "风",
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "史瓦罗（敌方）",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "风",
              "雷",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•灰熊",
              "承露天人"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "颁赐者，千军首，天谴之矛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮蚀魔",
              "黑潮蚀斧",
              "黑潮蚀刃"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "步离战首•呼雷"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人司阍",
              "咆哮灵柩"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "至黑之剑，盗火行者"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "彼岸之息其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "冥魂渡者，死龙残躯，玻吕刻斯"
            ],
            "elements": [
              "虚数",
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [],
            "elements": [
              "虚数",
              "量子",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "奇想林中的蕉研组",
              "蕉研组的财富蕉师",
              "蕉研组的助蕉",
              "蕉研组的谐乐蕉师",
              "蕉研组的筑梦蕉师"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-32-014",
    "mode": "pf",
    "name": "结构规律",
    "season": "014",
    "version": "3.2",
    "startDate": "2025-04-28",
    "endDate": "2025-06-09",
    "effects": [
      "战技攻击我方施放战技攻击敌方目标后，每击中1个敌方目标，使我方额外积累5点「战意值」。",
      "战熄潮平 战斗开始时，我方施放战技攻击敌方目标后，对每个被攻击的敌方目标造成固定数值的伤害。",
      "战意汹涌 进入「战意汹涌」时，我方全体行动提前100%，期间敌方目标受到的伤害提高50%，且我方施放战技攻击敌方目标后，额外对每个被攻击的敌方目标的相邻目标造成固定数值的伤害。",
      "荒腔走板其一 肤廓 「战意汹涌」期间，我方全体战技不消耗战技点。角色施放战技或终结技后，每击中1个敌方目标获得1层【热潮】，每层使该角色造成的战技和终结技伤害提高4%，速度提高4%，最多叠加10层。",
      "战意机制：我方施放终结技攻击敌方目标后，每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其二 圣显 「战意汹涌」期间我方全体施放战技时消耗等同于自身20%生命上限的生命值，并在施放战技后回复自身20%生命上限的生命值。",
      "战意机制：我方全体角色每次受到攻击或损失生命值时，使我方额外积累3点「战意值」。",
      "荒腔走板其三 空头 「战意汹涌」期间，敌方目标受到的击破伤害提高30%，我方角色击破敌方目标弱点时，自身行动提前12%。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴斗士",
              "入魔机巧•灯昼龙鱼",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "金人勾魂使",
              "自动机兵•战犬",
              "自动机兵•甲虫"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "咆哮灵柩",
              "基层员工•安保",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "魔阴武弁",
              "虚卒•抹消者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "火焚灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴歌队"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "云骑巡防士卒",
              "「药王秘传」器元士",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "惊梦剧团的气泡锂犬",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "银鬃近卫",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "火焚灾影",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴斗士",
              "入魔机巧•灯昼龙鱼",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "金人勾魂使",
              "自动机兵•战犬",
              "自动机兵•甲虫"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "咆哮灵柩",
              "基层员工•安保",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "魔阴武弁",
              "虚卒•抹消者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "承露天人",
              "虚数织叶者",
              "火焚灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴歌队"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "黑潮蚀斧",
              "次蛰虫",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "正阳狮鹫",
              "基层员工•安保",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "「星核猎手」卡芙卡",
              "银鬃炮手",
              "黑潮蚀刃"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "魔阴身士卒",
              "天谴斗士",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚卒•抹消者",
              "「药王秘传」器元士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "至黑之剑，盗火行者",
              "残破容器"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-33-009",
    "mode": "as",
    "name": "冽风支配",
    "season": "009",
    "version": "3.3",
    "startDate": "2025-05-26",
    "endDate": "2025-07-07",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体解除控制状态、恢复战技点并激活终结技。 我方全体受到的回复量提高50%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "无望冽风的幻灭者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "勾魂摄魄的支配者",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-33-033",
    "mode": "moc",
    "name": "赤月吞狼",
    "season": "033",
    "version": "3.3",
    "startDate": "2025-06-23",
    "endDate": "2025-08-04",
    "effects": [
      "记忆紊流：我方编队中的第一位角色施放终结技后，自身与忆灵会获得【记忆印记】，持续1回合。持有【记忆印记】的目标造成的伤害提高40%，并在攻击后为【记忆紊流】增加2段攻击段数，最多叠加10段。 每个轮开始时，【记忆紊流】的每段攻击对随机敌方目标造成1次真实伤害。"
    ],
    "levels": [
      {
        "label": "赤月吞狼其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "幽府武弁"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•战犬",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "入魔机巧•率从狻猊",
              "入魔机巧•浓云金蟾",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "外宇宙之冰",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的发条暴徒",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "正阳狮鹫",
              "流星铁鹰"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "正阳狮鹫",
              "黑潮蚀魔",
              "流星铁鹰"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "深寒徘徊者",
              "「身陷樊笼的往昔」",
              "永冬灾影"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "可可利亚（敌方）",
              "冰锋"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "黑潮蚀斧",
              "黑潮蚀刃"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "蚕食者之影"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "银鬃尉官",
              "银鬃近卫"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）",
              "「授勋」",
              "「枪尖」",
              "「盾」"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "幽府武弁"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•战犬",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "入魔机巧•率从狻猊",
              "入魔机巧•浓云金蟾",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "外宇宙之冰",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的发条暴徒",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "正阳狮鹫",
              "流星铁鹰"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "正阳狮鹫",
              "黑潮蚀魔",
              "流星铁鹰"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "深寒徘徊者",
              "「身陷樊笼的往昔」",
              "永冬灾影"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "可可利亚（敌方）",
              "冰锋"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "黑潮蚀斧",
              "黑潮蚀刃"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "蚕食者之影"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "银鬃尉官",
              "银鬃近卫"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）",
              "「授勋」",
              "「枪尖」",
              "「盾」"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "冥魂渡者，死龙残躯，玻吕刻斯",
              "哀悯长臂"
            ],
            "elements": [
              "虚数",
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [],
            "elements": [
              "虚数",
              "量子",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "承露天人",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「星核猎手」萨姆"
            ],
            "elements": [
              "雷"
            ]
          }
        ]
      },
      {
        "label": "赤月吞狼其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "月夜天马",
              "天谴先锋",
              "天谴斗士"
            ],
            "elements": [
              "虚数",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "虫群•真蛰虫",
              "月夜天马",
              "幼蛰虫",
              "次蛰虫"
            ],
            "elements": [
              "虚数",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "黑潮蚀魔",
              "黑日狮鹫",
              "黑潮蚀斧",
              "黑日弓手"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "步离战首•呼雷",
              "玄爪狼卒",
              "蚀月狼卒"
            ],
            "elements": [
              "物理"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-33-015",
    "mode": "pf",
    "name": "叙事分析",
    "season": "015",
    "version": "3.3",
    "startDate": "2025-06-09",
    "endDate": "2025-07-21",
    "effects": [
      "终结技攻击我方施放终结技攻击敌方目标后，每击中1个敌方目标，使我方额外积累5点「战意值」。",
      "战熄潮平 敌方目标被任意单位消灭后，为我方全体附上1层【回音】。",
      "战意汹涌 进入「战意汹涌」时，消耗所有【回音】，每层【回音】对随机敌方目标造成1次固定数值的伤害。「战意汹涌」期间，敌方目标受到的伤害提高50%，且被任意单位消灭后额外为我方全体附上1层【回音】，当【回音】叠加至10层或以上时，消耗所有【回音】，每层【回音】对随机敌方目标造成1次固定数值的伤害。",
      "荒腔走板其一 共相 「战意汹涌」期间，我方全体速度提高40%，消耗所有【回音】攻击时恢复1个战技点。",
      "战意机制：我方施放战技攻击敌方目标后，每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其二 悖论 我方全体攻击没有对应属性弱点的敌人也能削减韧性，效果等同于原削韧值的50%，无法与其他无视弱点属性削韧效果叠加。「战意汹涌」期间，敌方目标受到的击破伤害提高30%。",
      "战意机制：我方攻击敌方目标后，每击破1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其三 神谱 消耗【回音】造成伤害后，我方全体造成的伤害提高60%，持续1回合。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "黑潮蚀斧",
              "自动机兵•战犬",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「同音共律的来日」",
              "惊梦剧团的气泡锂犬",
              "虚卒•掠夺者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "虚数织叶者",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "蚀月狼卒",
              "天谴猎手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "银鬃近卫",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "黑潮蚀魔",
              "流星铁鹰",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴歌队",
              "幽府武弁",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "银鬃尉官",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "黑潮蚀斧",
              "「药王秘传」器元士"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "流浪者",
              "虚卒•抹消者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "月夜天马",
              "天谴斗士",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "正阳狮鹫",
              "流星铁鹰",
              "幼蛰虫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "黑潮蚀斧",
              "自动机兵•战犬",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「同音共律的来日」",
              "惊梦剧团的气泡锂犬",
              "虚卒•掠夺者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "虚数织叶者",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "蚀月狼卒",
              "天谴猎手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "银鬃近卫",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "黑潮蚀魔",
              "流星铁鹰",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "幽府武弁",
              "黑潮朽弓（敌方）",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "承露天人",
              "黑潮参议",
              "「药王秘传」器元士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银枝（敌方）",
              "「授勋」",
              "「枪尖」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴哲人",
              "黑潮蚀刃",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "正阳狮鹫",
              "流星铁鹰",
              "黑潮朽弓（敌方）"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "虫群•真蛰虫",
              "黑潮蚀刃",
              "幼蛰虫"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-34-010",
    "mode": "as",
    "name": "金血恶兽",
    "season": "010",
    "version": "3.4",
    "startDate": "2025-07-07",
    "endDate": "2025-08-18",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体解除控制状态、恢复战技点并激活终结技。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "末日歧途的盗火者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "诛尽杀绝的灭星兽",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-34-034",
    "mode": "moc",
    "name": "博徒困境",
    "season": "034",
    "version": "3.4",
    "startDate": "2025-08-04",
    "endDate": "2025-09-15",
    "effects": [
      "记忆紊流：每个波次或轮开始时，使一个精英级别及以上的敌方目标获得【记忆印记】，该效果持续到下个轮开始。【记忆印记】为特殊灼烧，持有者每回合开始时受到火属性持续伤害。我方目标施放战技攻击持有【记忆印记】的目标后，对其和相邻目标造成等同于攻击者攻击力220%的附加伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的218.18%；韧性属性 约为普通同名敌方单位的120.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的185.71%；速度属性 约为普通同名敌方单位的110.92%",
      "该敌方单位的生命属性 约为普通同名敌方单位的206.25%；韧性属性 约为普通同名敌方单位的116.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的108.33%"
    ],
    "levels": [
      {
        "label": "博徒困境其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "兴风者"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑日狮鹫"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑日狮鹫",
              "黑潮蚀魔"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "昔在、今在、永在的剧目",
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「同音共律的来日」",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "杰帕德（敌方）",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "奇想林中的蕉研组"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "兴风者"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮参议",
              "黑日狮鹫",
              "黑潮蚀斧"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑日狮鹫",
              "黑潮蚀魔"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "「醉于盛会的此刻」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "昔在、今在、永在的剧目",
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "虚数",
              "火"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "「同音共律的来日」",
              "金人勾魂使",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "杰帕德（敌方）",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "奇想林中的蕉研组"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮蚀魔",
              "黑潮斗将"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "天谴先锋",
              "「贼灵」巴特鲁斯"
            ],
            "elements": [
              "量子",
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "至黑之剑，盗火行者"
            ],
            "elements": [
              "量子",
              "雷",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "博徒困境其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "金人司阍"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "史瓦罗（敌方）",
              "咆哮灵柩"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "黑潮蚀魔",
              "黑潮斗将"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「石心十人」诡弈砂金"
            ],
            "elements": [
              "物理"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-34-016",
    "mode": "pf",
    "name": "三幕架构",
    "season": "016",
    "version": "3.4",
    "startDate": "2025-07-21",
    "endDate": "2025-09-01",
    "effects": [
      "触发持续伤害敌方目标每次受到持续伤害后，使我方额外积累2点「战意值」。",
      "战熄潮平 敌方目标进入战斗时陷入1层特殊风化【迷音】，行动后陷入1层【迷音】，每回合开始时受到风属性持续伤害，最多叠加10层，持续3回合。",
      "战意汹涌 进入「战意汹涌」时使敌方全体陷入5层特殊风化【迷音】，并使其当前承受的所有持续伤害立即产生相当于原伤害100%的伤害。「战意汹涌」期间敌方目标受到的伤害提高50%，造成的伤害降低35%，速度提高50%。",
      "荒腔走板其一 直叙 「战意汹涌」期间，我方目标造成的持续伤害无视目标20%的全属性抗性，敌方目标受到持续伤害后，使我方全体造成的持续伤害提高1%，最多叠加99层，持续至「战意汹涌」结束。",
      "荒腔走板其二 互文 「战意汹涌」期间，我方目标造成的战技伤害提高50%，攻击陷入特殊风化【迷音】的目标时，每层【迷音】额外使战技伤害提高10%。",
      "战意机制：我方目标的战技每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其三 误置 每层【迷音】使敌方目标受到的伤害提高3%，「战意汹涌」期间，敌方目标进入战斗时和行动后额外叠加1层特殊风化【迷音】。",
      "战意机制：敌方目标被消灭后，使我方额外积累3点「战意值」。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃射手",
              "银鬃炮手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "天谴歌队",
              "「药王秘传」器元士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "幽府武弁",
              "黑潮朽弓（敌方）"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "魔阴武弁",
              "流星铁鹰",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴斗士",
              "黑潮蚀刃"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "天谴猎手",
              "黑潮蚀斧"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "虚卒•掠夺者",
              "虚数织叶者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "金人勾魂使",
              "黑潮朽弓（敌方）",
              "黑潮蚀斧"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "黑潮斗将",
              "黑潮蚀斧",
              "自动机兵•战犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的气泡锂犬",
              "黑潮参议",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "黑潮蚀魔",
              "黑潮参议",
              "幽府武弁"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "蚀月狼卒",
              "「药王秘传」器元士"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃射手",
              "银鬃炮手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "天谴歌队",
              "「药王秘传」器元士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "幽府武弁",
              "黑潮朽弓（敌方）"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "魔阴武弁",
              "流星铁鹰",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴斗士",
              "黑潮蚀刃"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "天谴猎手",
              "黑潮蚀斧"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "虚卒•掠夺者",
              "虚数织叶者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "金人勾魂使",
              "黑潮朽弓（敌方）",
              "黑潮蚀斧"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "杰帕德（敌方）",
              "黑潮朽弓（敌方）",
              "自动机兵•战犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的气泡锂犬",
              "黑潮参议",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "黑潮蚀魔",
              "黑潮参议",
              "幽府武弁"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "步离战首•呼雷",
              "蚀月狼卒",
              "「药王秘传」器元士"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-35-011",
    "mode": "as",
    "name": "天狼战首",
    "season": "011",
    "version": "3.5",
    "startDate": "2025-08-18",
    "endDate": "2025-09-29",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体解除控制状态、恢复战技点并激活终结技。 敌方全体受到的持续伤害提高25%，战技伤害提高15%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "雷奔云谲的恶狼主",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "业火焚心的影将军",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-35-035",
    "mode": "moc",
    "name": "创世之柱",
    "season": "035",
    "version": "3.5",
    "startDate": "2025-09-15",
    "endDate": "2025-10-27",
    "effects": [
      "记忆紊流：我方角色施放战技进行攻击或忆灵进行攻击后，为【记忆紊流】增加1段攻击段数，最多增加10段。 每个轮开始时，【记忆紊流】的每段攻击对随机敌方目标造成1次真实伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的218.18%；韧性属性 约为普通同名敌方单位的120.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的150.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的218.18%；速度属性 约为普通同名敌方单位的110.00%；韧性属性 约为普通同名敌方单位的140.00%"
    ],
    "levels": [
      {
        "label": "创世之柱其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "兴风者"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "外宇宙之冰"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮蚀斧",
              "黑潮斗将",
              "黑潮蚀刃"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "蚕食者之影"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "银鬃尉官"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "兴风者"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "外宇宙之冰"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "外宇宙之炎",
              "银鬃尉官"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "昔在、今在、永在的剧目",
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑日狮鹫",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "步离战首•呼雷"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "天谴先锋",
              "「贼灵」巴特鲁斯"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "颁赐者，千军首，天谴之矛"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "创世之柱其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "波涛夫人",
              "黑潮斗将"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "波涛夫人",
              "杰帕德（敌方）"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "第一位天才，隐德来希，赞达尔"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-35-017",
    "mode": "pf",
    "name": "主观叙事",
    "season": "017",
    "version": "3.5",
    "startDate": "2025-09-01",
    "endDate": "2025-10-13",
    "effects": [
      "战技攻击我方施放战技攻击敌方目标后，每击中1个敌方目标，使我方额外积累5点「战意值」。",
      "战熄潮平 战斗开始时，我方施放战技攻击敌方目标后，对每个被攻击的敌方目标造成固定数值的伤害。",
      "战意汹涌 进入「战意汹涌」时，我方全体行动提前100%，期间敌方目标受到的伤害提高50%，且我方施放战技攻击敌方目标后，额外对每个被攻击的敌方目标的相邻目标造成固定数值的伤害。",
      "荒腔走板其一 谣曲 「战意汹涌」期间，忆灵造成的伤害提高30%，当忆灵消失时，使忆师行动提前15%。",
      "战意机制：忆灵攻击后每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其二 奏雅 进入「战意汹涌」时，立即恢复3个战技点。「战意汹涌」期间，敌方目标受到的持续伤害提高30%。",
      "战意机制：敌方目标每次受到持续伤害后，使我方额外积累1点「战意值」。",
      "荒腔走板其三 孤韵 「战意汹涌」期间，我方施放战技攻击敌方目标后，对每个被攻击的敌方目标额外造成等同于原伤害30%的真实伤害。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "云骑巡防士卒",
              "「药王秘传」器元士",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "惊梦剧团的气泡锂犬",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "银鬃近卫",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "火焚灾影",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃近卫",
              "幽府武弁",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "正阳狮鹫",
              "天谴歌队",
              "流星铁鹰"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "云骑巡防士卒",
              "天谴哲人",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "蚕食者之影",
              "云骑巡防士卒",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶灵兽•长右",
              "黑潮参议",
              "银鬃近卫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "云骑巡防士卒",
              "「药王秘传」器元士",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "惊梦剧团的气泡锂犬",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "银鬃近卫",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "火焚灾影",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "浪花侍女",
              "永冬灾影",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "波涛夫人",
              "浪花侍女",
              "次蛰虫"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "布洛妮娅（敌方）",
              "基层员工•安保",
              "黑潮蚀斧"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "黑潮朽弓（敌方）",
              "天谴斗士",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚卒•抹消者",
              "「药王秘传」器元士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "至黑之剑，盗火行者",
              "残破容器"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "aa-36-001",
    "mode": "aa",
    "name": "智械残局",
    "season": "001",
    "version": "3.6",
    "startDate": "2025-09-24",
    "endDate": "2025-11-05",
    "effects": [],
    "levels": [],
    "bosses": [],
    "nodes": [
      {
        "label": "骑士一",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "黑潮蚀魔",
              "黑日狮鹫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士二",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "波涛夫人"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "忆域迷因「何物朝向死亡」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士三",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "黑潮蚀魔"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "黑潮蚀魔",
              "黑日狮鹫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "将杀王棋·绝境",
        "kind": "king-hard",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "正阳狮鹫",
              "月夜天马"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "第一位天才，隐德来希，赞达尔"
            ],
            "elements": []
          }
        ]
      }
    ],
    "source": {
      "label": "BWIKI · 仲裁一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-36-012",
    "mode": "as",
    "name": "冥茫冽风",
    "season": "012",
    "version": "3.6",
    "startDate": "2025-09-29",
    "endDate": "2025-11-10",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体解除控制状态、激活终结技并回复生命值。 敌方全体受到的忆灵技伤害提高10%，战技伤害提高30%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "无望冽风的幻灭者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "枯茎朽骨的引路人",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-36-036",
    "mode": "moc",
    "name": "范畴错误",
    "season": "036",
    "version": "3.6",
    "startDate": "2025-10-27",
    "endDate": "2025-12-08",
    "effects": [
      "记忆紊流：我方角色拥有召唤物时，自身与召唤物造成的伤害提高40%。 每个轮开始时，【记忆紊流】对敌方全体目标造成1次真实伤害，我方每拥有1个召唤物则额外造成1次伤害，最多计入2个。",
      "该敌方单位的生命属性 约为普通同名敌方单位的154.29%；韧性属性 约为普通同名敌方单位的116.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的145.45%",
      "该敌方单位的生命属性 约为普通同名敌方单位的108.33%"
    ],
    "levels": [
      {
        "label": "范畴错误其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幽府武弁",
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴猎手",
              "天谴先锋"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "外宇宙之炎"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「贼灵」巴特鲁斯",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮参议",
              "黑日狮鹫"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "可可利亚（敌方）"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "黑潮蚀刃",
              "黑潮蚀魔"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "黑潮蚀魔",
              "黑潮斗将"
            ],
            "elements": [
              "风",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幽府武弁",
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴猎手",
              "天谴先锋"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "外宇宙之炎"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「贼灵」巴特鲁斯",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑日狮鹫",
              "月夜天马"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "可可利亚（敌方）",
              "月夜天马"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "黑潮蚀魔",
              "黑潮斗将"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "第一位天才，隐德来希，赞达尔"
            ],
            "elements": [
              "风",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "波涛夫人",
              "金人勾魂使"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「石心十人」诡弈砂金"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "金血忆灵•翼蛇形"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "奇想林中的蕉研组"
            ],
            "elements": [
              "冰",
              "火"
            ]
          }
        ]
      },
      {
        "label": "范畴错误其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "承露天人"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "至黑之剑，盗火行者"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金血忆灵•裁定忘却之形"
            ],
            "elements": [
              "物理"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-36-018",
    "mode": "pf",
    "name": "五步抑扬",
    "season": "018",
    "version": "3.6",
    "startDate": "2025-10-13",
    "endDate": "2025-11-24",
    "effects": [
      "终结技攻击我方施放终结技攻击敌方目标后，每击中1个敌方目标，使我方额外积累5点「战意值」。",
      "战熄潮平 敌方目标被任意单位消灭后，为我方全体附上1层【回音】。",
      "战意汹涌 进入「战意汹涌」时，消耗所有【回音】，每层【回音】对随机敌方目标造成1次固定数值的伤害。「战意汹涌」期间，敌方目标受到的伤害提高50%，且被任意单位消灭后额外为我方全体附上1层【回音】，当【回音】叠加至10层或以上时，消耗所有【回音】，每层【回音】对随机敌方目标造成1次固定数值的伤害。",
      "荒腔走板其一 追想 「战意汹涌」期间，我方目标施放终结技后使我方全体造成的伤害提高15%，最多叠加5层，持续至「战意汹涌」结束。",
      "荒腔走板其二 犹记 进入「战意汹涌」时，立即恢复3个战技点。「战意汹涌」期间，敌方目标受到的持续伤害提高30%。",
      "战意机制：敌方目标每次受到持续伤害后，使我方额外积累1点「战意值」。",
      "荒腔走板其三 颖悟 「战意汹涌」期间，我方全体速度提高20%，施放战技后为我方全体附上1层【回音】。",
      "战意机制：我方施放战技攻击敌方目标后，每击中1个敌方目标，使我方额外积累3点「战意值」。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "「药王秘传」器元士",
              "幽府武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "银鬃炮手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「醉于盛会的此刻」",
              "虚卒•掠夺者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "云骑巡防士卒",
              "「药王秘传」器元士",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "惊梦剧团的气泡锂犬",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "银鬃近卫",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "火焚灾影",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "「药王秘传」器元士",
              "幽府武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "银鬃炮手",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「醉于盛会的此刻」",
              "虚卒•掠夺者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "「药王秘传」器元士",
              "黑潮朽弓（敌方）",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "承露天人",
              "黑潮参议",
              "金血忆灵•雉形"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银枝（敌方）",
              "「授勋」",
              "「枪尖」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴猎手",
              "黑潮蚀斧",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "魔阴武弁",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "蛮神，疯王，纷争的化身",
              "天谴斗士",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "aa-37-002",
    "mode": "aa",
    "name": "烈阳幻域",
    "season": "002",
    "version": "3.7",
    "startDate": "2025-11-05",
    "endDate": "2025-12-16",
    "effects": [],
    "levels": [],
    "bosses": [],
    "nodes": [
      {
        "label": "骑士一",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "咆哮灵柩",
              "金人勾魂使"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士二",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "咆哮灵柩",
              "金血忆灵•翼蛇形"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "步离战首•呼雷"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士三",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "丰饶灵兽•长右",
              "资深员工•组长"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "奇想林中的蕉研组"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "烈阳幻域",
        "kind": "king",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "至高，至阳，天空的化身"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "烈阳幻域·绝境",
        "kind": "king-hard",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "至高，至阳，天空的化身"
            ],
            "elements": []
          }
        ]
      }
    ],
    "source": {
      "label": "BWIKI · 仲裁一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-37-013",
    "mode": "as",
    "name": "螟蝗煽动",
    "season": "013",
    "version": "3.7",
    "startDate": "2025-11-10",
    "endDate": "2025-12-22",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方目标被弱点击破时，使我方全体目标解除控制状态、立即行动并回复生命值。 敌方全体目标受到的忆灵技伤害提高15%，终结技伤害提高25%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "遮天蔽日的噬星蠹",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "乘间抵隙的煽动者",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-37-037",
    "mode": "moc",
    "name": "猴子把戏",
    "season": "037",
    "version": "3.7",
    "startDate": "2025-12-08",
    "endDate": "2026-01-19",
    "effects": [
      "记忆紊流：我方目标攻击持有对应属性弱点的精英或首领敌人后，为【记忆紊流】增加1段攻击段数，击破精英或首领敌人弱点时额外增加1段攻击段数，最多叠加10段。 每个轮开始时，【记忆紊流】的每段攻击对随机敌方目标造成1次真实伤害。",
      "该敌方单位的生命属性 约为普通同名敌方单位的218.18%；韧性属性 约为普通同名敌方单位的120.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的150.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的154.29%；韧性属性 约为普通同名敌方单位的116.67%",
      "该敌方单位的生命属性 约为普通同名敌方单位的122.22%",
      "该敌方单位的生命属性 约为普通同名敌方单位的218.18%；速度属性 约为普通同名敌方单位的110.00%；韧性属性 约为普通同名敌方单位的140.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的160.00%",
      "该敌方单位的生命属性 约为普通同名敌方单位的138.46%"
    ],
    "levels": [
      {
        "label": "猴子把戏其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "兴风者"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "外宇宙之冰"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "自动机兵•齿狼"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮蚀斧",
              "黑潮斗将",
              "黑潮蚀刃"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "蚕食者之影"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "银鬃尉官"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幽府武弁",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•战犬",
              "自动机兵•灰熊"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的圆幕先生",
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•率从狻猊",
              "金人司阍",
              "入魔机巧•浓云金蟾"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "外宇宙之冰"
            ],
            "elements": [
              "量子",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的发条暴徒",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "正阳狮鹫"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "正阳狮鹫",
              "黑潮蚀魔"
            ],
            "elements": [
              "量子",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "深寒徘徊者",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "可可利亚（敌方）"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮蚀斧",
              "黑潮斗将",
              "黑潮蚀刃"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "蚕食者之影"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "炽燃徘徊者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虫群•真蛰虫",
              "炽燃徘徊者"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "波涛夫人",
              "黑潮斗将"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "波涛夫人",
              "杰帕德（敌方）"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "第一位天才，隐德来希，赞达尔"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "猴子把戏其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "承露天人",
              "飓风大母"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「星核猎手」萨姆"
            ],
            "elements": [
              "量子",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "正阳狮鹫",
              "金血忆灵•翼蛇形"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "步离战首•呼雷"
            ],
            "elements": [
              "火",
              "物理"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-37-019",
    "mode": "pf",
    "name": "程式句法",
    "season": "019",
    "version": "3.7",
    "startDate": "2025-11-24",
    "endDate": "2026-01-05",
    "effects": [
      "触发持续伤害敌方目标每次受到持续伤害后，使我方额外积累2点「战意值」。",
      "战熄潮平 敌方目标进入战斗时陷入1层特殊风化【迷音】，行动后陷入1层【迷音】，每回合开始时受到风属性持续伤害，最多叠加10层，持续3回合。",
      "战意汹涌 进入「战意汹涌」时使敌方全体陷入5层特殊风化【迷音】，并使其当前承受的所有持续伤害立即产生相当于原伤害100%的伤害。「战意汹涌」期间敌方目标受到的伤害提高50%，造成的伤害降低35%，速度提高50%。",
      "荒腔走板其一 直叙 「战意汹涌」期间，我方目标造成的持续伤害无视目标20%的全属性抗性，敌方目标受到持续伤害后，使我方全体造成的持续伤害提高1%，最多叠加99层，持续至「战意汹涌」结束。",
      "荒腔走板其二 裂帛 「战意汹涌」期间，每层【迷音】使我方目标造成伤害时的弱点击破效率提高10%。",
      "战意机制：敌方目标的弱点被击破时，使我方额外积累5点「战意值」。",
      "荒腔走板其三 书丹 每层【迷音】使敌方目标受到的伤害提高3%。「战意汹涌」期间，忆灵攻击后使目标陷入1层【迷音】。",
      "战意机制：忆灵攻击后每击中1个敌方目标，使我方额外积累3点「战意值」。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴哲人",
              "魔阴身士卒",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "流浪者",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃近卫",
              "幽府武弁",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "正阳狮鹫",
              "天谴歌队",
              "流星铁鹰"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴斗士",
              "入魔机巧•灯昼龙鱼",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "金人勾魂使",
              "自动机兵•战犬",
              "自动机兵•甲虫"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "咆哮灵柩",
              "基层员工•安保",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "魔阴武弁",
              "虚卒•抹消者",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "火焚灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴歌队"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴哲人",
              "魔阴身士卒",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "流浪者",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃近卫",
              "幽府武弁",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "正阳狮鹫",
              "天谴歌队",
              "流星铁鹰"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "忆域迷因「我心支离破碎」",
              "自动机兵•甲虫",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "波涛夫人",
              "天谴哲人",
              "浪花侍女"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "可可利亚（敌方）",
              "金血忆灵•雉形",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "幽府武弁",
              "黑潮朽弓（敌方）",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "承露天人",
              "黑潮参议",
              "「药王秘传」器元士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "第一位天才，隐德来希，赞达尔",
              "黑潮朽弓（敌方）",
              "黑潮蚀斧"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "aa-38-003",
    "mode": "aa",
    "name": "不协和音",
    "season": "003",
    "version": "3.8",
    "startDate": "2025-12-17",
    "endDate": "2026-02-12",
    "effects": [],
    "levels": [],
    "bosses": [],
    "nodes": [
      {
        "label": "骑士一",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "飓风大母",
              "承露天人"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士二",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "正阳狮鹫",
              "月夜天马"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "虫群•真蛰虫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士三",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "自动机兵•齿狼",
              "惊梦剧团的甜猿泰山"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "金血忆灵•裁定忘却之形"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "不协和音",
        "kind": "king",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "「齐响诗班」神主日"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "不协和音·绝境",
        "kind": "king-hard",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "「齐响诗班」神主日"
            ],
            "elements": []
          }
        ]
      }
    ],
    "source": {
      "label": "BWIKI · 仲裁一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-38-015",
    "mode": "as",
    "name": "支配冥茫",
    "season": "015",
    "version": "3.8",
    "startDate": "2026-02-02",
    "endDate": "2026-03-16",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方目标被弱点击破时，使我方全体目标解除控制状态、立即行动并恢复战技点。 敌方全体目标受到的击破伤害提高25%，忆灵技伤害提高15%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "勾魂摄魄的支配者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "枯茎朽骨的引路人",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-38-014",
    "mode": "as",
    "name": "猢狲骑士",
    "season": "014",
    "version": "3.8",
    "startDate": "2025-12-22",
    "endDate": "2026-02-02",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方目标被弱点击破时，使我方全体目标解除控制状态、立即行动并恢复战技点。 敌方全体目标受到的击破伤害提高25%，忆灵技伤害提高15%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "芒寒色正的银骑士",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "心蕉如火的猴把戏",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-38-038",
    "mode": "moc",
    "name": "堤溃蚁穴",
    "season": "038",
    "version": "3.8",
    "startDate": "2026-01-19",
    "endDate": "2026-03-02",
    "effects": [
      "记忆紊流：每个波次开始时，为我方恢复4个战技点，我方目标施放战技或消耗战技点时，为【记忆紊流】增加1段攻击段数，最多叠加15段。 每个轮开始时，【记忆紊流】的每段攻击对随机敌方目标造成1次真实伤害。"
    ],
    "levels": [
      {
        "label": "堤溃蚁穴其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "幽府武弁"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•战犬",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "飓风大母",
              "泡影稚子"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "飓风大母",
              "波涛夫人",
              "泡影稚子",
              "浪花侍女"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金血忆灵•翼蛇形",
              "金血忆灵•雉形"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金血忆灵•翼蛇形",
              "金人勾魂使"
            ],
            "elements": [
              "物理"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "兴风者",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的十七分熟",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "玄爪狼卒"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "外宇宙之冰"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•甲虫"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "自动机兵•齿狼",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "幽府武弁"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•战犬",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "惊梦剧团的圆幕先生"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "兴风者",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的十七分熟",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "玄爪狼卒"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "外宇宙之冰",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•甲虫"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "自动机兵•齿狼",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "承露天人",
              "天谴斗士"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "至黑之剑，盗火行者",
              "残破容器"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "波涛夫人",
              "金人勾魂使",
              "浪花侍女"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「石心十人」诡弈砂金",
              "「所有或一无所有」"
            ],
            "elements": [
              "雷",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "「身陷樊笼的往昔」",
              "飓风大母",
              "泡影稚子"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "昔在、今在、永在的剧目",
              "「身陷樊笼的往昔」",
              "「同音共律的来日」",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金血忆灵•裁定忘却之形",
              "金血忆灵•雉形"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "堤溃蚁穴其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑日狮鹫",
              "外宇宙之冰",
              "黑日弓手"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "可可利亚（敌方）",
              "布洛妮娅（敌方）",
              "冰锋",
              "银鬃近卫",
              "银鬃射手"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "波涛夫人",
              "金血忆灵•翼蛇形",
              "浪花侍女"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "示死祸源：深魇蝗灾",
              "幼蛰虫"
            ],
            "elements": [
              "火",
              "物理"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-38-020",
    "mode": "pf",
    "name": "史诗集群",
    "season": "020",
    "version": "3.8",
    "startDate": "2026-01-05",
    "endDate": "2026-02-16",
    "effects": [
      "战技攻击我方施放战技攻击敌方目标后，每击中1个敌方目标，使我方额外积累5点「战意值」。",
      "战熄潮平 战斗开始时，我方施放战技攻击敌方目标后，对每个被攻击的敌方目标造成固定数值的伤害。",
      "战意汹涌 进入「战意汹涌」时，我方全体行动提前100%，期间敌方目标受到的伤害提高50%，且我方施放战技攻击敌方目标后，额外对每个被攻击的敌方目标的相邻目标造成固定数值的伤害。",
      "荒腔走板其一 孤韵 「战意汹涌」期间，我方施放战技攻击敌方目标后，对每个被攻击的敌方目标额外造成等同于原伤害30%的真实伤害。",
      "荒腔走板其二 狂言 进入「战意汹涌」时，击破所有敌方目标并恢复4个战技点，「战意汹涌」期间，敌方目标受到的击破伤害提高50%。",
      "战意机制：我方攻击敌方目标后，每击破1个敌方目标，使我方额外积累5点「战意值」。",
      "荒腔走板其三 谣曲 「战意汹涌」期间，忆灵造成的伤害提高30%，当忆灵消失时，使忆师行动提前15%。",
      "战意机制：忆灵攻击后每击中1个敌方目标，使我方额外积累3点「战意值」。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "云骑巡防士卒",
              "「药王秘传」器元士",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "惊梦剧团的气泡锂犬",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "银鬃近卫",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "火焚灾影",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃近卫",
              "幽府武弁",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "正阳狮鹫",
              "天谴歌队",
              "流星铁鹰"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "云骑巡防士卒",
              "天谴哲人",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "蚕食者之影",
              "云骑巡防士卒",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶灵兽•长右",
              "黑潮参议",
              "银鬃近卫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "云骑巡防士卒",
              "「药王秘传」器元士",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "惊梦剧团的气泡锂犬",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "银鬃近卫",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "火焚灾影",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "永冬灾影",
              "次蛰虫",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "金血忆灵•翼蛇形",
              "金血忆灵•雉形"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "步离战首•呼雷",
              "玄爪狼卒",
              "蚀月狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "黑潮朽弓（敌方）",
              "魔阴武弁",
              "王下一桶"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "黑潮朽弓（敌方）",
              "魔阴身士卒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶玄鹿",
              "肃风之杪",
              "繁花之杪"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "aa-40-004",
    "mode": "aa",
    "name": "网络风波",
    "season": "004",
    "version": "4.0",
    "startDate": "2026-02-13",
    "endDate": "2026-03-25",
    "effects": [],
    "levels": [],
    "bosses": [],
    "nodes": [
      {
        "label": "骑士一",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "惊梦剧团的十七分熟",
              "波涛夫人"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "示死祸源：深魇蝗灾"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士二",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "黑潮蚀魔",
              "黑日狮鹫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "至黑之剑，盗火行者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士三",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "画板孔雀",
              "外宇宙之炎"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「星核猎手」萨姆"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "网络风波",
        "kind": "king",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "摇滚狂徒",
              "丰饶灵兽•长右",
              "攻击性阅读物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "火花大会@Official"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "网络风波·绝境",
        "kind": "king-hard",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "摇滚狂徒",
              "丰饶灵兽•长右",
              "攻击性阅读物"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "火花大会@Official"
            ],
            "elements": []
          }
        ]
      }
    ],
    "source": {
      "label": "BWIKI · 仲裁一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-40-016",
    "mode": "as",
    "name": "兵锋天狼",
    "season": "016",
    "version": "4.0",
    "startDate": "2026-03-16",
    "endDate": "2026-04-27",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方目标被弱点击破时，使我方全体目标解除控制状态、恢复战技点、立即行动并使阿哈立即获得一个额外回合（本回合固定计入10笑点）。 敌方全体目标受到的欢愉伤害提高25%，弱点击破伤害提高15%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "兵戈扰攘的常胜军",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "蛊言妄念的蚀心兽",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-40-039",
    "mode": "moc",
    "name": "网络谜踪",
    "season": "039",
    "version": "4.0",
    "startDate": "2026-03-02",
    "endDate": "2026-04-13",
    "effects": [
      "记忆紊流：每个波次或轮开始时，获得5个笑点，每次获得笑点时，为【记忆紊流】增加对应点数的充能，最多叠加50点。 每个轮开始时，【记忆紊流】根据充能点数对敌方目标造成1次真实伤害。"
    ],
    "levels": [
      {
        "label": "网络谜踪其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "虚数织叶者",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "「同音共律的来日」",
              "虚数织叶者"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "幽府武弁",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右",
              "魔阴身士卒"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "外宇宙之炎",
              "天谴斗士"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「贼灵」巴特鲁斯",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "虚卒•践踏者",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑日狮鹫",
              "黑潮参议",
              "黑日弓手"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "可可利亚（敌方）",
              "冰锋"
            ],
            "elements": [
              "量子",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "黑潮蚀魔",
              "黑潮蚀刃"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "黑潮蚀魔",
              "黑潮斗将"
            ],
            "elements": [
              "风",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•齿狼",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "虚数织叶者",
              "自动机兵•战犬"
            ],
            "elements": [
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "蚕食者之影",
              "「同音共律的来日」",
              "虚数织叶者"
            ],
            "elements": [
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "幽府武弁",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「同音共律的来日」",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右",
              "魔阴身士卒"
            ],
            "elements": [
              "火",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "外宇宙之炎",
              "天谴斗士"
            ],
            "elements": [
              "量子",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "「贼灵」巴特鲁斯",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "虚卒•践踏者",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "画板孔雀",
              "外宇宙之冰",
              "助手涂鸦•拖稿"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "云骑骁卫•彦卿",
              "飞剑"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "黑潮斗将",
              "治安忠犬"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「星核猎手」卡芙卡",
              "黑潮斗将",
              "治安忠犬"
            ],
            "elements": [
              "风",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "资深员工•组长",
              "金血忆灵•翼蛇形",
              "基层员工•外勤",
              "基层员工•安保"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "奇想林中的蕉研组",
              "蕉研组的谐乐蕉师",
              "蕉研组的财富蕉师",
              "蕉研组的助蕉",
              "蕉研组的筑梦蕉师"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "金人勾魂使",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金血忆灵•裁定忘却之形",
              "金血忆灵•雉形"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "网络谜踪其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "摇滚狂徒",
              "画板孔雀",
              "攻击性阅读物"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "火花大会@Official",
              "直播小助手",
              "1号输出端",
              "2号输出端",
              "攻击性阅读物"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "波涛夫人",
              "黑潮蚀魔",
              "浪花侍女"
            ],
            "elements": [
              "风",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "第一位天才，隐德来希，赞达尔",
              "天谴斗士",
              "黑潮蚀刃",
              "黑潮蚀斧"
            ],
            "elements": [
              "风",
              "物理"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-40-021",
    "mode": "pf",
    "name": "无字小说",
    "season": "021",
    "version": "4.0",
    "startDate": "2026-02-16",
    "endDate": "2026-03-30",
    "effects": [
      "获得笑点每次获得笑点时，使我方额外积累2点「战意值」。",
      "战熄潮平 关卡拥有特殊的欢愉技，进入阿哈时刻时对随机敌方目标造成15次虚数属性欢愉伤害。敌方目标被任意目标消灭时，获得1笑点。",
      "战意汹涌 进入「战意汹涌」时，使阿哈立即获得一个固定计入20笑点的额外回合，本回合不消耗笑点且造成的欢愉技伤害为原伤害的0.5%。「战意汹涌」期间敌方目标受到的伤害提高0.5%，并使阿哈时刻的速度提升40点。",
      "荒腔走板其一 狂欢 「战意汹涌」期间，敌方目标受到的欢愉伤害提高0.3%，阿哈时刻的速度额外提高20点。",
      "荒腔走板其二 狂想 我方目标施放普攻或战技后，获得1个笑点；「战意汹涌」期间，我方目标造成的伤害提高0.5%。",
      "战意机制：普攻或战技每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其三 狂斥 我方目标施放攻击造成击破伤害后，获得1个笑点；「战意汹涌」期间，敌方目标受到的击破伤害提高0.3%。",
      "战意机制：敌方目标的弱点被击破时，使我方额外积累5点「战意值」。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "幽府武弁",
              "「药王秘传」器元士"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "银鬃炮手",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「醉于盛会的此刻」",
              "虚卒•掠夺者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "「药王秘传」器元士",
              "云骑巡防士卒",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "惊梦剧团的气泡锂犬",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "银鬃近卫",
              "虚数织叶者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "惊梦剧团的圆幕先生",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴斗士",
              "天谴猎手"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "幽府武弁",
              "「药王秘传」器元士"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "银鬃炮手",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「醉于盛会的此刻」",
              "虚卒•掠夺者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "浪花侍女",
              "永冬灾影",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "摇滚狂徒",
              "黑潮蚀斧",
              "攻击性阅读物"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "布洛妮娅",
              "基层员工•安保",
              "金血忆灵•雉形"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴哲人",
              "黑潮蚀刃",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "治安忠犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "虫群•真蛰虫",
              "黑潮蚀刃",
              "幼蛰虫"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "aa-41-005",
    "mode": "aa",
    "name": "别惹帕姆",
    "season": "005",
    "version": "4.1",
    "startDate": "2026-03-26",
    "endDate": "2026-04-21",
    "effects": [],
    "levels": [],
    "bosses": [],
    "nodes": [
      {
        "label": "骑士一",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "破晓战队•苍翼",
              "摇滚狂徒"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士二",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "黑日狮鹫",
              "黑潮斗将"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "冥魂渡者，死龙残躯，玻吕刻斯"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士三",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "第一位天才，隐德来希，赞达尔"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "别惹帕姆",
        "kind": "king",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "波涛夫人",
              "SD民用机铠"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "合金机铠•帕姆王"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "别惹帕姆·绝境",
        "kind": "king-hard",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "波涛夫人",
              "SD民用机铠"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "合金机铠•帕姆王"
            ],
            "elements": []
          }
        ]
      }
    ],
    "source": {
      "label": "BWIKI · 仲裁一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-41-040",
    "mode": "moc",
    "name": "演剧终焉",
    "season": "040",
    "version": "4.1",
    "startDate": "2026-04-13",
    "endDate": "2026-05-25",
    "effects": [
      "记忆紊流：我方目标施放攻击后获得1个笑点，并为【记忆紊流】增加对应点数的充能，最多叠加20点。 每个轮开始时，【记忆紊流】根据充能点数对敌方全体目标造成1次真实伤害。"
    ],
    "levels": [
      {
        "label": "演剧终焉其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "摇滚狂徒",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右",
              "魔阴身士卒"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "兴风者",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的十七分熟",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "玄爪狼卒"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "外宇宙之冰"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•甲虫"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "自动机兵•齿狼",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "黑潮蚀斧",
              "黑潮蚀刃"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "蚕食者之影"
            ],
            "elements": [
              "风",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "银鬃尉官",
              "银鬃近卫"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）",
              "「授勋」",
              "「枪尖」",
              "「盾」"
            ],
            "elements": [
              "冰",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "守护者之影",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "摇滚狂徒",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "风",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "丰饶灵兽•长右",
              "魔阴身士卒"
            ],
            "elements": [
              "风",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•甲虫",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "兴风者",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "冰",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的十七分熟",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "玄爪狼卒"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "外宇宙之冰"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "自动机兵•甲虫"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "自动机兵•齿狼",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": [
              "虚数",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "外宇宙之炎",
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "奇想林中的蕉研组",
              "蕉研组的谐乐蕉师",
              "蕉研组的财富蕉师",
              "蕉研组的助蕉",
              "蕉研组的筑梦蕉师"
            ],
            "elements": [
              "虚数",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "黑日狮鹫",
              "「醉于盛会的此刻」",
              "黑日弓手"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "步离战首•呼雷",
              "玄爪狼卒",
              "蚀月狼卒"
            ],
            "elements": [
              "火",
              "物理"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "摇滚狂徒",
              "画板孔雀",
              "攻击性阅读物"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "火花大会@Official",
              "直播小助手",
              "1号输出端",
              "2号输出端",
              "攻击性阅读物"
            ],
            "elements": [
              "火",
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的十七分熟",
              "惊梦剧团的气泡锂犬",
              "黑潮蚀刃"
            ],
            "elements": [
              "风",
              "雷",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗",
              "惊梦剧团的十七分熟",
              "辅助机械臂单元"
            ],
            "elements": [
              "风",
              "雷",
              "火"
            ]
          }
        ]
      },
      {
        "label": "演剧终焉其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "咆哮灵柩",
              "全自动魔仙棒",
              "天谴斗士"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "颁赐者，千军首，天谴之矛",
              "蛮神，疯王，纷争的化身",
              "征服或被征服"
            ],
            "elements": [
              "雷",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "摇滚狂徒",
              "破晓战队•苍翼"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「星核猎手」卡芙卡",
              "月夜天马"
            ],
            "elements": [
              "虚数",
              "物理"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-41-022",
    "mode": "pf",
    "name": "虚境成章",
    "season": "022",
    "version": "4.1",
    "startDate": "2026-03-30",
    "endDate": "2026-05-11",
    "effects": [
      "终结技攻击我方施放终结技攻击敌方目标后，每击中1个敌方目标，使我方额外积累5点「战意值」。",
      "战熄潮平 敌方目标被任意单位消灭后，为我方全体附上1层【回音】。",
      "战意汹涌 进入「战意汹涌」时，消耗所有【回音】，每层【回音】对随机敌方目标造成1次固定数值的伤害。「战意汹涌」期间，敌方目标受到的伤害提高0.5%，且被任意单位消灭后额外为我方全体附上1层【回音】，当【回音】叠加至10层或以上时，消耗所有【回音】，每层【回音】对随机敌方目标造成1次固定数值的伤害。",
      "荒腔走板其一 犹记 进入「战意汹涌」时，立即恢复3个战技点。「战意汹涌」期间，敌方目标受到的持续伤害提高0.3%。",
      "战意机制：敌方目标每次受到持续伤害后，使我方额外积累1点「战意值」。",
      "荒腔走板其二 喧哗 「战意汹涌」期间，我方目标造成的追加攻击伤害提高0.5%，我方目标施放追加攻击后为我方全体附上1层【回音】。",
      "战意机制：我方施放追加攻击后，每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其三 骚动 「战意汹涌」期间，我方全体速度提高0.35%，消耗所有【回音】攻击时恢复1个战技点。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴歌队",
              "幽府武弁",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "银鬃尉官",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "黑潮蚀斧",
              "「药王秘传」器元士"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴斗士",
              "入魔机巧•灯昼龙鱼",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "金人勾魂使",
              "自动机兵•战犬",
              "自动机兵•甲虫"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "咆哮灵柩",
              "基层员工•安保",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "幽府武弁",
              "「药王秘传」器元士"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "火焚灾影",
              "银鬃炮手",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「醉于盛会的此刻」",
              "虚卒•掠夺者",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴歌队",
              "幽府武弁",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "银鬃尉官",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "黑潮蚀斧",
              "「药王秘传」器元士"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴歌队",
              "幽府武弁",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "银鬃尉官",
              "银鬃射手",
              "银鬃炮手"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "黑潮蚀斧",
              "「药王秘传」器元士"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "永冬灾影",
              "次蛰虫",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "金血忆灵•雉形",
              "金血忆灵•翼蛇形"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银枝",
              "「盾」",
              "「枪尖」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "自动机兵•甲虫",
              "惊梦剧团的圆幕先生",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「身陷樊笼的往昔」",
              "玄爪狼卒",
              "黑潮蚀刃"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "「星核猎手」萨姆",
              "自动机兵•甲虫",
              "助手涂鸦•赶稿"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "aa-42-006",
    "mode": "aa",
    "name": "幸福语法",
    "season": "006",
    "version": "4.2",
    "startDate": "2026-04-22",
    "endDate": "2026-06-01",
    "effects": [],
    "levels": [],
    "bosses": [],
    "nodes": [
      {
        "label": "骑士一",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "摇滚狂徒"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "乐变化天人",
              "摇滚狂徒"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士二",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "画板孔雀",
              "破晓战队•苍翼"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "火花大会@Official"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士三",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "破晓战队•曙光",
              "破晓战队•赤焰"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "至黑之剑，盗火行者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "幸福语法",
        "kind": "king",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "魔法少女急袭剧团"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "乐变化天人"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "极乐颠倒•邪愿莲华主"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "幸福语法·绝境",
        "kind": "king-hard",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "魔法少女急袭剧团"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "乐变化天人"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "极乐颠倒•邪愿莲华主"
            ],
            "elements": []
          }
        ]
      }
    ],
    "source": {
      "label": "BWIKI · 仲裁一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-42-017",
    "mode": "as",
    "name": "偶像螟蝗",
    "season": "017",
    "version": "4.2",
    "startDate": "2026-04-27",
    "endDate": "2026-06-08",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方目标被弱点击破时，使我方全体目标解除控制状态并激活终结技。 敌方全体目标受到的欢愉伤害提高25%，弱点击破伤害提高15%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "万众瞩目的超偶像",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "遮天蔽日的噬星蠹",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-42-041",
    "mode": "moc",
    "name": "值日行动",
    "season": "041",
    "version": "4.2",
    "startDate": "2026-05-25",
    "endDate": "2026-07-06",
    "effects": [
      "记忆紊流：我方目标施放终结技时造成的暴击伤害提高50%，施放终结技后为【记忆紊流】增加2段攻击段数，最多叠加20段。 每个轮开始时，【记忆紊流】的每段攻击对随机敌方目标造成1次真实伤害。"
    ],
    "levels": [
      {
        "label": "值日行动其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "「同音共律的来日」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "值日行动其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴猎手",
              "天谴先锋",
              "天谴斗士"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "天谴斗士",
              "外宇宙之炎"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「贼灵」巴特鲁斯",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "值日行动其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•战犬"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "值日行动其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "永冬灾影",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "幽府武弁",
              "金人勾魂使",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "值日行动其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "助手涂鸦•拖稿",
              "画板孔雀",
              "外宇宙之冰"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "云骑骁卫•彦卿",
              "飞剑"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "治安忠犬",
              "黑潮斗将"
            ],
            "elements": [
              "物理",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "治安忠犬",
              "黑潮斗将",
              "「星核猎手」卡芙卡"
            ],
            "elements": [
              "物理",
              "风"
            ]
          }
        ]
      },
      {
        "label": "值日行动其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "「同音共律的来日」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "值日行动其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴猎手",
              "天谴先锋",
              "天谴斗士"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "天谴斗士",
              "外宇宙之炎"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「贼灵」巴特鲁斯",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "值日行动其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "自动机兵•战犬"
            ],
            "elements": [
              "火",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚数织叶者",
              "蚕食者之影",
              "「同音共律的来日」"
            ],
            "elements": [
              "火",
              "雷"
            ]
          }
        ]
      },
      {
        "label": "值日行动其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴猎手",
              "天谴先锋",
              "天谴斗士"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "外宇宙之炎",
              "天谴先锋",
              "天谴斗士"
            ],
            "elements": [
              "冰",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "流浪者",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "值日行动其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑日狮鹫",
              "黑日弓手",
              "月夜天马"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "可可利亚（敌方）",
              "冰锋",
              "月夜天马"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "黑潮蚀魔",
              "黑潮斗将"
            ],
            "elements": [
              "物理",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "第一位天才，隐德来希，赞达尔",
              "天谴斗士",
              "黑潮蚀刃",
              "黑潮蚀斧"
            ],
            "elements": [
              "物理",
              "风"
            ]
          }
        ]
      },
      {
        "label": "值日行动其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "天谴先锋",
              "天谴斗士",
              "承露天人"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "至黑之剑，盗火行者",
              "残破容器"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金血忆灵•裁定忘却之形",
              "金血忆灵•雉形"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "值日行动其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "波涛夫人",
              "浪花侍女",
              "黑潮斗将"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "示死祸源：深魇蝗灾",
              "幼蛰虫"
            ],
            "elements": [
              "物理"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "月夜天马",
              "乐变化天人"
            ],
            "elements": [
              "火",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "合金机铠•帕姆王",
              "「合金保姆」"
            ],
            "elements": [
              "火",
              "虚数"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-42-023",
    "mode": "pf",
    "name": "造象立说",
    "season": "023",
    "version": "4.2",
    "startDate": "2026-05-11",
    "endDate": "2026-06-22",
    "effects": [
      "获得笑点每次获得笑点时，使我方额外积累2点「战意值」。",
      "战熄潮平 关卡拥有特殊的欢愉技，进入阿哈时刻时对随机敌方目标造成15次虚数属性欢愉伤害。敌方目标被任意目标消灭时，获得1笑点。",
      "战意汹涌 进入「战意汹涌」时，使阿哈立即获得一个固定计入20笑点的额外回合，本回合不消耗笑点且造成的欢愉技伤害为原伤害的50%。「战意汹涌」期间敌方目标受到的伤害提高50%，并使阿哈时刻的速度提升40点。",
      "荒腔走板其一 狂欢 「战意汹涌」期间，敌方目标受到的欢愉伤害提高30%，阿哈时刻的速度额外提高20点。",
      "荒腔走板其二 狂想 我方目标施放普攻或战技后，获得1个笑点；「战意汹涌」期间，我方目标造成的伤害提高50%。",
      "战意机制：普攻或战技每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其三 即兴 「战意汹涌」期间，敌方目标受到的持续伤害提高50%，敌方目标被消灭时，每陷入1个持续伤害效果使我方获得1个笑点。",
      "战意机制：敌方目标每次受到持续伤害后，使我方额外积累1点「战意值」。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "火焚灾影",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "浪花侍女",
              "永冬灾影",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "黑潮蚀斧",
              "攻击性阅读物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴哲人",
              "魔阴身士卒",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "丰饶灵兽•长右",
              "惊梦剧团的圆幕先生",
              "虚卒•抹消者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "自动机兵•甲虫",
              "忆域迷因「我心支离破碎」"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃近卫",
              "幽府武弁",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之炎",
              "虚数织叶者",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "正阳狮鹫",
              "天谴歌队",
              "流星铁鹰"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "惊梦剧团的圆幕先生",
              "火焚灾影",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "天谴猎手",
              "天谴斗士"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "「药王秘传」器元士",
              "魔阴武弁"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "浪花侍女",
              "永冬灾影",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "入魔机巧•灯昼龙鱼",
              "玄爪狼卒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金人勾魂使",
              "黑潮蚀斧",
              "攻击性阅读物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四上半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "魔阴身士卒",
              "黑潮蚀斧",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "银鬃尉官",
              "助手涂鸦•赶稿",
              "银鬃近卫"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "蛮神，疯王，纷争的化身",
              "助手涂鸦•催稿",
              "黑潮朽弓（敌方）"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其四下半",
        "level": 85,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "次蛰虫",
              "基层员工•安保",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "破晓战队•苍翼",
              "魔法少女急袭剧团",
              "全自动魔仙棒"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金血忆灵•裁定忘却之形",
              "金血忆灵•犬形",
              "金血忆灵•雉形"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "aa-43-007",
    "mode": "aa",
    "name": "嗡鸣如笑",
    "season": "007",
    "version": "4.3",
    "startDate": "2026-06-01",
    "endDate": "2026-07-14",
    "effects": [],
    "levels": [],
    "bosses": [],
    "nodes": [
      {
        "label": "骑士一",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "吞神子嗣"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士二",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "画板孔雀",
              "破晓战队•苍翼"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "合金机铠•帕姆王"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士三",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "破晓战队•赤焰",
              "天谴先锋"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "颁赐者，千军首，天谴之矛"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "嗡鸣如笑",
        "kind": "king",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "破晓战队•苍翼",
              "飓风大母",
              "魔法少女急袭剧团"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "碎星王虫•斯喀拉卡巴兹（拟造）"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "嗡鸣如笑·绝境",
        "kind": "king-hard",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "破晓战队•苍翼",
              "飓风大母",
              "魔法少女急袭剧团"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "碎星王虫•斯喀拉卡巴兹（拟造）"
            ],
            "elements": []
          }
        ]
      }
    ],
    "source": {
      "label": "BWIKI · 仲裁一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-43-018",
    "mode": "as",
    "name": "遗忘冽风",
    "season": "018",
    "version": "4.3",
    "startDate": "2026-06-08",
    "endDate": "2026-07-20",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方目标被弱点击破时，使我方全体目标解除控制状态、行动提前并使阿哈立即获得一个额外回合（本回合固定计入10笑点）。 敌方全体目标受到的终结技伤害提高25%，欢愉伤害提高15%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "迷惘之渊的裁定者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "无望冽风的幻灭者",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-43-042",
    "mode": "moc",
    "name": "学院怪谈",
    "season": "042",
    "version": "4.3",
    "startDate": "2026-07-06",
    "endDate": "2026-08-17",
    "effects": [
      "记忆紊流：我方目标造成的终结技和追加攻击伤害提高50%，我方角色施放终结技或追加攻击后为【记忆紊流】增加1段攻击段数，最多叠加15段。 每个轮开始时，【记忆紊流】的每段攻击对随机敌方目标造成1次真实伤害。"
    ],
    "levels": [
      {
        "label": "学院怪谈其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "永冬灾影",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "摇滚狂徒"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "兴风者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "外宇宙之冰"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "银鬃射手",
              "银鬃炮手",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮蚀斧",
              "黑潮斗将",
              "黑潮蚀刃"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "外宇宙之炎",
              "银鬃尉官",
              "银鬃近卫"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）",
              "「授勋」",
              "「枪尖」",
              "「盾」"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "虚数织叶者",
              "深寒徘徊者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "深寒徘徊者",
              "永冬灾影",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "摇滚狂徒"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "兴风者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "忆域迷因「我心支离破碎」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「醉于盛会的此刻」",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "玄爪狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "外宇宙之冰"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "杰帕德（敌方）",
              "银鬃射手",
              "银鬃炮手",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "外宇宙之炎",
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "奇想林中的蕉研组",
              "蕉研组的谐乐蕉师",
              "蕉研组的财富蕉师",
              "蕉研组的助蕉",
              "蕉研组的筑梦蕉师"
            ],
            "elements": [
              "冰",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "黑日狮鹫",
              "黑日弓手",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "步离战首•呼雷",
              "玄爪狼卒",
              "蚀月狼卒"
            ],
            "elements": [
              "物理",
              "火"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "攻击性阅读物",
              "摇滚狂徒",
              "画板孔雀"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "火花大会@Official",
              "1号输出端",
              "2号输出端",
              "攻击性阅读物",
              "直播小助手"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的气泡锂犬",
              "惊梦剧团的十七分熟",
              "黑潮蚀斧"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "史瓦罗（敌方）",
              "辅助机械臂单元",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火",
              "雷",
              "风"
            ]
          }
        ]
      },
      {
        "label": "学院怪谈其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮蚀魔",
              "黑日狮鹫",
              "黑日弓手"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "至黑之剑，盗火行者",
              "残破容器"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "吞神子嗣",
              "破晓战队•曙光"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "始作画者，无量塔绘世",
              "吞神子嗣"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": null,
            "enemies": [
              "破晓战队•苍翼",
              "摇滚狂徒"
            ],
            "elements": [
              "火",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": null,
            "enemies": [
              "火花大会@Official",
              "1号输出端",
              "2号输出端",
              "攻击性阅读物",
              "直播小助手"
            ],
            "elements": [
              "火",
              "虚数"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-43-024",
    "mode": "pf",
    "name": "借虚成真",
    "season": "024",
    "version": "4.3",
    "startDate": "2026-06-22",
    "endDate": "2026-08-03",
    "effects": [
      "施加负面效果我方目标为敌方目标施加负面效果时，使我方额外累积1点「战意值」，该效果每个敌方目标最多触发10次。",
      "战熄潮平 敌方目标的效果抵抗降低30%，陷入大于等于4个负面效果的敌方目标受到的伤害提高20%。",
      "战意汹涌 进入「战意汹涌」时，敌方目标每陷入1个负面效果，对其造成1次固定数值的伤害。「战意汹涌」期间敌方目标受到的伤害提高50%，每次陷入负面效果后，使该目标陷入1层【沮丧】效果，全属性抗性降低1%，持续2回合，该效果最多加20层。",
      "荒腔走板其一 触技 我方目标造成的终结技和追加攻击伤害提高40%，「战意汹涌」期间，敌方目标每次陷入【沮丧】效果时改为叠加2层该效果，【沮丧】效果的叠加上限提高到50层。",
      "战意机制：我方目标的终结技或追加攻击每击中1个敌方目标，使我方额外积累1点「战意值」。",
      "荒腔走板其二 笑韵 我方角色施放欢愉技攻击敌方目标后，使受到攻击的敌方目标陷入【享乐】效果，使该目标受到的伤害提高15%，持续2回合，每个角色施加的该效果独立存在。进入「战意汹涌」时，我方获得40个笑点。",
      "战意机制：我方目标施放普攻或战技后，每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其三 变奏 我方目标施放普攻、战技或终结技攻击敌方目标后，有100%的基础概率使受到攻击的敌方目标的防御力降低3%，持续2回合，该效果最多叠加10次。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "玄爪狼卒",
              "虚卒•抹消者",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "月夜天马",
              "魔阴身士卒",
              "永冬灾影"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "外宇宙之冰",
              "黑潮参议",
              "流星铁鹰"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "流浪者",
              "治安忠犬",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "自动机兵•齿狼",
              "金血忆灵•犬形",
              "天谴哲人"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "天谴歌队",
              "惊梦剧团的圆幕先生"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "助手涂鸦•拖稿",
              "蚀月狼卒",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "咆哮灵柩",
              "自动机兵•蜘蛛",
              "浪花侍女"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "黑潮斗将",
              "惊梦剧团的气泡锂犬",
              "自动机兵•甲虫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "魔法少女急袭剧团",
              "次蛰虫",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "摇滚狂徒",
              "金血忆灵•雉形",
              "攻击性阅读物"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金血忆灵•翼蛇形",
              "基层员工•安保",
              "SD民用机铠"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "魔阴武弁",
              "天谴猎手",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "黑潮蚀魔",
              "黑潮朽弓（敌方）",
              "虚数织叶者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "外宇宙之炎",
              "黑潮蚀斧",
              "黑潮蚀刃"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "次蛰虫",
              "天谴斗士",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「身陷樊笼的往昔」",
              "玄爪狼卒",
              "惊梦剧团的幸运贩售"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "破晓战队•苍翼",
              "云骑巡防士卒",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "aa-44-008",
    "mode": "aa",
    "name": "尘世卷中",
    "season": "008",
    "version": "4.4",
    "startDate": "2026-07-15",
    "endDate": "2026-08-25",
    "effects": [],
    "levels": [],
    "bosses": [],
    "nodes": [
      {
        "label": "骑士一",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "丰饶灵兽•长右",
              "资深员工•组长"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "银枝（敌方）"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士二",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "乐变化天人",
              "吞神子嗣"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "史瓦罗（敌方）",
              "吞神子嗣"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士三",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "破晓战队•苍翼",
              "正阳狮鹫"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "极乐颠倒•邪愿莲华主"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "始作画者，无量塔绘世",
        "kind": "king",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "黑日狮鹫",
              "月夜天马"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "始作画者，无量塔绘世"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "始作画者，无量塔绘世·绝境",
        "kind": "king-hard",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "黑日狮鹫",
              "月夜天马"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "始作画者，无量塔绘世"
            ],
            "elements": []
          }
        ]
      }
    ],
    "source": {
      "label": "BWIKI · 仲裁一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-44-019",
    "mode": "as",
    "name": "兵锋骑士",
    "season": "019",
    "version": "4.4",
    "startDate": "2026-07-20",
    "endDate": "2026-08-31",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方单位被弱点击破时，使我方全体解除控制状态、恢复战技点并激活终结技。 敌方全体受到的战技伤害提高25%，终结技伤害提高15%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "芒寒色正的银骑士",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "兵戈扰攘的常胜军",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-44-043",
    "mode": "moc",
    "name": "扫除风暴",
    "season": "043",
    "version": "4.4",
    "startDate": "2026-08-17",
    "endDate": "2026-09-28",
    "effects": [
      "记忆紊流：每个轮开始时，随机使1名我方「巡猎」或「智识」命途目标立即行动，并使其造成的伤害提高80%，持续1回合。"
    ],
    "levels": [
      {
        "label": "扫除风暴其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流星铁鹰",
              "黑潮蚀魔"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮蚀魔",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚卒•掠夺者",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚卒•践踏者",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "攻击性阅读物",
              "摇滚狂徒"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "摇滚狂徒",
              "波涛夫人",
              "浪花侍女"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流浪者",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "飓风大母",
              "泡影稚子"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的幸运贩售",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的十七分熟",
              "蚕食者之影"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "蚀月狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "金人司阍",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮参议",
              "黑潮斗将"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮斗将",
              "蚕食者之影"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃射手",
              "银鬃尉官",
              "银鬃近卫"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银鬃尉官",
              "银鬃近卫",
              "承露天人"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流星铁鹰",
              "黑潮蚀魔"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "黑潮蚀魔",
              "守护者之影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "虚卒•掠夺者",
              "虚卒•践踏者"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "虚卒•践踏者",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "攻击性阅读物",
              "摇滚狂徒"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "摇滚狂徒",
              "波涛夫人",
              "浪花侍女"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "「药王秘传」器元士",
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流浪者",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "飓风大母",
              "泡影稚子"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "惊梦剧团的幸运贩售",
              "惊梦剧团的十七分熟"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "惊梦剧团的十七分熟",
              "蚕食者之影"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "蚀月狼卒",
              "咆哮灵柩"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "金人司阍",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•甲虫",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "至黑之剑，盗火行者",
              "残破容器"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "资深员工•组长",
              "基层员工•外勤",
              "基层员工•安保",
              "兴风者"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "丰饶玄鹿",
              "肃风之杪",
              "缃叶之杪",
              "繁花之杪",
              "嘉实之杪"
            ],
            "elements": [
              "火",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "黑潮蚀魔",
              "守护者之影"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "冥魂渡者，死龙残躯，玻吕刻斯",
              "哀悯长臂"
            ],
            "elements": [
              "风",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "摇滚狂徒",
              "「同音共律的来日」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "极乐颠倒•邪愿莲华主",
              "邪愿莲华"
            ],
            "elements": [
              "物理",
              "火"
            ]
          }
        ]
      },
      {
        "label": "扫除风暴其十二",
        "level": 95,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "深寒徘徊者",
              "永冬灾影"
            ],
            "elements": [
              "雷",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "「星核猎手」萨姆"
            ],
            "elements": [
              "雷",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "破晓战队•苍翼",
              "破晓战队•灰烬"
            ],
            "elements": [
              "火",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "合金机铠•帕姆王",
              "「合金保姆」"
            ],
            "elements": [
              "火",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": null,
            "enemies": [
              "「醉于盛会的此刻」",
              "「同音共律的来日」",
              "「身陷樊笼的往昔」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": null,
            "enemies": [
              "示死祸源：深魇蝗灾",
              "幼蛰虫"
            ],
            "elements": [
              "物理",
              "火"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-44-025",
    "mode": "pf",
    "name": "构事生意",
    "season": "025",
    "version": "4.4",
    "startDate": "2026-08-03",
    "endDate": "2026-09-14",
    "effects": [
      "追加攻击我方目标施放追加攻击攻击敌方目标后，每击中1个敌方目标，使我方额外积累8点「战意值」。",
      "战熄潮平 我方目标施放追加攻击或终结技后，对每个被攻击的敌方目标造成攻击者80%攻击力+40%生命上限的附加伤害。",
      "战意汹涌 进入「战意汹涌」时，我方全体恢复20%能量。「战意汹涌」期间敌方目标受到的伤害提高50%，「战熄潮平」造成的附加伤害提高100%，且该伤害被视为追加攻击伤害。",
      "荒腔走板其一 暴言 造成的追加攻击伤害的全属性抗性穿透提高30%，「战意汹涌」期间，我方目标施放追加攻击攻击敌方目标后，额外对每个被攻击的敌方目标相邻的目标造成攻击者40%攻击力+20%生命上限的附加伤害，该伤害被视为追加攻击伤害。",
      "荒腔走板其二 高论 「战意汹涌」期间，我方目标施放终结技时造成的暴击伤害提高60%，「战意汹涌」结束时，我方全体恢复20%能量。",
      "战意机制：我方目标施放终结技后，每击中1个敌方目标，使我方额外积累5点「战意值」。",
      "荒腔走板其三 快嘴 我方全体速度提高20%。「战意汹涌」期间敌方目标受到的伤害额外提高30%。",
      "战意机制：我方目标施放普攻或战技后，每击中1个敌方目标，使我方额外积累3点「战意值」。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "流星铁鹰",
              "虚数织叶者",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "黑潮蚀刃",
              "银鬃近卫"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "黑潮蚀魔",
              "自动机兵•蜘蛛",
              "虚卒•篡改者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "金血忆灵•犬形",
              "火焚灾影",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "自动机兵•齿狼",
              "治安忠犬",
              "基层员工•外勤"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "天谴歌队",
              "惊梦剧团的圆幕先生"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "自动机兵•战犬",
              "入魔机巧•灯昼龙鱼",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "金人勾魂使",
              "虚数织叶者",
              "浪花侍女"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "黑潮斗将",
              "虚卒•掠夺者",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "云骑巡防士卒",
              "幽府武弁",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "蚕食者之影",
              "惊梦剧团的幸运贩售",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "丰饶灵兽•长右",
              "黑潮参议",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "蚀蛰虫",
              "天谴歌队",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "承露天人",
              "幽府武弁",
              "金血忆灵•犬形"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "银鬃尉官",
              "魔法少女急袭剧团",
              "银鬃射手"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴斗士",
              "自动机兵•甲虫",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「身陷樊笼的往昔」",
              "黑潮蚀刃",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "咆哮灵柩",
              "虚数织叶者",
              "全自动魔仙棒"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "aa-45-009",
    "mode": "aa",
    "name": "军团再临",
    "season": "009",
    "version": "4.5",
    "startDate": "2026-08-26",
    "endDate": "2026-09-27",
    "effects": [],
    "levels": [],
    "bosses": [],
    "nodes": [
      {
        "label": "骑士一",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "「灯塔」",
              "蚕食者之影"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「灯塔」",
              "可可利亚（敌方）"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士二",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "乐变化天人",
              "摇滚狂徒"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "火花大会@Official"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士三",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "摇滚狂徒",
              "外宇宙之炎"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "至黑之剑，盗火行者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "军团再临",
        "kind": "king",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "反造物主，流溢之恨"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "军团再临·绝境",
        "kind": "king-hard",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "反造物主，流溢之恨"
            ],
            "elements": []
          }
        ]
      }
    ],
    "source": {
      "label": "BWIKI · 仲裁一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-45-020",
    "mode": "as",
    "name": "仙客天狼",
    "season": "020",
    "version": "4.5",
    "startDate": "2026-08-31",
    "endDate": "2026-10-05",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方目标被弱点击破时，使我方全体目标解除控制状态并激活终结技。 敌方全体目标受到的战技伤害提高25%，欢愉伤害提高15%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "弗有垂暮的不老仙",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "蛊言妄念的蚀心兽",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-45-026",
    "mode": "pf",
    "name": "立界开篇",
    "season": "026",
    "version": "4.5",
    "startDate": "2026-09-14",
    "endDate": "2026-10-19",
    "effects": [
      "获得笑点每次获得笑点时，使我方额外积累2点「战意值」。",
      "战熄潮平 关卡拥有特殊的欢愉技，进入阿哈时刻时对随机敌方目标造成15次虚数属性欢愉伤害。敌方目标被任意目标消灭时，获得1笑点。",
      "战意汹涌 进入「战意汹涌」时，使阿哈立即获得一个固定计入20笑点的额外回合，本回合不消耗笑点且造成的欢愉技伤害为原伤害的50%。「战意汹涌」期间敌方目标受到的伤害提高50%，并使阿哈时刻的速度提升40点。",
      "荒腔走板其一 狂欢 「战意汹涌」期间，敌方目标受到的欢愉伤害提高30%，阿哈时刻的速度额外提高20点。",
      "荒腔走板其二 狂想 我方目标施放普攻或战技后，获得1个笑点；「战意汹涌」期间，我方目标造成的伤害提高50%。",
      "战意机制：普攻或战技每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其三 谜狂 我方忆灵施放攻击后，获得2个笑点；「战意汹涌」期间，我方忆灵造成的伤害提高50%。",
      "战意机制：忆灵攻击后每击中1个敌方目标，使我方额外积累3点「战意值」。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴哲人",
              "流星铁鹰",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "天谴先锋",
              "丰饶灵兽•娄金",
              "魔阴武弁"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "外宇宙之炎",
              "黑潮蚀斧",
              "黑潮朽弓（敌方）"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "金血忆灵•雉形",
              "魔法少女急袭剧团",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "永冬灾影",
              "基层员工•安保"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金血忆灵•翼蛇形",
              "基层员工•外勤",
              "攻击性阅读物"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "自动机兵•战犬",
              "入魔机巧•灯昼龙鱼",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "黑潮斗将",
              "浪花侍女",
              "黑潮参议"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "承露天人",
              "虚卒•掠夺者",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃近卫",
              "虚数织叶者",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "蚀月狼卒",
              "流星铁鹰"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "守护者之影",
              "云骑巡防士卒",
              "虚卒•篡改者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "自动机兵•甲虫",
              "天谴斗士",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "忆域迷因「狂怒褪去之壳」",
              "黑潮蚀刃",
              "助手涂鸦•拖稿"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "自动机兵•齿狼",
              "入魔机巧•灯昼龙鱼",
              "治安忠犬"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "蚀月狼卒",
              "幽府武弁",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "黑潮蚀魔",
              "虚卒•篡改者",
              "丰饶灵兽•奎木"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "虚卒•践踏者",
              "云骑巡防士卒",
              "银鬃近卫"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "aa-46-010",
    "mode": "aa",
    "name": "落叶归根",
    "season": "010",
    "version": "4.6",
    "startDate": "2026-09-28",
    "endDate": "2026-11-11",
    "effects": [],
    "levels": [],
    "bosses": [],
    "nodes": [
      {
        "label": "骑士一",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "乐变化天人",
              "破晓战队•苍翼"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "合金机铠•帕姆王"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士二",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "破晓战队•赤焰",
              "破晓战队•灰烬"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "冥魂渡者，死龙残躯，玻吕刻斯"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "骑士三",
        "kind": "knight",
        "level": 95,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "飓风大母",
              "丰饶灵兽•长右"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "示死祸源：深魇蝗灾"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "堕神之血•亚婆离",
        "kind": "king",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "月夜天马",
              "「灯塔」"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "堕神之血•亚婆离"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "堕神之血•亚婆离·绝境",
        "kind": "king-hard",
        "level": null,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "月夜天马",
              "「灯塔」"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "堕神之血•亚婆离"
            ],
            "elements": []
          }
        ]
      }
    ],
    "source": {
      "label": "BWIKI · 仲裁一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "as-46-021",
    "mode": "as",
    "name": "支配遗忘",
    "season": "021",
    "version": "4.6",
    "startDate": "2026-10-05",
    "endDate": "2026-11-16",
    "effects": [
      "末法余烬：拥有【坚防守备】的敌方目标被弱点击破时，使我方全体目标解除控制状态、行动提前并使阿哈立即获得一个额外回合（本回合固定计入10笑点）。 敌方全体目标受到的终结技伤害提高25%，欢愉伤害提高15%。"
    ],
    "levels": [],
    "bosses": [
      {
        "label": "勾魂摄魄的支配者",
        "level": null,
        "waves": [],
        "kind": "boss"
      },
      {
        "label": "迷惘之渊的裁定者",
        "level": null,
        "waves": [],
        "kind": "boss"
      }
    ],
    "nodes": [],
    "source": {
      "label": "BWIKI · 幻影一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "moc-46-035",
    "mode": "moc",
    "name": "来生泅渡",
    "season": "035",
    "version": "4.6",
    "startDate": "2026-09-28",
    "endDate": "2026-11-02",
    "effects": [
      "记忆紊流：我方编队中第一位角色获得欢愉技【极乐漩涡】，可对敌方全体造成100%的角色属性欢愉伤害。 每个轮开始时，使阿哈立即获得1个固定计入20笑点的额外回合，该回合不消耗笑点。"
    ],
    "levels": [
      {
        "label": "来生泅渡其一",
        "level": 68,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "银鬃近卫",
              "银鬃尉官"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "银鬃尉官",
              "银鬃近卫",
              "深寒徘徊者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "入魔机巧•灯昼龙鱼",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其二",
        "level": 70,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的幸运贩售",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "「同音共律的来日」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "魔阴身士卒",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其三",
        "level": 73,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流浪者",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "流浪者",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "深寒徘徊者",
              "永冬灾影"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其四",
        "level": 75,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "银鬃近卫",
              "金人司阍",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "入魔机巧•灯昼龙鱼",
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•战犬",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "炽燃徘徊者"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其五",
        "level": 78,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "入魔机巧•灯昼龙鱼",
              "金人司阍"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "入魔机巧•灯昼龙鱼",
              "咆哮灵柩"
            ],
            "elements": [
              "雷",
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "流浪者",
              "银鬃尉官",
              "银鬃近卫"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银鬃尉官",
              "银鬃近卫",
              "承露天人"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其六",
        "level": 80,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "银鬃近卫",
              "银鬃尉官"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "银鬃尉官",
              "银鬃近卫",
              "深寒徘徊者",
              "永冬灾影"
            ],
            "elements": [
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "入魔机巧•灯昼龙鱼",
              "金人勾魂使"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "金人勾魂使",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其七",
        "level": 83,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "惊梦剧团的幸运贩售",
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "惊梦剧团的甜猿泰山",
              "惊梦剧团的气泡锂犬",
              "「同音共律的来日」"
            ],
            "elements": [
              "物理",
              "火"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "魔阴身士卒",
              "「药王秘传」炼形者"
            ],
            "elements": [
              "冰",
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "「药王秘传」炼形者",
              "魔阴身士卒",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "冰",
              "风"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其八",
        "level": 85,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "流浪者",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "丰饶灵兽•长右"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "流浪者",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "深寒徘徊者",
              "永冬灾影"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其九",
        "level": 88,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "银鬃近卫",
              "金人司阍",
              "入魔机巧•灯昼龙鱼"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "金人司阍",
              "入魔机巧•灯昼龙鱼",
              "「药王秘传」炼形者",
              "魔阴身士卒"
            ],
            "elements": [
              "风"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "自动机兵•战犬",
              "自动机兵•齿狼"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "自动机兵•齿狼",
              "炽燃徘徊者"
            ],
            "elements": [
              "雷",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其十",
        "level": 90,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "自动机兵•灰熊",
              "自动机兵•蜘蛛",
              "自动机兵•齿狼"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "至黑之剑，盗火行者",
              "残破容器"
            ],
            "elements": [
              "冰",
              "雷"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "金血忆灵•翼蛇形",
              "自动机兵•灰熊",
              "自动机兵•蜘蛛"
            ],
            "elements": [
              "火",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "银枝（敌方）",
              "「授勋」",
              "「枪尖」",
              "「盾」"
            ],
            "elements": [
              "火",
              "冰"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其十一",
        "level": 92,
        "teams": 1,
        "waves": [
          {
            "label": "第1波",
            "team": 1,
            "enemies": [
              "咆哮灵柩",
              "忆域迷因「狂怒褪去之壳」"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": 1,
            "enemies": [
              "冥魂渡者，死龙残躯，玻吕刻斯",
              "哀悯长臂"
            ],
            "elements": [
              "风",
              "虚数"
            ]
          },
          {
            "label": "第1波",
            "team": null,
            "enemies": [
              "黑潮斗将",
              "金血忆灵•翼蛇形"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          },
          {
            "label": "第2波",
            "team": null,
            "enemies": [
              "示死祸源：深魇蝗灾",
              "幼蛰虫"
            ],
            "elements": [
              "物理",
              "虚数"
            ]
          }
        ]
      },
      {
        "label": "来生泅渡其十二",
        "level": 95,
        "teams": null,
        "waves": [
          {
            "label": "第1波",
            "team": null,
            "enemies": [
              "破晓战队•曙光",
              "外宇宙之冰"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第2波",
            "team": null,
            "enemies": [
              "火花大会@Official",
              "1号输出端",
              "2号输出端",
              "攻击性阅读物",
              "直播小助手"
            ],
            "elements": [
              "火",
              "量子"
            ]
          },
          {
            "label": "第1波",
            "team": 2,
            "enemies": [
              "银鬃尉官",
              "银鬃近卫",
              "承露天人"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第2波",
            "team": 2,
            "enemies": [
              "第一位天才，隐德来希，赞达尔",
              "天谴斗士",
              "黑潮蚀刃",
              "黑潮蚀斧"
            ],
            "elements": [
              "物理",
              "冰"
            ]
          },
          {
            "label": "第1波",
            "team": null,
            "enemies": [
              "破晓战队•苍翼",
              "「醉于盛会的此刻」"
            ],
            "elements": [
              "火"
            ]
          },
          {
            "label": "第2波",
            "team": null,
            "enemies": [
              "始作画者，无量塔绘世",
              "吞神子嗣"
            ],
            "elements": [
              "火"
            ]
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 混沌回忆 / 回忆一览",
      "updated": "2026-10-25"
    }
  },
  {
    "id": "pf-46-027",
    "mode": "pf",
    "name": "取象为文",
    "season": "027",
    "version": "4.6",
    "startDate": "2026-10-19",
    "endDate": "2026-11-30",
    "effects": [
      "施加负面效果我方目标为敌方目标施加负面效果时，使我方额外累积1点「战意值」，该效果每个敌方目标最多触发10次。",
      "战熄潮平 敌方目标的效果抵抗降低30%，陷入大于等于4个负面效果的敌方目标受到的伤害提高20%。",
      "战意汹涌 进入「战意汹涌」时，敌方目标每陷入1个负面效果，对其造成1次固定数值的伤害。「战意汹涌」期间敌方目标受到的伤害提高50%，每次陷入负面效果后，使该目标陷入1层【沮丧】效果，全属性抗性降低1%，持续2回合，该效果最多加20层。",
      "荒腔走板其一 触技 我方目标造成的终结技和追加攻击伤害提高40%，「战意汹涌」期间，敌方目标每次陷入【沮丧】效果时改为叠加2层该效果，【沮丧】效果的叠加上限提高到50层。",
      "战意机制：我方目标的终结技或追加攻击每击中1个敌方目标，使我方额外积累1点「战意值」。",
      "荒腔走板其二 笑韵 我方角色施放欢愉技攻击敌方目标后，使受到攻击的敌方目标陷入【享乐】效果，使该目标受到的伤害提高15%，持续2回合，每个角色施加的该效果独立存在。进入「战意汹涌」时，我方获得40个笑点。",
      "战意机制：我方目标施放普攻或战技后，每击中1个敌方目标，使我方额外积累3点「战意值」。",
      "荒腔走板其三 赋格 「战意汹涌」期间，我方目标施放攻击后，额外使受到攻击的目标当前承受的随机1个持续伤害类负面效果立即产生相当于原伤害400%的伤害。"
    ],
    "levels": [
      {
        "label": "其一上半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "天谴哲人",
              "流星铁鹰",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "正阳狮鹫",
              "天谴斗士",
              "虚数织叶者"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "黑潮蚀魔",
              "银鬃近卫",
              "流星铁鹰"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其一下半",
        "level": 55,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "金血忆灵•雉形",
              "魔法少女急袭剧团",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "资深员工•组长",
              "流浪者",
              "幽府武弁"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "金血忆灵•翼蛇形",
              "魔阴身士卒",
              "永冬灾影"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二上半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "自动机兵•战犬",
              "入魔机巧•灯昼龙鱼",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "承露天人",
              "自动机兵•甲虫",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "波涛夫人",
              "浪花侍女",
              "虚卒•掠夺者"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其二下半",
        "level": 65,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "银鬃近卫",
              "流星铁鹰",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "外宇宙之冰",
              "流星铁鹰",
              "黑潮蚀刃"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "黑潮蚀魔",
              "银鬃近卫",
              "幼蛰虫"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三上半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "自动机兵•甲虫",
              "天谴斗士",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "自动机兵•齿狼",
              "惊梦剧团的圆幕先生",
              "幼蛰虫"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "资深员工•组长",
              "火焚灾影",
              "助手涂鸦•赶稿"
            ],
            "elements": []
          }
        ]
      },
      {
        "label": "其三下半",
        "level": 75,
        "waves": [
          {
            "label": "第1波",
            "enemies": [
              "虚构集合体",
              "蚀月狼卒",
              "幽府武弁",
              "狸猫记者"
            ],
            "elements": []
          },
          {
            "label": "第2波",
            "enemies": [
              "「醉于盛会的此刻」",
              "蚀月狼卒",
              "惊梦剧团的气泡锂犬"
            ],
            "elements": []
          },
          {
            "label": "第3波",
            "enemies": [
              "破晓战队•苍翼",
              "银鬃炮手",
              "流星铁鹰"
            ],
            "elements": []
          }
        ]
      }
    ],
    "bosses": [],
    "nodes": [],
    "source": {
      "label": "BWIKI · 叙事一览",
      "updated": "2026-10-25"
    }
  }
];

export const STAGE_MAP = Object.fromEntries(STAGES.map((s) => [s.id, s]));

export const STAGE_COUNTS = Object.fromEntries(
  Object.keys(STAGE_TYPES).map((m) => [m, STAGES.filter((s) => s.mode === m).length])
);

export function getStage(id) {
  return STAGE_MAP[id] || null;
}

export function getRotationsByMode(mode) {
  return STAGES.filter((s) => s.mode === mode);
}

export function getRotationsByVersion(version) {
  return STAGES.filter((s) => s.version === version);
}

export function adjacentRotations(stage) {
  const list = getRotationsByMode(stage.mode);
  const i = list.findIndex((s) => s.id === stage.id);
  return { older: i > 0 ? list[i - 1] : null, newer: i >= 0 && i < list.length - 1 ? list[i + 1] : null };
}

export function stageEnemyCount(stage) {
  const groups = [...(stage.levels || []), ...(stage.nodes || [])];
  let n = 0;
  for (const node of groups) {
    for (const wave of node.waves || []) n += wave.enemies.length;
  }
  return n;
}

export function stageWaveCount(stage) {
  const groups = [...(stage.levels || []), ...(stage.nodes || [])];
  return groups.reduce((n, node) => n + (node.waves?.length || 0), 0);
}
