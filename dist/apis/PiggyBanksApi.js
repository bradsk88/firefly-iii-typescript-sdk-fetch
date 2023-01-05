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
exports.PiggyBanksApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class PiggyBanksApi extends runtime.BaseAPI {
    /**
     * Delete a piggy bank.
     * Delete a piggy bank.
     */
    async deletePiggyBankRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling deletePiggyBank.');
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
            path: `/api/v1/piggy_banks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * Delete a piggy bank.
     * Delete a piggy bank.
     */
    async deletePiggyBank(requestParameters) {
        await this.deletePiggyBankRaw(requestParameters);
    }
    /**
     * Get a single piggy bank.
     * Get a single piggy bank.
     */
    async getPiggyBankRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling getPiggyBank.');
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
            path: `/api/v1/piggy_banks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PiggyBankSingleFromJSON)(jsonValue));
    }
    /**
     * Get a single piggy bank.
     * Get a single piggy bank.
     */
    async getPiggyBank(requestParameters) {
        const response = await this.getPiggyBankRaw(requestParameters);
        return await response.value();
    }
    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    async listAttachmentByPiggyBankRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling listAttachmentByPiggyBank.');
        }
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
            path: `/api/v1/piggy_banks/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AttachmentArrayFromJSON)(jsonValue));
    }
    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    async listAttachmentByPiggyBank(requestParameters) {
        const response = await this.listAttachmentByPiggyBankRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all events linked to a piggy bank (adding and removing money).
     * List all events linked to a piggy bank.
     */
    async listEventByPiggyBankRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling listEventByPiggyBank.');
        }
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
            path: `/api/v1/piggy_banks/{id}/events`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PiggyBankEventArrayFromJSON)(jsonValue));
    }
    /**
     * List all events linked to a piggy bank (adding and removing money).
     * List all events linked to a piggy bank.
     */
    async listEventByPiggyBank(requestParameters) {
        const response = await this.listEventByPiggyBankRaw(requestParameters);
        return await response.value();
    }
    /**
     * List all piggy banks.
     * List all piggy banks.
     */
    async listPiggyBankRaw(requestParameters) {
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
            path: `/api/v1/piggy_banks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PiggyBankArrayFromJSON)(jsonValue));
    }
    /**
     * List all piggy banks.
     * List all piggy banks.
     */
    async listPiggyBank(requestParameters) {
        const response = await this.listPiggyBankRaw(requestParameters);
        return await response.value();
    }
    /**
     * Creates a new piggy bank. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new piggy bank
     */
    async storePiggyBankRaw(requestParameters) {
        if (requestParameters.piggyBankStore === null || requestParameters.piggyBankStore === undefined) {
            throw new runtime.RequiredError('piggyBankStore', 'Required parameter requestParameters.piggyBankStore was null or undefined when calling storePiggyBank.');
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
            path: `/api/v1/piggy_banks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.PiggyBankStoreToJSON)(requestParameters.piggyBankStore),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PiggyBankSingleFromJSON)(jsonValue));
    }
    /**
     * Creates a new piggy bank. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new piggy bank
     */
    async storePiggyBank(requestParameters) {
        const response = await this.storePiggyBankRaw(requestParameters);
        return await response.value();
    }
    /**
     * Update existing piggy bank.
     * Update existing piggy bank.
     */
    async updatePiggyBankRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling updatePiggyBank.');
        }
        if (requestParameters.piggyBankUpdate === null || requestParameters.piggyBankUpdate === undefined) {
            throw new runtime.RequiredError('piggyBankUpdate', 'Required parameter requestParameters.piggyBankUpdate was null or undefined when calling updatePiggyBank.');
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
            path: `/api/v1/piggy_banks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.PiggyBankUpdateToJSON)(requestParameters.piggyBankUpdate),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PiggyBankSingleFromJSON)(jsonValue));
    }
    /**
     * Update existing piggy bank.
     * Update existing piggy bank.
     */
    async updatePiggyBank(requestParameters) {
        const response = await this.updatePiggyBankRaw(requestParameters);
        return await response.value();
    }
}
exports.PiggyBanksApi = PiggyBanksApi;