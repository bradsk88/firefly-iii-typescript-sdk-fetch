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
exports.BillRepeatFrequencyToJSON = exports.BillRepeatFrequencyFromJSONTyped = exports.BillRepeatFrequencyFromJSON = exports.BillRepeatFrequency = void 0;
/**
 * How often the bill must be paid.
 * @export
 * @enum {string}
 */
var BillRepeatFrequency;
(function (BillRepeatFrequency) {
    BillRepeatFrequency["Weekly"] = "weekly";
    BillRepeatFrequency["Monthly"] = "monthly";
    BillRepeatFrequency["Quarterly"] = "quarterly";
    BillRepeatFrequency["HalfYear"] = "half-year";
    BillRepeatFrequency["Yearly"] = "yearly";
})(BillRepeatFrequency = exports.BillRepeatFrequency || (exports.BillRepeatFrequency = {}));
function BillRepeatFrequencyFromJSON(json) {
    return BillRepeatFrequencyFromJSONTyped(json, false);
}
exports.BillRepeatFrequencyFromJSON = BillRepeatFrequencyFromJSON;
function BillRepeatFrequencyFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.BillRepeatFrequencyFromJSONTyped = BillRepeatFrequencyFromJSONTyped;
function BillRepeatFrequencyToJSON(value) {
    return value;
}
exports.BillRepeatFrequencyToJSON = BillRepeatFrequencyToJSON;