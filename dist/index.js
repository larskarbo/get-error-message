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
    if (err === null || err === void 0 ? void 0 : err.message) {
        var dataString = "";
        if (response === null || response === void 0 ? void 0 : response.data) {
            dataString = " data ➡️ " + JSON.stringify(response.data, null, 2);
        }
        return err.message + dataString;
    }
    return "Unknown Error";
}
exports.getErrorMessage = getErrorMessage;
