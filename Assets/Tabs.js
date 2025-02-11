
function openTab(evt, tabName) {
    // 移除所有选项卡内容激活状态
    document.querySelectorAll('.tabcontent').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 添加当前选项卡激活状态
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
    
    // 存储当前选项卡状态
    localStorage.setItem('activeTab', tabName);
}

// 初始化选项卡状态
document.addEventListener('DOMContentLoaded', () => {
    const activeTab = localStorage.getItem('activeTab') || 'Tab1';
    const defaultTab = document.getElementById(activeTab);
    
    if (defaultTab) {
        defaultTab.classList.add('active');
        document.querySelector(`button[onclick*="${activeTab}"]`).classList.add('active');
    }
});