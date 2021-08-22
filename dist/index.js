"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = void 0;
function getErrorMessage(err) {
    var _a;
    if (!err) {
        return null;
    }
    var response = err.response;
    if (response) {
        if (typeof response === "string") {
            return response;
        }
        else if (response.data) {
            if (response.data.message) {
                return response.data.message;
            }
            if ((_a = response.data.error) === null || _a === void 0 ? void 0 : _a.message) {
                return response.data.error.message;
            }
            if (typeof response.data == "string") {
                return response.data;
            }
        }
    }
    if (typeof err === "string") {
        return err;
    }
    return ((err && err.message ? err.message : "Unknown Error") || "Unknown Error");
}
exports.getErrorMessage = getErrorMessage;
