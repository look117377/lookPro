import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <main className="page-shell">
      <Header />
      <section className="hero">
        <p className="eyebrow">NEXT.JS STARTER</p>
        <h1>欢迎来到 lookPro</h1>
        <p className="intro">
          项目基础结构已经准备好。现在可以开始构建你的页面、组件和 API。
        </p>
        <div className="actions">
          <a className="button button-primary" href="https://nextjs.org/docs">
            查看 Next.js 文档
          </a>
          <a className="button button-secondary" href="https://react.dev/">
            查看 React 文档
          </a>
        </div>
      </section>
      <footer className="footer">用 Next.js 和 TypeScript 构建</footer>
    </main>
  );
}
