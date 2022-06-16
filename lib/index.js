var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "Error";
    LogLevel["Warn"] = "Warn";
    LogLevel["Info"] = "Info";
    LogLevel["Debug"] = "Debug";
})(LogLevel || (LogLevel = {}));
function getColor(level) {
    switch (level) {
        case LogLevel.Debug:
            return 'teal';
        case LogLevel.Info:
            return 'gray';
        case LogLevel.Warn:
        case LogLevel.Error:
            return 'red';
        default:
            return;
    }
}
function prepareMetaString(timestamp, logLevel, moduleName, str) {
    return `${timestamp} ${logLevel} ${moduleName || ''} ${str || ''}`;
}
export class Logger {
    constructor(moduleName) {
        this.moduleName = moduleName;
    }
    debug(metaString, ...additional) {
        this.log(LogLevel.Debug, metaString, ...additional);
    }
    info(metaString, ...additional) {
        this.log(LogLevel.Debug, metaString, ...additional);
    }
    warn(metaString, ...additional) {
        this.log(LogLevel.Debug, metaString, ...additional);
    }
    error(metaString, ...additional) {
        this.log(LogLevel.Debug, metaString, ...additional);
    }
    log(level, metaString, ...additional) {
        metaString = prepareMetaString(new Date().toISOString(), level, this.moduleName, metaString);
        const color = getColor(level);
        switch (level) {
            case LogLevel.Warn:
                console.warn(`%c${metaString}`, `color:${color}`, ...additional);
                break;
            case LogLevel.Error:
                console.error(`%c${metaString}`, `color:${color}`, ...additional);
                break;
            case LogLevel.Info:
                console.info(`%c${metaString}`, `color:${color}`, ...additional);
                break;
            default:
                console.log(`%c${metaString}`, `color:${color}`, ...additional);
        }
    }
}
export var ErrorType;
(function (ErrorType) {
    /** 未知的JS运行时错误 */
    ErrorType["JSRuntimeError"] = "JSRuntimeError";
    /** 客户端断网 */
    ErrorType["OfflineError"] = "HttpOfflineError";
    /** 请求超时 */
    ErrorType["HttpTimeoutError"] = "HttpTimeoutError";
    /** http status code !== 200 */
    ErrorType["HttpStatusError"] = "HttpStatusError";
    /** 表单验证未通过 */
    ErrorType["FormValidateError"] = "FormValidateError";
    /** 接口验证未通过 */
    ErrorType["HttpBizError"] = "HttpBizError";
})(ErrorType || (ErrorType = {}));
