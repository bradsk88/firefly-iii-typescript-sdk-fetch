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
 *
 * TOO BAD. This code gen is broken!
 * https://github.com/OpenAPITools/openapi-generator/issues/5202
 */

/**
 * @type PolymorphicProperty
 * 
 * @export
 */
export type PolymorphicProperty = Array<string> | boolean | object | string;

export function PolymorphicPropertyFromJSON(json: any): PolymorphicProperty {
    return PolymorphicPropertyFromJSONTyped(json, false);
}

export function PolymorphicPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolymorphicProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return JSON.parse(json);
}

export function PolymorphicPropertyToJSON(value?: PolymorphicProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return { ...stringArrayToJSON(value), ...booleanToJSON(value), ...objectToJSON(value), ...stringToJSON(value) };
}

function booleanToJSON(v: PolymorphicProperty | null): Array<string> {
    return [`${v}`];
}

function objectToJSON(v: PolymorphicProperty | null): Array<string> {
    return [`${JSON.stringify(v)}`];
}

function stringToJSON(v: PolymorphicProperty | null): Array<string> {
    return [`"${v}"`];
}

function stringArrayToJSON(v: PolymorphicProperty | null): Array<string> {
    return v as any as Array<string>;
}