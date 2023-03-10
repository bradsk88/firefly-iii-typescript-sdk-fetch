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
exports.AutocompleteTransactionToJSON = exports.AutocompleteTransactionFromJSONTyped = exports.AutocompleteTransactionFromJSON = void 0;
const runtime_1 = require("../runtime");
function AutocompleteTransactionFromJSON(json) {
    return AutocompleteTransactionFromJSONTyped(json, false);
}
exports.AutocompleteTransactionFromJSON = AutocompleteTransactionFromJSON;
function AutocompleteTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'transactionGroupId': !(0, runtime_1.exists)(json, 'transaction_group_id') ? undefined : json['transaction_group_id'],
        'name': json['name'],
        'description': json['description'],
    };
}
exports.AutocompleteTransactionFromJSONTyped = AutocompleteTransactionFromJSONTyped;
function AutocompleteTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'transaction_group_id': value.transactionGroupId,
        'name': value.name,
        'description': value.description,
    };
}
exports.AutocompleteTransactionToJSON = AutocompleteTransactionToJSON;
