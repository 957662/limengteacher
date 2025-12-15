'use client';

import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">李老师物理实验模拟教学</h1>
            </div>
            <div className="flex items-center">
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-all duration-300">关于我们</a>
              <a href="#chapters" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-all duration-300">章节导航</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">人教版九年级物理课程</h2>
          <p className="text-xl mb-8">通过交互式实验模拟，让物理学习更生动、更直观</p>
          <a href="#chapters" className="inline-block bg-white text-indigo-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">开始学习</a>
        </div>
      </section>

      {/* 关于区域 */}
      <section id="about" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">教学特色</h2>
            <p className="text-gray-600 mt-4">我们的物理课程采用先进的实验模拟技术，帮助学生更好地理解物理原理</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">交互式实验</h3>
              <p className="text-gray-600">通过图形化的实验模拟，让学生亲自动手操作</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">清晰的知识点</h3>
              <p className="text-gray-600">详细讲解每章的物理原理和知识点，结构清晰易懂</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">响应式设计</h3>
              <p className="text-gray-600">适配各种设备，随时随地都能学习</p>
            </div>
          </div>
        </div>
      </section>

      {/* 章节导航 */}
      <section id="chapters" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">章节导航</h2>
            <p className="text-gray-600 mt-4">选择你想要学习的章节，开始探索物理世界</p>
          </div>
          
          {/* 搜索框 */}
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                id="chapter-search" 
                placeholder="搜索章节..." 
                className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* 章节卡片网格 */}
          <div id="chapter-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 第十三章 */}
            <a href="/chapters/ch13" className="chapter-card bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-400 hover:-translate-y-8 hover:scale-102 hover:shadow-xl active:-translate-y-4 active:scale-99">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">第十三章</h3>
                <p className="text-indigo-100">内能</p>
              </div>
              <div className="p-6">
                <ul className="text-gray-600 space-y-2">
                  <li>• 分子热运动</li>
                  <li>• 内能</li>
                  <li>• 比热容</li>
                </ul>
              </div>
            </a>
            
            {/* 第十四章 */}
            <a href="/chapters/ch14" className="chapter-card bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-400 hover:-translate-y-8 hover:scale-102 hover:shadow-xl active:-translate-y-4 active:scale-99">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">第十四章</h3>
                <p className="text-indigo-100">内能的利用</p>
              </div>
              <div className="p-6">
                <ul className="text-gray-600 space-y-2">
                  <li>• 热机</li>
                  <li>• 热机的效率</li>
                  <li>• 能量的转化和守恒</li>
                </ul>
              </div>
            </a>
            
            {/* 第十五章 */}
            <a href="/chapters/ch15" className="chapter-card bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-400 hover:-translate-y-8 hover:scale-102 hover:shadow-xl active:-translate-y-4 active:scale-99">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">第十五章</h3>
                <p className="text-indigo-100">电流和电路</p>
              </div>
              <div className="p-6">
                <ul className="text-gray-600 space-y-2">
                  <li>• 两种电荷</li>
                  <li>• 电流和电路</li>
                  <li>• 串联和并联</li>
                  <li>• 电流的测量</li>
                  <li>• 串、并联电路中电流的规律</li>
                </ul>
              </div>
            </a>
            
            {/* 第十六章 */}
            <a href="/chapters/ch16" className="chapter-card bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-400 hover:-translate-y-8 hover:scale-102 hover:shadow-xl active:-translate-y-4 active:scale-99">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">第十六章</h3>
                <p className="text-indigo-100">电压 电阻</p>
              </div>
              <div className="p-6">
                <ul className="text-gray-600 space-y-2">
                  <li>• 电压</li>
                  <li>• 串、并联电路中电压的规律</li>
                  <li>• 电阻</li>
                  <li>• 变阻器</li>
                </ul>
              </div>
            </a>
            
            {/* 第十七章 */}
            <a href="/chapters/ch17" className="chapter-card bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-400 hover:-translate-y-8 hover:scale-102 hover:shadow-xl active:-translate-y-4 active:scale-99">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">第十七章</h3>
                <p className="text-indigo-100">欧姆定律</p>
              </div>
              <div className="p-6">
                <ul className="text-gray-600 space-y-2">
                  <li>• 电流与电压和电阻的关系</li>
                  <li>• 欧姆定律</li>
                  <li>• 电阻的测量</li>
                  <li>• 欧姆定律在串、并联电路中的应用</li>
                </ul>
              </div>
            </a>
            
            {/* 第十八章 */}
            <a href="/chapters/ch18" className="chapter-card bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-400 hover:-translate-y-8 hover:scale-102 hover:shadow-xl active:-translate-y-4 active:scale-99">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">第十八章</h3>
                <p className="text-indigo-100">电功率</p>
              </div>
              <div className="p-6">
                <ul className="text-gray-600 space-y-2">
                  <li>• 电能 电功</li>
                  <li>• 电功率</li>
                  <li>• 测量小灯泡的电功率</li>
                  <li>• 焦耳定律</li>
                </ul>
              </div>
            </a>
            
            {/* 第十九章 */}
            <a href="/chapters/ch19" className="chapter-card bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-400 hover:-translate-y-8 hover:scale-102 hover:shadow-xl active:-translate-y-4 active:scale-99">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">第十九章</h3>
                <p className="text-indigo-100">生活用电</p>
              </div>
              <div className="p-6">
                <ul className="text-gray-600 space-y-2">
                  <li>• 家庭电路</li>
                  <li>• 家庭电路中电流过大的原因</li>
                  <li>• 安全用电</li>
                </ul>
              </div>
            </a>
            
            {/* 第二十章 */}
            <a href="/chapters/ch20" className="chapter-card bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-400 hover:-translate-y-8 hover:scale-102 hover:shadow-xl active:-translate-y-4 active:scale-99">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">第二十章</h3>
                <p className="text-indigo-100">电与磁</p>
              </div>
              <div className="p-6">
                <ul className="text-gray-600 space-y-2">
                  <li>• 磁现象 磁场</li>
                  <li>• 电生磁</li>
                  <li>• 电磁铁 电磁继电器</li>
                  <li>• 电动机</li>
                  <li>• 磁生电</li>
                </ul>
              </div>
            </a>
            
            {/* 第二十一章 */}
            <a href="/chapters/ch21" className="chapter-card bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-400 hover:-translate-y-8 hover:scale-102 hover:shadow-xl active:-translate-y-4 active:scale-99">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">第二十一章</h3>
                <p className="text-indigo-100">信息的传递</p>
              </div>
              <div className="p-6">
                <ul className="text-gray-600 space-y-2">
                  <li>• 现代顺风耳--电话</li>
                  <li>• 电磁波的海洋</li>
                  <li>• 广播、电视和移动通信</li>
                  <li>• 越来越宽的信息之路</li>
                </ul>
              </div>
            </a>
            
            {/* 第二十二章 */}
            <a href="/chapters/ch22" className="chapter-card bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-400 hover:-translate-y-8 hover:scale-102 hover:shadow-xl active:-translate-y-4 active:scale-99">
              <div className="bg-indigo-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">第二十二章</h3>
                <p className="text-indigo-100">能源与可持续发展</p>
              </div>
              <div className="p-6">
                <ul className="text-gray-600 space-y-2">
                  <li>• 能源</li>
                  <li>• 核能</li>
                  <li>• 太阳能</li>
                  <li>• 能源与可持续发展</li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">人教版九年级物理课程 - 实验模拟教学</p>
            <p className="text-gray-400 text-sm">© 2025 物理实验模拟教学平台. Everything be easy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
