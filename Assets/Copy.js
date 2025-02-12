
document.addEventListener('DOMContentLoaded', () => {
    // 复制功能初始化
    document.querySelectorAll('.tabcontent p').forEach(p => {
        p.addEventListener('click', handleCopy);
    });
});

function handleCopy(event) {
    const copyText = event.target.innerText;
    const copyMessage = document.getElementById('copyMessage');
    
    // 创建临时文本域
    const textarea = document.createElement('textarea');
    textarea.value = copyText;
    document.body.appendChild(textarea);
    
    // 执行复制操作
    try {
        textarea.select();
        document.execCommand('copy');
        showFeedback(copyMessage);
    } catch (err) {
        console.error('复制失败:', err);
    } finally {
        document.body.removeChild(textarea);
    }
}