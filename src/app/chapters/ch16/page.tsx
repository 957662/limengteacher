import ChapterLayout from '@/components/ChapterLayout';

export default function Chapter16() {
  return (
    <ChapterLayout 
      title="第十六章" 
      subtitle="电压 电阻" 
      activeChapter="ch16"
    >
      {/* 知识点讲解 */}
      <section id="knowledge" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">知识点讲解</h2>
        <div className="space-y-6">
          {/* 第1节 电压 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第1节 电压</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电压是形成电流的原因，电源是提供电压的装置</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电压的符号是U，单位是伏特（V），常用单位还有千伏（kV）和毫伏（mV）</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>常见电压值：一节干电池1.5V，家庭电路220V，人体安全电压不高于36V</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电压表是测量电压的仪器，使用时要并联在电路中</span>
              </li>
            </ul>
          </div>
          
          {/* 第2节 串、并联电路中电压的规律 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第2节 串、并联电路中电压的规律</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>串联电路中总电压等于各部分电路电压之和：U = U<sub>1</sub> + U<sub>2</sub> + ... + U<sub>n</sub></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>并联电路中各支路两端的电压相等：U = U<sub>1</sub> = U<sub>2</sub> = ... = U<sub>n</sub></span>
              </li>
            </ul>
          </div>
          
          {/* 第3节 电阻 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第3节 电阻</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电阻是导体对电流的阻碍作用，符号是R，单位是欧姆（Ω）</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电阻是导体本身的一种性质，与导体的材料、长度、横截面积和温度有关</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>相同条件下，导体的长度越长，电阻越大；横截面积越小，电阻越大</span>
              </li>
            </ul>
          </div>
          
          {/* 第4节 变阻器 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第4节 变阻器</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>滑动变阻器是通过改变接入电路中电阻丝的长度来改变电阻的</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>滑动变阻器的原理：通过改变电阻丝接入电路的长度，改变电阻，从而改变电路中的电流</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>滑动变阻器的使用规则：“一上一下”接线柱接入电路</span>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">电压的本质</h3>
            <p className="mb-4">电压是使电路中自由电荷定向移动形成电流的原因。电源的作用是提供电压，在电源内部，非静电力把正电荷从负极搬运到正极，从而维持电源两端的电压。</p>
            <p className="mb-4">电压的大小可以用电压表测量。电压表必须并联在被测电路两端，并且电流要从正接线柱流入，从负接线柱流出。</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">串、并联电路的电压规律</h3>
            <p className="mb-4">在串联电路中，总电压等于各部分电路电压之和。这是因为在串联电路中，电流只有一条路径，电荷依次通过各个用电器，每个用电器都要消耗一部分电能，因此总电压是各部分电压之和。</p>
            <p className="mb-4">在并联电路中，各支路两端的电压相等。这是因为并联电路中，各支路两端直接连接在电源两端，所以它们的电压都等于电源电压。</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">电阻的影响因素</h3>
            <p className="mb-4">电阻是导体本身的一种性质，它的大小取决于导体的材料、长度、横截面积和温度。对于金属导体，温度越高，电阻越大；对于某些半导体材料，温度越高，电阻反而越小。</p>
            <p className="mb-4">电阻定律：在温度不变时，导体的电阻与它的长度成正比，与它的横截面积成反比，还与导体的材料有关。公式为：R = ρL/S，其中ρ是电阻率，L是导体长度，S是导体横截面积。</p>
            
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">重要公式</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">串联电路电压：</span>
                  <span>U = U<sub>1</sub> + U<sub>2</sub> + ... + U<sub>n</sub></span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">并联电路电压：</span>
                  <span>U = U<sub>1</sub> = U<sub>2</sub> = ... = U<sub>n</sub></span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">电阻定律：</span>
                  <span>R = ρL/S</span>
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
          {/* 实验1：用电压表测量电压 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验1：用电压表测量电压</h3>
            <p className="text-gray-600 mb-4">学习电压表的使用方法，测量电源电压和用电器两端的电压，掌握电压表的连接和读数技巧。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验2：探究串、并联电路中电压的规律 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验2：探究串、并联电路中电压的规律</h3>
            <p className="text-gray-600 mb-4">通过实验测量串、并联电路中各部分的电压，探究串、并联电路的电压分布规律，验证相关物理定律。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验3：滑动变阻器的使用 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验3：滑动变阻器的使用</h3>
            <p className="text-gray-600 mb-4">学习滑动变阻器的构造和原理，掌握其正确的连接方法，观察滑动变阻器对电路中电流和电压的影响。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
