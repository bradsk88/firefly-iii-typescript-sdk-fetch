"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v1.5.6
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2022-04-04T03:54:41+00:00
 *
 * The version of the OpenAPI document: 1.5.6
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlockedCodePropertyToJSON = exports.UserBlockedCodePropertyFromJSONTyped = exports.UserBlockedCodePropertyFromJSON = exports.UserBlockedCodeProperty = void 0;
/**
 * If you say the user must be blocked, this will be the reason code.
 * @export
 * @enum {string}
 */
var UserBlockedCodeProperty;
(function (UserBlockedCodeProperty) {
    UserBlockedCodeProperty["EmailChanged"] = "email_changed";
    UserBlockedCodeProperty["Null"] = "null";
})(UserBlockedCodeProperty = exports.UserBlockedCodeProperty || (exports.UserBlockedCodeProperty = {}));
function UserBlockedCodePropertyFromJSON(json) {
    return UserBlockedCodePropertyFromJSONTyped(json, false);
}
exports.UserBlockedCodePropertyFromJSON = UserBlockedCodePropertyFromJSON;
function UserBlockedCodePropertyFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.UserBlockedCodePropertyFromJSONTyped = UserBlockedCodePropertyFromJSONTyped;
function UserBlockedCodePropertyToJSON(value) {
    return value;
}
exports.UserBlockedCodePropertyToJSON = UserBlockedCodePropertyToJSON;
