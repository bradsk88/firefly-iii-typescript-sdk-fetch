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
exports.CronResultRowToJSON = exports.CronResultRowFromJSONTyped = exports.CronResultRowFromJSON = void 0;
const runtime_1 = require("../runtime");
function CronResultRowFromJSON(json) {
    return CronResultRowFromJSONTyped(json, false);
}
exports.CronResultRowFromJSON = CronResultRowFromJSON;
function CronResultRowFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jobFired': !(0, runtime_1.exists)(json, 'job_fired') ? undefined : json['job_fired'],
        'jobSucceeded': !(0, runtime_1.exists)(json, 'job_succeeded') ? undefined : json['job_succeeded'],
        'jobErrored': !(0, runtime_1.exists)(json, 'job_errored') ? undefined : json['job_errored'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.CronResultRowFromJSONTyped = CronResultRowFromJSONTyped;
function CronResultRowToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'job_fired': value.jobFired,
        'job_succeeded': value.jobSucceeded,
        'job_errored': value.jobErrored,
        'message': value.message,
    };
}
exports.CronResultRowToJSON = CronResultRowToJSON;
