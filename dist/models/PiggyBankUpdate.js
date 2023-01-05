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
exports.PiggyBankUpdateToJSON = exports.PiggyBankUpdateFromJSONTyped = exports.PiggyBankUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
function PiggyBankUpdateFromJSON(json) {
    return PiggyBankUpdateFromJSONTyped(json, false);
}
exports.PiggyBankUpdateFromJSON = PiggyBankUpdateFromJSON;
function PiggyBankUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'accountId': !(0, runtime_1.exists)(json, 'account_id') ? undefined : json['account_id'],
        'currencyId': !(0, runtime_1.exists)(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currency_code') ? undefined : json['currency_code'],
        'targetAmount': !(0, runtime_1.exists)(json, 'target_amount') ? undefined : json['target_amount'],
        'currentAmount': !(0, runtime_1.exists)(json, 'current_amount') ? undefined : json['current_amount'],
        'startDate': !(0, runtime_1.exists)(json, 'start_date') ? undefined : (new Date(json['start_date'])),
        'targetDate': !(0, runtime_1.exists)(json, 'target_date') ? undefined : (json['target_date'] === null ? null : new Date(json['target_date'])),
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'active': !(0, runtime_1.exists)(json, 'active') ? undefined : json['active'],
        'notes': !(0, runtime_1.exists)(json, 'notes') ? undefined : json['notes'],
        'objectGroupId': !(0, runtime_1.exists)(json, 'object_group_id') ? undefined : json['object_group_id'],
        'objectGroupTitle': !(0, runtime_1.exists)(json, 'object_group_title') ? undefined : json['object_group_title'],
    };
}
exports.PiggyBankUpdateFromJSONTyped = PiggyBankUpdateFromJSONTyped;
function PiggyBankUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'account_id': value.accountId,
        'target_amount': value.targetAmount,
        'current_amount': value.currentAmount,
        'start_date': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0, 10)),
        'target_date': value.targetDate === undefined ? undefined : (value.targetDate === null ? null : value.targetDate.toISOString().substr(0, 10)),
        'order': value.order,
        'notes': value.notes,
        'object_group_id': value.objectGroupId,
        'object_group_title': value.objectGroupTitle,
    };
}
exports.PiggyBankUpdateToJSON = PiggyBankUpdateToJSON;