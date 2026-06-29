<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: 公司内部管理系统
description: 精美克制、实用高效的企业内部管理工具，信息优先、细节制胜
---

# Design System: 公司内部管理系统

## 1. Overview

**Creative North Star: "The Precision Workbench"**

一套为高效办公而生的设计系统。它的气质来自克制：色彩有明确的职能分工，排版清晰而不抢戏，动效只传达状态而不编排表演。用户坐在桌前，面对的是安静、专业的工具——界面的存在感降到最低，任务的存在感提到最高。

这个系统明确拒绝 AI 生成套路：不允许奶油色调背景、不允许 glassmorphism、不允许每段上方的小号大写 eyebrow、不允许渐变文字、不允许等大卡片网格堆叠。它也不追求传统 ERP 的密集表格或营销型 SaaS 的视觉轰炸。

**Key Characteristics:**
- 纯白基底，indigo 主导行动，amber 点亮状态，语义色各司其职
- 衬线标题仅用于页面大标题，正文和 UI 标签全部无衬线
- 动效克制：hover/click/focus/loading 全覆盖，但无入场序列
- 所有可交互元素覆盖 default、hover、focus、active、disabled、loading、error 七态
- 信息层次靠排版间距和字重，不靠装饰

## 2. Colors: The Instrument Palette

全色板策略：每个颜色角色有精确的职责边界。Indigo 承载行动和 navigation，Amber 点亮状态和链接，语义色标记成功/警告/错误，中性色构建可读性和层次。

### Primary
- **Deep Indigo** `oklch(0.36 0.14 260)`: 主按钮、当前选中项、导航高亮、主要行动召唤。暗色背景下用白色文字。
- **Deeper Indigo** `oklch(0.32 0.14 260)`: Primary 的 hover/active 态。
- **Pale Indigo** `oklch(0.94 0.02 260)`: 选中行背景、hover 行背景、标签页激活指示。

### Accent
- **Amber Ochre** `oklch(0.50 0.16 30)`: 链接、状态徽章、辅助强调、信息图表的第二色。与 Primary 形成冷暖对比，但只在需要第二信号时出现。
- **Pale Amber** `oklch(0.94 0.04 30)`: 徽章背景、高亮文本背景、温和提示。

### Neutral
- **Pure White** `oklch(1 0 0)`: 页面背景。不添加色相偏移——indigo 和 amber 已经承担了品牌温度。
- **Cool Canvas** `oklch(0.96 0.003 260)`: 卡片、面板、模态框、分组区域。极微妙的 indigo 底色，在白色背景上形成 4% 的层次区分。
- **Deep Ink** `oklch(0.13 0.005 260)`: 正文颜色。在 Pure White 上对比度 ≥12:1，远超 AA 标准。
- **Quiet Slate** `oklch(0.55 0.005 260)`: 辅助文本、描述文字、占位符。在 Pure White 上对比度 ≥4.5:1。
- **Fine Line** `oklch(0.90 0.005 260)`: 分割线、输入框边框、表格边框。
- **Strong Line** `oklch(0.82 0.008 260)`: 较强调的分割、卡片外边框（如有）。

### Semantic
- **Forest Green** `oklch(0.48 0.16 155)`: 成功状态、已完成、通过。填充背景用 `oklch(0.93 0.03 155)`。
- **Mustard** `oklch(0.60 0.16 85)`: 警告状态、待处理、注意。填充背景用 `oklch(0.95 0.05 85)`。
- **Brick Red** `oklch(0.45 0.20 25)`: 错误状态、删除、危险操作。填充背景用 `oklch(0.94 0.04 25)`。
- **Steel Blue** `oklch(0.55 0.12 240)`: 信息提示、中性状态。填充背景用 `oklch(0.94 0.03 240)`。

### Sidebar
- **Deep Panel** `oklch(0.15 0.01 260)`: 暗色侧栏背景，可选。侧栏内文字用 `oklch(0.92 0.003 260)`，选中项为 primary 色。
- **Deep Panel Surface** `oklch(0.20 0.01 260)`: 暗色侧栏中的分组/卡片。

### Named Rules
**The Role Discipline Rule.** 每种颜色只有一个语义角色。Forest Green 只表示成功/通过，不在别处出现。Amber 只用于强调和链接，不用于装饰。颜色是信号，不是调色盘。

**The White Canvas Rule.** 页面背景始终为 Pure White `oklch(1 0 0)`。不要将背景拉向 warmth——indigo 和 amber 的对比已经提供了足够的视觉温度。AI 默认的奶油色/米白色背景在本系统中是被禁止的。

**The Text-On-Color Rule.** 任何饱和中明度色（L 0.42-0.78, C ≥ 0.08）上的文字必须使用白色（或接近白色的浅色）。深色文字在饱和填充色上会显得污浊。Deep Indigo 按钮、Amber 徽章、Forest Green 状态标签——全部白色文字。

## 3. Typography

**Display Font:** 思源宋体 / Source Han Serif (中文), Cormorant Garamond (拉丁 fallback)  
**Body Font:** 思源黑体 / Source Han Sans (中文), Inter (拉丁 fallback)  
**Mono Font:** JetBrains Mono (代码/数字/数据场景)

**Character:** 标题用衬线的温润笔触给界面注入人文质感，正文和 UI 用无衬线保持阅读效率和信息密度。这是"编辑室"感的工具——有品位，但不为此牺牲可读性。衬线标题仅用于页面级标题，不出现在按钮、标签、表格或表单中。

### Hierarchy
- **Display** (300, clamp(1.75rem, 4vw, 2.75rem), line-height 1.15): 页面主标题。每页最多一个。letter-spacing: -0.02em。
- **Title** (500, 1.25rem, line-height 1.3): 区块标题、卡片标题、模态框标题。
- **Body** (400, 0.9375rem, line-height 1.6): 正文、描述、长文本。最大行宽 70ch。
- **Body Compact** (400, 0.875rem, line-height 1.5): 表格内容、列表项、紧凑场景的正文。
- **Label** (500, 0.8125rem, line-height 1.4, letter-spacing 0.01em): 表单标签、按钮文字、导航项、徽章。
- **Caption** (400, 0.75rem, line-height 1.4): 辅助说明、时间戳、元信息。

### Named Rules
**The Display Ceiling Rule.** 衬线标题最多出现在页面级标题（Display 级别）。Title 及以下全部使用无衬线。衬线下沉到按钮、标签、表单中是产品 UI 的禁忌。

**The Fixed Scale Rule.** 字号使用固定 rem，不使用视口缩放。产品工具在不同屏幕上的字号应保持一致，fluid typography 会让侧栏和表格中的标题忽大忽小。

## 4. Elevation

**Philosophy: Flat by default, lifted by interaction.**

这个系统以平面为主。卡片和面板依赖背景色差异（Pure White vs Cool Canvas）来区分层次，而非阴影。阴影仅作为交互状态的响应出现——hover 抬起按钮、focus 抬升弹窗、dropdown 浮于内容之上。这种策略让静止界面保持安静，只在需要注意力时才产生空间感。

### Shadow Vocabulary
- **lift-sm** (`0 2px 8px rgba(0,0,0,0.08)`): 按钮 hover 态、下拉菜单。
- **lift-md** (`0 4px 16px rgba(0,0,0,0.10)`): 模态框、弹出面板、tooltip。
- **lift-lg** (`0 8px 32px rgba(0,0,0,0.12)`): 抽屉、全屏搜索、命令面板。

### Named Rules
**The Flat-At-Rest Rule.** 静止状态不投射阴影。阴影仅在 hover、focus、打开（modal/dropdown）时出现。如果静止元素需要层次，用背景色差异而非阴影。

## 5. Components

*暂无实现——种子阶段。以下为设计意图：*

- **按钮**：矩形微圆角，Primary 满 Deep Indigo 白色文字，Ghost 透明仅 hover 时显 Pale Indigo 背景。所有按钮覆盖 hover/active/focus-visible/disabled/loading 态。
- **输入框**：1px Fine Line 边框，focus 时边框变为 Primary 并外围 3px Pale Indigo 光环。Error 态边框变 Brick Red。
- **表格**：行交替无背景色（纯白），hover 行 Pale Indigo。选中行 Pale Indigo。表头 Label 字重。
- **导航**：暗色侧栏（可选）或浅色顶栏 + 侧栏组合。选中项为 Primary 色。
- **徽章/状态标签**：小圆角填充色块，白色文字，语义色背景。每个状态（成功/警告/错误/信息/中性）有独立颜色。

## 6. Do's and Don'ts

### Do:
- **Do** 使用 Pure White `oklch(1 0 0)` 作为页面背景，不添加任何色相偏移
- **Do** 使用 Deep Indigo `oklch(0.36 0.14 260)` 作为唯一的行动色，不在其他地方用相似色混淆
- **Do** 衬线字体仅用于 Display 级别页面标题，Title 及以下全部无衬线
- **Do** 为每个可交互元素覆盖完整的七态（default、hover、focus、active、disabled、loading、error）
- **Do** 用 Cool Canvas `oklch(0.96 0.003 260)` 和 Pure White 的背景差异来区分卡片和页面，而非阴影
- **Do** 保持正文行宽 ≤70ch，表格和紧凑 UI 可以更宽
- **Do** 所有动效在 `@media (prefers-reduced-motion: reduce)` 下切换为即时过渡

### Don't:
- **Don't** 使用奶油色/米白色/任何暖色调中性色作为页面背景——这是最明显的 AI 生成痕迹
- **Don't** 使用渐变文字（background-clip: text + gradient）
- **Don't** 使用 glassmorphism、毛玻璃背景或装饰性模糊
- **Don't** 在每个 section 上方放置缩小的大写 eyebrow（"ABOUT" "PROCESS" "FEATURES"）
- **Don't** 使用统一的图标+标题+正文卡片网格（icon-card-grid pattern）
- **Don't** 使用侧边竖线装饰（border-left > 1px 的彩色边框）
- **Don't** 衬线字体出现在按钮、标签、表格、表单或任何 UI 控件中
- **Don't** 制作传统 ERP 式的蓝色密集表格
- **Don't** 使用花哨的营销型动画或编排过的入场序列
- **Don't** 在需要工具可靠感的界面中使用任意 z-index（如 z-index: 999 或 9999）

---

<!-- SEED: This DESIGN.md contains resolved color values in prose and design intent for all sections.
     The frontmatter is minimal — run /impeccable document once the project has components to
     capture real tokens and generate the .impeccable/design.json sidecar. -->
