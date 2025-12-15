import ChapterLayout from '@/components/ChapterLayout';

export default function Chapter18() {
  return (
    <ChapterLayout 
      title="第十八章" 
      subtitle="电功率" 
      activeChapter="ch18"
    >
      {/* 知识点讲解 */}
      <section id="knowledge" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">知识点讲解</h2>
        <div className="space-y-6">
          {/* 第1节 电能 电功 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第1节 电能 电功</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电能是一种能量形式，用电器工作时消耗电能，将电能转化为其他形式的能</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电功是电流所做的功，用符号W表示，单位是焦耳（J），常用单位还有千瓦时（kW·h）</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电功的计算公式：W = UIt，其中U表示电压（V），I表示电流（A），t表示时间（s）</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电能表是测量电功的仪器，用于计量用电器消耗的电能</span>
              </li>
            </ul>
          </div>
          
          {/* 第2节 电功率 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第2节 电功率</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电功率是表示消耗电能快慢的物理量，用符号P表示，单位是瓦特（W），常用单位还有千瓦（kW）</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电功率的计算公式：P = W/t 或 P = UI</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>额定电压是用电器正常工作时的电压，额定功率是用电器在额定电压下的功率</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>实际功率是用电器在实际电压下的功率，当实际电压等于额定电压时，实际功率等于额定功率</span>
              </li>
            </ul>
          </div>
          
          {/* 第3节 测量小灯泡的电功率 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第3节 测量小灯泡的电功率</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>实验原理：P = UI</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>实验器材：电源、开关、电流表、电压表、滑动变阻器、小灯泡、导线</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>实验目的：测量小灯泡在不同电压下的实际功率，并观察其发光情况</span>
              </li>
            </ul>
          </div>
          
          {/* 第4节 焦耳定律 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第4节 焦耳定律</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>焦耳定律：电流通过导体产生的热量跟电流的二次方成正比，跟导体的电阻成正比，跟通电时间成正比</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>公式：Q = I²Rt，其中Q表示热量（J），I表示电流（A），R表示电阻（Ω），t表示时间（s）</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>焦耳定律适用于所有电路，对于纯电阻电路，Q = W = UIt = I²Rt = U²t/R</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电热的利用：电热水器、电饭锅、电熨斗等；电热的防止：电视机的散热孔、电脑的风扇等</span>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">电能与电功</h3>
            <p className="mb-4">电能是自然界中一种重要的能量形式，它可以通过电源（如电池、发电机）获得。当电流通过用电器时，电能会转化为其他形式的能量，如光能、热能、机械能等。这个过程中，电流所做的功称为电功。</p>
            <p className="mb-4">电功的大小等于电压、电流和通电时间的乘积，即W = UIt。这个公式适用于所有电路。对于纯电阻电路，电能全部转化为热能，电功也可以用W = I²Rt或W = U²t/R计算。</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">电功率的意义</h3>
            <p className="mb-4">电功率是表示用电器消耗电能快慢的物理量。它的定义是单位时间内消耗的电能，即P = W/t。由于W = UIt，所以电功率也可以表示为P = UI。</p>
            <p className="mb-4">用电器的额定功率是指它在额定电压下工作时的功率。当实际电压高于额定电压时，实际功率大于额定功率，用电器可能会损坏；当实际电压低于额定电压时，实际功率小于额定功率，用电器不能正常工作。</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">焦耳定律的本质</h3>
            <p className="mb-4">焦耳定律揭示了电流热效应的规律，即电流通过导体时产生的热量与电流的平方、导体的电阻和通电时间成正比。这个定律是能量守恒定律在电学中的具体体现，它表明电能转化为热能的多少与电流、电阻和时间的关系。</p>
            <p className="mb-4">在纯电阻电路中，电能全部转化为热能，因此Q = W，此时焦耳定律的公式可以与电功公式相互推导。但在非纯电阻电路（如含有电动机的电路）中，电能只有一部分转化为热能，此时Q &lt; W，焦耳定律仍然适用，但不能直接用电功公式计算热量。</p>
            
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">重要公式</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">电功：</span>
                  <span>W = UIt = Pt</span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">电功率：</span>
                  <span>P = W/t = UI</span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">焦耳定律：</span>
                  <span>Q = I²Rt</span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-indigo-600 mr-2">纯电阻电路热量：</span>
                  <span>Q = W = UIt = U²t/R</span>
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
          {/* 实验1：电能表的使用 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验1：电能表的使用</h3>
            <p className="text-gray-600 mb-4">学习电能表的读数方法和使用规则，通过实验测量用电器消耗的电能，理解电能表的工作原理。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验2：测量小灯泡的电功率 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验2：测量小灯泡的电功率</h3>
            <p className="text-gray-600 mb-4">使用电压表和电流表测量小灯泡在不同电压下的实际功率，观察小灯泡的发光情况与实际功率的关系，验证额定功率与实际功率的区别。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验3：探究焦耳定律 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验3：探究焦耳定律</h3>
            <p className="text-gray-600 mb-4">通过实验探究电流产生的热量与电流、电阻和时间的关系，验证焦耳定律的正确性。观察不同条件下电热的产生情况，理解焦耳定律的应用。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
