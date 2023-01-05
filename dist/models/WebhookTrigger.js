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
exports.WebhookTriggerToJSON = exports.WebhookTriggerFromJSONTyped = exports.WebhookTriggerFromJSON = exports.WebhookTrigger = void 0;
/**
 * The trigger for the webhook.
 * @export
 * @enum {string}
 */
var WebhookTrigger;
(function (WebhookTrigger) {
    WebhookTrigger["STORETRANSACTION"] = "TRIGGER_STORE_TRANSACTION";
    WebhookTrigger["UPDATETRANSACTION"] = "TRIGGER_UPDATE_TRANSACTION";
    WebhookTrigger["DESTROYTRANSACTION"] = "TRIGGER_DESTROY_TRANSACTION";
})(WebhookTrigger = exports.WebhookTrigger || (exports.WebhookTrigger = {}));
function WebhookTriggerFromJSON(json) {
    return WebhookTriggerFromJSONTyped(json, false);
}
exports.WebhookTriggerFromJSON = WebhookTriggerFromJSON;
function WebhookTriggerFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.WebhookTriggerFromJSONTyped = WebhookTriggerFromJSONTyped;
function WebhookTriggerToJSON(value) {
    return value;
}
exports.WebhookTriggerToJSON = WebhookTriggerToJSON;