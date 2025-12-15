import ChapterLayout from '@/components/ChapterLayout';

export default function Chapter22() {
  return (
    <ChapterLayout 
      title="第二十二章" 
      subtitle="能源与可持续发展" 
      activeChapter="ch22"
    >
      {/* 知识点讲解 */}
      <section id="knowledge" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">知识点讲解</h2>
        <div className="space-y-6">
          {/* 第1节 能源 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第1节 能源</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>能源是指能够提供能量的资源，是人类活动的物质基础</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>按能源的来源分类：一次能源和二次能源</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>按能源是否可再生分类：可再生能源和不可再生能源</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>常见能源：化石能源、水能、风能、太阳能、核能等</span>
              </li>
            </ul>
          </div>
          
          {/* 第2节 核能 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第2节 核能</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>核能是指原子核发生变化时释放的能量，包括核裂变和核聚变</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>核裂变是指重原子核分裂成较轻原子核的过程，核电站利用核裂变发电</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>核聚变是指轻原子核结合成较重原子核的过程，太阳内部发生核聚变</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>核能的优点：能量密度大、污染小；缺点：安全隐患、核废料处理困难</span>
              </li>
            </ul>
          </div>
          
          {/* 第3节 太阳能 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第3节 太阳能</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>太阳能是由太阳内部核聚变反应产生的能量，是一种清洁、可再生能源</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>太阳能的利用方式：光热转换、光电转换、光化学转换</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>太阳能的优点：取之不尽、用之不竭、清洁无污染；缺点：受天气影响大、能量密度低</span>
              </li>
            </ul>
          </div>
          
          {/* 第4节 能源与可持续发展 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第4节 能源与可持续发展</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>能源危机：随着人口增长和经济发展，能源需求量不断增加，不可再生能源面临枯竭</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>环境问题：化石能源的大量使用导致环境污染和温室效应加剧</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>可持续发展：既要满足当代人的需求，又不损害后代人满足其需求的能力</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>能源的未来发展方向：开发新能源、提高能源利用率、节约能源</span>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">能源的分类与转化</h3>
            <p className="mb-4">能源可以按照不同的标准进行分类，常见的分类方式有：</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>按来源分类</strong>：一次能源（如煤、石油、天然气、太阳能、风能）和二次能源（如电能、汽油、柴油）</li>
              <li><strong>按是否可再生分类</strong>：可再生能源（如太阳能、风能、水能、生物质能）和不可再生能源（如煤、石油、天然气、核能）</li>
              <li><strong>按使用程度分类</strong>：常规能源（如煤、石油、天然气）和新能源（如太阳能、风能、核能、地热能）</li>
            </ul>
            
            <p className="mb-4">能量在转化和转移过程中遵循能量守恒定律，但在实际利用中，由于存在各种能量损失，能源的利用率总是小于1。因此，提高能源利用率和开发新能源是解决能源问题的重要途径。</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">核能的利用原理</h3>
            <p className="mb-4">核能的利用主要基于两种核反应：核裂变和核聚变。</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>核裂变</strong>：当重原子核（如铀-235）吸收一个中子后，会分裂成两个中等质量的原子核，同时释放出大量能量和2-3个中子。这些中子又会引发其他铀核的裂变，形成链式反应。核电站就是利用可控链式反应来发电的。</li>
              <li><strong>核聚变</strong>：当轻原子核（如氘和氚）在高温高压下结合成较重的原子核（如氦）时，会释放出巨大的能量。太阳内部的能量就是通过核聚变产生的。核聚变的优点是原料丰富、污染小，但实现可控核聚变的技术难度很大。</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">太阳能的利用方式</h3>
            <p className="mb-4">太阳能的利用主要有三种方式：</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>光热转换</strong>：将太阳能转化为热能，如太阳能热水器、太阳能烤箱等。</li>
              <li><strong>光电转换</strong>：将太阳能直接转化为电能，如太阳能电池、太阳能光伏电站等。其原理是利用半导体材料的光电效应，当光子照射到半导体表面时，会激发出电子，形成电流。</li>
              <li><strong>光化学转换</strong>：将太阳能转化为化学能，如光合作用、太阳能制氢等。</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">可持续发展的能源策略</h3>
            <p className="mb-4">面对能源危机和环境问题，实现能源的可持续发展需要采取以下策略：</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>开发新能源</strong>：积极开发太阳能、风能、水能、生物质能等可再生能源，减少对化石能源的依赖。</li>
              <li><strong>提高能源利用率</strong>：通过技术创新和设备改进，提高能源的转化效率和利用效率。</li>
              <li><strong>节约能源</strong>：通过宣传教育和政策引导，培养人们的节能意识，减少能源浪费。</li>
              <li><strong>加强国际合作</strong>：能源问题是全球性问题，需要各国共同努力，加强技术交流和资源共享。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 实验模拟 */}
      <section id="simulations" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">实验模拟</h2>
        <div className="space-y-6">
          {/* 实验1：太阳能热水器原理模拟 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验1：太阳能热水器原理模拟</h3>
            <p className="text-gray-600 mb-4">了解太阳能热水器的工作原理，观察太阳能如何转化为热能，探究影响太阳能热水器效率的因素。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验2：核能发电原理模拟 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验2：核能发电原理模拟</h3>
            <p className="text-gray-600 mb-4">了解核电站的工作原理，观察核裂变链式反应的过程，探究核电站的安全保护措施。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验3：能源转化效率探究 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验3：能源转化效率探究</h3>
            <p className="text-gray-600 mb-4">通过实验探究不同能源转化装置的效率，了解能量损失的原因，学习提高能源利用率的方法。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
