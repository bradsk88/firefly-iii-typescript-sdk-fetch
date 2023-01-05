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
exports.UserRolePropertyToJSON = exports.UserRolePropertyFromJSONTyped = exports.UserRolePropertyFromJSON = exports.UserRoleProperty = void 0;
/**
 * Role for the user. Can be empty or omitted.
 * @export
 * @enum {string}
 */
var UserRoleProperty;
(function (UserRoleProperty) {
    UserRoleProperty["Owner"] = "owner";
    UserRoleProperty["Demo"] = "demo";
    UserRoleProperty["Null"] = "null";
})(UserRoleProperty = exports.UserRoleProperty || (exports.UserRoleProperty = {}));
function UserRolePropertyFromJSON(json) {
    return UserRolePropertyFromJSONTyped(json, false);
}
exports.UserRolePropertyFromJSON = UserRolePropertyFromJSON;
function UserRolePropertyFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.UserRolePropertyFromJSONTyped = UserRolePropertyFromJSONTyped;
function UserRolePropertyToJSON(value) {
    return value;
}
exports.UserRolePropertyToJSON = UserRolePropertyToJSON;