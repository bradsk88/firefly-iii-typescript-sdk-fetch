"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class PreferencesApi extends runtime.BaseAPI {
    /**
     * Return a single preference and the value.
     * Return a single preference.
     */
    async getPreferenceRaw(requestParameters) {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling getPreference.');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/preferences/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PreferenceSingleFromJSON)(jsonValue));
    }
    /**
     * Return a single preference and the value.
     * Return a single preference.
     */
    async getPreference(requestParameters) {
        const response = await this.getPreferenceRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all of the preferences of the user.
     * List all users preferences.
     */
    async listPreferenceRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/preferences`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PreferenceArrayFromJSON)(jsonValue));
    }
    /**
     * List all of the preferences of the user.
     * List all users preferences.
     */
    async listPreference(requestParameters) {
        const response = await this.listPreferenceRaw(requestParameters);
        return await response.value();
    }
    /**
     * This endpoint creates a new preference. The name and data are free-format, and entirely up to you. If the preference is not used in Firefly III itself it may not be configurable through the user interface, but you can use this endpoint to persist custom data for your own app.
     * Store a new preference for this user.
     */
    async storePreferenceRaw(requestParameters) {
        if (requestParameters.preference === null || requestParameters.preference === undefined) {
            throw new runtime.RequiredError('preference', 'Required parameter requestParameters.preference was null or undefined when calling storePreference.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/preferences`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.PreferenceToJSON)(requestParameters.preference),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PreferenceSingleFromJSON)(jsonValue));
    }
    /**
     * This endpoint creates a new preference. The name and data are free-format, and entirely up to you. If the preference is not used in Firefly III itself it may not be configurable through the user interface, but you can use this endpoint to persist custom data for your own app.
     * Store a new preference for this user.
     */
    async storePreference(requestParameters) {
        const response = await this.storePreferenceRaw(requestParameters);
        return await response.value();
    }
    /**
     * Update a user\'s preference.
     * Update preference
     */
    async updatePreferenceRaw(requestParameters) {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling updatePreference.');
        }
        if (requestParameters.preferenceUpdate === null || requestParameters.preferenceUpdate === undefined) {
            throw new runtime.RequiredError('preferenceUpdate', 'Required parameter requestParameters.preferenceUpdate was null or undefined when calling updatePreference.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/preferences/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.PreferenceUpdateToJSON)(requestParameters.preferenceUpdate),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PreferenceSingleFromJSON)(jsonValue));
    }
    /**
     * Update a user\'s preference.
     * Update preference
     */
    async updatePreference(requestParameters) {
        const response = await this.updatePreferenceRaw(requestParameters);
        return await response.value();
    }
}
exports.PreferencesApi = PreferencesApi;
