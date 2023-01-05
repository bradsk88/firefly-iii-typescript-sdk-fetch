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
exports.RecurrenceRepetitionTypeToJSON = exports.RecurrenceRepetitionTypeFromJSONTyped = exports.RecurrenceRepetitionTypeFromJSON = exports.RecurrenceRepetitionType = void 0;
/**
 * The type of the repetition. ndom means: the n-th weekday of the month, where you can also specify which day of the week.
 * @export
 * @enum {string}
 */
var RecurrenceRepetitionType;
(function (RecurrenceRepetitionType) {
    RecurrenceRepetitionType["Daily"] = "daily";
    RecurrenceRepetitionType["Weekly"] = "weekly";
    RecurrenceRepetitionType["Ndom"] = "ndom";
    RecurrenceRepetitionType["Monthly"] = "monthly";
    RecurrenceRepetitionType["Yearly"] = "yearly";
})(RecurrenceRepetitionType = exports.RecurrenceRepetitionType || (exports.RecurrenceRepetitionType = {}));
function RecurrenceRepetitionTypeFromJSON(json) {
    return RecurrenceRepetitionTypeFromJSONTyped(json, false);
}
exports.RecurrenceRepetitionTypeFromJSON = RecurrenceRepetitionTypeFromJSON;
function RecurrenceRepetitionTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RecurrenceRepetitionTypeFromJSONTyped = RecurrenceRepetitionTypeFromJSONTyped;
function RecurrenceRepetitionTypeToJSON(value) {
    return value;
}
exports.RecurrenceRepetitionTypeToJSON = RecurrenceRepetitionTypeToJSON;