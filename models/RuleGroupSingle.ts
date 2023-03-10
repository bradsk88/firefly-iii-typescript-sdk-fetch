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
    RuleGroupRead,
    RuleGroupReadFromJSON,
    RuleGroupReadFromJSONTyped,
    RuleGroupReadToJSON,
} from './';

/**
 * 
 * @export
 * @interface RuleGroupSingle
 */
export interface RuleGroupSingle {
    /**
     * 
     * @type {RuleGroupRead}
     * @memberof RuleGroupSingle
     */
    data: RuleGroupRead;
}

export function RuleGroupSingleFromJSON(json: any): RuleGroupSingle {
    return RuleGroupSingleFromJSONTyped(json, false);
}

export function RuleGroupSingleFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleGroupSingle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': RuleGroupReadFromJSON(json['data']),
    };
}

export function RuleGroupSingleToJSON(value?: RuleGroupSingle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': RuleGroupReadToJSON(value.data),
    };
}


