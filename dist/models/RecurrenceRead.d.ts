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
import { ObjectLink, Recurrence } from './';
/**
 *
 * @export
 * @interface RecurrenceRead
 */
export interface RecurrenceRead {
    /**
     * Immutable value
     * @type {string}
     * @memberof RecurrenceRead
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof RecurrenceRead
     */
    id: string;
    /**
     *
     * @type {Recurrence}
     * @memberof RecurrenceRead
     */
    attributes: Recurrence;
    /**
     *
     * @type {ObjectLink}
     * @memberof RecurrenceRead
     */
    links: ObjectLink;
}
export declare function RecurrenceReadFromJSON(json: any): RecurrenceRead;
export declare function RecurrenceReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurrenceRead;
export declare function RecurrenceReadToJSON(value?: RecurrenceRead | null): any;