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
exports.ChartDataSetToJSON = exports.ChartDataSetFromJSONTyped = exports.ChartDataSetFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function ChartDataSetFromJSON(json) {
    return ChartDataSetFromJSONTyped(json, false);
}
exports.ChartDataSetFromJSON = ChartDataSetFromJSON;
function ChartDataSetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'label': !(0, runtime_1.exists)(json, 'label') ? undefined : json['label'],
        'currencyId': !(0, runtime_1.exists)(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyDecimalPlaces': !(0, runtime_1.exists)(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
        'startDate': !(0, runtime_1.exists)(json, 'start_date') ? undefined : (new Date(json['start_date'])),
        'endDate': !(0, runtime_1.exists)(json, 'end_date') ? undefined : (new Date(json['end_date'])),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'yAxisID': !(0, runtime_1.exists)(json, 'yAxisID') ? undefined : json['yAxisID'],
        'entries': !(0, runtime_1.exists)(json, 'entries') ? undefined : (json['entries'].map(_1.ChartDataPointFromJSON)),
    };
}
exports.ChartDataSetFromJSONTyped = ChartDataSetFromJSONTyped;
function ChartDataSetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'label': value.label,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'currency_symbol': value.currencySymbol,
        'currency_decimal_places': value.currencyDecimalPlaces,
        'start_date': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'end_date': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'type': value.type,
        'yAxisID': value.yAxisID,
        'entries': value.entries === undefined ? undefined : (value.entries.map(_1.ChartDataPointToJSON)),
    };
}
exports.ChartDataSetToJSON = ChartDataSetToJSON;