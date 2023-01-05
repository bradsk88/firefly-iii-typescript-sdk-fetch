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
exports.DataDestroyObjectToJSON = exports.DataDestroyObjectFromJSONTyped = exports.DataDestroyObjectFromJSON = exports.DataDestroyObject = void 0;
/**
 *
 * @export
 * @enum {string}
 */
var DataDestroyObject;
(function (DataDestroyObject) {
    DataDestroyObject["Budgets"] = "budgets";
    DataDestroyObject["Bills"] = "bills";
    DataDestroyObject["PiggyBanks"] = "piggy_banks";
    DataDestroyObject["Rules"] = "rules";
    DataDestroyObject["Recurring"] = "recurring";
    DataDestroyObject["Categories"] = "categories";
    DataDestroyObject["Tags"] = "tags";
    DataDestroyObject["ObjectGroups"] = "object_groups";
    DataDestroyObject["Accounts"] = "accounts";
    DataDestroyObject["AssetAccounts"] = "asset_accounts";
    DataDestroyObject["ExpenseAccounts"] = "expense_accounts";
    DataDestroyObject["RevenueAccounts"] = "revenue_accounts";
    DataDestroyObject["Liabilities"] = "liabilities";
    DataDestroyObject["Transactions"] = "transactions";
    DataDestroyObject["Withdrawals"] = "withdrawals";
    DataDestroyObject["Deposits"] = "deposits";
    DataDestroyObject["Transfers"] = "transfers";
})(DataDestroyObject = exports.DataDestroyObject || (exports.DataDestroyObject = {}));
function DataDestroyObjectFromJSON(json) {
    return DataDestroyObjectFromJSONTyped(json, false);
}
exports.DataDestroyObjectFromJSON = DataDestroyObjectFromJSON;
function DataDestroyObjectFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.DataDestroyObjectFromJSONTyped = DataDestroyObjectFromJSONTyped;
function DataDestroyObjectToJSON(value) {
    return value;
}
exports.DataDestroyObjectToJSON = DataDestroyObjectToJSON;