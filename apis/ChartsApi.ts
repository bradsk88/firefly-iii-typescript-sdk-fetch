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


import * as runtime from '../runtime';
import {
    ChartDataSet,
    ChartDataSetFromJSON,
    ChartDataSetToJSON,
} from '../models';

export interface GetChartAccountOverviewRequest {
    start: Date;
    end: Date;
}

/**
 * 
 */
export class ChartsApi extends runtime.BaseAPI {

    /**
     * This endpoint returns the data required to generate a chart with basic asset account balance information. 
     * Dashboard chart with asset account balance information.
     */
    async getChartAccountOverviewRaw(requestParameters: GetChartAccountOverviewRequest): Promise<runtime.ApiResponse<Array<ChartDataSet>>> {
        if (requestParameters.start === null || requestParameters.start === undefined) {
            throw new runtime.RequiredError('start','Required parameter requestParameters.start was null or undefined when calling getChartAccountOverview.');
        }

        if (requestParameters.end === null || requestParameters.end === undefined) {
            throw new runtime.RequiredError('end','Required parameter requestParameters.end was null or undefined when calling getChartAccountOverview.');
        }

        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString().substr(0,10);
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString().substr(0,10);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/chart/account/overview`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ChartDataSetFromJSON));
    }

    /**
     * This endpoint returns the data required to generate a chart with basic asset account balance information. 
     * Dashboard chart with asset account balance information.
     */
    async getChartAccountOverview(requestParameters: GetChartAccountOverviewRequest): Promise<Array<ChartDataSet>> {
        const response = await this.getChartAccountOverviewRaw(requestParameters);
        return await response.value();
    }

}
