'use client';

import React from 'react';
import ChapterLayout from '../../../components/ChapterLayout';

const Chapter13: React.FC = () => {
  return (
    <ChapterLayout title="第十三章" subtitle="内能">
      {/* 知识点讲解 */}
      <section id="knowledge" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">知识点讲解</h2>
        <div className="space-y-6">
          {/* 第1节 分子热运动 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第1节 分子热运动</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>物质是由大量分子、原子构成的</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>一切物质的分子都在不停地做无规则运动</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>分子热运动的快慢与温度有关，温度越高，分子运动越剧烈</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>分子间存在相互作用的引力和斥力</span>
              </li>
            </ul>
          </div>
          
          {/* 第2节 内能 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第2节 内能</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>内能：物体内部所有分子热运动的动能和分子势能的总和</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>一切物体在任何情况下都具有内能</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>内能的大小与物体的质量、温度、状态等因素有关</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>改变物体内能的两种方式：做功和热传递</span>
              </li>
            </ul>
          </div>
          
          {/* 第3节 比热容 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第3节 比热容</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>比热容：单位质量的某种物质，温度升高1℃所吸收的热量</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>比热容是物质的一种特性，不同物质的比热容一般不同</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>水的比热容较大，在生活中有广泛的应用</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>热量计算公式：Q = cmΔt</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 物理原理 */}
      <section id="principles" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">物理原理</h2>
        <div className="space-y-6">
          <div className="text-gray-600 leading-relaxed">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">分子动理论</h3>
            <p className="mb-4">分子动理论是研究物质热现象的微观理论，它包括三个基本观点：</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>物质是由大量分子、原子构成的</li>
              <li>一切物质的分子都在不停地做无规则运动</li>
              <li>分子间存在相互作用的引力和斥力</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">内能的改变</h3>
            <p className="mb-4">改变物体内能的方式有两种：</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>做功</strong>：外界对物体做功，物体的内能增加；物体对外界做功，物体的内能减少。实质是能量的转化。</li>
              <li><strong>热传递</strong>：热量从高温物体传递到低温物体，或从同一物体的高温部分传递到低温部分。实质是能量的转移。</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">比热容与热量计算</h3>
            <p className="mb-4">比热容是物质的一种特性，表示物质吸热或放热能力的强弱。水的比热容为4.2×10³ J/(kg·℃)，是常见物质中比热容较大的。</p>
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">重要公式</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">热量计算公式：</span>
                  <span>Q = cmΔt</span>
                </div>
                <div className="flex items-start">
                  <span className="font-mono text-indigo-600 mr-2">其中：</span>
                  <span className="ml-2">Q表示热量（J），c表示比热容（J/(kg·℃)），m表示质量（kg），Δt表示温度变化量（℃）</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实验模拟 */}
      <section id="simulations" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">实验模拟</h2>
        <div className="space-y-6">
          {/* 实验1：扩散现象 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验1：扩散现象</h3>
            <p className="text-gray-600 mb-4">观察不同物质间的扩散现象，理解分子的无规则运动。通过改变温度，观察扩散快慢的变化，验证温度对分子热运动的影响。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验2：比较不同物质的吸热能力 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验2：比较不同物质的吸热能力</h3>
            <p className="text-gray-600 mb-4">通过相同的加热方式，比较水和食用油的温度变化，探究不同物质的比热容差异。理解比热容的物理意义及其在生活中的应用。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">点击进入实验模拟</a>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
};

export default Chapter13;
