import ChapterLayout from '@/components/ChapterLayout';

export default function Chapter15() {
  return (
    <ChapterLayout 
      title="第十五章" 
      subtitle="电流和电路" 
      activeChapter="ch15"
    >
      {/* 知识点讲解 */}
      <section id="knowledge" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">知识点讲解</h2>
        <div className="space-y-6">
          {/* 第1节 两种电荷 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第1节 两种电荷</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>自然界中只有两种电荷：正电荷和负电荷</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>同种电荷相互排斥，异种电荷相互吸引</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>摩擦起电的实质是电子的转移</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>验电器是检验物体是否带电的仪器，其工作原理是同种电荷相互排斥</span>
              </li>
            </ul>
          </div>
          
          {/* 第2节 电流和电路 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第2节 电流和电路</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电流是电荷的定向移动形成的</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电路是由电源、用电器、开关和导线组成的</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电路的三种状态：通路、开路（断路）、短路</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电流的方向：正电荷定向移动的方向规定为电流的方向</span>
              </li>
            </ul>
          </div>
          
          {/* 第3节 串联和并联 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第3节 串联和并联</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>串联电路：用电器依次连接，电流只有一条路径</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>并联电路：用电器并列连接，电流有多条路径</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>串联电路中，一处断开，所有用电器都停止工作</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>并联电路中，各支路用电器独立工作，互不影响</span>
              </li>
            </ul>
          </div>
          
          {/* 第4节 电流的测量 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第4节 电流的测量</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电流的符号是I，单位是安培（A），常用单位还有毫安（mA）和微安（μA）</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电流表是测量电流的仪器，使用时要串联在电路中</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电流表的使用规则：电流从正接线柱流入，负接线柱流出；被测电流不能超过量程；绝对不允许不经过用电器直接接在电源两极上</span>
              </li>
            </ul>
          </div>
          
          {/* 第5节 串、并联电路中电流的规律 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第5节 串、并联电路中电流的规律</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>串联电路中各处电流相等：I = I<sub>1</sub> = I<sub>2</sub> = ... = I<sub>n</sub></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>并联电路中干路电流等于各支路电流之和：I = I<sub>1</sub> + I<sub>2</sub> + ... + I<sub>n</sub></span>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">电荷与电流</h3>
            <p className="mb-4">电荷是物质的基本属性之一，自然界中存在两种电荷：正电荷和负电荷。电荷之间存在相互作用：同种电荷相互排斥，异种电荷相互吸引。</p>
            <p className="mb-4">电流是电荷的定向移动形成的。在金属导体中，电流是自由电子定向移动形成的；在酸碱盐的水溶液中，电流是正、负离子定向移动形成的。</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">电路的基本组成</h3>
            <p className="mb-4">一个完整的电路必须包括四个基本组成部分：</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>电源</strong>：提供电能的装置，如电池、发电机等</li>
              <li><strong>用电器</strong>：消耗电能的装置，如灯泡、电动机等</li>
              <li><strong>开关</strong>：控制电路通断的装置</li>
              <li><strong>导线</strong>：连接电路各部分，传导电流的装置</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">串、并联电路的特点</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">串联电路</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>电流只有一条路径</li>
                  <li>各用电器相互影响</li>
                  <li>开关控制整个电路</li>
                  <li>各处电流相等</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">并联电路</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>电流有多条路径</li>
                  <li>各用电器独立工作</li>
                  <li>干路开关控制整个电路，支路开关控制所在支路</li>
                  <li>干路电流等于各支路电流之和</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">重要公式</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">串联电路电流：</span>
                  <span>I = I<sub>1</sub> = I<sub>2</sub> = ... = I<sub>n</sub></span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">并联电路电流：</span>
                  <span>I = I<sub>1</sub> + I<sub>2</sub> + ... + I<sub>n</sub></span>
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
          {/* 实验1：两种电荷的相互作用 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验1：两种电荷的相互作用</h3>
            <p className="text-gray-600 mb-4">通过实验观察同种电荷相互排斥、异种电荷相互吸引的现象，理解电荷间的相互作用规律。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验2：串、并联电路的连接 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验2：串、并联电路的连接</h3>
            <p className="text-gray-600 mb-4">学习串联电路和并联电路的连接方法，观察两种电路中用电器的工作特点和开关的控制作用。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验3：串、并联电路中电流的规律 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验3：串、并联电路中电流的规律</h3>
            <p className="text-gray-600 mb-4">通过测量串、并联电路中各处的电流，探究串、并联电路中电流的分布规律，验证相关物理定律。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
