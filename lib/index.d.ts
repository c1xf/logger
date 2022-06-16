export declare class Logger {
    private moduleName;
    constructor(moduleName: string);
    debug(metaString: string, ...additional: any[]): void;
    info(metaString: string, ...additional: any[]): void;
    warn(metaString: string, ...additional: any[]): void;
    error(metaString: string, ...additional: any[]): void;
    private log;
}
export declare enum ErrorType {
    /** 未知的JS运行时错误 */
    JSRuntimeError = "JSRuntimeError",
    /** 客户端断网 */
    OfflineError = "HttpOfflineError",
    /** 请求超时 */
    HttpTimeoutError = "HttpTimeoutError",
    /** http status code !== 200 */
    HttpStatusError = "HttpStatusError",
    /** 表单验证未通过 */
    FormValidateError = "FormValidateError",
    /** 接口验证未通过 */
    HttpBizError = "HttpBizError"
}
