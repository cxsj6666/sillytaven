// phone-notify.js - AI 主动发手机通知扩展

console.log("[Phone Notify] 扩展加载成功");

// 监听 AI 消息，检测关键词后模拟通知（后续可换 WebSocket）
document.addEventListener('message', function(event) {
    const message = event.detail?.message;
    if (!message || message.isUser) return;

    const text = message.mes || '';
    if (text.includes('[手机通知]') || text.includes('你在干嘛') || text.includes('该起床了')) {
        console.log(`[Phone Notify] 检测到需要推送：${text}`);
        // 后续在这里连接 WebSocket 发送给 Termux
    }
});

// 可选：扩展设置
extensionSettings = {
    enabled: true,
    keywords: ['[手机通知]', '你在干嘛', '想你了']
};
