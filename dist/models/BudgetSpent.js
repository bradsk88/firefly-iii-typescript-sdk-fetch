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
exports.BudgetSpentToJSON = exports.BudgetSpentFromJSONTyped = exports.BudgetSpentFromJSON = void 0;
const runtime_1 = require("../runtime");
function BudgetSpentFromJSON(json) {
    return BudgetSpentFromJSONTyped(json, false);
}
exports.BudgetSpentFromJSON = BudgetSpentFromJSON;
function BudgetSpentFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sum': !(0, runtime_1.exists)(json, 'sum') ? undefined : json['sum'],
        'currencyId': !(0, runtime_1.exists)(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyDecimalPlaces': !(0, runtime_1.exists)(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
    };
}
exports.BudgetSpentFromJSONTyped = BudgetSpentFromJSONTyped;
function BudgetSpentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sum': value.sum,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'currency_symbol': value.currencySymbol,
        'currency_decimal_places': value.currencyDecimalPlaces,
    };
}
exports.BudgetSpentToJSON = BudgetSpentToJSON;
