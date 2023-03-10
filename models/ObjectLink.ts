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

import { exists, mapValues } from '../runtime';
import {
    ObjectLink0,
    ObjectLink0FromJSON,
    ObjectLink0FromJSONTyped,
    ObjectLink0ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ObjectLink
 */
export interface ObjectLink {
    /**
     * 
     * @type {ObjectLink0}
     * @memberof ObjectLink
     */
    _0?: ObjectLink0;
    /**
     * 
     * @type {string}
     * @memberof ObjectLink
     */
    self?: string;
}

export function ObjectLinkFromJSON(json: any): ObjectLink {
    return ObjectLinkFromJSONTyped(json, false);
}

export function ObjectLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObjectLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_0': !exists(json, '0') ? undefined : ObjectLink0FromJSON(json['0']),
        'self': !exists(json, 'self') ? undefined : json['self'],
    };
}

export function ObjectLinkToJSON(value?: ObjectLink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '0': ObjectLink0ToJSON(value._0),
        'self': value.self,
    };
}


