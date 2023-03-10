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
    PageLink,
    PageLinkFromJSON,
    PageLinkFromJSONTyped,
    PageLinkToJSON,
    WebhookRead,
    WebhookReadFromJSON,
    WebhookReadFromJSONTyped,
    WebhookReadToJSON,
} from './';

/**
 * 
 * @export
 * @interface WebhookArray
 */
export interface WebhookArray {
    /**
     * 
     * @type {Array<WebhookRead>}
     * @memberof WebhookArray
     */
    data: Array<WebhookRead>;
    /**
     * 
     * @type {Meta}
     * @memberof WebhookArray
     */
    meta: Meta;
    /**
     * 
     * @type {PageLink}
     * @memberof WebhookArray
     */
    links: PageLink;
}

export function WebhookArrayFromJSON(json: any): WebhookArray {
    return WebhookArrayFromJSONTyped(json, false);
}

export function WebhookArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(WebhookReadFromJSON)),
        'meta': MetaFromJSON(json['meta']),
        'links': PageLinkFromJSON(json['links']),
    };
}

export function WebhookArrayToJSON(value?: WebhookArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(WebhookReadToJSON)),
        'meta': MetaToJSON(value.meta),
        'links': PageLinkToJSON(value.links),
    };
}


