# Logger

为了发现以及定位线上问题，开发过程中应当记录好日志。

日志等级参考：<https://stackoverflow.com/questions/2031163/when-to-use-the-different-log-levels>，根据客户端的需要，取其中部分等级：

- Error，致命的错误，流程无法正常继续走下去
- Warn，可能的异常
- Info，一般有用的记录信息，应用启动/结束，页面加载/销毁等生命周期信息
- Debug，对错误诊断有帮助的信息

场景进一步细分：

- Error
  - 代码运行错误：JSRuntimeError
  - Http 请求相关错误
    - 客户端断网：OfflineError
    - 请求超时：TimeoutError
    - 200 以外的 HTTP 状态码：HttpStatusError。
- Warn
  - 表单验证不通过：FormValidateError
  - 接口验证不通过：HttpBizError
- Info
  - App onLaunch
  - Page onShow、onLoad
  - 用户当前设备信息
- Debug
  - 用户的操作以及操作结果
  - 与服务端交互的请求参数和请求结果
