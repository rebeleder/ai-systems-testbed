# 鹈鹕骑自行车 SVG 测试提示词（跨模型 / 跨 Harness 对比用）

## 测试提示词（复制以下内容给被测模型）

```
在当前工作区新建一个名为「鹈鹕骑自行车」的文件夹，然后在这个目录内
Generate an SVG of a pelican riding a bicycle。
完成后展示该文件。
```

## 测试规范说明

1. **保存位置**：必须保存在工作区下新建的「鹈鹕骑自行车」文件夹内（而非工作区根目录或其他路径）。
2. **文件命名**：`harness-llm-resoningeffort-pelican-riding-bicycle.svg`
   - 示例：`opencode-nemotron-3-ultra-free-pelican-riding-bicycle.svg`
   - 推理 effort 默认标记为 `high`（除非llm知道自己的思考强度或用户提示llm当前思考强度时）
   - 模型名和 harness 名由被测 agent 自行填写自己的真实身份，不得留空或写 "unknown"。
3. **交付要求**：生成后必须以可预览的方式展示给用户（预览面板 / 文件卡片 / 浏览器打开），不能只回复"已完成"。
4. **内容要求**：纯手写 SVG 代码（不允许调用图像生成模型生成位图再转 SVG）；画面须同时包含鹈鹕与自行车两个主体，比例合理、语义清晰可辨认。
5. **独立创作约束（重要）**：生成 SVG 时，**不得参考、读取、借鉴当前目录下任何已存在的 SVG 文件**（包括本文档"已有结果"中列出的历史产物）。必须完全独立地从头构思与绘制，以保证跨模型对比的公平性。若为满足文件命名规范而需要读取目录清单，仅允许读取文件列表，不得读取任何 `.svg` 文件的内容。

## 评估维度（人工打分 1-5）

| 维度 | 说明 |
|------|------|
| 指令遵循 | 是否新建了指定文件夹、文件名格式是否正确、是否展示结果 |
| 主体辨识度 | 鹈鹕（大喙/喉囊）与自行车（两轮/车架/踏板）是否一眼可辨 |
| 结构合理性 | 部件位置关系正确：鹈鹕坐在车上、腿够到踏板、翅膀在把位附近 |
| 美观度 | 配色、构图、细节层次 |
| 代码质量 | SVG 结构清晰、有分组注释、无冗余 |

## 已有结果

- GLM-5.3-Flash + WorkBuddy：`WorkBuddy-GLM-5.3-Flash-high-pelican-riding-bicycle.svg`（2026-08-31）
- GLM-5.3 + WorkBuddy：`WorkBuddy-GLM-5.3-high-pelican-riding-bicycle.svg`（2026-08-31）
- Hy3 + WorkBuddy：`WorkBuddy-Hy3-high-pelican-riding-bicycle.svg`（2026-08-31）
- Deepseek-V4-Pro + WorkBuddy：`WorkBuddy-Deepseek-V4-Pro-high-pelican-riding-bicycle.svg`（2026-08-31）
- Kimi-K3 + WorkBuddy：`WorkBuddy-Kimi-K3-high-pelican-riding-bicycle.svg`（2026-08-31）
- qwen-3.8-flash-next + QwenWork-Desktop：`QwenWork-Desktop-qwen-3.8-flash-next-high-pelican-riding-bicycle.svg`（2026-08-31）
- muse-spark-1.2-contributor-free + opencode：`opencode-muse-spark-1.2-contributor-free-high-pelican-riding-bicycle.svg`（2026-08-31）
- Gemini-3.7-Flash + Antigravity：`Antigravity-Gemini-3.7-Flash-high-pelican-riding-bicycle.svg`（2026-08-31）
- Qwen-3.8-Max + QwenWork-Desktop：`QwenWork-Desktop-Qwen-3.8-Max-high-pelican-riding-bicycle.svg`（2026-08-31）
