import ChapterLayout from '@/components/ChapterLayout';

export default function Chapter17() {
  return (
    <ChapterLayout 
      title="第十七章" 
      subtitle="欧姆定律" 
      activeChapter="ch17"
    >
      {/* 知识点讲解 */}
      <section id="knowledge" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">知识点讲解</h2>
        <div className="space-y-6">
          {/* 第1节 电流与电压和电阻的关系 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第1节 电流与电压和电阻的关系</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>在电阻一定时，导体中的电流跟这段导体两端的电压成正比</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>在电压一定时，导体中的电流跟这段导体的电阻成反比</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>探究电流与电压、电阻的关系时，采用控制变量法</span>
              </li>
            </ul>
          </div>
          
          {/* 第2节 欧姆定律 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第2节 欧姆定律</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>欧姆定律：导体中的电流，跟导体两端的电压成正比，跟导体的电阻成反比</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>公式：I = U/R，其中I表示电流（A），U表示电压（V），R表示电阻（Ω）</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>欧姆定律适用于纯电阻电路</span>
              </li>
            </ul>
          </div>
          
          {/* 第3节 电阻的测量 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第3节 电阻的测量</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>伏安法测电阻：用电压表测量电阻两端的电压，用电流表测量通过电阻的电流，根据欧姆定律计算电阻</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>实验原理：R = U/I</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>实验器材：电源、开关、电流表、电压表、滑动变阻器、待测电阻、导线</span>
              </li>
            </ul>
          </div>
          
          {/* 第4节 欧姆定律在串、并联电路中的应用 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第4节 欧姆定律在串、并联电路中的应用</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>串联电路的总电阻等于各串联电阻之和：R = R<sub>1</sub> + R<sub>2</sub> + ... + R<sub>n</sub></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>并联电路的总电阻的倒数等于各并联电阻的倒数之和：1/R = 1/R<sub>1</sub> + 1/R<sub>2</sub> + ... + 1/R<sub>n</sub></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>串联电路中，电压的分配与电阻成正比；并联电路中，电流的分配与电阻成反比</span>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">欧姆定律的物理意义</h3>
            <p className="mb-4">欧姆定律是电学中的基本定律之一，它定量地描述了电流、电压和电阻之间的关系。该定律表明，在一段导体中，当电阻保持不变时，电流与电压成正比；当电压保持不变时，电流与电阻成反比。</p>
            <p className="mb-4">欧姆定律的数学表达式为I = U/R，其中I是电流，U是电压，R是电阻。这个公式可以变形为U = IR和R = U/I，分别用于计算电压和电阻。</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">伏安法测电阻的原理</h3>
            <p className="mb-4">伏安法测电阻是利用欧姆定律的变形公式R = U/I来测量电阻的。通过用电压表测量电阻两端的电压U，用电流表测量通过电阻的电流I，然后代入公式计算出电阻值。</p>
            <p className="mb-4">为了减小实验误差，通常采用多次测量取平均值的方法。实验中使用滑动变阻器可以改变待测电阻两端的电压和通过的电流，从而进行多次测量。</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">串、并联电路的电阻规律</h3>
            <p className="mb-4">在串联电路中，总电阻等于各串联电阻之和。这是因为串联电阻相当于增加了导体的长度，所以总电阻比任何一个分电阻都大。</p>
            <p className="mb-4">在并联电路中，总电阻的倒数等于各并联电阻的倒数之和。这是因为并联电阻相当于增加了导体的横截面积，所以总电阻比任何一个分电阻都小。</p>
            
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">重要公式</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">欧姆定律：</span>
                  <span>I = U/R</span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">串联总电阻：</span>
                  <span>R = R<sub>1</sub> + R<sub>2</sub> + ... + R<sub>n</sub></span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">并联总电阻：</span>
                  <span>1/R = 1/R<sub>1</sub> + 1/R<sub>2</sub> + ... + 1/R<sub>n</sub></span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">伏安法测电阻：</span>
                  <span>R = U/I</span>
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
          {/* 实验1：探究电流与电压的关系 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验1：探究电流与电压的关系</h3>
            <p className="text-gray-600 mb-4">保持电阻不变，改变电阻两端的电压，测量通过电阻的电流，探究电流与电压的关系。验证在电阻一定时，电流与电压成正比的规律。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验2：探究电流与电阻的关系 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验2：探究电流与电阻的关系</h3>
            <p className="text-gray-600 mb-4">保持电压不变，改变电阻的大小，测量通过电阻的电流，探究电流与电阻的关系。验证在电压一定时，电流与电阻成反比的规律。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验3：伏安法测电阻 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验3：伏安法测电阻</h3>
            <p className="text-gray-600 mb-4">使用电压表和电流表测量电阻两端的电压和通过的电流，根据欧姆定律计算电阻值。学习实验电路的连接、器材的使用和数据的处理。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
