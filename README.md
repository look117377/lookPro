# lookPro

一个基于 **Next.js App Router、React 和 TypeScript** 的全栈 Web 项目起步模板。

## 开始使用

需要安装 Node.js（建议使用当前 LTS 版本）和 npm。

```bash
npm install
npm run dev
```

然后访问 <http://localhost:3000>。

## 常用命令

- `npm run dev`：启动开发服务器
- `npm run build`：构建生产版本
- `npm run start`：启动生产服务器（先运行 build）
- `npm run typecheck`：检查 TypeScript 类型

## 项目结构

```text
lookPro/
├── public/                 # 静态资源
├── src/
│   ├── app/                # 页面、布局和 API 路由（App Router）
│   │   ├── api/health/     # 健康检查接口：GET /api/health
│   │   ├── globals.css     # 全局样式
│   │   ├── layout.tsx      # 根布局和页面元信息
│   │   └── page.tsx        # 首页
│   ├── components/         # 可复用 UI 组件
│   └── lib/                # 配置和通用工具
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 技术栈

- Next.js（App Router）
- React
- TypeScript
- 原生 CSS

依赖版本使用 `latest`；安装时会获取当时可用的最新版本。若要锁定依赖版本，可在首次安装后提交生成的 `package-lock.json`。
