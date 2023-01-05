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
/**
 * 
 * @export
 * @interface ObjectGroup
 */
export interface ObjectGroup {
    /**
     * 
     * @type {Date}
     * @memberof ObjectGroup
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ObjectGroup
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof ObjectGroup
     */
    title: string;
    /**
     * Order of the object group
     * @type {number}
     * @memberof ObjectGroup
     */
    order: number;
}

export function ObjectGroupFromJSON(json: any): ObjectGroup {
    return ObjectGroupFromJSONTyped(json, false);
}

export function ObjectGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObjectGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'title': json['title'],
        'order': json['order'],
    };
}

export function ObjectGroupToJSON(value?: ObjectGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'order': value.order,
    };
}

