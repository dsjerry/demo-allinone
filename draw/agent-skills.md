# Agent Skills 介绍

## 什么是 Agent Skills？

**Agent Skills** 是一个轻量级、开放的格式，用于为 AI Agent 扩展专业能力和工作流程。

## 核心结构

```mermaid
graph TD
    A[Agent Skill] --> B[SKILL.md<br/>必需：元数据 + 指令]
    A --> C[scripts/<br/>可选：可执行代码]
    A --> D[references/<br/>可选：文档资料]
    A --> E[assets/<br/>可选：模板、资源]
```

## 核心概念

### Skill 文件夹结构

```mermaid
graph LR
    subgraph "my-skill/"
        A[SKILL.md]
        B[scripts/]
        C[references/]
        D[assets/]
    end
```

## 工作原理 - 三阶段渐进式披露

```mermaid
flowchart TB
    subgraph Stage1["1. Discovery 发现阶段"]
        A1[Agent 启动] --> A2[加载所有 Skill 的<br/>name + description]
        A2 --> A3[仅知道何时可能相关]
    end

    subgraph Stage2["2. Activation 激活阶段"]
        B1[任务匹配 Skill 描述] --> B2[读取完整 SKILL.md 指令<br/>到上下文]
    end

    subgraph Stage3["3. Execution 执行阶段"]
        C1[Agent 按照指令执行] --> C2[可选：执行捆绑代码]
        C2 --> C3[可选：加载引用文件]
    end

    A3 --> B1
```

## Agent Skills 解决的问题

```mermaid
mindmap
  root((Agent Skills))
    领域专业知识
        法律审查流程
        数据分析管道
        演示文稿格式
        行业特定知识
    可重复的工作流
        多步骤任务
        标准化流程
        可审计的步骤
    跨产品复用
        一次构建
        多 agent 使用
        便携性强
```

## Agent 的能力增强

```mermaid
graph LR
    A[基础 Agent] -->|+ Skills| B[具备专业能力的 Agent]
    B --> C[Domain Expertise<br/>领域专业知识]
    B --> D[Repeatable Workflows<br/>可重复工作流]
    B --> E[Context & Memory<br/>上下文与记忆]
```

## 支持的工具

```mermaid
graph TD
    A[Agent Skills 兼容的<br/>AI 工具和 Agent 客户端] --> B[多种 Agent 产品]
    B --> C[Anthropic Claude]
    B --> D[第三方工具]
    B --> E[开源社区]
```

## 快速开始

```mermaid
graph LR
    A[创建 my-skill/] --> B[添加 SKILL.md]
    B --> C[定义 metadata<br/>name + description]
    C --> D[编写 instructions<br/>告诉 agent 如何执行]
    D --> E[可选：添加 scripts/<br/>references/ assets/]
```

## 关键特性

| 特性 | 说明 |
|------|------|
| **轻量级** | 只需一个 SKILL.md 文件即可开始 |
| **开放标准** | 由 Anthropic 开发，开放贡献 |
| **便携** | 版本控制的文件夹，易于分享 |
| **按需加载** | 仅在需要时加载完整指令，最小化上下文占用 |
| **社区支持** | Discord 社区 + 多种客户端支持 |

## SKILL.md 示例结构

```markdown
---
name: legal-review
description: Review legal documents for compliance issues
---

# Legal Review Skill

## When to use
- User asks to review a contract
- Document analysis requests

## How to perform legal review
1. Read the document
2. Identify key clauses
3. Flag potential issues
4. Provide recommendations
```