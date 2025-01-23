ThunkableWebviewerExtension.receiveMessage(function(message) {
    alert("收到消息：" + message);
});
ThunkableWebviewerExtension.postMessage("Hello from Web");
