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
exports.CurrencyUpdateDefaultEnum = exports.CurrencyUpdateToJSON = exports.CurrencyUpdateFromJSONTyped = exports.CurrencyUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
function CurrencyUpdateFromJSON(json) {
    return CurrencyUpdateFromJSONTyped(json, false);
}
exports.CurrencyUpdateFromJSON = CurrencyUpdateFromJSON;
function CurrencyUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabled': !(0, runtime_1.exists)(json, 'enabled') ? undefined : json['enabled'],
        '_default': !(0, runtime_1.exists)(json, 'default') ? undefined : json['default'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'symbol': !(0, runtime_1.exists)(json, 'symbol') ? undefined : json['symbol'],
        'decimalPlaces': !(0, runtime_1.exists)(json, 'decimal_places') ? undefined : json['decimal_places'],
    };
}
exports.CurrencyUpdateFromJSONTyped = CurrencyUpdateFromJSONTyped;
function CurrencyUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabled': value.enabled,
        'default': value._default,
        'code': value.code,
        'name': value.name,
        'symbol': value.symbol,
        'decimal_places': value.decimalPlaces,
    };
}
exports.CurrencyUpdateToJSON = CurrencyUpdateToJSON;
/**
* @export
* @enum {string}
*/
var CurrencyUpdateDefaultEnum;
(function (CurrencyUpdateDefaultEnum) {
    CurrencyUpdateDefaultEnum["True"] = "true";
})(CurrencyUpdateDefaultEnum = exports.CurrencyUpdateDefaultEnum || (exports.CurrencyUpdateDefaultEnum = {}));
