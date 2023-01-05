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
exports.RecurrenceTransactionToJSON = exports.RecurrenceTransactionFromJSONTyped = exports.RecurrenceTransactionFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function RecurrenceTransactionFromJSON(json) {
    return RecurrenceTransactionFromJSONTyped(json, false);
}
exports.RecurrenceTransactionFromJSON = RecurrenceTransactionFromJSON;
function RecurrenceTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'amount': json['amount'],
        'foreignAmount': !(0, runtime_1.exists)(json, 'foreign_amount') ? undefined : json['foreign_amount'],
        'currencyId': !(0, runtime_1.exists)(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyDecimalPlaces': !(0, runtime_1.exists)(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
        'foreignCurrencyId': !(0, runtime_1.exists)(json, 'foreign_currency_id') ? undefined : json['foreign_currency_id'],
        'foreignCurrencyCode': !(0, runtime_1.exists)(json, 'foreign_currency_code') ? undefined : json['foreign_currency_code'],
        'foreignCurrencySymbol': !(0, runtime_1.exists)(json, 'foreign_currency_symbol') ? undefined : json['foreign_currency_symbol'],
        'foreignCurrencyDecimalPlaces': !(0, runtime_1.exists)(json, 'foreign_currency_decimal_places') ? undefined : json['foreign_currency_decimal_places'],
        'budgetId': !(0, runtime_1.exists)(json, 'budget_id') ? undefined : json['budget_id'],
        'budgetName': !(0, runtime_1.exists)(json, 'budget_name') ? undefined : json['budget_name'],
        'categoryId': !(0, runtime_1.exists)(json, 'category_id') ? undefined : json['category_id'],
        'categoryName': !(0, runtime_1.exists)(json, 'category_name') ? undefined : json['category_name'],
        'sourceId': !(0, runtime_1.exists)(json, 'source_id') ? undefined : json['source_id'],
        'sourceName': !(0, runtime_1.exists)(json, 'source_name') ? undefined : json['source_name'],
        'sourceIban': !(0, runtime_1.exists)(json, 'source_iban') ? undefined : json['source_iban'],
        'sourceType': !(0, runtime_1.exists)(json, 'source_type') ? undefined : (0, _1.AccountTypePropertyFromJSON)(json['source_type']),
        'destinationId': !(0, runtime_1.exists)(json, 'destination_id') ? undefined : json['destination_id'],
        'destinationName': !(0, runtime_1.exists)(json, 'destination_name') ? undefined : json['destination_name'],
        'destinationIban': !(0, runtime_1.exists)(json, 'destination_iban') ? undefined : json['destination_iban'],
        'destinationType': !(0, runtime_1.exists)(json, 'destination_type') ? undefined : (0, _1.AccountTypePropertyFromJSON)(json['destination_type']),
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        'piggyBankId': !(0, runtime_1.exists)(json, 'piggy_bank_id') ? undefined : json['piggy_bank_id'],
        'piggyBankName': !(0, runtime_1.exists)(json, 'piggy_bank_name') ? undefined : json['piggy_bank_name'],
    };
}
exports.RecurrenceTransactionFromJSONTyped = RecurrenceTransactionFromJSONTyped;
function RecurrenceTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'amount': value.amount,
        'foreign_amount': value.foreignAmount,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'foreign_currency_id': value.foreignCurrencyId,
        'foreign_currency_code': value.foreignCurrencyCode,
        'budget_id': value.budgetId,
        'category_id': value.categoryId,
        'category_name': value.categoryName,
        'source_id': value.sourceId,
        'source_name': value.sourceName,
        'source_type': (0, _1.AccountTypePropertyToJSON)(value.sourceType),
        'destination_id': value.destinationId,
        'destination_name': value.destinationName,
        'destination_type': (0, _1.AccountTypePropertyToJSON)(value.destinationType),
        'tags': value.tags,
        'piggy_bank_id': value.piggyBankId,
        'piggy_bank_name': value.piggyBankName,
    };
}
exports.RecurrenceTransactionToJSON = RecurrenceTransactionToJSON;