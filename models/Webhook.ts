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
    WebhookDelivery,
    WebhookDeliveryFromJSON,
    WebhookDeliveryFromJSONTyped,
    WebhookDeliveryToJSON,
    WebhookResponse,
    WebhookResponseFromJSON,
    WebhookResponseFromJSONTyped,
    WebhookResponseToJSON,
    WebhookTrigger,
    WebhookTriggerFromJSON,
    WebhookTriggerFromJSONTyped,
    WebhookTriggerToJSON,
} from './';

/**
 * 
 * @export
 * @interface Webhook
 */
export interface Webhook {
    /**
     * 
     * @type {Date}
     * @memberof Webhook
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Webhook
     */
    readonly updatedAt?: Date;
    /**
     * Boolean to indicate if the webhook is active
     * @type {boolean}
     * @memberof Webhook
     */
    active?: boolean;
    /**
     * A title for the webhook for easy recognition.
     * @type {string}
     * @memberof Webhook
     */
    title: string;
    /**
     * A 24-character secret for the webhook. It's generated by Firefly III when saving a new webhook. If you submit a new secret through the PUT endpoint it will generate a new secret for the selected webhook, a new secret bearing no relation to whatever you just submitted.
     * @type {string}
     * @memberof Webhook
     */
    readonly secret?: string;
    /**
     * 
     * @type {WebhookTrigger}
     * @memberof Webhook
     */
    trigger: WebhookTrigger;
    /**
     * 
     * @type {WebhookResponse}
     * @memberof Webhook
     */
    response: WebhookResponse;
    /**
     * 
     * @type {WebhookDelivery}
     * @memberof Webhook
     */
    delivery: WebhookDelivery;
    /**
     * The URL of the webhook. Has to start with `https`.
     * @type {string}
     * @memberof Webhook
     */
    url: string;
}

export function WebhookFromJSON(json: any): Webhook {
    return WebhookFromJSONTyped(json, false);
}

export function WebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): Webhook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'active': !exists(json, 'active') ? undefined : json['active'],
        'title': json['title'],
        'secret': !exists(json, 'secret') ? undefined : json['secret'],
        'trigger': WebhookTriggerFromJSON(json['trigger']),
        'response': WebhookResponseFromJSON(json['response']),
        'delivery': WebhookDeliveryFromJSON(json['delivery']),
        'url': json['url'],
    };
}

export function WebhookToJSON(value?: Webhook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'title': value.title,
        'trigger': WebhookTriggerToJSON(value.trigger),
        'response': WebhookResponseToJSON(value.response),
        'delivery': WebhookDeliveryToJSON(value.delivery),
        'url': value.url,
    };
}

