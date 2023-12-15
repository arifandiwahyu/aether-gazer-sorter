dataSetVersion = "2023-12-13"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Gen-Zone",
    key: "genZone",
    tooltip: "Check this to restrict to characters from certain Gen-Zone.",
    checked: false,
    sub: [
      { name: "Yggdrasil", key: "yggdrasil" },
      { name: "Shinou", key: "shinou" },
      { name: "Nile", key: "nile" },
      { name: "Olympus", key: "olympus" },
      { name: "Asterism", key: "asterism" },
    ]
  },
  {
    name: "Exclude males",
    key: "male",
    tooltip: "Check this to exclude males.",
    checked: false
  },
  {
    name: "Exclude females",
    key: "female",
    tooltip: "Check this to exclude females.",
    checked: false
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Verthandi New Pact",
    img: "VerthandiNP.png",
    opts: {
      genZone: ['yggdrasil'],
      female: true
    }
  },
  {
    name: "Vidar Frost Fang",
    img: "VidarFF.png",
    opts: {
      genZone: ['yggdrasil'],
      female: true
    }
  },
  {
    name: "Hodur Dark Mistletoe",
    img: "HodurDM.png",
    opts: {
      genZone: ['yggdrasil'],
      female: true
    }
  },
  {
    name: "Heimdall Enlightening",
    img: "HeimdallE.png",
    opts: {
      genZone: ['yggdrasil'],
      female: true
    }
  },
  {
    name: "Verthandi Archaic Oath",
    img: "VerthandiAO.png",
    opts: {
      genZone: ['yggdrasil'],
      female: true
    }
  },
  {
    name: "Hel Darkstar",
    img: "HelD.png",
    opts: {
      genZone: ['yggdrasil'],
      female: true
    }
  },
  {
    name: "Tyr AblaZe",
    img: "TyrA.png",
    opts: {
      genZone: ['yggdrasil'],
      male: true
    }
  },
  {
    name: "Skadi Waverender",
    img: "SkadiW.png",
    opts: {
      genZone: ['yggdrasil'],
      female: true
    }
  },
  {
    name: "Thor Roaring Thunder",
    img: "ThorRT.png",
    opts: {
      genZone: ['yggdrasil'],
      female: true
    }
  },
  {
    name: "Zenkibo Tengu Surefire",
    img: "ZenkiboTS.png",
    opts: {
      genZone: ['shinou'],
      female: true
    }
  },
  {
    name: "Zenkibo Tengu Comet R4Y",
    img: "ZenkiboTC.png",
    opts: {
      genZone: ['shinou'],
      female: true
    }
  },
  {
    name: "Buzenbo Tengu Shinku",
    img: "BuzenboTS.png",
    opts: {
      genZone: ['shinou'],
      female: true
    }
  },
  {
    name: "Tsukuyomi Sakubo",
    img: "TsukuyomiSa.png",
    opts: {
      genZone: ['shinou'],
      female: true
    }
  },
  {
    name: "Tsukuyomi Shinri",
    img: "TsukuyomiSh.png",
    opts: {
      genZone: ['shinou'],
      female: true
    }
  },
  {
    name: "Kuninotokotachi Jin-ei",
    img: "KunitokotachiJe.png",
    opts: {
      genZone: ['shinou'],
      female: true
    }
  }, 
  {
    name: "Kagutsuchi Ryugiri",
    img: "KagutsuchiRyu.png",
    opts: {
      genZone: ['shinou'],
      male: true
    }
  }, 
  {
    name: "Ookuninushi Early Sakura",
    img: "OokuninushiES.png",
    opts: {
      genZone: ['shinou'],
      female: true
    }
  }, 
  {
    name: "Osiris The Innocence",
    img: "OsirisTI.png",
    opts: {
      genZone: ['nile'],
      female: true
    }
  }, 
  {
    name: "Shu Gusty Lance",
    img: "ShuGL.png",
    opts: {
      genZone: ['nile'],
      female: true
    }
  }, 
  {
    name: "Sobek Croc Rage",
    img: "SobekCR.png",
    opts: {
      genZone: ['nile'],
      male: true
    }
  }, 
  {
    name: "Bastet Ailuros",
    img: "BastetA(bini_gue).png",
    opts: {
      genZone: ['nile'],
      female: true
    }
  }, 
  {
    name: "Osiris Living Soul",
    img: "OsirisLS.png",
    opts: {
      genZone: ['nile'],
      female: true
    }
  }, 
  {
    name: "Shu Flowfly Mist",
    img: "ShuFM.png",
    opts: {
      genZone: ['nile'],
      female: true
    }
  }, 
  {
    name: "Anubis Jackal",
    img: "AnubisJ.png",
    opts: {
      genZone: ['nile'],
      male: true
    }
  }, 
  {
    name: "Poseidon Tidal Song",
    img: "PoseidonTS.png",
    opts: {
      genZone: ['olympus'],
      female: true
    }
  }, 
  {
    name: "Apollo The Glare",
    img: "ApolloTG.png",
    opts: {
      genZone: ['olympus'],
      male: true
    }
  }, 
  {
    name: "Hera Radiant Feather",
    img: "HeraRF.png",
    opts: {
      genZone: ['olympus'],
      female: true
    }
  }, 
  {
    name: "Hermes Windwalker",
    img: "HermesW.png",
    opts: {
      genZone: ['olympus'],
      female: true
    }
  }, 
  {
    name: "Oneiroi Drowsie",
    img: "OneiroiD.png",
    opts: {
      genZone: ['olympus'],
      female: true
    }
  }, 
  {
    name: "Poseidon Arctic Abyss",
    img: "PoseidonAA.png",
    opts: {
      genZone: ['olympus'],
      female: true
    }
  }, 
  {
    name: "Hera Phantasmal Dawn",
    img: "HeraPD.png",
    opts: {
      genZone: ['olympus'],
      female: true
    }
  }, 
  {
    name: "Hades Puppet Master",
    img: "HadesPM.png",
    opts: {
      genZone: ['olympus'],
      female: true
    }
  }, 
  {
    name: "Athena Chord of Convallaria",
    img: "AthenaCC.png",
    opts: {
      genZone: ['olympus'],
      female: true
    }
  }, 
  {
    name: "Oceanus Backflowing",
    img: "OceanusB.png",
    opts: {
      genZone: ['olympus'],
      male: true
    }
  } , 
  {
    name: "Leviathan Drifting Flurry",
    img: "LeviathanDF.png",
    opts: {
      genZone: ['asterism'],
      female: true
    }
  }, 
  {
    name: "Nuadha Airgetlam",
    img: "NuadhaA.png",
    opts: {
      genZone: ['asterism'],
      male: true
    }
  } , 
  {
    name: "Kali Thundertusk",
    img: "KaliT.png",
    opts: {
      genZone: ['asterism'],
      female: true
    }
  }, 
  {
    name: "Enlil Cleansing Wind",
    img: "EnlilCW.png",
    opts: {
      genZone: ['asterism'],
      male: true
    }
  } , 
  {
    name: "Kingu Wasteland Fiend",
    img: "KinguWF.png",
    opts: {
      genZone: ['asterism'],
      male: true
    }
  }, 
  {
    name: "Asura Rāhu",
    img: "AsuraR.png",
    opts: {
      genZone: ['asterism'],
      female: true
    }
  }, 
  {
    name: "Leviathan Countertide",
    img: "LeviathanC.png",
    opts: {
      genZone: ['asterism'],
      female: true
    }
  }, 
  {
    name: "Marduk Rage Serpent",
    img: "MardukRS.png",
    opts: {
      genZone: ['asterism'],
      male: true
    }
  }
]
