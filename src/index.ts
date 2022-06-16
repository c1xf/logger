enum LogLevel {
  Error = 'Error',
  Warn = 'Warn',
  Info = 'Info',
  Debug = 'Debug',
}

function getColor(level: LogLevel) {
  switch (level) {
    case LogLevel.Debug:
      return 'teal'
    case LogLevel.Info:
      return 'gray'
    case LogLevel.Warn:
    case LogLevel.Error:
      return 'red'
    default:
      return
  }
}

function prepareMetaString(
  timestamp: string,
  logLevel: LogLevel,
  moduleName: string,
  str: string
) {
  return `${timestamp} ${logLevel} ${moduleName || ''} ${str || ''}`
}

export class Logger {
  constructor(private moduleName: string) {}

  debug(metaString: string, ...additional: any[]) {
    this.log(LogLevel.Debug, metaString, ...additional)
  }

  info(metaString: string, ...additional: any[]) {
    this.log(LogLevel.Debug, metaString, ...additional)
  }

  warn(metaString: string, ...additional: any[]) {
    this.log(LogLevel.Debug, metaString, ...additional)
  }

  error(metaString: string, ...additional: any[]) {
    this.log(LogLevel.Debug, metaString, ...additional)
  }

  private log(level: LogLevel, metaString: string, ...additional: any[]) {
    metaString = prepareMetaString(
      new Date().toISOString(),
      level,
      this.moduleName,
      metaString
    )
    const color = getColor(level)

    switch (level) {
      case LogLevel.Warn:
        console.warn(`%c${metaString}`, `color:${color}`, ...additional)
        break
      case LogLevel.Error:
        console.error(`%c${metaString}`, `color:${color}`, ...additional)
        break
      case LogLevel.Info:
        console.info(`%c${metaString}`, `color:${color}`, ...additional)
        break
      default:
        console.log(`%c${metaString}`, `color:${color}`, ...additional)
    }
  }
}

export enum ErrorType {
  /** 未知的JS运行时错误 */
  JSRuntimeError = 'JSRuntimeError',
  /** 客户端断网 */
  OfflineError = 'HttpOfflineError',
  /** 请求超时 */
  HttpTimeoutError = 'HttpTimeoutError',
  /** http status code !== 200 */
  HttpStatusError = 'HttpStatusError',
  /** 表单验证未通过 */
  FormValidateError = 'FormValidateError',
  /** 接口验证未通过 */
  HttpBizError = 'HttpBizError',
}
