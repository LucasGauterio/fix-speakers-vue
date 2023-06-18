import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    title: 'Fix Speakers',
    play: 'Begin',
    stop: 'Stop',
    howItWorks: 'How it works 🛠',
    explanation: 'So you\'ve dropped your phone in the 🚽 toilet, 🚰 sink or 🏊‍ pool? When water gets into your phone\'s speaker enclosure the sound becomes muffled. Leaving any type of fluid in your speaker can cause serious damage when it dries out. It works just like the ⌚️ Apple watch\'s built-in water ejection feature. It plays a specific tone that generates sound waves which causes the water to be ejected.',
    warning: "Warning! Don't wear earphones or point the speakers into your ears while the process is running, it can damage your hearing!",
    turnup: 'Turn up the volume to max setting',
  },
  pt: {
    title: 'Consertar alto-falantes',
    play: 'Começar',
    stop: 'Parar',
    howItWorks: 'Como funciona 🛠',
    explanation: 'Então você deixou seu telefone cair no 🚽 vaso sanitário, 🚰 pia ou 🏊‍ piscina? Quando a água entra na caixa de som do seu telefone, o som fica abafado. Deixar qualquer tipo de líquido na caixa de som pode causar danos graves quando secar. Funciona exatamente como o recurso de ejeção de água embutido no ⌚️ Apple Watch. Ele reproduz um tom específico que gera ondas sonoras que fazem a água ser ejetada.',
    warning: 'Aviso! Não use fones de ouvido ou aponte os alto-falantes para os ouvidos enquanto o processo estiver em execução, isso pode prejudicar sua audição!',
    turnup: 'Aumente o volume para a configuração máxima',
  },
  zh: {
    title: '修復揚聲器',
    play: '開始',
    stop: '停止',
    howItWorks: '如何工作 🛠',
    explanation: '所以你把手机掉进了🚽马桶、🚰水槽或🏊‍ 游泳池？当水进入手机的扬声器围栏时，声音会变得模糊。在扬声器中留下任何类型的液体都可能在干燥后造成严重损坏。它的工作原理与⌚️ Apple手表内置的排水功能相同。它播放一种特定的音调，产生声波，从而使水被排出。',
    warning: '警告！ 過程運行時不要戴耳機或將揚聲器對準耳朵，這會損害您的聽力！',
    turnup: '將音量調到最大設置',
  },
  hi: {
    title: 'स्पीकर ठीक करें',
    play: 'शुरू',
    stop: 'रोकें',
    howItWorks: 'कैसे काम करता है 🛠',
    explanation: 'तो आपने अपना फोन 🚽 शौचालय, 🚰 सिंक या 🏊‍ पूल में गिरा दिया है? जब पानी आपके फोन के स्पीकर एनक्लोजर में जाता है, तो ध्वनि धुंधली हो जाती है। स्पीकर में किसी भी प्रकार के तरल पदार्थ को सुखाने पर गंभीर क्षति हो सकती है। यह ठीक वैसे ही काम करता है जैसे ⌚️ Apple वॉच के बिल्ट-इन वाटर इजेक्शन फीचर। यह एक विशिष्ट टोन बजाता है जो ध्वनि तरंगों को उत्पन्न करता है जो पानी को निकालने के लिए कारण बनती हैं।',
    warning: 'चेतावनी! जब प्रक्रिया चल रही हो तो ईयरफोन न पहनें या स्पीकर को अपने कानों में न लगाएं, यह आपकी सुनने की क्षमता को नुकसान पहुंचा सकता है!',
    turnup: 'वॉल्यूम को अधिकतम सेटिंग में बदलें',
  },
  ja: {
    title: 'スピーカーを修理する',
    play: '始める',
    stop: '停止',
    howItWorks: '動作原理 🛠',
    explanation: 'トイレ🚽、シンク🚰、プール🏊‍に落としてしまった？ 水がスマートフォンのスピーカーに入ると、音が鈍くなります。スピーカーに液体を残しておくと、乾燥するときに重大な損傷を引き起こす可能性があります。それは⌚️ Appleウォッチの内蔵された排水機能と同じように機能します。特定の音を再生して、水を排出する音波を生成します。',
    warning: '警告！ プロセスの実行中は、イヤホンを着用したり、スピーカーを耳に向けたりしないでください。聴覚に損傷を与える可能性があります。',
    turnup: '音量を最大設定まで上げます',
  },
};

let userLanguage = (navigator.language || navigator.userLanguage).substring(0,2);

const i18n = createI18n({
  locale: userLanguage,
  fallbackLocale: 'en',
  messages,
});

export default i18n;
