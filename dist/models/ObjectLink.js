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
exports.ObjectLinkToJSON = exports.ObjectLinkFromJSONTyped = exports.ObjectLinkFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function ObjectLinkFromJSON(json) {
    return ObjectLinkFromJSONTyped(json, false);
}
exports.ObjectLinkFromJSON = ObjectLinkFromJSON;
function ObjectLinkFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        '_0': !(0, runtime_1.exists)(json, '0') ? undefined : (0, _1.ObjectLink0FromJSON)(json['0']),
        'self': !(0, runtime_1.exists)(json, 'self') ? undefined : json['self'],
    };
}
exports.ObjectLinkFromJSONTyped = ObjectLinkFromJSONTyped;
function ObjectLinkToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '0': (0, _1.ObjectLink0ToJSON)(value._0),
        'self': value.self,
    };
}
exports.ObjectLinkToJSON = ObjectLinkToJSON;