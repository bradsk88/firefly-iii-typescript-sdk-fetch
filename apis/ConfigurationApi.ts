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
    ConfigValueFilter,
    ConfigValueFilterFromJSON,
    ConfigValueFilterToJSON,
    ConfigValueUpdateFilter,
    ConfigValueUpdateFilterFromJSON,
    ConfigValueUpdateFilterToJSON,
    ConfigurationSingle,
    ConfigurationSingleFromJSON,
    ConfigurationSingleToJSON,
    ModelConfiguration,
    ModelConfigurationFromJSON,
    ModelConfigurationToJSON,
    PolymorphicProperty,
    PolymorphicPropertyFromJSON,
    PolymorphicPropertyToJSON,
    ValidationError,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models';

export interface GetSingleConfigurationRequest {
    name: ConfigValueFilter;
}

export interface SetConfigurationRequest {
    name: ConfigValueUpdateFilter;
    value: PolymorphicProperty;
}

/**
 * 
 */
export class ConfigurationApi extends runtime.BaseAPI {

    /**
     * Returns all editable and not-editable configuration values for this Firefly III installation
     * Get Firefly III system configuration values.
     */
    async getConfigurationRaw(): Promise<runtime.ApiResponse<Array<ModelConfiguration>>> {
        const queryParameters: any = {};

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
            path: `/api/v1/configuration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelConfigurationFromJSON));
    }

    /**
     * Returns all editable and not-editable configuration values for this Firefly III installation
     * Get Firefly III system configuration values.
     */
    async getConfiguration(): Promise<Array<ModelConfiguration>> {
        const response = await this.getConfigurationRaw();
        return await response.value();
    }

    /**
     * Returns one configuration variable for this Firefly III installation
     * Get a single Firefly III system configuration value
     */
    async getSingleConfigurationRaw(requestParameters: GetSingleConfigurationRequest): Promise<runtime.ApiResponse<ConfigurationSingle>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getSingleConfiguration.');
        }

        const queryParameters: any = {};

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
            path: `/api/v1/configuration/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationSingleFromJSON(jsonValue));
    }

    /**
     * Returns one configuration variable for this Firefly III installation
     * Get a single Firefly III system configuration value
     */
    async getSingleConfiguration(requestParameters: GetSingleConfigurationRequest): Promise<ConfigurationSingle> {
        const response = await this.getSingleConfigurationRaw(requestParameters);
        return await response.value();
    }

    /**
     * Set a single configuration value. Not all configuration values can be updated so the list of accepted configuration variables is small.
     * Update configuration value
     */
    async setConfigurationRaw(requestParameters: SetConfigurationRequest): Promise<runtime.ApiResponse<ConfigurationSingle>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling setConfiguration.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling setConfiguration.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
            { contentType: 'application/json' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.value !== undefined) {
            formParams.append('value', requestParameters.value as any);
        }

        const response = await this.request({
            path: `/api/v1/configuration/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationSingleFromJSON(jsonValue));
    }

    /**
     * Set a single configuration value. Not all configuration values can be updated so the list of accepted configuration variables is small.
     * Update configuration value
     */
    async setConfiguration(requestParameters: SetConfigurationRequest): Promise<ConfigurationSingle> {
        const response = await this.setConfigurationRaw(requestParameters);
        return await response.value();
    }

}
