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
    ObjectLink,
    ObjectLinkFromJSON,
    ObjectLinkFromJSONTyped,
    ObjectLinkToJSON,
    TransactionLink,
    TransactionLinkFromJSON,
    TransactionLinkFromJSONTyped,
    TransactionLinkToJSON,
} from './';

/**
 * 
 * @export
 * @interface TransactionLinkRead
 */
export interface TransactionLinkRead {
    /**
     * Immutable value
     * @type {string}
     * @memberof TransactionLinkRead
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionLinkRead
     */
    id: string;
    /**
     * 
     * @type {TransactionLink}
     * @memberof TransactionLinkRead
     */
    attributes: TransactionLink;
    /**
     * 
     * @type {ObjectLink}
     * @memberof TransactionLinkRead
     */
    links: ObjectLink;
}

export function TransactionLinkReadFromJSON(json: any): TransactionLinkRead {
    return TransactionLinkReadFromJSONTyped(json, false);
}

export function TransactionLinkReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionLinkRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': TransactionLinkFromJSON(json['attributes']),
        'links': ObjectLinkFromJSON(json['links']),
    };
}

export function TransactionLinkReadToJSON(value?: TransactionLinkRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': TransactionLinkToJSON(value.attributes),
        'links': ObjectLinkToJSON(value.links),
    };
}


