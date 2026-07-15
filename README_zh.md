<a href="https://github.com/imaginevid-ai/Awesome-nano-banana-prompts-and-skills">
  <img src="public/images/nano-banana-prompt-skills-cover.png" alt="Nano Banana Prompt Skills" width="100%" />
</a>

> 有来源依据的 Nano Banana 提示词案例，覆盖生成、编辑与多轮创意工作流。
# Nano Banana 提示词与技能大全

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/imaginevid-ai/Awesome-nano-banana-prompts-and-skills?style=social)](https://github.com/imaginevid-ai/Awesome-nano-banana-prompts-and-skills)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Update README](https://github.com/imaginevid-ai/Awesome-nano-banana-prompts-and-skills/actions/workflows/update-readme.yml/badge.svg)](https://github.com/imaginevid-ai/Awesome-nano-banana-prompts-and-skills/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

> 面向 Google 图像工作流的 Nano Banana 提示词、可复用提示词技能与视觉案例合集

> **署名与移除：** 每条提示词都链接到公开来源和原作者，相关权利仍归各自权利人所有。如需更正或移除内容，请提交 issue。

---

[![English](https://img.shields.io/badge/English-Click%20to%20View-lightgrey)](README.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-Current-brightgreen)](README_zh.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-Click%20to%20View-lightgrey)](README_ja-JP.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-Click%20to%20View-lightgrey)](README_ko-KR.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-Click%20to%20View-lightgrey)](README_es-ES.md) [![Deutsch](https://img.shields.io/badge/Deutsch-Click%20to%20View-lightgrey)](README_de-DE.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-Click%20to%20View-lightgrey)](README_fr-FR.md) [![Italiano](https://img.shields.io/badge/Italiano-Click%20to%20View-lightgrey)](README_it-IT.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-Click%20to%20View-lightgrey)](README_pt-PT.md) [![Türkçe](https://img.shields.io/badge/T%C3%BCrk%C3%A7e-Click%20to%20View-lightgrey)](README_tr-TR.md)
[![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-Click%20to%20View-lightgrey)](README_ar-SA.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-Click%20to%20View-lightgrey)](README_ru-RU.md) [![Nederlands](https://img.shields.io/badge/Nederlands-Click%20to%20View-lightgrey)](README_nl-NL.md) [![Polski](https://img.shields.io/badge/Polski-Click%20to%20View-lightgrey)](README_pl-PL.md)

---

## 查看精选合集

**[浏览 Nano Banana 提示词合集](https://imaginevid.io/zh/nano-banana)**

为什么使用这个合集？

产品操作入口指向 ImagineVid；模型能力依据指向 Google 官方文档。

| 功能 | GitHub README | ImagineVid 合集 |
|---------|--------------|---------------------|
| 视觉布局 | 线性列表 | 精选视觉分区 |
| 搜索 | 仅 Ctrl+F | 结构化分类 |
| 提示词工作流 | - | 可复用提示词技能 |
| 移动端 | 基础 | 所有 README 语言版本均可阅读 |
| 分类 | - | 分类浏览 |


### 按分类浏览

- [**定向编辑与输入控制**](#workflow-directed-editing-input-control) - 通过现有图片、区域、草图、参考图或位置指令，对结果进行定向控制与修改。
- [**商业设计、UI 与海报**](#workflow-commercial-design-ui-posters) - 面向广告、产品营销、界面、海报、文字排版及其他设计资产的生产型提示词。
- [**图表、技术视觉与分镜**](#workflow-diagrams-technical-storyboards) - 强调信息结构与顺序的视觉任务，包括图表、技术图纸、多格序列和分镜。
- [**角色、电影感与视觉风格**](#workflow-characters-cinema-visual-styles) - 以视觉方向和画面语言为核心的角色、肖像、时尚、电影画面与风格探索提示词。
- [**环境、建筑与世界构建**](#workflow-environments-architecture-worldbuilding) - 以环境本身承载创意的建筑、景观、概念艺术和世界构建提示词。
- [**基准测试与模型对比**](#workflow-benchmarks-model-comparisons) - 用于评估提示词遵循、编辑行为、一致性、文字渲染或视觉质量的受控测试与模型对比。

---

## 目录

- [查看精选合集](#查看精选合集)
- [什么是 Nano Banana？](#什么是-nano-banana)
- [统计数据](#统计数据)
- [Community · 精选提示词](#community-featured-prompts)
- [Community · 全部提示词](#community-prompt-cases)
- [如何贡献](#如何贡献)
- [许可证](#许可证)
- [致谢](#致谢)
- [Star 历史](#star-历史)

---

## 什么是 Nano Banana？

**Nano Banana** 是最初的 Gemini 图像模型，官方型号为 Gemini 2.5 Flash Image（`gemini-2.5-flash-image`）。它可接收文字与图片输入、输出文字与图片，适合低延迟的大批量生成和对话式编辑。本仓库只收录有来源依据的提示词，社区案例必须保留原作者、媒体证据和足够的复用上下文。

- **原生多模态输入** - 可在同一次请求中组合文字指令与一张或多张参考图
- **生成与编辑** - 可创建新图、重塑参考图风格，或通过自然语言执行明确的局部修改
- **低延迟工作流** - Google 将其定位于重视速度与效率的大批量创意任务
- **对话式细化** - 无需重写完整需求，即可继续调整构图、主体细节、光线与风格
- **原始型号特征** - Gemini 2.5 Flash Image 生成约 1024 像素级输出，并为生成图片加入 SynthID
- **当前定位** - Google 现将它称为 Nano Banana 系列的先驱型号，并建议新生产任务同时评估更新的系列模型

**调研来源：** [Gemini image generation guide](https://ai.google.dev/gemini-api/docs/image-generation) · [Gemini 2.5 Flash Image model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-image) · [Nano Banana on ImagineVid](https://imaginevid.io/zh/nano-banana)

### 复用提示词变量

部分来源提示词提供 `[BRAND]`、`[OBJECT]` 或 `[NAME]` 等方括号变量。只替换变量值，保留已经验证过的构图、光线和材质结构。

**示例：**
```
将 `[BRAND]` 换成你的品牌，或将 `[OBJECT]` 换成目标物体，其余视觉指令保持不变。
```

变量让有真实来源的提示词能够稳定复用，而不必每次从零重写完整需求。

---

## 统计数据

<div align="center">

| 指标 | 数量 |
|--------|-------|
| 提示词总数 | **27** |
| 精选 | **9** |
| 最后更新 | **2026年7月15日星期三 UTC 09:51:28** |

</div>

---

<a id="community-featured-prompts"></a>

## Community · 精选提示词

> 按可复用结构、视觉清晰度与创意覆盖度精选

<a id="prompt-1"></a>

### No. 1: 瑞士几何浮雕标志

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Variables](https://img.shields.io/badge/Variables-Reusable-purple)

#### 说明

将品牌标志塑造成居中的单色浮雕，并以液态玻璃边缘和克制的瑞士式留白完成画面。

#### 原始提示词（英文）

```
(change [BRAND] and [COLOR])

3D embossed glossy contour render of center-aligned [BRAND] on a flat surface, perfectly centered composition with ample negative space surrounding the object for a premium minimalist aesthetic. Monochromatic [COLOR] palette with soft tonal gradients. The object is defined by a raised, smooth, liquid-like glass bezel or chrome rim, creating a blind emboss effect where the interior matches the background. Matte surface finish with fine film grain or noise texture overlay. Soft diffuse lighting, strong specular highlights on the rounded edges, top-down view.
```

#### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/G7GW1EjWgAAgtWV.jpg" width="100%" alt="瑞士几何浮雕标志 - Image 1"></td>
</tr>
</table>

#### 详情

- **作者:** [AmirMušić](https://x.com/AmirMushich)
- **来源:** [来源](https://x.com/AmirMushich/status/1995542490049290680)
- **发布时间:** 2025年12月1日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-2"></a>

### No. 2: 触感蜡封品牌标志

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Variables](https://img.shields.io/badge/Variables-Reusable-purple)

#### 说明

把提供的标志渲染成带有凸起纹章、自然变形边缘和柔和商品光线的亮面蜡封。

#### 原始提示词（英文）

```
[MATERIAL COLOR] glossy wax seal icon depicting [BRAND] logo, lying flat on a plain white background. The seal is made of thick, deformed plastic or wax with an irregular, squashed shape and a prominent 'drip' or smear extending to the right side. The center features a clear, raised relief impression of the subject. The lighting is soft and even, creating smooth specular highlights on the curved, glossy edges. The shadow cast is soft and minimal.
```

#### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/G70LO0WXQAIlvMY.jpg" width="100%" alt="触感蜡封品牌标志 - Image 1"></td>
</tr>
</table>

#### 详情

- **作者:** [AmirMušić](https://x.com/AmirMushich)
- **来源:** [来源](https://x.com/AmirMushich/status/1998766162033713370)
- **发布时间:** 2025年12月10日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-3"></a>

### No. 3: 社交活动时尚拼贴

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Variables](https://img.shields.io/badge/Variables-Reusable-purple)

#### 说明

用一套完整的美术指导组合时尚摄影、拼贴碎片、字体和受控的视觉混乱。

#### 原始提示词（英文）

```
[BRAND NAME]. Act as a Social Media Art Director and Digital Collage Artist specializing in bold, youth-oriented brand content for Instagram and digital campaigns.
PHASE 1: CONCEPTUAL FRAMEWORK
Create a dynamic digital collage that merges fashion photography with graphic design chaos. This is controlled rebellion – a composition that feels spontaneous and energetic while maintaining brand coherence. The aesthetic is anti-polished: torn edges, layered textures, hand-drawn elements, and bold color blocking that screams confidence and movement.
PHASE 2: MODEL & PHOTOGRAPHY
- Subject: One model (diverse casting, age 18-30) in a dynamic, confident pose
- Pose Energy: 80% attitude, 20% natural – sitting, jumping, mid-motion, or power stance (avoid static standing)
- Outfit: Street style/athleisure that aligns with [BRAND NAME] aesthetic – casual but styled
- Hero Product: Feature 1 signature [BRAND NAME] product prominently (sneakers, bag, apparel) – this is the visual anchor
- Photography Style: Editorial fashion cutout – model extracted from background with clean edges
- Camera Angle: Slight low angle to empower subject (hero perspective)
- Crop: Full body or 3/4 body showing hero product clearly
- Background Removal: Model cut out cleanly for layering over collage elements
PHASE 3: COLOR BLOCKING FOUNDATION
- Primary Color Blob: Large organic shape (40-60% of composition) in bold, saturated brand color behind/around model
- Shape Style: Irregular, hand-painted aesthetic – think Photoshop brush strokes or torn paper texture (NOT perfect geometric shapes)
- Color Selection (Autonomous): Choose 1 hero color from [BRAND NAME] palette:
- Texture: Visible brush strokes, grain, or subtle noise (15-25% opacity) – avoid flat digital fills
- Placement: Blob positioned to frame model without obscuring key product details
PHASE 4: GRAPHIC ELEMENTS LAYER
Add 3-5 abstract graphic elements scattered across composition:
- Element Types:
- Color Palette: Use 2-3 accent colors total (main blob color + 1-2 contrasting tones from brand palette)
- Placement: Asymmetric scatter – top-left and bottom-right zones primarily (avoid center crowding)
- Scale: Mix small (5% of canvas) and medium (15% of canvas) elements – nothing overpowering
- Aesthetic: Analog/handmade feel – imperfect circles, rough edges, visible texture
PHASE 5: TYPOGRAPHY INTEGRATION
- Brand Logo: Clean [BRAND NAME] logo placed in upper-left or upper-right quadrant (10-15% of width)
- Slogan/Tagline: If [BRAND NAME] has an iconic slogan, integrate it using:
- Supporting Copy: Optional 1-line descriptor (e.g., "A MOMENT OF YOUR STYLE") in smaller uppercase sans-serif
- Type Treatment: Mix of aligned and slightly rotated text (2-5° angles) for dynamic energy
- Hierarchy: Logo largest → Slogan medium → Copy smallest
PHASE 6: TEXTURE & BACKGROUND
- Base Layer: Off-white or light gray textured background (NOT pure white)
- Texture Options (Autonomous selection):
- Color: RGB 245-250 (near-white with warmth) – maintains brightness while adding depth
- Treatment: Texture should be felt, not seen – enhances tactility without competing with foreground
PHASE 7: COMPOSITION RULES
- Layout: Asymmetric balance – model off-center, graphic elements counter-balance
- Breathing Room: 15-20% negative space (textured background visible) to prevent claustrophobia
- Layering Order: Background texture → Color blob → Graphic elements → Model (cutout) → Typography top layer
- Focal Point: Model + hero product = primary focus (60% visual weight), graphics support (40%)
- Movement: Diagonal lines and angled elements create directional flow (top-left to bottom-right or vice versa)
PHASE 8: BRAND INTELLIGENCE (AUTONOMOUS)
Autonomously adapt composition based on [BRAND NAME] personality:
- Streetwear/Sportswear (Nike, Adidas, Supreme):
- Luxury Streetwear (Balenciaga, Off-White, Gucci):
- Beauty/Lifestyle (Glossier, Fenty, Skims):
- Tech/Modern (Apple, Tesla, Beats):
PHASE 9: SOCIAL MEDIA FOOTER (OPTIONAL)
- Bottom Strip: Clean white or light gray bar at bottom 8-10% of frame
- Content: Social media handles (Instagram, Facebook, Twitter) in small sans-serif
- Layout: Three-column grid with platform icons or text handles
- Aesthetic: Minimal and professional – contrast with chaotic collage above
TECHNICAL SPECS:
- Aspect Ratio: 4:5 (Instagram feed) or 1:1 (square social post)
- Resolution: 2400x3000px minimum (high-quality for zoom and detail)
- Color Mode: sRGB, vibrant saturation (Instagram-optimized)
- File Aesthetic: Digital collage that mimics analog craft (Photoshop + hand-drawn hybrid)
- Model Photography: 85mm lens, f/2.8, shallow depth of field on original shoot (before cutout)
- Style Reference: Nike social campaigns, Spotify wrapped graphics, Gen Z Instagram aesthetics, Hypebeast x streetwear collabs
- Mood: Confident, energetic, youthful, authentic chaos, anti-corporate polish
```

#### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HAupnj7XgAIL_ja.jpg" width="100%" alt="社交活动时尚拼贴 - Image 1"></td>
</tr>
</table>

#### 详情

- **作者:** [AmirMušić](https://x.com/AmirMushich)
- **来源:** [来源](https://x.com/AmirMushich/status/2020895358126002197)
- **发布时间:** 2026年2月9日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-4"></a>

### No. 4: 一体化社交广告模板

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Variables](https://img.shields.io/badge/Variables-Reusable-purple)

#### 说明

通过少量变量替换品牌、标题、视觉系统和行动按钮，快速生成可复用的社交广告。

#### 原始提示词（英文）

```
[BRAND NAME] | [HEADLINE] | [SUB-TEXT] | [CTA]. Act as a Senior Art Director.

PHASE 1: INTEGRATED COMPOSITION & OVERLAP.
- Layout: Seamless fusion of 2D graphics and 3D photography.
- Overlap Logic: The subject and their primary "Product Prop" (e.g., a car, a device) must physically overlap the graphic panel to break the "wall" between design and photo.
- Unity: Geometric shapes from the graphic side must bleed into the photographic sky area.

PHASE 2: BRAND & CATEGORY SIMULATION.
Autonomously analyze the [BRAND NAME] and its industry category:
- INDUSTRY CONTEXT: 
  * If Automotive: Include the vehicle and a person interacting with it.
  * If Tech: Include flagship devices/gadgets.
  * If Fashion/Lifestyle: Focus on editorial poses and premium accessories.
- SHAPE SIMULATION: Match shapes to brand identity (e.g., Sharp/Speed for Auto, Minimalist/Grid for Tech).
- COLOR SIMULATION: Use the brand's primary signature hue for both the graphic pattern and the subject's outfit/accents.

PHASE 3: TYPOGRAPHY & CUSTOM CONTENT.
- Headline: Display "[HEADLINE]" in a bold, modern Sans-Serif font. (If [HEADLINE] is empty, generate a high-energy slogan for [BRAND NAME]).
- Sub-headline: Display "[SUB-TEXT]" below the headline.
- Button: Create a minimalist pill-shaped CTA button with the text: "[CTA]".
- Interaction: Text layers should have 3D depth, sitting partially behind the subject or product prop.

PHASE 4: PHOTOGRAPHY & SUBJECT.
- Perspective: Extreme low-angle (worm’s eye view) looking up.
- Subject: A diverse persona reflecting the brand's audience.
- Environment: Massive, clear blue sky as the backdrop.
- Visual Link: Subject's styling must incorporate the Brand's primary color.

PHASE 5: FINAL VISUAL STYLE.
High-end commercial aesthetic. Crisp, saturated, professional fusion of flat vector art and realistic photography.
```

#### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HB7r12tWMAA1nTv.jpg" width="100%" alt="一体化社交广告模板 - Image 1"></td>
</tr>
</table>

#### 详情

- **作者:** [AmirMušić](https://x.com/AmirMushich)
- **来源:** [来源](https://x.com/AmirMushich/status/2026316195977146728)
- **发布时间:** 2026年2月24日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-17"></a>

### No. 5: 四格工程剖视板

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### 说明

在精确网格中用爆炸结构、透明剖面、尺寸和工程标注比较四款消费设备。

#### 原始提示词（英文）

```
Ultra-detailed technical engineering infographic, clean white background, divided into a precise 2×2 grid by sharp black separator lines. Blueprint-style industrial design visualization featuring photorealistic 3D renders, transparent cutaways, exploded views, dimensional annotations, technical callout boxes, measurement guides, and color-coded engineering arrows (red, blue, green, orange). Professional product design presentation, Apple-style industrial design documentation, high-end technical illustration.

TOP LEFT: Modern smartphone shown in angled perspective with display removed, exposing densely packed internal components. Visible L-shaped battery, advanced logic board, processor chip, camera module, Face ID sensors, Taptic Engine, thermal pathways, ribbon cables, screws, connectors, and cooling architecture. Precise engineering labels and dimension lines surrounding components.

TOP RIGHT: Professional mirrorless camera with large zoom lens. Longitudinal cutaway through lens assembly revealing multiple glass elements, optical groups, aperture mechanism, image sensor, shutter system, electronic components, and viewfinder structure. Additional exploded sub-diagram illustrating aperture blade construction and assembly sequence. Detailed optical engineering annotations.

BOTTOM LEFT: Premium wireless earbud charging case displayed partially transparent and split open. One earbud seated inside, second earbud floating above in exploded-view configuration. Internal lithium-polymer battery, miniature logic board, charging contacts, wiring channels, magnets, and compact electronic architecture clearly visible through transparent shell. Technical callouts and component identification markers.

BOTTOM RIGHT: Modern mechanical keyboard with charcoal-gray keycaps and single red accent key. Horizontal transparent cutaway sections exposing mechanical switches, switch housings, springs, stabilizers, PCB circuitry, LEDs, and internal frame structure. Lower margin includes enlarged switch cross-section diagram and geometric PCB schematic blueprint. Engineering measurements and component annotations throughout.

Highly detailed CAD visualization, industrial design presentation board, precision engineering drawing, exploded assembly diagrams, transparent materials, photorealistic rendering, ultra-sharp focus, clean typography, scientific infographic aesthetics, professional product teardown documentation, white paper style, 8K resolution, museum-quality technical illustration, symmetrical layout, exceptional clarity.
```

#### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HKEHL3YbsAAFhpN.jpg" width="100%" alt="四格工程剖视板 - Image 1"></td>
</tr>
</table>

#### 详情

- **作者:** [⁠ luciaAI](https://x.com/luciaverseai)
- **来源:** [来源](https://x.com/luciaverseai/status/2062938095109255382)
- **发布时间:** 2026年6月5日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-18"></a>

### No. 6: 八格动漫友谊分镜

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### 说明

为失去纸风车的沉默孩子找到友谊，设计一套节奏清晰、标明镜头方向的情感分镜。

#### 原始提示词（英文）

```
STORY

Panel 1

Warm cloudy evening after light rain.

A small neighborhood park glows under golden sunset light.

Children are laughing and playing together.

In the distance, the long-haired girl sits alone on a swing.

The empty swing beside her slowly moves in the wind.

Camera note:
Wide establishing shot.

⸻

Panel 2

Close-up.

The girl watches the other children from afar while quietly spinning her handmade paper windmill.

A faint sad smile appears.

Camera note:
Slow push-in.

⸻

Panel 3

A sudden gust of wind lifts the paper windmill from her hands.

It flies across the park.

The girl stands and runs after it.

Camera note:
Tracking shot.

⸻

Panel 4

The windmill lands near a group of children playing.

The girl hesitates and freezes.

She is too shy to approach them.

From her perspective the group feels intimidating and distant.

Camera note:
Low-angle emotional POV.

⸻

Panel 5

One of the children notices the windmill.

Instead of simply returning it, the group carefully repairs a torn corner and decorates it with colorful drawings and messages.

The girl watches in surprise.

Camera note:
Medium emotional shot.

⸻

Panel 6

The kindest child walks toward her with a warm smile and gently offers the windmill back.

The group invites her to join them.

Camera note:
Soft close-up.

⸻

Panel 7

The girl’s eyes fill with tears.

For the first time she smiles openly.

She runs toward the group while clutching the repaired windmill.

Camera note:
Dynamic running shot with sunset backlight.

⸻

Panel 8

Final emotional wide shot.

The girl and her new friends laugh together beneath glowing sunset clouds.

The once-empty swing gently moves in the background.

The repaired windmill spins in the warm evening breeze.

Mood:
Bittersweet, heartwarming, unforgettable.

Camera note:
Large cinematic ending frame.

FINAL GOAL

Create a breathtaking premium anime film development board that tells a deeply emotional story about loneliness, kindness, and finding friendship.

The artwork should feel like a lost masterpiece from a classic theatrical anime studio, with stunning painted backgrounds, expressive character acting, emotional visual storytelling, and a touching ending that leaves a lasting emotional impact.
```

#### 来源结果

<table>
<tr>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HLLo2ekWEAASktJ.jpg" width="100%" alt="八格动漫友谊分镜 - Image 1"></td>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/amplify_video_thumb/2067971201561989120/img/HGb-fSrVr8UrbrJi.jpg" width="100%" alt="八格动漫友谊分镜 - Image 2"></td>
</tr>
</table>

#### 详情

- **作者:** [H A J R A](https://x.com/codewithhajra)
- **来源:** [来源](https://x.com/codewithhajra/status/2067971258134745321)
- **发布时间:** 2026年6月19日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-21"></a>

### No. 7: 威尼斯超现实巨人旅行照

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### 说明

运用强制透视，让巨型人物俏皮地坐在圣马可广场的地标建筑之间。

#### 原始提示词（英文）

```
Create a surreal giantess travel photography scene featuring a beautiful young woman wearing a white embroidered summer dress, white crew socks, and white sneakers. She is sitting gracefully among the iconic architecture of St. Mark's Square, Venice, Italy, appearing hundreds of feet tall, with one leg crossed over the other and her hands resting behind her for support. She smiles peacefully with her eyes closed, enjoying the warm sunshine and gentle breeze. Below her, crowds of tourists gather, taking photos and looking up in amazement, emphasizing her enormous scale. Capture the famous bell tower and basilica in the background under a bright blue sky with soft clouds. Use realistic forced perspective, natural daylight, cinematic travel photography, ultra-detailed skin and fabric textures, photorealistic architecture, vibrant colors, editorial travel magazine style, 8K, HDR, vertical 9: 16 composition, no text, no logos, no watermarks, no UI elements.
```

#### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HMD5qkpXIAAEnOO.jpg" width="100%" alt="威尼斯超现实巨人旅行照 - Image 1"></td>
</tr>
</table>

#### 详情

- **作者:** [Smiling Khan](https://x.com/AIwithkhan)
- **来源:** [来源](https://x.com/AIwithkhan/status/2071930341552701579)
- **发布时间:** 2026年6月30日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-23"></a>

### No. 8: 参考照片转收藏级手办

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

#### 说明

把上传的人物照片变成写实桌面手办，并呈现建模屏幕、透明底座和插画包装。

#### 原始提示词（英文）

```
Create a 1/7 scale commercialized figurine of the characters in the picture, in a realistic style, in a real environment. The figurine is placed on a computer desk. The figurine has a round transparent acrylic base, with no text on the base. The content on the computer screen is a 3D modeling process of this figurine. Next to the computer screen is a toy packaging box, designed in a style reminiscent of high-quality collectible figures, printed with original artwork. The packaging features two-dimensional flat illustrations.
```

#### 来源结果

<table>
<tr>
<td width="25%" valign="top" align="center"><img src="https://pbs.twimg.com/media/Gzy4V72WwAA7PRR.jpg" width="100%" alt="参考照片转收藏级手办 - Image 1"></td>
<td width="25%" valign="top" align="center"><img src="https://pbs.twimg.com/media/Gzy4d2ka0AAtnQV.jpg" width="100%" alt="参考照片转收藏级手办 - Image 2"></td>
<td width="25%" valign="top" align="center"><img src="https://pbs.twimg.com/media/Gzy4h2qXUAA3FA5.jpg" width="100%" alt="参考照片转收藏级手办 - Image 3"></td>
<td width="25%" valign="top" align="center"><img src="https://pbs.twimg.com/media/Gzy4oMyWwAAmyWW.jpg" width="100%" alt="参考照片转收藏级手办 - Image 4"></td>
</tr>
</table>

#### 详情

- **作者:** [Google Gemini](https://x.com/GeminiApp)
- **来源:** [来源](https://x.com/GeminiApp/status/1962647019090256101)
- **发布时间:** 2025年9月1日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-25"></a>

### No. 9: 俯拍编辑式商品摄影

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Variables](https://img.shields.io/badge/Variables-Reusable-purple)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

#### 说明

用自然阳光、受控留白和可选陪衬元素构建可复用的俯拍商品场景。

#### 原始提示词（英文）

```
A high-end editorial photo of a [IMAGE UPLOADED] placed flat on a [YOUR SURFACE], captured from a direct top-down view. The surface is gently disturbed to suggest recent motion or interaction. The front of the product is fully visible and properly oriented upright. The area around the product is intentionally left open to optionally place [YOUR ELEMENTS] that visually enhance the scene. Natural sunlight from the upper left casts warm, realistic shadows. 3D realism, luxury product photography, shallow depth of field, 1:1 format.
```

#### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/G1x51QZWEAAvZ9-.jpg" width="100%" alt="俯拍编辑式商品摄影 - Image 1"></td>
</tr>
</table>

#### 详情

- **作者:** [Mo](https://x.com/Kerroudjm)
- **来源:** [来源](https://x.com/Kerroudjm/status/1971586126248133068)
- **发布时间:** 2025年9月26日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="community-prompt-cases"></a>

## Community · 全部提示词

> Twitter/X-sourced community prompt cases, 按发布时间和精选顺序排列.

<a id="workflow-directed-editing-input-control"></a>

### 定向编辑与输入控制 (7)

通过现有图片、区域、草图、参考图或位置指令，对结果进行定向控制与修改。

**Community · 精选提示词**

- [参考照片转收藏级手办](#prompt-23)

<a id="prompt-5"></a>

#### No. 1: 修复并上色老照片

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### 说明

修复划痕、破损和褪色，同时保留原照片中的人物、光线与时代氛围。

##### 原始提示词（英文）

```
Fix any scratches or tears, remove fading, and then color it with realistic skin tones, clothing colors, and background colors. Preserve the original lighting and atmosphere, and don't alter people's features.

🔖 Save it as a bookmark and share it to help you relive those beautiful memories.
```

##### 来源结果

<table>
<tr>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HHpJfykbAAAqqzm.jpg" width="100%" alt="修复并上色老照片 - Image 1"></td>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HHpJfyMaUAEx6ei.jpg" width="100%" alt="修复并上色老照片 - Image 2"></td>
</tr>
</table>

##### 详情

- **作者:** [WAH](https://x.com/Waheeb33)
- **来源:** [来源](https://x.com/Waheeb33/status/2052070897813750227)
- **发布时间:** 2026年5月6日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-7"></a>

#### No. 2: 法国致敬浮雕海报

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### 说明

结合侧脸肖像、巴黎地标、法国国旗配色和压印标题，构成雕塑感国家主题海报。

##### 原始提示词（英文）

```
Create a 1:1 ultra-detailed luxury France tribute artwork featuring a completely different elegant woman (not the reference model), shown in dramatic side profile with porcelain skin, long wavy brunette hair flowing softly behind her, bold blue upper lip and red lower lip lipstick inspired by the French flag, long eyelashes, and a calm, confident expression.

The composition blends the woman's face seamlessly with iconic French landmarks including the Eiffel Tower, Arc de Triomphe, Sacré-Cœur Basilica, and classic Parisian architecture. A realistic French tricolor flag waves near the Eiffel Tower, while elegant blue, white, and red paint splashes and ornamental flourishes merge into the composition.

On the left side, large vertical embossed metallic text reading "FRANCE" in bold serif typography with blue, white, and red enamel textures. At the bottom, an ornate French Football Federation (FFF)-inspired crest with gold accents, laurel leaves, and two gold stars integrated into the design.

The entire artwork should feel like a premium 3D sculpted poster with embossed textures, carved details, luxury metallic finishes, intricate relief artwork, crisp shadows, museum-quality craftsmanship, dramatic studio lighting, soft white background, symmetrical composition, vibrant French national colors, photorealistic materials, ultra-high detail, masterpiece quality, 8K, 1:1 aspect ratio. The woman's facial features and hairstyle must be completely different from the reference image while preserving the same premium artistic style and composition.
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HM842XhbgAAIfMr.jpg" width="100%" alt="法国致敬浮雕海报 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [Smiling Khan](https://x.com/AIwithkhan)
- **来源:** [来源](https://x.com/AIwithkhan/status/2075940468970721456)
- **发布时间:** 2026年7月11日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-8"></a>

#### No. 3: 大留白新黑色科幻肖像

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### 说明

借助人脸参考，在广阔阴天背景下拍摄克制的低机位科幻肖像。

##### 原始提示词（英文）

```
Create a low-angle neo-noir sci-fi still, chest-up portrait of a person with a slight upward gaze. Place the subject in the lower-right third, leaving vast negative space with about 80 percent empty sky above. The subject wears a matte shearling-collar heavy coat over a dark knit sweater in a desaturated olive and charcoal palette. The background is a blank, overcast sky with subtle haze. Use soft ambient daylight with negative fill on camera-left. Use image for face reference.
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HNCG4yGbgAA4Txd.jpg" width="100%" alt="大留白新黑色科幻肖像 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [Aijaz](https://x.com/iamsofiaijaz)
- **来源:** [来源](https://x.com/iamsofiaijaz/status/2076307753258410285)
- **发布时间:** 2026年7月12日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-9"></a>

#### No. 4: 硬朗户外生活方式肖像

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### 说明

把参考人物置于自然光户外编辑场景，搭配机能服装和虚化的复古越野车。

##### 原始提示词（英文）

```
Clean cinematic outdoor lifestyle portrait of a young rugged male figure standing in three-quarter angle, head bowed slightly downward and turned to the side, gaze cast down with a calm, quietly contemplative expression. He has voluminous dark curly hair with natural texture and volume, tousled and full. A full well-groomed dark beard and mustache cover his jaw and cheeks. He wears a dark navy-black technical hooded jacket/anorak — structured and outdoorsy with a relaxed hood resting behind the neck, clean minimal design with a small zippered chest pocket detail, both hands tucked casually into the front pockets. Dark olive-green trousers visible at the bottom of the frame, with a hint of a light-colored base layer peeking at the waist. He stands on a sandy, gravelly outdoor ground surface. Directly behind him, a rugged vintage off-road vehicle — a classic boxy 4x4 SUV in dark forest green with a white roof and roof rack — is parked and softly blurred, suggesting an adventure or overlanding lifestyle setting. The background beyond the vehicle shows soft blurred dark green trees and foliage, suggesting a forest or wilderness campsite location. The lighting is bright, natural, and directional — strong outdoor daylight from the upper right catching his hair, forehead, and the jacket shoulder in warm natural highlights, with soft natural shadow across the rest of the face and body. Color palette: dark navy jacket, olive green trousers, warm natural skin tones, muted forest green vehicle and background, warm sandy ground tones. Photography style: outdoor adventure lifestyle editorial, clean natural light, 85mm lens, shallow depth of field with vehicle and background softly blurred, photorealistic, 8K.
Use the provided face reference image for all facial details — bone structure, eyes, brow, nose, jawline, beard, and skin tone should be taken entirely from the reference photo. Apply only the downward contemplative gaze and bright natural outdoor lighting on top of the reference face.
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HNChcwZacAAmyXi.jpg" width="100%" alt="硬朗户外生活方式肖像 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [Ahmad Faraz](https://x.com/iamahmedfaraz66)
- **来源:** [来源](https://x.com/iamahmedfaraz66/status/2076336951184249038)
- **发布时间:** 2026年7月12日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-22"></a>

#### No. 5: 涂鸦叠层镜面自拍

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### 说明

把参考人物放进明亮卧室的镜面自拍，再叠加手写文字、趣味图标和发光轮廓。

##### 原始提示词（英文）

```
Using the attached character reference, create an ultra-realistic full-body mirror selfie in a bright, minimalist bedroom with large white wardrobe doors, light wooden flooring, and a neatly made bed. The woman wears a casual oversized red cardigan over a graphic white T-shirt, loose light-wash baggy jeans, red socks, and a trendy crossbody bag. She holds her smartphone in front of her face while posing confidently with one hand in her pocket.

Decorate the mirror with playful hand-drawn doodles and handwritten notes in a scrapbook style. Include a glowing white outline tracing around her body, a small golden crown above her head, smiling sun doodle, stars, hearts, sparkles, flowers, arrows, clouds, and a cute sleeping cat illustration resting on the bed. Add colorful handwritten captions such as "Good vibes ❤️", "Today is a good day", "Main character energy", "Oops... too cool today", "Messy hair, don't care", and "Supervisor of fits" in a casual marker handwriting style with black text, red hearts, yellow highlights, and blue accent strokes.

Create a cheerful Gen Z aesthetic with bright natural lighting, soft shadows, clean interior design, vibrant doodle elements, lifestyle influencer vibe, cozy bedroom atmosphere, playful visual storytelling, ultra-realistic photography mixed with hand-drawn illustrations, Instagram/TikTok aesthetic, highly detailed, 8K, magazine-quality composition.
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HMeKH7ibMAAmCHU.jpg" width="100%" alt="涂鸦叠层镜面自拍 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [Smiling Khan](https://x.com/AIwithkhan)
- **来源:** [来源](https://x.com/AIwithkhan/status/2073778025649541492)
- **发布时间:** 2026年7月5日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-24"></a>

#### No. 6: 物体分解成乐高积木

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Variables](https://img.shields.io/badge/Variables-Reusable-purple)

##### 说明

定格日常物体向漂浮乐高积木转化的中间状态，同时保留原有颜色和纹理。

##### 原始提示词（英文）

```
Minimalist food photograph, [1080x1080] – a single [OBJECT] rests on a light, matte surface and is captured mid-transformation into a lego bricks 3D form: one half remains intact while the other organically fragments into large, floating lego bricks that drift outward, each brick revealing the object’s texture, ingredients, and colors. Studio lighting with soft, realistic shadows, shallow depth of field, tasteful perspective and composition, hyperrealistic detail, stylish geometric abstraction, high resolution, cinematic close-up
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/G1OQSQTW0AcNWdd.jpg" width="100%" alt="物体分解成乐高积木 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [AmirMušić](https://x.com/AmirMushich)
- **来源:** [来源](https://x.com/AmirMushich/status/1969076111628734881)
- **发布时间:** 2025年9月19日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="workflow-commercial-design-ui-posters"></a>

### 商业设计、UI 与海报 (7)

面向广告、产品营销、界面、海报、文字排版及其他设计资产的生产型提示词。

**Community · 精选提示词**

- [瑞士几何浮雕标志](#prompt-1)
- [触感蜡封品牌标志](#prompt-2)
- [社交活动时尚拼贴](#prompt-3)
- [一体化社交广告模板](#prompt-4)
- [俯拍编辑式商品摄影](#prompt-25)

<a id="prompt-10"></a>

#### No. 7: 高级时尚网球广告

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

用超大球拍、反光棚拍地面和巨型背景文字制作极简运动时尚画面。

##### 原始提示词（英文）

```
A clean high-fashion sports editorial featuring a confident female tennis athlete in an all-white luxury tennis outfit posing with an oversized tennis racket that towers above her like a modern art sculpture. She rests one foot casually on the racket while striking a powerful fashion pose against a seamless white studio backdrop. Behind her, giant bold black typography reading "FOCUS" spans the entire background, creating a striking graphic composition. Glossy reflective floor with scattered tennis balls, minimalist luxury aesthetic, cinematic softbox lighting, ultra-sharp details, premium athletic campaign, Vogue-style editorial photography, balanced composition, high contrast, photorealistic, 8K, 1:1 aspect ratio.
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HNG5K0gaEAAPTuo.jpg" width="100%" alt="高级时尚网球广告 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [Smiling Khan](https://x.com/AIwithkhan)
- **来源:** [来源](https://x.com/AIwithkhan/status/2076644507245048242)
- **发布时间:** 2026年7月13日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-26"></a>

#### No. 8: 纯白空间中的暗铬标志

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

把品牌标志渲染成厚重抛光金属物体，加入细微划痕、边缘光晕、浅景深和胶片颗粒。

##### 原始提示词（英文）

```
BRAND NAME], the official trademark logo rendered strictly as a solid 3D object, maintaining the exact original vector shape and proportions without any artistic reinterpretation or distortion. The logo is crafted from dark, highly polished chrome metal with subtle surface micro-scratches and imperfections that break the mirror finish. The object is perfectly centered in a vast, infinite pure white void with no visible background elements or studio equipment. The lighting creates a soft, cinematic bloom (halo effect) along the metallic edges. 50mm lens aesthetic with a shallow depth of field gently blurring the furthest points of the object. A pronounced, visible film grain overlay is applied to the entire image.
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/G8OagDzXAAEjhzO.jpg" width="100%" alt="纯白空间中的暗铬标志 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [AmirMušić](https://x.com/AmirMushich)
- **来源:** [来源](https://x.com/AmirMushich/status/2000614012422136108)
- **发布时间:** 2025年12月15日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="workflow-diagrams-technical-storyboards"></a>

### 图表、技术视觉与分镜 (7)

强调信息结构与顺序的视觉任务，包括图表、技术图纸、多格序列和分镜。

**Community · 精选提示词**

- [四格工程剖视板](#prompt-17)
- [八格动漫友谊分镜](#prompt-18)

<a id="prompt-11"></a>

#### No. 9: 翻页式科幻故事立体书

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

把四个科幻主题组织成 2×2 百科版面，结合玩具立体场景和设定稿细节。

##### 原始提示词（英文）

```
2x2 grid, 16:9, do this for 4 famous scifi movies: {INPUT: $ SUBJECT

A = {
  open storybook diorama,
  cute 3D character world,
  warm clay/vinyl miniature materials,
  labeled origin panels,
  model-sheet side views,
  accessory callouts,
  collectible character design
}

B = {
  dense illustrated encyclopedia,
  tiny worldbuilding details,
  micro-architecture,
  miniature people / animals / objects,
  hand-painted storybook charm,
  inspectable hidden scenes
}

C = {
  designer toy proportions,
  rounded expressive faces,
  cozy fantasy-adventure mood,
  tactile handcrafted props,
  organized page layout
}

SUBJECT_CORE = stylize($ SUBJECT)
where:
- preserve the main identity of $ SUBJECT
- convert it into a charming collectible character, object, creature, building, or scene
- simplify proportions into cute readable forms
- make it feel like the hero of a storybook universe

BOOK_WORLD = infer_world($ SUBJECT)
where:
- create an open book or field-guide spread
- left page: title, origin, values, symbols, short quote, icons, tiny lore text
- center: dimensional pop-up diorama of the subject’s world
- right page: model sheet, expressions, accessories, palette, material swatches
- fill the world with small props, creatures, signs, tools, plants, and narrative fragments inferred from $ SUBJECT

MATERIAL_FUSION:
- character and props rendered as soft matte clay / vinyl / miniature sculpture
- pages rendered as warm aged paper with printed labels and tiny diagrams
- small details rendered with storybook illustration charm
- environmental pieces built as handcrafted diorama objects

COLOR_RULES:
- warm parchment base
- cozy saturated accents
- teal, ochre, coral, forest green, cream, clay brown, soft blue
- avoid harsh neon or photorealistic material

OUTPUT:
A premium open-book character encyclopedia diorama for $ SUBJECT, combining toy design, storybook lore, miniature worldbuilding, and model-sheet clarity.}
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HM022LJXwAABIO2.jpg" width="100%" alt="翻页式科幻故事立体书 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [Gadgetify](https://x.com/Gdgtify)
- **来源:** [来源](https://x.com/Gdgtify/status/2076749503290351717)
- **发布时间:** 2026年7月13日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-12"></a>

#### No. 10: 硬汉角色三视图

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

用正面、侧面和背面视图制作紧凑且具有电影感的硬汉角色设定表。

##### 原始提示词（英文）

```
Character reference sheet- rugged Indian man, intense expression, wavy hair, thick beard, maroon striped shirt, black jeans — front view, profile view, back view, cinematic realism.
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HCpAukXbwAAfxDK.jpg" width="100%" alt="硬汉角色三视图 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [Gowtham](https://x.com/GowthamCinemas)
- **来源:** [来源](https://x.com/GowthamCinemas/status/2029505882984501485)
- **发布时间:** 2026年3月5日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-14"></a>

#### No. 11: 豪华邮轮技术信息图

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

通过甲板剖面、参数、舱内亮点和性能仪表展示一艘虚构豪华邮轮。

##### 原始提示词（英文）

```
An ultra-detailed, vertical infographic poster for a fictional luxury cruise ship named "Titan of the Seas." The central focus is a massive, multi-deck ship rendered in a sophisticated deep red and gold color scheme. The layout features various data visualization elements, including technical specification tables, deck plan cutaways, interior highlight photos, and performance gauges. The aesthetic is clean and editorial, utilizing a soft cream background with professional typography to create a high-luxury informational moodboard.
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HH2fQ-KWIAMnfi9.jpg" width="100%" alt="豪华邮轮技术信息图 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [Minahil](https://x.com/Minahil42298354)
- **来源:** [来源](https://x.com/Minahil42298354/status/2052972122432016547)
- **发布时间:** 2026年5月9日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-15"></a>

#### No. 12: 文化标注旅行地图

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

以微缩地标、地方美食、野生动物、统计数据和双语标注绘制信息丰富的国家地图。

##### 原始提示词（英文）

```
Two vertical, highly detailed, illustrated travel infographic maps showcasing Japan and Russia. Each poster features a stylized, colorful 3D-rendered country map surrounded by deep blue seas, populated with miniature cultural landmarks, regional food items, and local wildlife connected to specific city labels. The top of each poster displays a bold, artistic title banner with the country's name, localized slogans, and cultural border motifs like cherry blossoms or traditional patterns. The bottom sections include key demographic statistics alongside a row of circular vignette photos highlighting local architecture, cuisine, and scenery, all tied together by a descriptive quote translated into both the native language and English.
```

##### 来源结果

<table>
<tr>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HIrFCDWXsAAl99J.jpg" width="100%" alt="文化标注旅行地图 - Image 1"></td>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HIrFCAjW0AIZGnN.jpg" width="100%" alt="文化标注旅行地图 - Image 2"></td>
</tr>
</table>

##### 详情

- **作者:** [Minahil](https://x.com/Minahil42298354)
- **来源:** [来源](https://x.com/Minahil42298354/status/2056672835125284972)
- **发布时间:** 2026年5月19日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-16"></a>

#### No. 13: 机能外套技术规格表

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

用多角度服装图、材质特写、模块化配件和技术参数完成男装设计规格页。

##### 原始提示词（英文）

```
An AMZ Collection fashion design spec sheet and product layout presented as a tall, vertical infographic for men's technical outerwear. On the left side, a full-body shot features a 32-year-old male model with a short beard and a faded haircut, wearing a rugged, multi-pocketed utility jacket and matching cargo pants in deep olive green and slate grey with bright orange accents. The top of the sheet prominently displays the title "AMZLECTION - URBAN FRONTIER SERIES" and "AERO SHELL PARKA SYSTEM" in a bold, clean sans-serif typeface, accompanied by a bio detailing his occupation as a systems engineer and urban explorer. The right side features a technical "Articulation & Layer Study" breakdown showing multiple back and front silhouette angles detailing the zip-in system, articulated sleeves, and hood stowage. The center section provides macro close-up macro shots highlighting the technical textures, including ripstop tech fabric, a seal-zip closure, and a grip-liner sleeve cuff. Below, a "Modular Styling" column showcases alternative ways to style the garment, such as a full protection system or a light urban shell. The bottom of the layout features grid sections labeled "Modular Add-Ons" displaying accessories like a utility belt, touchscreen-compatible tech gloves, an EDC multi-tool, and a headlamp. Adjacent to this is an "Urban Palette & Mats" swatch color bar showing slate grey, olive green, night black, blaze orange, and technical ivory, followed by a comprehensive "Technical Specifications" block outlining the fabric, insulation, closures, pockets, and features of the high-performance gear.
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HJUQCtgWcAQ8xE1.jpg" width="100%" alt="机能外套技术规格表 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [Minahil](https://x.com/Minahil42298354)
- **来源:** [来源](https://x.com/Minahil42298354/status/2059570046972670409)
- **发布时间:** 2026年5月27日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="workflow-characters-cinema-visual-styles"></a>

### 角色、电影感与视觉风格 (3)

以视觉方向和画面语言为核心的角色、肖像、时尚、电影画面与风格探索提示词。

<a id="prompt-13"></a>

#### No. 14: 写实未来机甲

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

将生物或机器转化为金属质感、电影光影和写实细节兼具的未来机甲。

##### 原始提示词（英文）

```
Theme: Futuristic Mecha Design with Photorealistic Details Color Image: Metallic shades of gunmetal gray and steel, with glowing red or neon accents Color Pallet: Main color: #4B4E50 Sub color: #A3A5A8, #2E2F31, #FF3B30 Accent color: #FF0000, #1E1E1E Camera Settings: Close-up or dynamic low-angle shots, slight depth of field for dramatic focus, high contrast with sharp details Film Stock/Analog Settings: High-resolution digital photography with post-apocalyptic grading Lighting: Dramatic, high contrast lighting with a mix of cool and warm tones, occasional backlighting or side-lighting for a cinematic feel Vibe: Intense, futuristic, action-packed, and slightly dystopian Content Transformation (Optional): Converts organic animals or creatures into hyper-realistic mechanical designs Font Setting(Optional): Main: Orbitron 18px, Sub: Roboto 14px Additional Effects: Motion blur, dust and particle effects for action scenes, subtle reflections on metallic surfaces
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HG-4lhZasAA35Gb.jpg" width="100%" alt="写实未来机甲 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [四季橘/Shikikitsu@AIイラストとTRPG(希望)](https://x.com/getkomusen)
- **来源:** [来源](https://x.com/getkomusen/status/2049059361557746159)
- **发布时间:** 2026年4月28日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-19"></a>

#### No. 15: 1990 年代独立卧室肖像

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

以直闪、拼贴墙、胶片颗粒和怀旧独立风格重现随性的低保真卧室照片。

##### 原始提示词（英文）

```
A candid 1990s-inspired indie bedroom portrait of a young woman sitting cross-legged on a worn vintage patterned couch. She has short messy dark hair, natural makeup, soft skin texture, and a thoughtful, distant expression while looking slightly off-camera. She wears an oversized faded pastel pink Nirvana band T-shirt, blue denim shorts, and retro white tube socks with red and blue stripes.
The room is decorated with a collage-covered wall filled with music magazine clippings, cassette tape advertisements, Polaroid photos, handwritten notes, concert memorabilia, and alternative rock posters, creating a nostalgic DIY bedroom aesthetic. Soft direct flash photography illuminates the scene, producing subtle shadows, realistic skin details, and authentic film-camera imperfections.
Shot on 35mm film with a disposable camera look, featuring visible film grain, dust particles, slight color fading, muted vintage tones, and a purple-tinted photo frame border. Cozy indie-rock atmosphere, early 2000s Tumblr aesthetic, authentic lo-fi documentary style, casual home environment, highly detailed, realistic candid photography, nostalgic youth culture mood, vertical composition, editorial lifestyle portrait.
Keywords: retro bedroom, indie aesthetic, grunge fashion, Nirvana shirt, cassette culture, film photography, disposable camera flash, nostalgic youth, vintage magazines, alternative music scene, lo-fi portrait, authentic candid moment, 35mm grain, cozy vintage interior.
```

##### 来源结果

<table>
<tr>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HLV3_jxboAAadnf.jpg" width="100%" alt="1990 年代独立卧室肖像 - Image 1"></td>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HLV3_pxbkAA_BSc.jpg" width="100%" alt="1990 年代独立卧室肖像 - Image 2"></td>
</tr>
</table>

##### 详情

- **作者:** [Jahan Zaib](https://x.com/jzaib4269)
- **来源:** [来源](https://x.com/jzaib4269/status/2068691563522458015)
- **发布时间:** 2026年6月21日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="prompt-27"></a>

#### No. 16: Notion 风格黑白头像

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Variables](https://img.shields.io/badge/Variables-Reusable-purple)

##### 说明

使用自信的等粗线条和选择性黑色填充，创作有个性而非通用图标感的黑白矢量肖像。

##### 原始提示词（英文）

```
A minimalist, black-and-white flat vector illustration portrait of [NAME], rendered in the expressive "Notion avatar" art style.
LINE WORK & VIBE:
Style: Use THICK, UNIFORM black outlines (monoline weight). The lines should feel organic, smooth, and confident, not rigidly geometric or robotic like generic icons.
Vibe: The character should have a distinct personality and a relaxed, cool, or friendly expression. Focus on stylized features, unique hairstyles, and defining accessories to convey character.
SELECTIVE BLACK FILLS (CRITICAL):
Unlike pure outline icons, utilize Solid Black Fills selectively and strategically.
Where to Fill: Use solid black for prominent hair masses, beards, eyebrows, sunglasses, or dark clothing elements.
Where to Keep White: The skin, main face area, and lighter elements must remain pure flat white inside the thick outlines.
COMPOSITION & TECHNICAL:
No shading, no gray tones, no gradients. Only pure Black and pure White.
Clean bust or headshot composition centered on a white background.
High contrast, clean 2D vector graphics.
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/G_SnZVIWkAAoaF9.jpg" width="100%" alt="Notion 风格黑白头像 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [AmirMušić](https://x.com/AmirMushich)
- **来源:** [来源](https://x.com/AmirMushich/status/2014418990018261493)
- **发布时间:** 2026年1月22日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="workflow-environments-architecture-worldbuilding"></a>

### 环境、建筑与世界构建 (2)

以环境本身承载创意的建筑、景观、概念艺术和世界构建提示词。

**Community · 精选提示词**

- [威尼斯超现实巨人旅行照](#prompt-21)

<a id="prompt-20"></a>

#### No. 17: 金色时刻山间草甸

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

用蜿蜒小径、野花草甸、孤树、远处动物和发光山脉构建层次清楚的风景。

##### 原始提示词（英文）

```
"subject": "A serene landscape transformation of a mountain scene",
    "setting": "A scenic meadow at golden hour with a dirt walking path leading toward a majestic mountain range",
    "visual_elements": {
      "foreground": [
        "A winding, narrow dirt path leading into the distance",
        "Lush tall grass and vibrant wildflowers including purple lupines and red poppies",
        "Scattered natural rocks and stones along the path edges"
      ],
      "midground": [
        "A prominent, old gnarled tree with bare, twisted branches standing alone in the field",
        "Gentle, rolling meadow slopes",
        "Small wild animals, likely deer, grazing in the distance"
      ],
      "background": [
        "Towering, jagged mountain peaks illuminated by the warm, amber glow of the setting sun",
        "Dense forest covering the lower slopes of the mountains"
      ],
      "atmosphere": {
        "lighting": "Warm, dramatic golden hour sunset, soft side-lighting, long shadows",
        "sky": "Painterly clouds with hues of orange, gold, and soft violet",
        "mood": "Tranquil, magical, ethereal, peaceful"
      }
    },
    "technical_specifications": {
      "resolution": "4k",
      "style": "Photorealistic, cinematic, high detail, sharp focus",
      "aspect_ratio": "9:16"
    }
  }
}
```

##### 来源结果

<table>
<tr>
<td width="100%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HLvkD0RbgAAWXzv.jpg" width="100%" alt="金色时刻山间草甸 - Image 1"></td>
</tr>
</table>

##### 详情

- **作者:** [NUSRAT](https://x.com/nxnusratul)
- **来源:** [来源](https://x.com/nxnusratul/status/2070499219476230359)
- **发布时间:** 2026年6月26日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

<a id="workflow-benchmarks-model-comparisons"></a>

### 基准测试与模型对比 (1)

用于评估提示词遵循、编辑行为、一致性、文字渲染或视觉质量的受控测试与模型对比。

<a id="prompt-6"></a>

#### No. 18: Gemini 2.5 与 3.1 编辑肖像基准

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 说明

使用同一份肖像简报对比 Gemini 2.5 Flash Image 与 Gemini 3.1 Flash Image 的视觉表现。

##### 原始提示词（英文）

```
Create a photorealistic editorial portrait of one 20-year-old Japanese or Korean female portrait subject with small teardrop gemstone earring detail, delicate understated sparkle, natural basic body, about 160-165 cm visual height, 83-62-88 body proportion anchor, balanced torso-to-leg ratio around 4:6, low-contrast waist curve, modest bust and hips, smooth natural silhouette, young beautiful Korean idol face, refined small face, clear bright eyes, polished youthful beauty, photogenic K-pop portrait balance, straight medium-to-long hair with a sleek wet texture, clean straight lengths, separated damp strands, minimal wave, natural black hair, soft realistic shine, clean dark depth, none, looking directly at the camera, direct eye contact, innocent clear eyes, delicate soft expression, pure transparent mood. show the selected styling only through collar edge, neckline fabric, partial shoulder line, small accessory details near the face, eyewear, and earrings; keep torso clothing, lower-body garments, legwear, and shoes off-frame rather than widening the crop. render selected historic library window corner only as soft background color, environmental light, atmosphere, and faint spatial shapes behind the face; do not widen the frame just to reveal the full room or complete environment, indoor fluorescent everyday environment, cool-white overhead room light, practical daily interior brightness, plain lived-in space, local warm practical-light pool on the subject, lamp-driven amber highlight zone, warm falloff across face hands and clothing. Inspired by Masumi Ishida, luminous summer film image language. luminous youth-photobook portraiture, gentle summer-color brightness, softly lifted exposure, airy pastel balance, washed film texture, transparent tonal softness. The composition uses tight facial close-up portrait, face dominant in frame, balanced proportions, clean frontal readability, shoulder-level camera position, level lens axis near the shoulder line, stable upper-body portrait viewpoint, camera positioned directly in front of the subject, 0-degree front view, frontal torso orientation, shot on 20mm ultra-wide-angle lens, very wide field of view, strong perspective expansion, close foreground enlargement, visible edge stretching, deep subject-to-background spatial inclusion, peripheral edge blur, center sharpness with soft frame edges, field curvature softness, reduced corner resolution, lens falloff away from the image center. warm digital portrait rendering, flattering skin-tone response, soft highlight roll-off, smooth color transitions, gentle contrast curve, polished color, natural photographic detail, coherent fabric construction, clear facial readability, realistic spatial depth, do not add visible text unless explicitly requested.
```

##### 来源结果

<table>
<tr>
<td width="25%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HK571nBakAAxshH.jpg" width="100%" alt="Gemini 2.5 与 3.1 编辑肖像基准 - Image 1"></td>
<td width="25%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HK571nkbkAAJ7Wu.jpg" width="100%" alt="Gemini 2.5 与 3.1 编辑肖像基准 - Image 2"></td>
<td width="25%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HK5792CaEAAs9YT.jpg" width="100%" alt="Gemini 2.5 与 3.1 编辑肖像基准 - Image 3"></td>
<td width="25%" valign="top" align="center"><img src="https://pbs.twimg.com/media/HK58Db6a4AAws5c.jpg" width="100%" alt="Gemini 2.5 与 3.1 编辑肖像基准 - Image 4"></td>
</tr>
</table>

##### 详情

- **作者:** [Nailai7981](https://x.com/VIBEQUIRKLABS)
- **来源:** [来源](https://x.com/VIBEQUIRKLABS/status/2066727367410876908)
- **发布时间:** 2026年6月16日
- **语言:** en

**[使用这个提示词 · ImagineVid](https://imaginevid.io/zh/nano-banana)**

---

## 如何贡献

欢迎通过 GitHub Issues 提交高质量提示词。

### GitHub Issue

1. [**提交新提示词**](https://github.com/imaginevid-ai/Awesome-nano-banana-prompts-and-skills/issues/new?template=submit-prompt.yml)
2. 填写提示词详情和图片信息
3. 提交后等待维护者审核
4. 审核通过后可同步到本地仓库数据
5. README 生成流程运行后会展示你的提示词

**注意：** 我们使用结构化格式维护提交内容，保证 README 展示一致。

详见 [CONTRIBUTING.md](docs/CONTRIBUTING.md)。

---

## 许可证

基于 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可发布。

---

## 致谢

<details>
<summary>查看并感谢社区作者 (16)</summary>

[⁠ luciaAI](https://x.com/luciaverseai) · [Ahmad Faraz](https://x.com/iamahmedfaraz66) · [Aijaz](https://x.com/iamsofiaijaz) · [AmirMušić](https://x.com/AmirMushich) · [Gadgetify](https://x.com/Gdgtify) · [Google Gemini](https://x.com/GeminiApp) · [Gowtham](https://x.com/GowthamCinemas) · [H A J R A](https://x.com/codewithhajra)<br>
[Jahan Zaib](https://x.com/jzaib4269) · [Minahil](https://x.com/Minahil42298354) · [Mo](https://x.com/Kerroudjm) · [Nailai7981](https://x.com/VIBEQUIRKLABS) · [NUSRAT](https://x.com/nxnusratul) · [Smiling Khan](https://x.com/AIwithkhan) · [WAH](https://x.com/Waheeb33) · [四季橘/Shikikitsu@AIイラストとTRPG(希望)](https://x.com/getkomusen)

</details>

---

## Star 历史

[![GitHub stars](https://img.shields.io/github/stars/imaginevid-ai/Awesome-nano-banana-prompts-and-skills?style=for-the-badge&logo=github&label=GitHub%20Stars)](https://github.com/imaginevid-ai/Awesome-nano-banana-prompts-and-skills/stargazers)

**[Star 历史](https://star-history.com/#imaginevid-ai/Awesome-nano-banana-prompts-and-skills&Date)**

---

<div align="center">

**[查看精选合集](https://imaginevid.io/zh/nano-banana)** •
**[提交提示词](https://github.com/imaginevid-ai/Awesome-nano-banana-prompts-and-skills/issues/new?template=submit-prompt.yml)** •
**[为仓库点 Star](https://github.com/imaginevid-ai/Awesome-nano-banana-prompts-and-skills)**

<sub>本 README 自动生成。最后更新： 2026-07-15T09:51:28.322Z</sub>

</div>
