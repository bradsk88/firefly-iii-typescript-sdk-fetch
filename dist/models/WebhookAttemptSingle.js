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
exports.WebhookAttemptSingleToJSON = exports.WebhookAttemptSingleFromJSONTyped = exports.WebhookAttemptSingleFromJSON = void 0;
const _1 = require("./");
function WebhookAttemptSingleFromJSON(json) {
    return WebhookAttemptSingleFromJSONTyped(json, false);
}
exports.WebhookAttemptSingleFromJSON = WebhookAttemptSingleFromJSON;
function WebhookAttemptSingleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, _1.WebhookAttemptReadFromJSON)(json['data']),
    };
}
exports.WebhookAttemptSingleFromJSONTyped = WebhookAttemptSingleFromJSONTyped;
function WebhookAttemptSingleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, _1.WebhookAttemptReadToJSON)(value.data),
    };
}
exports.WebhookAttemptSingleToJSON = WebhookAttemptSingleToJSON;
