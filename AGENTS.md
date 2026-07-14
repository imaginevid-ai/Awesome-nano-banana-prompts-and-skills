# awesome-nano-banana-prompts-and-skills
ImagineVid 品牌的 Nano Banana prompts and skills 公开资料仓库。

<directory>
data/ - Nano Banana 分类真源、空提示词集与空官方案例集。
docs/ - 规划、贡献指南、本地开发说明与后续数据采集策略。
public/images/ - 仓库 README 与社交预览图，只承载 ImagineVid 自有或明确授权的 Nano Banana 视觉资产。
scripts/ - README 生成、数据导入、Issue 同步与后续 twitterapi.io 采集脚本。
.github/ - Issue 模板、labels 与 GitHub Actions。
</directory>

<config>
AGENTS.md - 仓库级工程约束。
</config>

## 产品定位
- 目标仓库为 `imaginevid-ai/Awesome-nano-banana-prompts-and-skills`。
- 主题严格限定为原始 Nano Banana，即 Google 的 `gemini-2.5-flash-image`；不把 Nano Banana 2、2 Lite 或 Pro 的能力混写进模型介绍。
- 品牌使用 `ImagineVid`，不要出现样板仓库口吻、样板仓库链接或样板仓库图片资产。
- 参考仓库 `the reference repository` 只作为结构样板。
- 不接外部 CMS 或独立图库；本仓库只用本地采集/归一化数据生成 README 并推送远端。

## 开发规范
- README 结构、Issue 提交流程、labels 与定时生成机制可对齐参考仓库。
- 所有展示文案必须从英文真源重写为 Nano Banana / ImagineVid 语境，再翻译到受支持语言。
- README 中涉及 Nano Banana 能力的说明必须以 Google DeepMind 与 Gemini API 官方资料为依据；使用入口指向 ImagineVid 的 Nano Banana 页面。
- 所有封面图、OG 图、示例图必须重新生成或使用授权资产，不直接复用参考仓库图片。
- 数据源字段需要保留原作者、原帖链接、发布时间、语言、分类、媒体 URL 与审核状态。
- 数据结构优先镜像参考仓库的 `Prompt`、`PromptCategory`、`FilterCategory`，不要为假想平台额外扩 schema。
- 后续使用 twitterapi.io 时只读取本地 skill 配置或环境变量，不提交 API key、cookies、proxy、原始大批量抓取缓存。
- twitterapi.io 搜索结果必须先通过 `quality:twitter` 评分、人工来源核验和媒体感知去重；关键词命中不能直接进入公开数据。
- 引用外部提示词仓库时必须核对许可证，并在 README、数据来源字段和原作者链接中保留署名。

## 计划边界
- 样板数据已清空；当前社区数据从 twitterapi.io 候选中人工核验写入，官方案例仍保持空数组。
- 英文模型介绍与提示词元数据是内容真源；14 语 README 界面文案由本地语言包生成，原始英文提示词保持来源可核验。
- 提交前必须重新运行 `pnpm run generate`、`pnpm test`、`pnpm run typecheck`，并确认没有提交 twitterapi.io 原始抓取缓存。
