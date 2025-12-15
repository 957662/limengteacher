import ChapterLayout from '@/components/ChapterLayout';

export default function Chapter19() {
  return (
    <ChapterLayout 
      title="第十九章" 
      subtitle="生活用电" 
      activeChapter="ch19"
    >
      {/* 知识点讲解 */}
      <section id="knowledge" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">知识点讲解</h2>
        <div className="space-y-6">
          {/* 第1节 家庭电路 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第1节 家庭电路</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>家庭电路的组成：进户线、电能表、总开关、保险装置、用电器、插座、导线等</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>进户线分为火线和零线，火线与零线之间的电压为220V</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>插座分为两孔插座和三孔插座，三孔插座的第三孔与地线相连</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>开关应接在火线上，灯泡的螺旋套接在零线上</span>
              </li>
            </ul>
          </div>
          {/* 第2节 家庭电路中电流过大的原因 */}
          <div className="bg-indigo-50 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第2节 家庭电路中电流过大的原因</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>家庭电路中电流过大的原因：短路和总功率过大</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>短路是指火线和零线直接连通，电阻很小，电流很大</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>根据P = UI，当总功率P过大时，电流I也会过大</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>保险装置的作用是当电流过大时自动切断电路，保护电路安全</span>
              </li>
            </ul>
          </div>
          {/* 第3节 安全用电 */}
          <div className="bg-indigo-50 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第3节 安全用电</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>安全电压不高于36V，家庭电路的电压220V属于危险电压</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>触电分为单线触电和双线触电，都是人体直接或间接接触火线引起的</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>安全用电原则：不接触低压带电体，不靠近高压带电体</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>发现有人触电时，应立即切断电源或用绝缘体将电线挑开</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 物理原理 */}
      <section id="principles" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">物理原理</h2>
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">家庭电路的工作原理</h3>
            <p className="mb-4">家庭电路是由进户线、电能表、总开关、保险装置、用电器和插座等组成的。进户线分为火线和零线，它们之间的电压为220V。电能表用于测量家庭消耗的电能，总开关用于控制整个电路的通断，保险装置用于保护电路安全。</p>
            <p>家庭电路中的用电器都是并联的，这样它们可以独立工作，互不影响。开关与被控制的用电器串联，并且开关要接在火线上，这样在断开开关时，用电器与火线断开，确保安全。</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">家庭电路中电流过大的原因</h3>
            <p className="mb-4">家庭电路中电流过大的原因主要有两个：短路和总功率过大。</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>短路</strong>：当火线和零线直接连通时，电路中的电阻非常小，根据欧姆定律I = U/R，此时电流会变得很大，可能会烧坏导线和用电器，甚至引起火灾。</li>
              <li><strong>总功率过大</strong>：根据电功率公式P = UI，当家庭电路中同时使用的用电器过多时，总功率P会很大，而电压U是固定的220V，因此电流I会变得很大。</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">安全用电的物理依据</h3>
            <p className="mb-4">安全用电的原则是基于电流对人体的危害。当电流通过人体时，会对人体造成伤害，伤害的程度与电流的大小、通电时间和电流通过人体的路径有关。</p>
            <p>一般来说，当通过人体的电流超过10mA时，人就会感到剧痛，无法自主摆脱电源；当电流超过30mA时，会导致呼吸困难，甚至危及生命。因此，安全电压被规定为不高于36V。</p>
          </div>
        </div>
      </section>

      {/* 实验模拟 */}
      <section id="simulations" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">实验模拟</h2>
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验1：家庭电路的组成和连接</h3>
            <p className="text-gray-600 mb-4">学习家庭电路的基本组成，掌握用电器、插座、开关等元件的正确连接方法，理解家庭电路的工作原理。</p>
            <a href="#" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">点击进入实验模拟</a>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验2：电路中电流过大的原因</h3>
            <p className="text-gray-600 mb-4">通过实验观察短路和总功率过大时电路中电流的变化，理解保险装置的作用，掌握防止电路中电流过大的方法。</p>
            <a href="#" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">点击进入实验模拟</a>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验3：安全用电常识</h3>
            <p className="text-gray-600 mb-4">学习安全用电的基本知识，识别常见的用电安全隐患，掌握触电急救的方法，提高安全用电意识。</p>
            <a href="#" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">点击进入实验模拟</a>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
