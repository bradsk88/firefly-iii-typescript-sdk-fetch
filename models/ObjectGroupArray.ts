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
    Meta,
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
    ObjectGroupRead,
    ObjectGroupReadFromJSON,
    ObjectGroupReadFromJSONTyped,
    ObjectGroupReadToJSON,
} from './';

/**
 * 
 * @export
 * @interface ObjectGroupArray
 */
export interface ObjectGroupArray {
    /**
     * 
     * @type {Array<ObjectGroupRead>}
     * @memberof ObjectGroupArray
     */
    data: Array<ObjectGroupRead>;
    /**
     * 
     * @type {Meta}
     * @memberof ObjectGroupArray
     */
    meta: Meta;
}

export function ObjectGroupArrayFromJSON(json: any): ObjectGroupArray {
    return ObjectGroupArrayFromJSONTyped(json, false);
}

export function ObjectGroupArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObjectGroupArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ObjectGroupReadFromJSON)),
        'meta': MetaFromJSON(json['meta']),
    };
}

export function ObjectGroupArrayToJSON(value?: ObjectGroupArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(ObjectGroupReadToJSON)),
        'meta': MetaToJSON(value.meta),
    };
}


