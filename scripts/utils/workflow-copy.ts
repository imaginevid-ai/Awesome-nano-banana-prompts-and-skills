/**
 * [INPUT]: 依赖 Nano Banana 提示词分类研究形成的六类稳定工作流及 14 语人工译文
 * [OUTPUT]: 对外提供按分类 slug 与 locale 查询工作流说明的 workflowDescription 函数
 * [POS]: scripts/utils 的分类文案边界，避免核心 Markdown 渲染器膨胀并杜绝英文说明回退
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
const DESCRIPTIONS: Record<string, Record<string, string>> = {
  en: {
    "directed-editing-input-control": "Prompts that modify an existing image or use regions, sketches, references, and positional instructions to control the result.",
    "commercial-design-ui-posters": "Production briefs for advertisements, product campaigns, interfaces, posters, typography, and other designed assets.",
    "diagrams-technical-storyboards": "Structured visuals where information order matters: diagrams, technical drawings, multi-panel sequences, and storyboards.",
    "characters-cinema-visual-styles": "Character, portrait, fashion, cinematic-frame, and style-exploration prompts centered on visual direction and image language.",
    "environments-architecture-worldbuilding": "Environment, architecture, landscape, concept-art, and worldbuilding prompts where the place itself carries the idea.",
    "benchmarks-model-comparisons": "Controlled tests and comparisons used to evaluate prompt following, editing behavior, consistency, typography, or visual quality.",
  },
  zh: {
    "directed-editing-input-control": "通过现有图片、区域、草图、参考图或位置指令，对结果进行定向控制与修改。",
    "commercial-design-ui-posters": "面向广告、产品营销、界面、海报、文字排版及其他设计资产的生产型提示词。",
    "diagrams-technical-storyboards": "强调信息结构与顺序的视觉任务，包括图表、技术图纸、多格序列和分镜。",
    "characters-cinema-visual-styles": "以视觉方向和画面语言为核心的角色、肖像、时尚、电影画面与风格探索提示词。",
    "environments-architecture-worldbuilding": "以环境本身承载创意的建筑、景观、概念艺术和世界构建提示词。",
    "benchmarks-model-comparisons": "用于评估提示词遵循、编辑行为、一致性、文字渲染或视觉质量的受控测试与模型对比。",
  },
  "ja-JP": {
    "directed-editing-input-control": "既存画像を修正し、領域、スケッチ、参照画像、位置指定で結果を制御するプロンプト。",
    "commercial-design-ui-posters": "広告、商品キャンペーン、UI、ポスター、タイポグラフィなど、制作物向けの実務的な指示。",
    "diagrams-technical-storyboards": "情報の順序が重要な図解、技術図面、複数コマ、絵コンテなどの構造化ビジュアル。",
    "characters-cinema-visual-styles": "視覚演出と画面言語を軸に、キャラクター、肖像、ファッション、映画的な画面、スタイルを探るプロンプト。",
    "environments-architecture-worldbuilding": "場所そのものが発想を担う、環境、建築、風景、コンセプトアート、世界観構築のプロンプト。",
    "benchmarks-model-comparisons": "指示追従、編集挙動、一貫性、文字表現、画質を評価するための統制されたテストと比較。",
  },
  "ko-KR": {
    "directed-editing-input-control": "기존 이미지를 수정하거나 영역, 스케치, 참조 이미지, 위치 지시로 결과를 제어하는 프롬프트입니다.",
    "commercial-design-ui-posters": "광고, 제품 캠페인, 인터페이스, 포스터, 타이포그래피 등 실제 디자인 제작을 위한 브리프입니다.",
    "diagrams-technical-storyboards": "정보 순서가 중요한 다이어그램, 기술 도면, 다중 패널 시퀀스, 스토리보드용 구조화 프롬프트입니다.",
    "characters-cinema-visual-styles": "시각 연출과 이미지 언어를 중심으로 캐릭터, 인물, 패션, 영화 장면, 스타일을 탐색하는 프롬프트입니다.",
    "environments-architecture-worldbuilding": "장소 자체가 아이디어를 전달하는 환경, 건축, 풍경, 콘셉트 아트, 세계관 구축 프롬프트입니다.",
    "benchmarks-model-comparisons": "지시 이행, 편집 동작, 일관성, 문자 표현, 화질을 평가하는 통제된 테스트와 비교입니다.",
  },
  "es-ES": {
    "directed-editing-input-control": "Prompts para modificar una imagen existente o controlar el resultado mediante regiones, bocetos, referencias e indicaciones de posición.",
    "commercial-design-ui-posters": "Briefs de producción para anuncios, campañas de producto, interfaces, carteles, tipografía y otras piezas de diseño.",
    "diagrams-technical-storyboards": "Visuales estructurados donde importa el orden de la información: diagramas, planos técnicos, secuencias y guiones gráficos.",
    "characters-cinema-visual-styles": "Prompts de personajes, retrato, moda, fotogramas cinematográficos y exploración de estilos centrados en la dirección visual.",
    "environments-architecture-worldbuilding": "Prompts de entornos, arquitectura, paisajes, arte conceptual y creación de mundos donde el lugar transmite la idea.",
    "benchmarks-model-comparisons": "Pruebas controladas para evaluar el seguimiento del prompt, la edición, la consistencia, la tipografía y la calidad visual.",
  },
  "de-DE": {
    "directed-editing-input-control": "Prompts zum Ändern vorhandener Bilder oder zur Steuerung durch Bereiche, Skizzen, Referenzen und Positionsangaben.",
    "commercial-design-ui-posters": "Produktionsbriefings für Anzeigen, Produktkampagnen, Oberflächen, Poster, Typografie und weitere Designmedien.",
    "diagrams-technical-storyboards": "Strukturierte Visualisierungen mit klarer Informationsfolge, etwa Diagramme, technische Zeichnungen und Storyboards.",
    "characters-cinema-visual-styles": "Prompts für Figuren, Porträts, Mode, filmische Einstellungen und Stilforschung mit klarer visueller Regie.",
    "environments-architecture-worldbuilding": "Prompts für Umgebungen, Architektur, Landschaften, Concept Art und Weltenbau, bei denen der Ort die Idee trägt.",
    "benchmarks-model-comparisons": "Kontrollierte Tests für Prompttreue, Bearbeitungsverhalten, Konsistenz, Typografie und visuelle Qualität.",
  },
  "fr-FR": {
    "directed-editing-input-control": "Prompts qui modifient une image existante ou pilotent le résultat à l’aide de zones, croquis, références et positions.",
    "commercial-design-ui-posters": "Briefs de production pour publicités, campagnes produit, interfaces, affiches, typographie et autres supports conçus.",
    "diagrams-technical-storyboards": "Visuels structurés où l’ordre de l’information compte : diagrammes, dessins techniques, séquences et storyboards.",
    "characters-cinema-visual-styles": "Prompts de personnages, portraits, mode, plans cinématographiques et recherche de styles guidés par une direction visuelle.",
    "environments-architecture-worldbuilding": "Prompts d’environnements, architecture, paysages, concept art et création d’univers où le lieu porte l’idée.",
    "benchmarks-model-comparisons": "Tests contrôlés pour évaluer le respect du prompt, l’édition, la cohérence, la typographie et la qualité visuelle.",
  },
  "it-IT": {
    "directed-editing-input-control": "Prompt che modificano un’immagine esistente o controllano il risultato con aree, schizzi, riferimenti e indicazioni di posizione.",
    "commercial-design-ui-posters": "Brief di produzione per pubblicità, campagne prodotto, interfacce, poster, tipografia e altri materiali di design.",
    "diagrams-technical-storyboards": "Visual strutturati in cui conta l’ordine delle informazioni: diagrammi, disegni tecnici, sequenze e storyboard.",
    "characters-cinema-visual-styles": "Prompt per personaggi, ritratti, moda, inquadrature cinematografiche ed esplorazione stilistica con una chiara direzione visiva.",
    "environments-architecture-worldbuilding": "Prompt per ambienti, architettura, paesaggio, concept art e worldbuilding in cui il luogo comunica l’idea.",
    "benchmarks-model-comparisons": "Test controllati per valutare aderenza al prompt, comportamento in modifica, coerenza, tipografia e qualità visiva.",
  },
  "pt-PT": {
    "directed-editing-input-control": "Prompts que alteram uma imagem existente ou controlam o resultado com áreas, esboços, referências e indicações de posição.",
    "commercial-design-ui-posters": "Briefings de produção para anúncios, campanhas de produto, interfaces, cartazes, tipografia e outros materiais de design.",
    "diagrams-technical-storyboards": "Elementos visuais estruturados em que a ordem da informação importa: diagramas, desenhos técnicos, sequências e storyboards.",
    "characters-cinema-visual-styles": "Prompts de personagens, retratos, moda, planos cinematográficos e exploração de estilos orientados pela direção visual.",
    "environments-architecture-worldbuilding": "Prompts de ambientes, arquitetura, paisagens, concept art e construção de mundos em que o lugar transmite a ideia.",
    "benchmarks-model-comparisons": "Testes controlados para avaliar fidelidade ao prompt, edição, consistência, tipografia e qualidade visual.",
  },
  "tr-TR": {
    "directed-editing-input-control": "Mevcut bir görseli değiştiren veya bölgeler, eskizler, referanslar ve konum talimatlarıyla sonucu yöneten promptlar.",
    "commercial-design-ui-posters": "Reklamlar, ürün kampanyaları, arayüzler, posterler, tipografi ve diğer tasarım çıktıları için üretim briefleri.",
    "diagrams-technical-storyboards": "Bilgi sırasının önemli olduğu diyagramlar, teknik çizimler, çok kareli diziler ve storyboardlar.",
    "characters-cinema-visual-styles": "Görsel yönetim ve görüntü diline odaklanan karakter, portre, moda, sinema karesi ve stil keşfi promptları.",
    "environments-architecture-worldbuilding": "Mekânın fikri taşıdığı çevre, mimari, manzara, konsept sanat ve dünya kurma promptları.",
    "benchmarks-model-comparisons": "Prompt takibi, düzenleme davranışı, tutarlılık, tipografi ve görsel kaliteyi ölçen kontrollü testler.",
  },
  "ar-SA": {
    "directed-editing-input-control": "تعليمات لتعديل صورة موجودة أو ضبط النتيجة باستخدام المناطق والرسومات المرجعية وتعليمات الموضع.",
    "commercial-design-ui-posters": "موجزات إنتاج للإعلانات وحملات المنتجات والواجهات والملصقات والطباعة وغيرها من المواد المصممة.",
    "diagrams-technical-storyboards": "مرئيات منظمة يكون فيها ترتيب المعلومات أساسياً، مثل المخططات والرسوم التقنية والتسلسلات والقصص المصورة.",
    "characters-cinema-visual-styles": "تعليمات للشخصيات والصور الشخصية والأزياء واللقطات السينمائية واستكشاف الأساليب وفق توجيه بصري واضح.",
    "environments-architecture-worldbuilding": "تعليمات للبيئات والعمارة والمناظر والفن التصوري وبناء العوالم حيث يحمل المكان الفكرة.",
    "benchmarks-model-comparisons": "اختبارات مضبوطة لتقييم اتباع التعليمات وسلوك التحرير والاتساق والطباعة والجودة البصرية.",
  },
  "ru-RU": {
    "directed-editing-input-control": "Промпты для изменения исходного изображения и управления результатом через области, эскизы, референсы и указания положения.",
    "commercial-design-ui-posters": "Производственные задания для рекламы, продуктовых кампаний, интерфейсов, плакатов, типографики и других дизайн-материалов.",
    "diagrams-technical-storyboards": "Структурированные изображения, где важен порядок информации: диаграммы, технические чертежи, последовательности и раскадровки.",
    "characters-cinema-visual-styles": "Промпты для персонажей, портретов, моды, кинокадров и поиска стиля с акцентом на визуальную режиссуру.",
    "environments-architecture-worldbuilding": "Промпты для окружения, архитектуры, пейзажей, концепт-арта и миростроения, где место передаёт идею.",
    "benchmarks-model-comparisons": "Контролируемые тесты точности инструкций, редактирования, согласованности, типографики и визуального качества.",
  },
  "nl-NL": {
    "directed-editing-input-control": "Prompts die een bestaand beeld aanpassen of het resultaat sturen met gebieden, schetsen, referenties en positieaanwijzingen.",
    "commercial-design-ui-posters": "Productiebriefings voor advertenties, productcampagnes, interfaces, posters, typografie en ander ontwerpmateriaal.",
    "diagrams-technical-storyboards": "Gestructureerde beelden waarbij de informatievolgorde telt, zoals diagrammen, technische tekeningen en storyboards.",
    "characters-cinema-visual-styles": "Prompts voor personages, portretten, mode, filmische kaders en stijlexperimenten met duidelijke visuele regie.",
    "environments-architecture-worldbuilding": "Prompts voor omgevingen, architectuur, landschappen, concept art en wereldbouw waarin de plek het idee draagt.",
    "benchmarks-model-comparisons": "Gecontroleerde tests voor prompttrouw, bewerkingsgedrag, consistentie, typografie en visuele kwaliteit.",
  },
  "pl-PL": {
    "directed-editing-input-control": "Prompty do modyfikowania istniejących obrazów i sterowania wynikiem za pomocą obszarów, szkiców, referencji oraz położenia.",
    "commercial-design-ui-posters": "Briefy produkcyjne dla reklam, kampanii produktowych, interfejsów, plakatów, typografii i innych materiałów projektowych.",
    "diagrams-technical-storyboards": "Uporządkowane wizualizacje, w których liczy się kolejność informacji: diagramy, rysunki techniczne, sekwencje i storyboardy.",
    "characters-cinema-visual-styles": "Prompty do postaci, portretów, mody, kadrów filmowych i poszukiwania stylu opartego na świadomej reżyserii wizualnej.",
    "environments-architecture-worldbuilding": "Prompty do otoczenia, architektury, krajobrazu, concept artu i budowania światów, w których miejsce niesie pomysł.",
    "benchmarks-model-comparisons": "Kontrolowane testy zgodności z promptem, edycji, spójności, typografii i jakości wizualnej.",
  },
};

export function workflowDescription(slug: string, locale: string): string {
  return DESCRIPTIONS[locale]?.[slug] || DESCRIPTIONS.en[slug] || "";
}
