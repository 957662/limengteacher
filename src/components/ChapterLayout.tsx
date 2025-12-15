'use client';

import React from 'react';
import useScrollSpy from '@/hooks/useScrollSpy';

interface ChapterLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  activeChapter?: string;
}

const ChapterLayout: React.FC<ChapterLayoutProps> = ({ title, subtitle, children, activeChapter }) => {
  // 定义需要监听的章节部分
  const sectionIds = ['knowledge', 'principles', 'simulations'];
  // 使用滚动监听hook获取当前激活的章节部分
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-indigo-600">物理实验模拟教学</a>
            </div>
            <div className="flex items-center">
              <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-all duration-300">首页</a>
              <a href="/#chapters" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-all duration-300">章节导航</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 章节标题 */}
      <section className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
              <p className="text-gray-600 mt-2">{subtitle}</p>
            </div>
            <a href="/" className="mt-4 md:mt-0 inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-all duration-300">返回首页</a>
          </div>
        </div>
      </section>

      {/* 章节内容 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 侧边菜单 */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-8 lg:block">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">章节导航</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="#knowledge" 
                      className={`block py-1 transition-all duration-300 ${activeSection === 'knowledge' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      知识点讲解
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#principles" 
                      className={`block py-1 transition-all duration-300 ${activeSection === 'principles' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      物理原理
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#simulations" 
                      className={`block py-1 transition-all duration-300 ${activeSection === 'simulations' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      实验模拟
                    </a>
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">章节列表</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a 
                      href="/chapters/ch13" 
                      className={`block py-1 transition-all duration-300 ${activeChapter === 'ch13' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      第十三章 内能
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/chapters/ch14" 
                      className={`block py-1 transition-all duration-300 ${activeChapter === 'ch14' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      第十四章 内能的利用
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/chapters/ch15" 
                      className={`block py-1 transition-all duration-300 ${activeChapter === 'ch15' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      第十五章 电流和电路
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/chapters/ch16" 
                      className={`block py-1 transition-all duration-300 ${activeChapter === 'ch16' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      第十六章 电压 电阻
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/chapters/ch17" 
                      className={`block py-1 transition-all duration-300 ${activeChapter === 'ch17' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      第十七章 欧姆定律
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/chapters/ch18" 
                      className={`block py-1 transition-all duration-300 ${activeChapter === 'ch18' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      第十八章 电功率
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/chapters/ch19" 
                      className={`block py-1 transition-all duration-300 ${activeChapter === 'ch19' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      第十九章 生活用电
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/chapters/ch20" 
                      className={`block py-1 transition-all duration-300 ${activeChapter === 'ch20' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      第二十章 电与磁
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/chapters/ch21" 
                      className={`block py-1 transition-all duration-300 ${activeChapter === 'ch21' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      第二十一章 信息的传递
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/chapters/ch22" 
                      className={`block py-1 transition-all duration-300 ${activeChapter === 'ch22' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
                    >
                      第二十二章 能源与可持续发展
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* 主要内容 */}
            <main className="lg:col-span-3 space-y-12">
              {children}
            </main>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">人教版九年级物理课程 - 实验模拟教学</p>
            <p className="text-gray-400 text-sm">© 2025 物理实验模拟教学平台. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChapterLayout;
