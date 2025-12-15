/**
 * 物理教学网站交互功能
 * 包含平滑滚动、滚动监听、滚动到顶部等功能
 */

// 页面加载完成后初始化所有交互效果
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollSpy();
    initScrollToTop();
    initMobileMenu();
    initChapterSearch();
    // 移除未实现的加载动画类
    // document.body.classList.add('loaded');
});

/**
 * 平滑滚动功能
 * 为所有锚点链接添加平滑滚动效果
 */
function initSmoothScroll() {
    // 为所有以#开头的链接添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // 使用平滑滚动到目标位置
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * 滚动监听功能
 * 自动高亮当前阅读的章节或部分
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    // 选择所有侧边栏或导航栏中的锚点链接
    const navLinks = document.querySelectorAll('aside a[href^="#"], nav a[href^="#"]');
    
    // 监听滚动事件
    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.pageYOffset + 100;
        
        // 遍历所有section，找到当前滚动位置对应的section
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // 更新导航链接的高亮状态
        navLinks.forEach(link => {
            // 移除所有高亮类
            link.classList.remove('text-indigo-600', 'font-medium');
            link.classList.add('text-gray-600');
            
            // 高亮当前section对应的链接
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.remove('text-gray-600');
                link.classList.add('text-indigo-600', 'font-medium');
            }
        });
    });
}

/**
 * 滚动到顶部按钮功能
 * 添加一个浮动按钮，点击可平滑滚动到页面顶部
 */
function initScrollToTop() {
    // 创建滚动到顶部按钮
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'fixed bottom-6 right-6 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all duration-300 opacity-0 invisible z-50';
    scrollToTopBtn.id = 'scrollToTop';
    scrollToTopBtn.title = '返回顶部';
    
    // 添加到页面
    document.body.appendChild(scrollToTopBtn);
    
    // 监听滚动事件，控制按钮显示/隐藏
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            // 显示按钮
            scrollToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
            scrollToTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
        } else {
            // 隐藏按钮
            scrollToTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
            scrollToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
        }
    });
    
    // 点击按钮滚动到顶部
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * 移动端侧边菜单功能
 * 实现侧边菜单的折叠和展开
 */
function initMobileMenu() {
    // 获取移动端菜单切换按钮和侧边菜单
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    // 如果元素不存在（在主页），则不初始化
    if (!menuToggle || !sidebarMenu || !menuIcon) {
        return;
    }
    
    // 设置初始状态
    sidebarMenu.style.display = 'none';
    
    // 监听菜单切换按钮的点击事件
    menuToggle.addEventListener('click', () => {
        // 切换侧边菜单的显示状态
        if (sidebarMenu.style.display === 'none' || sidebarMenu.style.display === '') {
            sidebarMenu.style.display = 'block';
            // 更换为关闭图标
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
        } else {
            sidebarMenu.style.display = 'none';
            // 更换为菜单图标
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        }
    });
    
    // 监听窗口大小变化，在大屏幕上显示菜单
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            sidebarMenu.style.display = 'block';
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        } else {
            sidebarMenu.style.display = 'none';
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        }
    });
}

/**
 * 章节搜索功能
 * 实现章节的实时搜索和过滤
 */
function initChapterSearch() {
    // 获取搜索框元素
    const searchInput = document.getElementById('chapter-search');
    
    // 如果搜索框不存在（在章节页面），则不初始化
    if (!searchInput) {
        return;
    }
    
    // 获取所有章节卡片
    const chapterGrid = document.getElementById('chapter-grid');
    const chapterCards = chapterGrid.querySelectorAll('.chapter-card');
    
    // 保存原始卡片HTML，用于重置搜索
    const originalCardsHTML = chapterGrid.innerHTML;
    
    // 监听搜索框的输入事件
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        // 如果搜索词为空，显示所有卡片
        if (searchTerm === '') {
            chapterGrid.innerHTML = originalCardsHTML;
            return;
        }
        
        // 过滤并显示匹配的卡片
        let hasMatches = false;
        chapterCards.forEach(card => {
            // 获取卡片文本内容
            const cardText = card.textContent.toLowerCase();
            
            // 检查是否匹配搜索词
            if (cardText.includes(searchTerm)) {
                card.style.display = 'block';
                hasMatches = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // 如果没有匹配结果，显示提示信息
        if (!hasMatches) {
            chapterGrid.innerHTML = `
                <div class="col-span-full text-center py-12 bg-white rounded-xl shadow-md">
                    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">未找到匹配的章节</h3>
                    <p class="text-gray-600">请尝试使用其他关键词搜索</p>
                    <button id="reset-search" class="mt-4 inline-block bg-indigo-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
                        清除搜索
                    </button>
                </div>
            `;
            
            // 添加重置搜索按钮的事件监听
            document.getElementById('reset-search').addEventListener('click', () => {
                searchInput.value = '';
                chapterGrid.innerHTML = originalCardsHTML;
            });
        }
    });
}