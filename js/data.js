// ============================================================
// PRODUCT DATA — 日盈产品中心
// ============================================================

const FALLBACK_IMG = './汽车配件0054 1.png';

const DATA = [
  {
    id: 'perception', name: '感知', nameEn: 'Sensing', label: '感知类产品',
    icon: 'ri-scan-2-line',
    color: '#32A238', colorBg: '#EFF8EF', colorBorder: '#C5E6C6',
    subcategories: [
      {
        id: 'temp-sensor', name: '温度传感器',
        products: [
          {
            id: 'water-temp', name: '水温传感器',
            image: './product-details-doc/感知/温度传感器/水温传感器/水温传感器.jpg',
            description: '水温传感器用于监测汽车发动机冷却系统或新能源车电池包冷却水管路内冷却液或冷却水的温度，冷却系统控制模块接收信号并使用控制回路控制调控，提升系统效率。',
            features: [
              '多种安装方式可选（快插、集成管路、螺纹螺栓等）',
              '更快的响应时间，最快可实现 <3s',
              'R-T 曲线可定制化',
              'IP67 及 IP69K 的防护性能'
            ],
            params: [
              { label: '工作温度范围', value: '-40°C ~ +150°C' },
              { label: '存储温度范围', value: '-40°C ~ +160°C' },
              { label: '响应时间', value: '< 3s（T63）' },
              { label: '防护等级', value: 'IP67 / IP69K' },
              { label: '输出信号类型', value: 'NTC（负温度系数热敏电阻）' },
              { label: '安装方式', value: '快插 / 螺纹螺栓 / 集成管路' },
              { label: '工作电压', value: '5V DC（标准）' }
            ],
            challenges: [
              { icon: 'ri-temp-hot-line', title: '极端温度环境', desc: '需覆盖 -40°C 极寒至 +150°C 高温，适应发动机舱及新能源电池包严苛工况' },
              { icon: 'ri-shield-check-line', title: '高防护性能', desc: 'IP67/IP69K 双重防护，抵御高压水洗与冷却液长期腐蚀侵蚀' },
              { icon: 'ri-flashlight-line', title: '快速精准响应', desc: '响应时间 <3s，确保冷却系统控制模块实时精确调节，提升整体效率' },
              { icon: 'ri-settings-4-line', title: '多平台适配', desc: '支持多种安装方式与定制化 R-T 曲线，覆盖燃油车、纯电动、混合动力平台' }
            ]
          },
          {
            id: 'air-temp', name: '空气温度传感器',
            image: './product-details-doc/感知/温度传感器/空气温度传感器/空气温度传感器3.jpg',
            description: '空气温度传感器主要应用于检测车辆外部、乘员舱、空调系统风管等的环境温度，信号用于配合车辆空调系统进行温度调控，提高舒适性。',
            features: [
              '带风扇的主动式吸风方案可选',
              'R-T 曲线可定制化',
              '密封接插件可选'
            ]
          },
          {
            id: 'refrigerant', name: '冷媒传感器',
            image: './product-details-doc/感知/温度传感器/冷媒传感器/冷媒传感器 .jpg',
            description: '冷媒温度传感器测量 HVAC 管路高压侧和低压侧的制冷剂介质温度，车辆控制模块通过信号来最大限度地提高暖风、通风与空调系统的性能。',
            features: [
              '更小的外形尺寸',
              '更快的响应时间，最快可实现 <3s',
              'R-T 曲线可定制化',
              'IP67 及 IP69K 的防护性能'
            ]
          }
        ]
      },
      {
        id: 'temp-humidity', name: '温湿度传感器',
        products: [
          {
            id: 'temp-humidity-sensor', name: '温湿度传感器',
            image: './product-details-doc/感知/温湿度传感器/空气温度传感器.jpg',
            description: '温湿度传感器安装在前风挡玻璃后视镜支架之间，用于检测车内环境温度、湿度和前档玻璃内表面温度，进行前档玻璃的防雾检测功能。',
            features: [
              '可检测前挡风玻璃的温度、湿度及露点温度等信号',
              '支持多种信号传输方式，如 LIN/PWM/IIC 等',
              '便携式的安装结构，便于安装和更换',
              '更小的外形尺寸',
              '高精度的温度（±1℃）输出和湿度（±3%RH）输出'
            ]
          }
        ]
      },
      {
        id: 'pm25', name: 'PM2.5 传感器',
        products: [
          {
            id: 'pm25-single', name: '单通道 PM2.5 传感器',
            image: './product-details-doc/感知/PM2.5传感器/单通道PM2.5传感器/单通道PM2.5传感器.jpg',
            description: '主要用于检测不同颗粒物浓度（PM2.5/PM10），可以将检测的颗粒浓度通过总线传送给空调系统，由空调系统开启对应的净化设备，从而实现空气净化功能。可通过多参数融合算法，全面评估座舱空气健康状态，为智能座舱提供数据支撑，实现自动通风、净化与空调调节联动。',
            features: [
              '采用激光光源与高灵敏度光电探测器，精准识别 0.3μm 以上颗粒物，符合车规级测量标准',
              '快速响应，采样响应时间 ≤10 秒，实时反馈车内空气质量变化',
              '符合车规级设计，工作温度范围 -20℃~+85℃，抗振动、耐高低温，满足汽车电子可靠性要求',
              '低功耗运行，典型功耗 <150mW，适配 12V 车载电源系统',
              '支持整车 LIN2.X、CAN、UART（TTL 电平）或 PWM 输出，便于与智能空调或车机联动',
              '内置气流导向设计，延长使用寿命，减少维护需求'
            ]
          },
          {
            id: 'pm25-multi', name: '多功能 PM2.5 传感器',
            image: './product-details-doc/感知/PM2.5传感器/多功能PM2.5传感器/多功能PM2.5传感器.jpg',
            description: '主要用于检测不同颗粒物浓度（PM2.5/PM10），可以将检测的颗粒浓度通过总线传送给空调系统，由空调系统开启对应的净化设备，从而实现空气净化功能；同时可扩展 CO₂ 气体检测、空气质量指数检测（AQS）、环境温度与相对湿度检测于一体的多合一汽车清风系统气体传感器。可通过多参数融合算法，全面评估座舱空气健康状态，为智能座舱提供数据支撑，实现自动通风、净化与空调调节联动。',
            features: [
              '五合一传感集成：PM2.5（车内外双通道+激光散射）、CO₂（NDIR 红外原理，量程 400–10000ppm）、AQS（感知 TVOC/NO₂/NH₃/CO/硫化物）、温度（±0.3℃精度）、湿度（±2%RH 精度）',
              '可内置多参数融合算法，输出综合 AQS 等级（优/良/差），通过智能空气质量评估，提示用户是否需要开启净化或外循环',
              '符合 AEC-Q100 标准，EMC/ESD 防护强，适应复杂车载电磁环境',
              '低功耗 & 小体积，整机功耗 <300mW',
              '支持整车 LIN2.X、CAN、UART（TTL 电平）或 PWM 输出，便于与智能空调或车机联动',
              '统一 UDS 诊断服务，并支持 OTA 升级'
            ]
          }
        ]
      },
      {
        id: 'rainfall', name: '雨量传感器',
        products: [
          {
            id: 'rainfall-3in1', name: '3 合 1 雨量传感器',
            image: './product-details-doc/感知/雨量传感器/3合1雨量传感器/雨量传感器.jpg',
            description: '雨量传感器用于汽车自动雨刷、灯光、自动空调、除雾功能；同时也为 HUD 提供光线亮度、雨天自动关窗功能。使驾驶员免除手动操作雨刷、灯光、空调调节、除雾等麻烦，有效地提高了各种环境行车的安全性和驾驶舒适度。',
            features: [
              '支持 LIN2.X 及 SAEJ260 协议，与整车通过 LIN 进行信号交互',
              '具备自动雨刮、自动阳光、自动大灯控制等功能可选',
              '雨量功能的感应面积 ≥120mm²',
              '宽角度的光学检测范围，以及高精度的信号输出',
              '支持雨天关窗、冬季模式、防误刮检查、功能安全策略等功能',
              '定制 Bootloader，支持 OTA 升级'
            ]
          },
          {
            id: 'rainfall-5in1', name: '5 合 1 雨量传感器',
            image: './product-details-doc/感知/雨量传感器/5合1雨量传感器/5合1雨量传感器.jpg',
            features: [
              '支持 LIN2.X 及 SAEJ260 协议，与整车通过 LIN 进行信号交互',
              '具备自动雨刮、自动阳光、自动大灯控制，防雾调节、HUD 控制等功能可选',
              '雨量功能的感应面积 ≥120mm²',
              '宽角度的光学检测范围，以及高精度的信号输出',
              '支持雨天关窗、冬季模式、防误刮检查、功能安全策略等功能',
              '定制 Bootloader，支持 OTA 升级'
            ]
          }
        ]
      },
      {
        id: 'light', name: '阳光光线传感器',
        products: [
          {
            id: 'sunshine-sensor', name: '阳光光线传感器',
            image: './product-details-doc/感知/阳光光线传感器/阳光传感器.jpg',
            description: '阳光光线传感器主要用于检测入射到驾驶舱的阳光强度以及车外环境光的亮度，并将信号发送给空调控制器进行温度补偿，控制空调出风口风量大小，以及将信号给整车进行自动大灯的控制。',
            features: [
              '激光可调节，产品输出精度和一致性高',
              '宽角度的检测范围 10°~170°',
              '过滤光谱，避免杂光干扰',
              '集成温度补偿功能，降低温漂',
              '便携式安装和更换',
              '模块化设计，变型开发快，功能可扩展'
            ]
          }
        ]
      },
      {
        id: 'seat', name: '座椅传感器',
        products: [
          {
            id: 'seat-pos', name: '座椅位置传感器',
            image: './product-details-doc/感知/座椅传感器/座椅位置传感器/座椅位置传感器.jpg',
            description: '一种安装在座椅导轨上的位置传感器，能够通过霍尔开关芯片检测座椅在移动时的磁感应强度变化，来反馈座椅的位置，最后反馈到安全气囊控制单元，并通过控制单元的反馈，来实现不同的档位的爆破程度。',
            features: [
              '高灵敏度磁场检测，误差率低至 ±0.5%，提升设备定位精度',
              '提供电流信号输出，减少模拟信号处理的复杂性',
              '高度可调的设计实现了 Z 向的安装灵活性，使其适用于不同的车型'
            ]
          }
        ]
      },
      {
        id: 'camera', name: '摄像头',
        products: [
          {
            id: 'camera-13m', name: '1.3M 车载摄像头',
            image: './product-details-doc/感知/摄像头/1.3M车载摄像头/1.3M车载摄像头.jpg',
            description: 'DQQ1000 是一款专为车载场景打造的高性能超广角摄像头模组，基于车规级 CMOS 图像传感器与串行器设计，可在 -40℃~+85℃ 极端环境下稳定输出 1280×960@30fps 高清图像，IP67 防护等级与 195° 超广角视野，为行车安全提供可靠保障。',
            features: [
              'LOFIC CIS 高动态成像：最高 130dB 动态范围，明暗剧烈变化场景下输出无损画质与真实色彩',
              'F1.6 大光圈暗光增强：相比常规 F2.0 镜头进光量提升约 60%，显著优化夜间与低光环境成像效果',
              'LED 闪烁抑制（LFM）：有效消除 LED 光源频闪干扰，保证图像清晰稳定',
              '195° 超广角无盲区：水平视场角达 195°，大幅减少行车视野盲区，提升主动安全',
              '车规级高可靠设计：IP67 防护（镜头 IP69K）、-40℃~+85℃ 宽温工作，适配严苛车载环境',
              '高速稳定传输：GMSL 串行输出，支持 1280×960@30fps，满足车载系统实时性要求'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'transmission', name: '传输', nameEn: 'Transmission', label: '传输类产品',
    icon: 'ri-git-branch-line',
    color: '#F0862E', colorBg: '#FEF3EA', colorBorder: '#FBCFA0',
    subcategories: [
      {
        id: 'harness', name: '线束总成',
        products: [
          {
            id: 'fakra', name: 'FAKRA 线束',
            image: './product-details-doc/传输/线束总成/FAKRA线束/FAKRA线束.jpg',
            description: 'FAKRA 线束用于车载射频信号的传输，例如 AM/FM、GPS、车载电话、车载 WIFI、360° 摄像头、远程遥控等。',
            features: [
              '采用射频信号传输技术，工作频率高，传输距离远'
            ]
          },
          {
            id: 'hsd', name: 'HSD 线束',
            image: './product-details-doc/传输/线束总成/HSD线束/HSD线束.jpg',
            description: '主要用于车内中控显示屏图像传输，以及高清摄像头图像传输。',
            features: [
              '采用差分信号传输技术，传输速率大，抗干扰性能好'
            ]
          },
          {
            id: 'low-voltage', name: '低压线束',
            image: './product-details-doc/传输/线束总成/低压线束/低压线束.jpg',
            description: '低压线束主要用于车内各个用电器的电路传输，例如车灯、ECU 控制器、开关、发动机等。',
            features: [
              '主要是电信号传输，是汽车电气系统的毛细血管'
            ]
          }
        ]
      },
      {
        id: 'micro-switch', name: '微动开关',
        products: [
          {
            id: 'micro-sw', name: '微动开关',
            image: './product-details-doc/传输/微动开关/微动开关.jpg',
            description: '提供各类微动开关。',
            features: [
              '体积小',
              '灵敏度高',
              '可定制线束一体'
            ]
          }
        ]
      },
      {
        id: 'wire', name: '连接线',
        products: [
          {
            id: 'wire-harness', name: '连接线',
            image: './product-details-doc/传输/连接线/高压线束马勒线束.jpg',
            description: '提供各类低压、电源连接线。',
            features: [
              '尺寸、功能、材料可定制'
            ]
          }
        ]
      },
      {
        id: 'crimp-connector', name: '压接连接器',
        products: [
          {
            id: 'cold-press', name: '冷压端子',
            image: './product-details-doc/传输/压接连接器/冷压端子/冷压端子.jpg',
            description: '冷压端子是一种用于实现电气连接的配件产品，属于电子连接器领域，广泛应用于电力、电子和通讯系统中，通过机械压接方式连接导线而无需焊接或螺丝固定。其种类包括圆形预绝缘端子、叉形预绝缘端子、PCB 板端子、五金连续端子等二十余种类型，主体材料多为铜或铝以保障导电性和耐腐蚀性。',
            features: [
              '加工便捷',
              '连接牢固可靠',
              '电气性能稳定',
              '环境适应性强',
              '安装高效便捷',
              '经济性好'
            ]
          }
        ]
      },
      {
        id: 'board-connector', name: '板间连接器',
        products: [
          {
            id: 'board-conn', name: '板间连接器',
            image: './product-details-doc/传输/板间连接器/板间连接器01.jpg',
            description: '用于控制器、传感器等的板间连接。',
            features: [
              '面向电子传感器、控制器应用',
              '可定制开模',
              '提供实验验证'
            ]
          }
        ]
      },
      {
        id: 'connector-terminal', name: '连接器端子',
        products: [
          {
            id: 'conn-t', name: '连接器端子',
            image: './product-details-doc/传输/连接器端子/连接器端子/连接器端子.jpg',
            description: '连接器又称护套、接插件、塑壳，是电子工程领域用于电路导通的核心组件，由接触件、外壳、绝缘体及附件四大结构组成。其通过阴阳接触件插合传递电流，实现电气连接、传输电能和信号。',
            features: [
              '独特的插头与插座配合结构设计，使电子设备在组装、维修或升级时可方便地连接或断开，大幅提升灵活性与可维护性',
              '产品符合 QC/T1067、USCAR-2 等行业标准要求'
            ]
          },
          {
            id: 'wire-t', name: '接线端子',
            image: './product-details-doc/传输/连接器端子/接线端子/接线端子01b.jpg',
            description: '连接器又称护套、接插件、塑壳，是电子工程领域用于电路导通的核心组件，由接触件、外壳、绝缘体及附件四大结构组成。其通过阴阳接触件插合传递电流，实现电气连接、传输电能和信号。',
            features: [
              '独特的插头与插座配合结构设计，使电子设备在组装、维修或升级时可方便地连接或断开，大幅提升灵活性与可维护性',
              '产品符合 QC/T1067、USCAR-2 等行业标准要求'
            ]
          }
        ]
      },
      {
        id: 'connector-shell', name: '连接器塑壳',
        products: [
          {
            id: 'sealed', name: '密封连接器',
            image: './product-details-doc/传输/连接器塑壳/密封连接器/密封连接器02.jpg',
            description: '连接器又称护套、接插件、塑壳，是电子工程领域用于电路导通的核心组件，由接触件、外壳、绝缘体及附件四大结构组成。其通过阴阳接触件插合传递电流，实现电气连接、传输电能和信号。',
            features: [
              '独特的插头与插座配合结构设计，使电子设备在组装、维修或升级时可方便地连接或断开，大幅提升灵活性与可维护性',
              '产品符合 QC/T1067、USCAR-2 等行业标准要求'
            ]
          },
          {
            id: 'unsealed', name: '非密封连接器',
            image: './product-details-doc/传输/连接器塑壳/非密封连接器/非密封连接器03.jpg',
            description: '连接器又称护套、接插件、塑壳，是电子工程领域用于电路导通的核心组件，由接触件、外壳、绝缘体及附件四大结构组成。其通过阴阳接触件插合传递电流，实现电气连接、传输电能和信号。',
            features: [
              '独特的插头与插座配合结构设计，使电子设备在组装、维修或升级时可方便地连接或断开，大幅提升灵活性与可维护性',
              '产品符合 QC/T1067、USCAR-2 等行业标准要求'
            ]
          },
          {
            id: 'pdbox', name: '配电盒',
            image: './product-details-doc/传输/连接器塑壳/配电盒/20260302日盈产品0071.jpg',
            description: '连接器又称护套、接插件、塑壳，是电子工程领域用于电路导通的核心组件，由接触件、外壳、绝缘体及附件四大结构组成。其通过阴阳接触件插合传递电流，实现电气连接、传输电能和信号。',
            features: [
              '独特的插头与插座配合结构设计，使电子设备在组装、维修或升级时可方便地连接或断开，大幅提升灵活性与可维护性',
              '产品符合 QC/T1067、USCAR-2 等行业标准要求'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'control', name: '控制', nameEn: 'Control', label: '控制类产品',
    icon: 'ri-cpu-line',
    color: '#004BA4', colorBg: '#E8EEF9', colorBorder: '#A8BCE6',
    subcategories: [
      {
        id: 'evcc', name: '电动汽车通讯控制器 (EVCC)',
        products: [
          {
            id: 'evcc1', name: 'EVCC 1 代',
            image: './product-details-doc/控制/电动汽车通讯控制器(EVCC)/EVCC1代/EVCC1代.jpg',
            description: 'EVCC（电动汽车通讯控制器）是安装于电动汽车中的通信控制器，用于 CAN 通讯与 PLC（电力载波通讯）的协议转换，实现车辆与充电设备端 SECC 之间加密通信或车辆与 SECC 之间的数据传输。',
            features: [
              '支持国标及欧标电动车连接欧标充电设备充电，兼容交、直流充电',
              '支持 ISO15118、DIN70121 和 GB/T27930 标准',
              '通过标准 CAN 接口与 BMS 通讯',
              '低功耗休眠功能，可通过 CAN、PP、CP 唤醒，可通过 A+/A-、CC2 唤醒其他设备',
              '统一诊断服务（UDS），符合 ISO14229 及 ISO15765 标准',
              '定制 Bootloader，支持 OTA 升级，充电策略制定以及智能充电'
            ]
          },
          {
            id: 'evcc2', name: 'EVCC 2 代',
            image: './product-details-doc/控制/电动汽车通讯控制器(EVCC)/EVCC2代/EVCC2代.jpg',
            description: 'EVCC（电动汽车通讯控制器）是安装于电动汽车中的通信控制器，用于 CAN 通讯与 PLC（电力载波通讯）的协议转换，实现车辆与充电设备端 SECC 之间加密通信或车辆与 SECC 之间的数据传输。',
            features: [
              '支持国标及欧标电动车连接欧标充电设备充电，兼容交、直流充电',
              '支持 ISO15118-20、DIN70121 和 GB/T27930 标准',
              '通过标准 CAN 接口与 BMS 通讯',
              '低功耗休眠功能，可通过 CAN、PP、CP 唤醒，可通过 A+/A-、CC2 唤醒其他设备',
              '统一诊断服务（UDS），符合 ISO14229 及 ISO15765 标准',
              '定制 Bootloader，支持 OTA 升级，充电策略制定以及智能充电，预留交流 V2X 功能'
            ]
          }
        ]
      },
      {
        id: 'sunroof', name: '天窗控制器',
        products: [
          {
            id: 'sunroof-ctrl', name: '天窗控制器',
            image: './product-details-doc/控制/天窗控制器/Generated Image March 04, 2026 - 12_50AM.jpg',
            description: '天窗控制器是整个天窗系统的控制中心，负责整个系统控制命令的判定和控制策略的执行。通过控制电机的正反转，从而实现天窗或者卷帘的打开与关闭（一拖二，可同时实现玻璃和卷帘的控制），具有防夹功能，基于 Hall 的速度检测原理，可保证位置控制的精确性和防夹的可靠性，同时支持语音功能、遥控、APP 控制等功能。',
            features: [
              '具有防夹保护功能（符合国标 GB11552-2009 / 美标 FMVSS118 / 欧标 2000/4 EG 防夹标准），基于 Hall 的速度检测原理',
              '支持位置自动校准、电机热保护等功能',
              '具备滑道自适应功能，降低机械温度导致的误防夹问题',
              '具备堵转保护、诊断保护、过流保护等功能',
              '支持 CAN/LIN 接口，与整车进行信号交互，支持语音、遥控、蓝牙控制等功能',
              '支持 PWM 调速功能，可配置同时控制多个电机（如一拖一/一拖二）',
              '定制 Bootloader，支持 OTA 升级',
              '支持功能安全'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'execution', name: '执行', nameEn: 'Execution', label: '执行类产品',
    icon: 'ri-settings-5-line',
    color: '#22AFB7', colorBg: '#E8F7F8', colorBorder: '#9DD9DD',
    subcategories: [
      {
        id: 'washing', name: '洗涤系统',
        products: [
          {
            id: 'windshield-wash', name: '风窗清洗',
            image: './product-details-doc/执行/洗涤系统/风窗清洗/风窗清洗.jpg',
            description: '汽车风窗洗涤是保障驾驶视野清晰、提升行车安全的核心功能系统，专为全天候、全路况玻璃清洁设计，与雨刮系统协同工作，快速清除灰尘、虫胶、油膜、雨雪污渍，保持前挡风玻璃通透无遮挡。',
            features: [
              '稳定喷射，快速覆盖目标玻璃区域，配合雨刮高效去除灰尘、虫胶、泥污',
              '耐高低温、抗老化，-40℃～90℃ 环境稳定运行，安全可靠',
              '喷嘴角度精准，扇形 / 柱状喷射均匀，覆盖合理，减少干刮，保护雨刮胶条与玻璃'
            ]
          },
          {
            id: 'headlight-wash', name: '大灯清洗',
            image: './product-details-doc/执行/洗涤系统/大灯清洗/大灯清洗.jpg',
            description: '大灯清洗系统是保障夜间及恶劣天气行车照明清晰度的主动安全部件，专为快速清除大灯灯罩表面的灰尘、泥污、虫尸、雨雪污渍而设计。',
            features: [
              '隐藏式设计',
              '耐高低温，-40℃～90℃ 环境稳定运行，安全可靠',
              '耐腐蚀、密封好、寿命长'
            ]
          },
          {
            id: 'lidar-wash', name: '激光雷达清洗',
            image: './product-details-doc/执行/洗涤系统/激光雷达清洗/激光雷达清洗.jpg',
            description: '激光雷达清洗系统是智能驾驶、高阶辅助驾驶（ADAS）的感知层核心清洁保障装置，专为维持激光雷达镜面高精度、无遮挡工作状态设计。',
            features: [
              '精准喷射，定向微喷设计，出水角度与激光雷达探测面高度匹配，少量液体即可快速清除灰尘、泥污',
              '极紧凑隐藏式结构，可嵌入式集成安装，不破坏车身外观与气动布局，工作时微伸出，清洁后自动复位',
              '耐高低温，-40℃～90℃ 环境稳定运行，安全可靠'
            ]
          },
          {
            id: 'camera-wash', name: '摄像头清洗',
            image: './product-details-doc/执行/洗涤系统/摄像头清洗/摄像头清洗.jpg',
            description: '车载摄像头清洗系统是智能驾驶、全景影像、行车辅助的视觉感知清洁核心部件，专为保障前视、环视、后视等车载摄像头全天候清晰成像设计。',
            features: [
              '精准喷射，定向微喷设计，出水角度与摄像头镜面高度匹配，少量液体即可快速清除灰尘、泥污',
              '体积小巧',
              '耐高低温，-40℃～90℃ 环境稳定运行，安全可靠'
            ]
          }
        ]
      },
      {
        id: 'precision-mold', name: '精密注塑',
        products: [
          {
            id: 'conn-3711573', name: '嵌件注塑接插件 3711573',
            image: './product-details-doc/执行/精密注塑/嵌件注塑-接插件3711573/嵌件注塑-接插件3711573.jpg',
            description: '接插件用于实现电路快速连接、断开，并保证电信号 / 电源稳定可靠传输。',
            features: [
              '实现电路快速连接、断开，并保证电信号 / 电源稳定可靠传输'
            ]
          },
          {
            id: 'conn-38303464', name: '嵌件注塑接插件 38303464',
            image: './product-details-doc/执行/精密注塑/嵌件注塑-接插件38303464/嵌件注塑-接插件38303464.jpg',
            description: '连接器用于实现电路快速连接、断开，并保证电信号 / 电源稳定可靠传输。',
            features: [
              '实现电路快速连接、断开，并保证电信号 / 电源稳定可靠传输'
            ]
          },
          {
            id: 'bracket-3711603', name: '注塑线束支架 3711603',
            image: './product-details-doc/执行/精密注塑/注塑-线束支架3711603/注塑线束支架3711603.jpg',
            description: '线束支架用于把散乱的线束规整、固定在车身 / 底盘指定位置，防止行驶中晃动、拉扯、窜动，避免接头松脱。',
            features: [
              '固定与限位功能',
              '线束防磨损功能',
              '规划线束走向，实现布线标准化',
              '采用螺栓固定'
            ]
          },
          {
            id: 'media-bracket-3711586', name: '嵌件注塑媒体支架 3711586',
            image: './product-details-doc/执行/精密注塑/嵌件注塑-前部中部媒体支架3711586/嵌件注塑前部:中部媒体支架3711586.jpg',
            description: '安装于电池包内部，用于固定和保护高压动力线束及低压信号线束的结构件。',
            features: [
              '确保高压线束与其他部件保持安全距离，防止磨损导致的漏电或短路',
              '在车辆振动工况下，为线束提供缓冲和固定，防止连接器松动'
            ]
          },
          {
            id: 'lock-cover-3711589', name: '注塑锁盖 3711589',
            image: './product-details-doc/执行/精密注塑/注塑-锁盖3711589/注塑锁盖3711589.jpg',
            description: '汽车后背门锁盖是一个集成了多种功能的小型精密部件，安装于后背门内饰板上的可拆卸式盖板，用于遮蔽背门锁安装机构，并提供紧急手动开启通道。',
            features: [
              '覆盖锁体安装点，保证内饰外观整洁',
              '不借助工具即可徒手拆卸，便于执行机械应急解锁',
              '全卡接结构，利用塑料卡勾与背门饰板固定，安装牢固且无振动异响'
            ]
          },
          {
            id: 'ecu-shell', name: '电子控制器外壳',
            image: './product-details-doc/执行/精密注塑/电子控制器外壳/电子控制器外壳.jpg',
            description: '可定制、开模制作各类电子控制器、执行器外壳，满足各类定制化要求。',
            features: [
              '支持定制，提供设计、仿真、开模',
              '防护等级可达 IP40 至 IP69'
            ]
          }
        ]
      },
      {
        id: 'damper', name: '风门执行器',
        products: [
          {
            id: 'hvac-damper', name: '空调箱风门执行器',
            image: './product-details-doc/执行/风门执行器/空调箱风门执行器/空调箱风门执行器.jpg',
            description: '空调箱风门执行器用于移动和控制汽车空调和管道部件中的阀门开度，进而控制冷空气和热空气的混合比例，调节车内温度和改变空气流向，以确保车内不同区域的舒适度。',
            features: [
              'LIN 自动寻址',
              'LIN 通讯和诊断功能',
              'SVPWM 无刷电机控制',
              '多种自我诊断和保护功能'
            ]
          }
        ]
      }
    ]
  }
];

// ── Helpers ──────────────────────────────────────────────
function findCat(id)       { return DATA.find(c => c.id === id); }
function findSub(cat, id)  { return cat?.subcategories.find(s => s.id === id); }
function findProd(sub, id) { return sub?.products?.find(p => p.id === id); }
function totalProds(cat)   { return cat.subcategories.reduce((n, s) => n + (s.products?.length || 0), 0); }
function getParams()       { return new URLSearchParams(location.search); }
function goTo(url)         { location.href = url; }
function getImg(prod)      { return (prod && prod.image) ? prod.image : FALLBACK_IMG; }
function getSubImg(sub)    { return (sub.products && sub.products[0] && sub.products[0].image) ? sub.products[0].image : FALLBACK_IMG; }
