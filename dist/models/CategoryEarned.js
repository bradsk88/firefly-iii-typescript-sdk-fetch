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
exports.CategoryEarnedToJSON = exports.CategoryEarnedFromJSONTyped = exports.CategoryEarnedFromJSON = void 0;
const runtime_1 = require("../runtime");
function CategoryEarnedFromJSON(json) {
    return CategoryEarnedFromJSONTyped(json, false);
}
exports.CategoryEarnedFromJSON = CategoryEarnedFromJSON;
function CategoryEarnedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currencyId': !(0, runtime_1.exists)(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyDecimalPlaces': !(0, runtime_1.exists)(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
        'sum': !(0, runtime_1.exists)(json, 'sum') ? undefined : json['sum'],
    };
}
exports.CategoryEarnedFromJSONTyped = CategoryEarnedFromJSONTyped;
function CategoryEarnedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'currency_symbol': value.currencySymbol,
        'currency_decimal_places': value.currencyDecimalPlaces,
        'sum': value.sum,
    };
}
exports.CategoryEarnedToJSON = CategoryEarnedToJSON;