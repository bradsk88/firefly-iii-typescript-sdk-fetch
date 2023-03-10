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
exports.RecurrenceReadToJSON = exports.RecurrenceReadFromJSONTyped = exports.RecurrenceReadFromJSON = void 0;
const _1 = require("./");
function RecurrenceReadFromJSON(json) {
    return RecurrenceReadFromJSONTyped(json, false);
}
exports.RecurrenceReadFromJSON = RecurrenceReadFromJSON;
function RecurrenceReadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': (0, _1.RecurrenceFromJSON)(json['attributes']),
        'links': (0, _1.ObjectLinkFromJSON)(json['links']),
    };
}
exports.RecurrenceReadFromJSONTyped = RecurrenceReadFromJSONTyped;
function RecurrenceReadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, _1.RecurrenceToJSON)(value.attributes),
        'links': (0, _1.ObjectLinkToJSON)(value.links),
    };
}
exports.RecurrenceReadToJSON = RecurrenceReadToJSON;
