import ChapterLayout from '@/components/ChapterLayout';

export default function Chapter20() {
  return (
    <ChapterLayout 
      title="第二十章" 
      subtitle="电与磁" 
      activeChapter="ch20"
    >
      {/* 知识点讲解 */}
      <section id="knowledge" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">知识点讲解</h2>
        <div className="space-y-6">
          {/* 第1节 磁现象 磁场 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第1节 磁现象 磁场</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>磁性是物体吸引铁、钴、镍等物质的性质，具有磁性的物体叫磁体</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>磁体上磁性最强的部分叫磁极，磁体有两个磁极：南极（S极）和北极（N极）</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>磁极间的相互作用：同名磁极相互排斥，异名磁极相互吸引</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>磁场是磁体周围存在的一种特殊物质，它的基本性质是对放入其中的磁体产生力的作用</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>磁感线是描述磁场的假想曲线，在磁体外部，磁感线从N极出发回到S极</span>
              </li>
            </ul>
          </div>
          
          {/* 第2节 电生磁 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第2节 电生磁</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电流的磁效应：通电导线周围存在磁场，磁场方向与电流方向有关</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>通电螺线管的磁场与条形磁体的磁场相似，其极性可以用安培定则（右手螺旋定则）判断</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>安培定则：用右手握住螺线管，让四指指向螺线管中电流的方向，则大拇指所指的那端就是螺线管的N极</span>
              </li>
            </ul>
          </div>
          
          {/* 第3节 电磁铁 电磁继电器 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第3节 电磁铁 电磁继电器</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电磁铁是带有铁芯的螺线管，它的磁性有无由电流的通断控制，磁性强弱由电流大小和线圈匝数控制</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电磁继电器是利用电磁铁来控制工作电路的一种开关，它可以实现低电压、弱电流控制高电压、强电流</span>
              </li>
            </ul>
          </div>
          
          {/* 第4节 电动机 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第4节 电动机</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>磁场对通电导线的作用：通电导线在磁场中会受到力的作用，力的方向与电流方向和磁场方向有关</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电动机是根据通电线圈在磁场中受力转动的原理制成的，它将电能转化为机械能</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>换向器的作用是使电动机线圈持续转动，它能自动改变线圈中的电流方向</span>
              </li>
            </ul>
          </div>
          
          {/* 第5节 磁生电 */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">第5节 磁生电</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>电磁感应现象：闭合电路的一部分导体在磁场中做切割磁感线运动时，导体中会产生感应电流</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>感应电流的方向与导体运动方向和磁场方向有关</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>发电机是根据电磁感应原理制成的，它将机械能转化为电能</span>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">磁场的本质</h3>
            <p className="mb-4">磁场是一种看不见、摸不着但客观存在的物质，它是磁体间相互作用的媒介。磁场具有方向性，人们规定小磁针静止时北极所指的方向为该点的磁场方向。磁感线是用来描述磁场的假想曲线，它的疏密表示磁场的强弱，切线方向表示磁场的方向。</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">电与磁的相互转化</h3>
            <p className="mb-4">电与磁之间存在着密切的联系，主要体现在以下几个方面：</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>电流的磁效应</strong>：通电导线周围存在磁场，这是奥斯特实验发现的。这表明电能可以产生磁能。</li>
              <li><strong>磁场对电流的作用</strong>：通电导线在磁场中会受到力的作用，这是电动机的工作原理。这表明磁能可以转化为机械能。</li>
              <li><strong>电磁感应现象</strong>：闭合电路的一部分导体在磁场中做切割磁感线运动时，会产生感应电流，这是法拉第发现的。这表明机械能可以转化为电能。</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">电动机与发电机的对比</h3>
            <p className="mb-4">电动机和发电机是电与磁相互转化的典型应用，它们的工作原理和能量转化方向相反：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">电动机</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>工作原理：通电线圈在磁场中受力转动</li>
                  <li>能量转化：电能 → 机械能</li>
                  <li>结构：定子、转子、换向器等</li>
                  <li>应用：电风扇、洗衣机、电动汽车等</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">发电机</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>工作原理：电磁感应现象</li>
                  <li>能量转化：机械能 → 电能</li>
                  <li>结构：定子、转子、滑环等</li>
                  <li>应用：火力发电、水力发电、风力发电等</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实验模拟 */}
      <section id="simulations" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 section-title pb-2">实验模拟</h2>
        <div className="space-y-6">
          {/* 实验1：探究磁体的性质 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验1：探究磁体的性质</h3>
            <p className="text-gray-600 mb-4">观察磁体的磁性分布，探究磁极间的相互作用规律，了解磁场的基本性质。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验2：探究电流的磁效应 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验2：探究电流的磁效应</h3>
            <p className="text-gray-600 mb-4">通过奥斯特实验，观察通电导线周围的磁场，探究电流方向对磁场方向的影响。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验3：探究电磁感应现象 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验3：探究电磁感应现象</h3>
            <p className="text-gray-600 mb-4">通过实验探究感应电流产生的条件，观察感应电流方向与导体运动方向和磁场方向的关系。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
          
          {/* 实验4：电动机原理模拟 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">实验4：电动机原理模拟</h3>
            <p className="text-gray-600 mb-4">观察通电线圈在磁场中的受力转动，了解电动机的工作原理，探究换向器的作用。</p>
            <a href="#" className="simulation-link inline-block text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition duration-300">点击进入实验模拟</a>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
