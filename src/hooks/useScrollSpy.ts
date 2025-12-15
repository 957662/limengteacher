'use client';

import { useEffect, useState } from 'react';

export default function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      const scrollPosition = window.pageYOffset + 100;

      // 遍历所有section，找到当前滚动位置对应的section
      sectionIds.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // 初始化时调用一次，设置初始状态
    handleScroll();

    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);

    // 清理事件监听器
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
