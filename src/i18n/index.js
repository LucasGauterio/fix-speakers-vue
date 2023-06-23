import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    privacy: 'Privacy Policy',
    title: 'Fix Speakers',
    play: 'Begin',
    stop: 'Stop',
    howItWorks: 'How it works 🛠',
    explanation: 'So you\'ve dropped your phone in the 🚽 toilet, 🚰 sink or 🏊‍ pool? When water gets into your phone\'s speaker enclosure the sound becomes muffled. Leaving any type of fluid in your speaker can cause serious damage when it dries out. It works just like the ⌚️ Apple watch\'s built-in water ejection feature. It plays a specific tone that generates sound waves which causes the water to be ejected.',
    warning: "Warning! Don't wear earphones or point the speakers into your ears while the process is running, it can damage your hearing!",
    turnup: 'Turn up the volume to max setting',
    common: {
      title: 'Common Smartphone Issues Caused by Water Exposure or Humidity',
      issue1Title: 'Water Damage',
      issue1Description: 'One of the most common issues with smartphones exposed to water is water damage. Symptoms of water damage may include a non-responsive touch screen, distorted display, or the device not turning on at all.',
      issue2Title: 'Corrosion',
      issue2Description: 'When a smartphone comes into contact with water or high humidity, it can lead to corrosion on the internal circuitry and connectors. Corrosion can disrupt electrical signals, resulting in various issues such as poor audio quality, malfunctioning buttons, or inconsistent charging.',
      issue3Title: 'Screen Issues',
      issue3Description: 'Water exposure can cause damage to the smartphone\'s display, resulting in several screen-related problems. These may include water spots or stains on the screen, discoloration, or a flickering display. In severe cases, the screen may completely stop functioning.',
      issue4Title: 'Battery Problems',
      issue4Description: 'Moisture or humidity can affect the smartphone\'s battery performance. It may cause the battery to drain quickly, prevent it from holding a charge, or even cause the device to shut down unexpectedly. Water damage can also compromise the battery\'s integrity, leading to potential safety hazards.',
      issue5Title: 'Malfunctioning Cameras',
      issue5Description: 'Smartphone cameras are sensitive to water exposure, and moisture can cause significant damage to the lens and image sensors. Common issues related to water damage or humidity include blurry images, foggy or hazy camera output, or the camera app not opening at all.',
      preventionTitle: 'Preventing Smartphone Damage',
      prevention1: 'Avoid using your smartphone in humid environments or during rain.',
      prevention2: 'Keep your device away from water sources, such as sinks, pools, or bathrooms.',
      prevention3: 'Use protective cases that provide water resistance or waterproofing.',
      prevention4: 'If your smartphone does get wet, immediately power it off and remove the battery (if possible). Dry it with a soft cloth and seek professional assistance if necessary.'
    }
  },
  pt: {
    privacy: 'Politica de Privacidade',
    title: 'Consertar alto-falantes',
    play: 'Começar',
    stop: 'Parar',
    howItWorks: 'Como funciona 🛠',
    explanation: 'Então você deixou seu telefone cair no 🚽 vaso sanitário, 🚰 pia ou 🏊‍ piscina? Quando a água entra na caixa de som do seu telefone, o som fica abafado. Deixar qualquer tipo de líquido na caixa de som pode causar danos graves quando secar. Funciona exatamente como o recurso de ejeção de água embutido no ⌚️ Apple Watch. Ele reproduz um tom específico que gera ondas sonoras que fazem a água ser ejetada.',
    warning: 'Aviso! Não use fones de ouvido ou aponte os alto-falantes para os ouvidos enquanto o processo estiver em execução, isso pode prejudicar sua audição!',
    turnup: 'Aumente o volume para a configuração máxima',
    common: {
      title: 'Problemas Comuns em Smartphones Causados por Exposição à Água ou Umidade',
      issue1Title: 'Danos causados pela água',
      issue1Description: 'Um dos problemas mais comuns em smartphones expostos à água é o dano causado pela água. Sintomas de danos causados pela água podem incluir uma tela sensível ao toque não responsiva, display distorcido ou o dispositivo não ligar de forma alguma.',
      issue2Title: 'Corrosão',
      issue2Description: 'Quando um smartphone entra em contato com água ou alta umidade, pode ocorrer corrosão nos componentes internos e conectores. A corrosão pode interromper os sinais elétricos, resultando em diversos problemas, como qualidade de áudio ruim, botões com mau funcionamento ou carregamento inconsistente.',
      issue3Title: 'Problemas na Tela',
      issue3Description: 'A exposição à água pode causar danos ao display do smartphone, resultando em vários problemas relacionados à tela. Isso pode incluir manchas ou marcas de água na tela, descoloração ou uma tela tremeluzente. Em casos graves, a tela pode parar de funcionar completamente.',
      issue4Title: 'Problemas na Bateria',
      issue4Description: 'Umidade ou um ambiente úmido podem afetar o desempenho da bateria do smartphone. Isso pode fazer com que a bateria descarregue rapidamente, impeça que ela seja carregada adequadamente ou até mesmo faça com que o dispositivo desligue inesperadamente. Danos causados pela água também podem comprometer a integridade da bateria, resultando em riscos de segurança.',
      issue5Title: 'Problemas nas Câmeras',
      issue5Description: 'As câmeras dos smartphones são sensíveis à exposição à água, e a umidade pode causar danos significativos à lente e aos sensores de imagem. Problemas comuns relacionados a danos causados pela água ou umidade incluem imagens borradas, saída de câmera embaçada ou turva, ou o aplicativo de câmera não abrir de forma alguma.',
      preventionTitle: 'Prevenção de Danos ao Smartphone',
      prevention1: 'Evite usar seu smartphone em ambientes úmidos ou durante chuvas.',
      prevention2: 'Mantenha o dispositivo longe de fontes de água, como pias, piscinas ou banheiros.',
      prevention3: 'Utilize capas protetoras que ofereçam resistência à água ou sejam à prova d\'água.',
      prevention4: 'Caso seu smartphone entre em contato com água, desligue-o imediatamente e remova a bateria (se possível). Seque-o com um pano macio e busque assistência profissional, se necessário.'
    }
  },
  zh: {
    privacy: '隐私政策',
    title: '修復揚聲器',
    play: '開始',
    stop: '停止',
    howItWorks: '如何工作 🛠',
    explanation: '所以你把手机掉进了🚽马桶、🚰水槽或🏊‍ 游泳池？当水进入手机的扬声器围栏时，声音会变得模糊。在扬声器中留下任何类型的液体都可能在干燥后造成严重损坏。它的工作原理与⌚️ Apple手表内置的排水功能相同。它播放一种特定的音调，产生声波，从而使水被排出。',
    warning: '警告！ 過程運行時不要戴耳機或將揚聲器對準耳朵，這會損害您的聽力！',
    turnup: '將音量調到最大設置',
    common: {
      title: '水浸或潮湿导致的智能手机常见问题',
      issue1Title: '水浸损害',
      issue1Description: '智能手机接触水是最常见的问题之一，可能导致水浸损害。水分可能渗入设备的内部部件，导致故障或完全失效。水浸损害的症状可能包括触摸屏无响应、显示失真或设备无法启动。',
      issue2Title: '腐蚀',
      issue2Description: '当智能手机接触水或高湿度时，可能导致内部电路和连接器腐蚀。腐蚀可能会干扰电信号，导致各种问题，如音质差、按钮故障或充电不稳定。',
      issue3Title: '屏幕问题',
      issue3Description: '水浸可能会损坏智能手机的显示屏，导致多种与屏幕相关的问题。这些问题可能包括屏幕上的水渍或污渍、颜色失真或闪烁的显示。在严重情况下，屏幕可能完全停止工作。',
      issue4Title: '电池问题',
      issue4Description: '湿度或水分可能会影响智能手机的电池性能。它可能导致电池快速耗电、无法持久充电，甚至使设备意外关机。水浸损害还可能危及电池的完整性，存在潜在的安全隐患。',
      issue5Title: '摄像头故障',
      issue5Description: '智能手机摄像头对水分敏感，湿度可能会对镜头和图像传感器造成严重损坏。与水浸损害或湿度相关的常见问题包括图像模糊、摄像头输出模糊或有雾气，或者摄像头应用程序根本无法打开。',
      preventionTitle: '预防智能手机损坏',
      prevention1: '避免在潮湿环境或下雨时使用智能手机。',
      prevention2: '将设备远离水源，如水槽、游泳池或浴室。',
      prevention3: '使用提供防水或耐水性的保护套。',
      prevention4: '如果您的智能手机被水浸，请立即关闭设备并取出电池（如果可能）。用软布擦干，并在需要时寻求专业帮助。'
    }
  },
  hi: {
    privacy: 'गोपनीयता नीति',
    title: 'स्पीकर ठीक करें',
    play: 'शुरू',
    stop: 'रोकें',
    howItWorks: 'कैसे काम करता है 🛠',
    explanation: 'तो आपने अपना फोन 🚽 शौचालय, 🚰 सिंक या 🏊‍ पूल में गिरा दिया है? जब पानी आपके फोन के स्पीकर एनक्लोजर में जाता है, तो ध्वनि धुंधली हो जाती है। स्पीकर में किसी भी प्रकार के तरल पदार्थ को सुखाने पर गंभीर क्षति हो सकती है। यह ठीक वैसे ही काम करता है जैसे ⌚️ Apple वॉच के बिल्ट-इन वाटर इजेक्शन फीचर। यह एक विशिष्ट टोन बजाता है जो ध्वनि तरंगों को उत्पन्न करता है जो पानी को निकालने के लिए कारण बनती हैं।',
    warning: 'चेतावनी! जब प्रक्रिया चल रही हो तो ईयरफोन न पहनें या स्पीकर को अपने कानों में न लगाएं, यह आपकी सुनने की क्षमता को नुकसान पहुंचा सकता है!',
    turnup: 'वॉल्यूम को अधिकतम सेटिंग में बदलें',
    common: {
      title: 'जलस्पर्श या आर्द्रता के कारण होने वाली सामान्य स्मार्टफोन समस्याएँ',
      issue1Title: 'पानी के द्वारा होने वाले क्षति',
      issue1Description: 'पानी के संपर्क में आने वाले स्मार्टफोन में सबसे सामान्य समस्या पानी के द्वारा होने वाले क्षति है। पानी का क्षति के लक्षण में अप्रतिसाद देने वाला टच स्क्रीन, विकृत डिस्प्ले, या उपकरण संपूर्णता से चालू होना शामिल हो सकता है।',
      issue2Title: 'संक्षारण',
      issue2Description: 'जब स्मार्टफोन को पानी या अधिक आर्द्रता के संपर्क में आता है, तो इससे आंतरिक सर्किट और कनेक्टर पर संक्षारण हो सकता है। संक्षारण की वजह से विद्युत संकेतों में विघटन हो सकता है, जिससे ध्वनि गुणवत्ता में कमी, बटन का खराब हो जाना, या अस्थिर चार्जिंग जैसी कई समस्याएँ हो सकती हैं।',
      issue3Title: 'स्क्रीन समस्याएँ',
      issue3Description: 'पानी का संपर्क या उच्च आर्द्रता स्मार्टफोन की प्रदर्शन स्क्रीन को नुकसान पहुंचा सकता है, जिससे कई स्क्रीन संबंधी समस्याएँ हो सकती हैं। इनमें स्क्रीन पर पानी की धब्बे या दाग, रंग बदलना, या ट्रेमरिंग डिस्प्ले शामिल हो सकते हैं। गंभीर मामलों में, स्क्रीन पूरी तरह से काम करना बंद कर सकती है।',
      issue4Title: 'बैटरी समस्याएँ',
      issue4Description: 'नमी या आर्द्रता स्मार्टफोन की बैटरी प्रदर्शन को प्रभावित कर सकती है। यह बैटरी को तेजी से खत्म कर सकती है, इसे चार्ज नहीं करने सकती या यह यहां तक कि यह उपकरण को अप्रत्याशित रूप से बंद कर सकती है। पानी का क्षति बैटरी की सुरक्षा को भी प्रभावित कर सकती है, जिससे संभावित सुरक्षा संकट हो सकता है।',
      issue5Title: 'कैमरे में समस्याएँ',
      issue5Description: 'स्मार्टफोन कैमरों को पानी के संपर्क के प्रति संवेदनशील हैं, और आर्द्रता संक्षिप्तियों के कारण यहाँ शामिल होने वाली सामान्य समस्याएं शामिल हैं। इनमें धुंधली तस्वीरें, धुंधली या मेघवाला कैमरा आउटपुट, या कैमरा ऐप खुलना ही नहीं शामिल हो सकता हैं।',
      preventionTitle: 'स्मार्टफोन के क्षति से बचाव',
      prevention1: 'गीले माहौल या बारिश के दौरान अपना स्मार्टफोन उपयोग करने से बचें।',
      prevention2: 'अपवाह पदार्थों के स्रोतों से, जैसे कि सिंक, पूल या स्नानघर, अपने उपकरण को दूर रखें।',
      prevention3: 'जल प्रतिरोधक या जलरोधक प्रदान करने वाली सुरक्षा छादर का उपयोग करें।',
      prevention4: 'यदि आपका स्मार्टफोन गीला हो जाता है, तो तुरंत इसे बंद करें और बैटरी निकालें (यदि संभव हो तो)। इसे मुलायम कपड़े से सुखाएं और आवश्यकता हो तो पेशेवर सहायता की तलाश करें।'
    }
  },
  ja: {
    privacy: 'プライバシーポリシー',
    title: 'スピーカーを修理する',
    play: '始める',
    stop: '停止',
    howItWorks: '動作原理 🛠',
    explanation: 'トイレ🚽、シンク🚰、プール🏊‍に落としてしまった？ 水がスマートフォンのスピーカーに入ると、音が鈍くなります。スピーカーに液体を残しておくと、乾燥するときに重大な損傷を引き起こす可能性があります。それは⌚️ Appleウォッチの内蔵された排水機能と同じように機能します。特定の音を再生して、水を排出する音波を生成します。',
    warning: '警告！ プロセスの実行中は、イヤホンを着用したり、スピーカーを耳に向けたりしないでください。聴覚に損傷を与える可能性があります。',
    turnup: '音量を最大設定まで上げます',
    common: {
      title: '水濡れや湿度によるスマートフォンの一般的な問題',
      issue1Title: '水の損傷',
      issue1Description: '水濡れしたスマートフォンの最も一般的な問題の一つは、水の損傷です。水の損傷の症状には、反応しないタッチスクリーン、歪んだディスプレイ、またはデバイスが全く起動しないことがあります。',
      issue2Title: '腐食',
      issue2Description: 'スマートフォンが水または高湿度に触れると、内部の回路やコネクタに腐食が生じる可能性があります。腐食は電気信号を妨げ、音質の低下、ボタンの機能不全、充電の不安定性などのさまざまな問題を引き起こすことがあります。',
      issue3Title: '画面の問題',
      issue3Description: '水濡れはスマートフォンのディスプレイにダメージを与え、さまざまな画面関連の問題を引き起こすことがあります。水滴やシミ、色の変色、画面のちらつきなどが含まれます。重度の場合、画面が完全に機能しなくなることがあります。',
      issue4Title: 'バッテリーの問題',
      issue4Description: '湿度や水分はスマートフォンのバッテリーのパフォーマンスに影響を与える可能性があります。バッテリーの急速な消耗、充電を保持できない、さらにはデバイスが予期せずにシャットダウンすることがあります。水の損傷はバッテリーの耐久性にも影響を与え、潜在的な安全上のリスクを引き起こす可能性があります。',
      issue5Title: 'カメラの問題',
      issue5Description: 'スマートフォンのカメラは水に敏感であり、湿度がレンズやイメージセンサーに大きな損傷を与えることがあります。水濡れや湿度に関連する一般的な問題には、ぼやけた画像、霧やかすみのあるカメラ出力、またはカメラアプリが全く開かないなどがあります。',
      preventionTitle: 'スマートフォンの損傷を防ぐために',
      prevention1: '湿気の多い環境や雨の中でのスマートフォンの使用を避けてください。',
      prevention2: 'シンク、プール、浴室などの水源からデバイスを遠ざけてください。',
      prevention3: '防水や耐水性を提供する保護ケースを使用してください。',
      prevention4: 'スマートフォンが濡れた場合は、すぐに電源を切り、バッテリーを取り外してください（可能な場合）。柔らかい布で乾かし、必要に応じて専門のサポートを求めてください。'
    }
  },
};

let userLanguage = (navigator.language || navigator.userLanguage).substring(0,2);

const i18n = createI18n({
  locale: userLanguage,
  fallbackLocale: 'en',
  messages,
});

export default i18n;
