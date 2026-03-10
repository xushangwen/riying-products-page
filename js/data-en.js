// ============================================================
// DATA_EN — English translations for product data
// Source: 日盈网站_产品英文介绍260310(2).xlsx (client-provided)
// ============================================================

var DATA_EN = {
  categories: {
    perception:   { name: 'Sensing',       label: 'Sensing Products' },
    transmission: { name: 'Transmission',  label: 'Transmission Products' },
    control:      { name: 'Control',       label: 'Control Products' },
    execution:    { name: 'Execution',     label: 'Execution Products' }
  },
  subcategories: {
    'temp-sensor':         { name: 'Temperature Sensor' },
    'temp-humidity':       { name: 'Temperature and Humidity Sensor' },
    'pm25':                { name: 'PM2.5 Sensor' },
    'rainfall':            { name: 'Rainfall Sensor' },
    'light':               { name: 'Light Senser' },
    'seat':                { name: 'Seat Position Sensor' },
    'camera':              { name: 'Camera' },
    'harness':             { name: 'Harnesses' },
    'micro-switch':        { name: 'Microswitch' },
    'wire':                { name: 'Connecting wire' },
    'crimp-connector':     { name: 'Crimp connector' },
    'board-connector':     { name: 'Board-to-Board Connector' },
    'connector-terminal':  { name: 'Connector Terminal' },
    'connector-shell':     { name: 'Connector Housing' },
    'evcc':                { name: 'Electric Vehicle Communication Controller (EVCC)' },
    'sunroof':             { name: 'Sunroof controller' },
    'washing':             { name: 'Automobile washing system' },
    'precision-mold':      { name: 'Precision Injection Molded' },
    'damper':              { name: 'Automobile damper actuator' }
  },
  products: {
    'water-temp': {
      name: 'Water Temperature Sensor',
      description: 'The water temperature sensor is used to monitor the temperature of the coolant or cooling water in the automotive engine cooling system or the cooling water pipes of the battery pack in new energy vehicles. The cooling system control module receives the signal and uses a control loop to regulate it, improving system efficiency.',
      features: [
        'Core Features: Self-made NTC resistor for accurate measurement.',
        'Response time <3s.',
        'Customizable R-T curve.',
        'IP67/IP69K protection.'
      ]
    },
    'air-temp': {
      name: 'Temperature sensor',
      description: 'The air temperature sensor is mainly used to detect the ambient temperature outside the vehicle, in the passenger compartment, and in the air conditioning system ducts. The signal is used by the vehicle\'s air conditioning system for temperature control, enhancing comfort.',
      features: [
        'Active air intake solution with a fan is optional.',
        'R-T curve can be customized.',
        'Sealed connectors are optional.'
      ]
    },
    'refrigerant': {
      name: 'Refrigerant Temperature Sensor',
      description: 'The refrigerant temperature sensor measures the temperature of the refrigerant medium on the high-pressure and low-pressure sides of the HVAC piping. The vehicle control module uses this signal to maximize the performance of the heating, ventilation, and air conditioning system.',
      features: [
        'Smaller form factor.',
        'Faster response time, as fast as <3s.',
        'Customizable R-T curve.',
        'IP67 and IP69K protection ratings.'
      ]
    },
    'temp-humidity-sensor': {
      name: 'Temperature and Humidity Sensor',
      description: 'The temperature and humidity sensor is installed between the front windshield and the rearview mirror bracket. It is used to detect the cabin\'s ambient temperature and humidity, as well as the inner surface temperature of the windshield, enabling the anti-fog detection function for the front windshield.',
      features: [
        'Capable of detecting signals such as the temperature, humidity, and dew point temperature of the front windshield.',
        'Supports multiple signal transmission methods, such as LIN/PWM/IIC, etc.',
        'Portable mounting structure for easy installation and replacement.',
        'Smaller form factor.',
        'High-precision temperature (±1°C) and humidity (±3% RH) output.'
      ]
    },
    'pm25-single': {
      name: 'The single-channel PM2.5 sensor',
      description: 'The single-channel PM2.5 sensor is primarily used to detect different particle concentrations (PM2.5/PM10). It transmits the detected particle concentration to the air conditioning system via the bus, which then activates the corresponding purification equipment to achieve air purification. Multi-parameter fusion algorithms can be used to comprehensively assess the cabin air health status, providing data support for the smart cockpit and enabling automatic ventilation, purification, and air conditioning adjustment linkage.',
      features: [
        'Uses a laser light source and high-sensitivity photodetector to accurately identify particles above 0.3μm, meeting automotive-grade measurement standards.',
        'Fast response, sampling response time ≤ 10 seconds, providing real-time feedback on interior air quality changes.',
        'Compliant with automotive-grade design, operating temperature range -20°C ~ +85°C, resistant to vibration, high and low temperatures, meeting automotive electronics reliability requirements.',
        'Low power consumption, typically < 150mW, suitable for 12V vehicle power systems.',
        'Supports vehicle LIN2.x, CAN, UART (TTL level), or PWM output, facilitating integration with smart air conditioning or vehicle infotainment systems.',
        'Built-in airflow guidance design extends service life and reduces maintenance needs.'
      ]
    },
    'pm25-multi': {
      name: 'The multi-function PM2.5 sensor',
      description: 'The multi-function PM2.5 sensor is mainly used to detect different particle concentrations, such as PM2.5/PM10. It transmits the detected particle concentration to the air conditioning system via the bus, which then activates the corresponding purification equipment to purify the air. It is a multi-purpose automotive fresh air system gas sensor that integrates expandable CO₂ gas detection, Air Quality Index (AQS, based on TVOC/NO₂/NH₃/CO, etc.) detection, ambient temperature, and relative humidity detection. Through multi-parameter fusion algorithms, it comprehensively assesses the cabin air health status, providing data support for the smart cockpit and enabling automatic ventilation, purification, and air conditioning adjustment linkage.',
      features: [
        'Five-in-One Sensor Integration: PM2.5 (dual-channel inside/outside vehicle + laser scattering) · CO₂ (NDIR infrared principle, range 400–10000 ppm) · AQS (Metal Oxide Semiconductor, detects TVOC/NO₂/NH₃/CO/sulfides) · Temperature (±0.3°C accuracy) · Humidity (±2% RH accuracy).',
        'Built-in multi-parameter fusion algorithm, outputs comprehensive AQS level (Good/Fair/Poor), provides smart air quality assessment, prompting users whether to activate purification or external circulation.',
        'Compliant with AEC-Q100 standard, strong EMC/ESD protection, adapts to complex in-vehicle electromagnetic environments.',
        'Low power consumption & small size, total power consumption < 300 mW.',
        'Supports vehicle LIN2.x, CAN, UART (TTL level), or PWM output, facilitating integration with smart air conditioning or vehicle infotainment systems.',
        'Unified UDS diagnostic services, and supports OTA updates.'
      ]
    },
    'rainfall-3in1': {
      name: 'The 3-in-1 rain/light sensor',
      description: 'The rain/light sensor is used for automatic windshield wipers, lights, automatic climate control, and defogging functions; it also provides ambient light levels for the HUD and enables automatic window closure in rainy conditions. It relieves the driver from manually operating the wipers, lights, air conditioning, and defogging, effectively improving driving safety and comfort in various environments.',
      features: [
        'Supports LIN2.X and SAEJ260 protocols for signal interaction with the vehicle via LIN.',
        'Offers optional functions including automatic wipers, automatic sunlight detection, and automatic headlight control.',
        'Rain-sensing area ≥ 120mm².',
        'Wide-angle optical detection range and high-precision signal output.',
        'Supports functions like rain-sensing window closure, winter mode, false-wipe prevention check, and functional safety strategies.',
        'Custom Bootloader, supports OTA updates.'
      ]
    },
    'rainfall-5in1': {
      name: 'The 5-in-1 rain/light sensor',
      description: 'The light sensor is used for automatic windshield wipers, lights, automatic climate control, and defogging functions; it also provides ambient light levels for the HUD (Head-Up Display) and enables automatic window closure in rainy conditions. It relieves the driver from manually operating the wipers, lights, air conditioning, and defogging, effectively improving driving safety and comfort in various environments.',
      features: [
        'Supports LIN2.X and SAEJ260 protocols for signal interaction with the vehicle via LIN.',
        'Offers optional functions including automatic wipers, automatic sunlight detection, automatic headlight control, anti-fog adjustment, and HUD control.',
        'Rain-sensing area ≥ 120mm².',
        'Wide-angle optical detection range and high-precision signal output.',
        'Supports functions like rain-sensing window closure, winter mode, false-wipe prevention check, and functional safety strategies.',
        'Custom Bootloader, supports OTA updates.'
      ]
    },
    'sunshine-sensor': {
      name: 'Light Senser',
      description: 'The sunlight and light sensor is mainly used to detect the intensity of sunlight entering the cabin and the intensity of ambient light outside the vehicle. It sends this signal to the air conditioning controller for temperature compensation, controlling the airflow volume from the AC vents, and also provides the signal to the vehicle for automatic headlight control.',
      features: [
        'Laser adjustable, ensuring high product output accuracy and consistency.',
        'Wide detection angle range (10° to 170°)',
        'Spectral filtering to avoid stray light interference.',
        'Integrated temperature compensation function to reduce temperature drift.',
        'Easy installation and replacement.',
        'Modular design for fast variant development and functional expandability.'
      ]
    },
    'seat-pos': {
      name: 'Seat Position Sensor',
      description: 'The seat position sensor is a position sensor installed on the seat rail. It detects changes in magnetic field strength as the seat moves via a Hall switch chip to provide feedback on the seat position. This information is ultimately relayed to the airbag control unit, which uses the feedback to implement different levels of deployment force.',
      features: [
        'High-sensitivity magnetic field detection, error rate as low as ±0.5%, improving device positioning accuracy.',
        'Provides current signal output, reducing the complexity of analog signal processing.',
        'Highly adjustable design offers installation flexibility in the Z-direction, making it suitable for different vehicle models.'
      ]
    },
    'camera-13m': {
      name: '1.3M vehicle-mounted camera',
      description: 'The 1.3M vehicle-mounted camera supports LVDS data transmission. It is a high-performance ultra-wide-angle camera module specifically designed for in-vehicle applications. Based on an automotive-grade CMOS image sensor and serializer design, it can stably output 1280×960@30fps high-definition images in extreme environments ranging from -40°C to +85°C. With an IP67 protection rating and a 195° ultra-wide field of view, it provides reliable assurance for driving safety.',
      features: [
        'LOFIC CIS High Dynamic Range Imaging: Up to 130dB dynamic range, delivering lossless image quality and true colors in scenes with dramatic light changes.',
        'F1.6 Large Aperture for Low-Light Enhancement: Approximately 60% more light intake compared to conventional F2.0 lenses, significantly improving imaging performance in nighttime and low-light environments.',
        'LED Flicker Mitigation (LFM): Effectively eliminates flicker interference from LED light sources, ensuring clear and stable images.',
        '195° Ultra-Wide Angle with No Blind Spots: Horizontal field of view reaches 195°, greatly reducing driving blind spots and enhancing active safety.',
        'Automotive-Grade High-Reliability Design: IP67 protection (lens IP69K), operates in -40°C to +85°C wide temperature range, suitable for harsh vehicle environments.',
        'High-Speed Stable Transmission: GMSL serial output, supports 1280×960@30fps, meeting the real-time requirements of vehicle systems.'
      ]
    },
    'fakra': {
      name: 'FAKRA',
      description: 'FAKRA harnesses are used for transmitting radio frequency signals in vehicles, such as AM/FM, GPS, in-car phones, in-car WiFi, 360° cameras, remote controls, and more.',
      features: [
        'Utilizes RF signal transmission technology, high operating frequency, long transmission distance.'
      ]
    },
    'hsd': {
      name: 'HSD',
      description: 'HSD (High-Speed Data) harnesses are mainly used for image transmission to center console displays and for high-definition camera image transmission in vehicles.',
      features: [
        'Utilizes differential signal transmission technology, high transmission rate, good anti-interference performance.'
      ]
    },
    'low-voltage': {
      name: 'Ethernet',
      description: 'Low-voltage harnesses are primarily used for circuit transmission to various electrical components in the vehicle, such as lights, ECU controllers, switches, engines, etc.',
      features: [
        'Primarily for electrical signal transmission, serving as the "capillaries" of the vehicle\'s electrical system.'
      ]
    },
    'micro-sw': {
      name: 'Microswitch',
      description: 'Provides various types of Microswitches.',
      features: [
        'Small size.',
        'High sensitivity.',
        'Customizable with integrated wiring harness.'
      ]
    },
    'wire-harness': {
      name: 'Connecting wire',
      description: 'Provides various types of low-voltage and power connection wires.',
      features: [
        'Customizable in size, function, and material.'
      ]
    },
    'cold-press': {
      name: 'Cold-pressed terminal',
      description: 'A cold-pressed terminal is an accessory product used to achieve electrical connections, belonging to the field of electronic connectors. It is widely used in power, electronics, and communication systems. It connects wires by mechanical crimping without the need for soldering or screw fixing. Its types include over twenty varieties, such as circular pre-insulated terminals, forked pre-insulated terminals, PCB board terminals, and hardware continuous terminals. The main materials are mostly copper or aluminum to ensure conductivity and corrosion resistance.',
      features: [
        'Convenient processing.',
        'Firm and reliable connection.',
        'Stable electrical performance.',
        'Strong environmental adaptability.',
        'Efficient and convenient installation.',
        'Good economy.'
      ]
    },
    'board-conn': {
      name: 'Board-to-Board Connector',
      description: 'Board-to-board connectors are used for connections between boards in controllers, sensors, and other electronic units.',
      features: [
        'Designed for electronic sensor and controller applications.',
        'Customizable mold opening.',
        'Provides experimental verification.'
      ]
    },
    'conn-t': {
      name: 'Connector Terminal',
      description: 'A connector, also known as a housing, plug/socket, or plastic shell, is a core component in the field of electronic engineering used for circuit conduction. It consists of four main structural parts: contacts, shell, insulator, and accessories. It transmits current by mating male and female contacts to achieve electrical connections and transmit electrical energy and signals.',
      features: [
        'Through their unique structural design, such as the mating of plugs and sockets, connectors enable convenient connection or disconnection of electronic devices during assembly, repair, or upgrading, greatly enhancing equipment flexibility and maintainability.',
        'Products comply with standards such as QC/T1067 and USCAR-2.'
      ]
    },
    'wire-t': {
      name: 'Terminal Block',
      description: 'A connector, also known as a housing, plug/socket, or plastic shell, is a core component in the field of electronic engineering used for circuit conduction. It consists of four main structural parts: contacts, shell, insulator, and accessories. It transmits current by mating male and female contacts to achieve electrical connections and transmit electrical energy and signals.',
      features: [
        'Through their unique structural design, such as the mating of plugs and sockets, connectors enable convenient connection or disconnection of electronic devices during assembly, repair, or upgrading, greatly enhancing equipment flexibility and maintainability.',
        'Products comply with standards such as QC/T1067 and USCAR-2.'
      ]
    },
    'sealed': {
      name: 'Waterproof Connector',
      description: 'A connector, also known as a housing, plug/socket, or plastic shell, is a core component in the field of electronic engineering used for circuit conduction. It consists of four main structural parts: contacts, shell, insulator, and accessories. It transmits current by mating male and female contacts to achieve electrical connections and transmit electrical energy and signals.',
      features: [
        'Through their unique structural design, such as the mating of plugs and sockets, connectors enable convenient connection or disconnection of electronic devices during assembly, repair, or upgrading, greatly enhancing equipment flexibility and maintainability.',
        'Products comply with standards such as QC/T1067 and USCAR-2.'
      ]
    },
    'unsealed': {
      name: 'Unsealed Connector',
      description: 'A connector, also known as a housing, plug/socket, or plastic shell, is a core component in the field of electronic engineering used for circuit conduction. It consists of four main structural parts: contacts, shell, insulator, and accessories. It transmits current by mating male and female contacts to achieve electrical connections and transmit electrical energy and signals.',
      features: [
        'Through their unique structural design, such as the mating of plugs and sockets, connectors enable convenient connection or disconnection of electronic devices during assembly, repair, or upgrading, greatly enhancing equipment flexibility and maintainability.',
        'Products comply with standards such as QC/T1067 and USCAR-2.'
      ]
    },
    'pdbox': {
      name: 'Distribution Box',
      description: 'A connector, also known as a housing, plug/socket, or plastic shell, is a core component in the field of electronic engineering used for circuit conduction. It consists of four main structural parts: contacts, shell, insulator, and accessories. It transmits current by mating male and female contacts to achieve electrical connections and transmit electrical energy and signals.',
      features: [
        'Through their unique structural design, such as the mating of plugs and sockets, connectors enable convenient connection or disconnection of electronic devices during assembly, repair, or upgrading, greatly enhancing equipment flexibility and maintainability.',
        'Products comply with standards such as QC/T1067 and USCAR-2.'
      ]
    },
    'evcc1': {
      name: 'EVCC charging controller',
      description: 'EVCC (Electric Vehicle Communication Controller) is a communication controller installed in electric vehicles. It is used for protocol conversion between CAN communication and PLC (Power Line Communication), enabling encrypted communication between the vehicle and the charging equipment\'s SECC (Supply Equipment Communication Controller), or data transmission between the vehicle and SECC.',
      features: [
        'Supports charging of Chinese and European standard electric vehicles at European standard charging equipment, compatible with AC and DC charging.',
        'Supports ISO15118, DIN70121, and GB/T27930 standards.',
        'Communicates with BMS via standard CAN interface.',
        'Low-power sleep function, wake-up via CAN, PP, CP, and can wake up other devices via A+/A-, CC2.',
        'Unified Diagnostic Services (UDS), compliant with ISO14229 and ISO15765 standards.',
        'Custom Bootloader, supports OTA updates, charging strategy formulation, and smart charging.'
      ]
    },
    'evcc2': {
      name: 'EVCC charging controller',
      description: 'EVCC (Electric Vehicle Communication Controller) is a communication controller installed in electric vehicles. It is used for protocol conversion between CAN communication and PLC (Power Line Communication), enabling encrypted communication between the vehicle and the charging equipment\'s SECC (Supply Equipment Communication Controller), or data transmission between the vehicle and SECC.',
      features: [
        'Supports charging of Chinese and European standard electric vehicles at European standard charging equipment, compatible with AC and DC charging.',
        'Supports ISO15118, DIN70121, and GB/T27930 standards.',
        'Communicates with BMS via standard CAN interface.',
        'Low-power sleep function, wake-up via CAN, PP, CP, and can wake up other devices via A+/A-, CC2.',
        'Unified Diagnostic Services (UDS), compliant with ISO14229 and ISO15765 standards.',
        'Custom Bootloader, supports OTA updates, charging strategy formulation, smart charging, with reserved AC V2X functionality.'
      ]
    },
    'sunroof-ctrl': {
      name: 'Sunroof controller',
      description: 'The sunroof controller is the control center of the entire sunroof system, responsible for determining system control commands and executing control strategies. By controlling the forward and reverse rotation of the motor, it opens or closes the sunroof or roller blind (one controller driving two loads, enabling simultaneous control of the glass and roller blind). It features an anti-pinch function. Based on Hall-effect speed detection principles, it ensures precise position control and reliable anti-pinch performance. It also supports voice control, remote control, and APP control functions.',
      features: [
        'Features anti-pinch protection (compliant with national standard GB11552-2009 / US standard FMVSS118 / European standard 2000/4 EG). Based on Hall-effect speed detection, it ensures precise position control and reliable anti-pinch performance.',
        'Supports functions like automatic position calibration and motor thermal protection.',
        'Features slide-way adaptive function, reducing false anti-pinch issues caused by mechanical temperature variations.',
        'Includes stall protection, diagnostic protection, overcurrent protection, and other functions.',
        'Supports CAN/LIN interface for signal interaction with the vehicle, supports voice control, remote control, Bluetooth control, and other functions.',
        'Supports PWM speed regulation function, configurable to control multiple motors simultaneously (e.g., one driver controlling one or two loads).',
        'Custom Bootloader, supports OTA updates.',
        'Supports functional safety.'
      ]
    },
    'windshield-wash': {
      name: 'windshield washer',
      description: 'The automotive windshield washer system is a core functional system that ensures clear driving vision and enhances driving safety. Designed for all-weather, all-road glass cleaning, it works in conjunction with the wiper system to quickly remove dust, insect residue, oil film, rain, snow, and stains, keeping the front windshield clear and unobstructed.',
      features: [
        'Stable spray, quickly covers the target glass area, effectively removes dust, insect residue, and mud when working with wipers.',
        'Resistant to high and low temperatures, aging-resistant, operates stably and reliably in -40°C to 90°C environments.',
        'Precise nozzle angle, uniform fan/spray pattern, reasonable coverage, reduces dry wiping, protects wiper blades and glass.'
      ]
    },
    'headlight-wash': {
      name: 'headlight cleaning',
      description: 'The headlight cleaning system is an active safety component that ensures clear lighting at night and in adverse weather conditions. It is specifically designed to quickly remove dust, mud, insect residue, rain, snow, and stains from the surface of the headlight lens.',
      features: [
        'Concealed design.',
        'Resistant to high and low temperatures, operates stably and reliably in -40°C to 90°C environments.',
        'Corrosion-resistant, good sealing, long service life.'
      ]
    },
    'lidar-wash': {
      name: 'LiDAR cleaning',
      description: 'The LiDAR cleaning system is a core cleaning assurance device for the perception layer of intelligent driving and advanced driver-assistance systems (ADAS). It is specifically designed to maintain the high-precision, unobstructed working condition of the LiDAR lens.',
      features: [
        'Precision injection with a targeted micro-spray design; the spray angle is precisely matched to the LiDAR detection surface. A small amount of liquid quickly removes dust and mud.',
        'Ultra-compact, concealed structure for embedded integration that does not disrupt the vehicle\'s appearance or aerodynamic profile. It extends slightly during operation and automatically retracts after cleaning, ensuring no interference with the perception field of view.',
        'Resistant to high and low temperatures, operating stably and reliably in environments ranging from -40°C to 90°C.'
      ]
    },
    'camera-wash': {
      name: 'camera cleaning',
      description: 'The vehicle-mounted camera cleaning system is a core component for maintaining visual perception cleanliness in intelligent driving, panoramic imaging, and driving assistance systems. It is specifically designed to ensure clear imaging for front-view, surround-view, rear-view, and other vehicle-mounted cameras in all weather conditions.',
      features: [
        'Precision injection, targeted micro-spray design, the spray angle is highly matched with the camera lens surface. A small amount of liquid quickly removes dust and mud.',
        'Compact size.',
        'Resistant to high and low temperatures, operates stably and reliably in -40°C to 90°C environments.'
      ]
    },
    'conn-3711573': {
      name: 'Insert injection molding - connectors',
      description: 'Connectors are used to achieve quick connection and disconnection of circuits, ensuring stable and reliable transmission of electrical signals/power.',
      features: [
        'Enables quick connection and disconnection of circuits, ensuring stable and reliable transmission of electrical signals/power.'
      ]
    },
    'conn-38303464': {
      name: 'Insert injection molding - connectors',
      description: 'Connectors are used to achieve quick connection and disconnection of circuits, ensuring stable and reliable transmission of electrical signals/power.',
      features: [
        'Enables quick connection and disconnection of circuits, ensuring stable and reliable transmission of electrical signals/power.'
      ]
    },
    'bracket-3711603': {
      name: 'Injection molding - wire harness bracket',
      description: 'The wire harness bracket is used to organize and secure scattered wire harnesses to designated positions on the vehicle body or chassis. It prevents shaking, pulling, and movement during driving, avoiding loose connections.',
      features: [
        'Fixing and limiting functions.',
        'Wire harness anti-wear function.',
        'Plans the harness routing for standardized wiring.',
        'Fixed with bolts.'
      ]
    },
    'media-bracket-3711586': {
      name: 'Insert Injection Molding - Automotive Front Bracket',
      description: 'A structural component installed inside the battery pack used to secure and protect high-voltage power harnesses and low-voltage signal harnesses.',
      features: [
        'Ensures safe distance between high-voltage harnesses and other components, preventing leakage or short circuits caused by wear.',
        'Provides cushioning and fixation for harnesses under vehicle vibration conditions, preventing connector loosening.'
      ]
    },
    'lock-cover-3711589': {
      name: 'Injection molding - precision injection molding',
      description: 'The automotive tailgate lock cover is a small precision component integrating multiple functions. It is a removable cover installed on the tailgate interior trim panel, used to conceal the tailgate lock mounting mechanism and provide an emergency manual opening channel.',
      features: [
        'Covers the lock body mounting points, ensuring a neat interior appearance.',
        'Can be disassembled by hand without tools, facilitating mechanical emergency unlocking.',
        'Full snap-fit structure, fixed to the tailgate trim panel using plastic hooks, secure installation with no vibration noise.'
      ]
    },
    'ecu-shell': {
      name: 'Injection molding - electronic controller housing',
      description: 'Customizable, mold opening for various electronic controller and actuator housings, meeting various customization requirements.',
      features: [
        'Supports customization, offering design, simulation, and mold opening services.',
        'Protection level can reach from IP40 to IP69.'
      ]
    },
    'hvac-damper': {
      name: 'Automobile damper actuator',
      description: 'The automotive damper actuator is used to move and control the opening angle of valves within the vehicle\'s air conditioning and ducting system components. This controls the mixing ratio of cold and hot air, regulates the interior temperature, and directs airflow to ensure comfort in different areas of the cabin.',
      features: [
        'LIN automatic addressing.',
        'LIN communication and diagnostic functions.',
        'SVPWM brushless motor control.',
        'Various self-diagnosis and protection functions.'
      ]
    }
  }
};

function getEnCat(catId) {
  return DATA_EN.categories[catId] || {};
}

function getEnSub(subId) {
  return DATA_EN.subcategories[subId] || {};
}

function getEnProd(prodId) {
  return DATA_EN.products[prodId] || {};
}
