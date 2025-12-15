import ChapterLayout from '@/components/ChapterLayout';

export default function Chapter14() {
  return (
    <ChapterLayout 
      title="第十四章" 
      subtitle="内能的利用" 
      activeChapter="ch14"
    >
      {/* 知识点讲解 */}
      <section id="knowledge" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">知识点讲解</h2>
        <div className="space-y-6">
          {/* 第1节 热机 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第1节 热机</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>热机是将内能转化为机械能的机器</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>常见的热机：蒸汽机、内燃机（汽油机、柴油机）、汽轮机、喷气发动机等</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>汽油机的工作过程：吸气冲程、压缩冲程、做功冲程、排气冲程</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>柴油机与汽油机的主要区别：燃料不同、点火方式不同、结构不同</span>
              </li>
            </ul>
          </div>
          
          {/* 第2节 热机的效率 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第2节 热机的效率</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>燃料的热值：1kg某种燃料完全燃烧放出的热量，单位是J/kg</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>燃料燃烧放热公式：Q = qm 或 Q = qV（气体燃料）</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>热机的效率：用来做有用功的那部分能量与燃料完全燃烧放出的能量之比</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>提高热机效率的方法：减少各种热损失、使燃料充分燃烧、减小摩擦等</span>
              </li>
            </ul>
          </div>
          
          {/* 第3节 能量的转化和守恒 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第3节 能量的转化和守恒</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>能量既不会凭空消灭，也不会凭空产生，它只会从一种形式转化为其他形式，或者从一个物体转移到其他物体，而在转化和转移的过程中，能量的总量保持不变</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>能量守恒定律是自然界最普遍、最重要的基本定律之一</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>各种形式的能量在一定条件下可以相互转化</span>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">热机的工作原理</h3>
            <p className="mb-4">热机的基本工作原理是利用燃料燃烧产生的高温高压气体，推动活塞或涡轮转动，将内能转化为机械能。以汽油机为例，其工作循环包括四个冲程：</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>吸气冲程</strong>：进气门打开，排气门关闭，活塞向下运动，吸入汽油和空气的混合物</li>
              <li><strong>压缩冲程</strong>：进气门和排气门都关闭，活塞向上运动，压缩燃料混合物，机械能转化为内能</li>
              <li><strong>做功冲程</strong>：火花塞点火，燃料燃烧产生高温高压气体，推动活塞向下运动，内能转化为机械能</li>
              <li><strong>排气冲程</strong>：进气门关闭，排气门打开，活塞向上运动，排出废气</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">热机的效率</h3>
            <p className="mb-4">热机效率是衡量热机性能的重要指标。由于热机在工作过程中存在各种能量损失，如废气带走的能量、散热损失、机械摩擦损失等，所以热机的效率总是小于1。</p>
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">重要公式</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">燃料燃烧放热：</span>
                  <span>Q = qm 或 Q = qV</span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">热机效率：</span>
                  <span>η = W<sub>有用</sub> / Q<sub>放</sub> × 100%</span>
                </div>
                <div className="flex items-start">
                  <span className="font-mono text-indigo-600 mr-2">其中：</span>
                  <span className="ml-2">Q表示热量（J），q表示热值（J/kg或J/m³），m表示质量（kg），V表示体积（m³），η表示效率，W<sub>有用</sub>表示有用功（J）</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">能量守恒定律</h3>
            <p className="mb-4">能量守恒定律是自然界的基本定律之一，它表明能量既不会凭空产生，也不会凭空消失，只会从一种形式转化为另一种形式，或者从一个物体转移到另一个物体，在转化和转移的过程中，能量的总量保持不变。</p>
            <p className="mb-4">能量守恒定律适用于所有的物理过程和化学过程，是我们研究自然现象的重要依据。</p>
          </div>
        </div>
      </section>

      {/* 实验模拟 */}
      <section id="simulations" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">实验模拟</h2>
        <div className="space-y-6">
          {/* 实验1：汽油机工作原理模拟 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验1：汽油机工作原理模拟</h3>
            <p className="text-gray-600 mb-4">观察汽油机的四个冲程，理解每个冲程的工作过程和能量转化。通过模拟实验，直观感受汽油机的工作原理。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验2：燃料热值的比较 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验2：燃料热值的比较</h3>
            <p className="text-gray-600 mb-4">通过实验比较不同燃料的热值，理解热值的物理意义。学习如何测量和计算燃料的热值。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
