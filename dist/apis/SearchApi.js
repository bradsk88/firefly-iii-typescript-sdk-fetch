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
exports.SearchApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class SearchApi extends runtime.BaseAPI {
    /**
     * Search for accounts
     * Search for accounts
     */
    async searchAccountsRaw(requestParameters) {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query', 'Required parameter requestParameters.query was null or undefined when calling searchAccounts.');
        }
        if (requestParameters.field === null || requestParameters.field === undefined) {
            throw new runtime.RequiredError('field', 'Required parameter requestParameters.field was null or undefined when calling searchAccounts.');
        }
        const queryParameters = {};
        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }
        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }
        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }
        if (requestParameters.field !== undefined) {
            queryParameters['field'] = requestParameters.field;
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
            path: `/api/v1/search/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AccountArrayFromJSON)(jsonValue));
    }
    /**
     * Search for accounts
     * Search for accounts
     */
    async searchAccounts(requestParameters) {
        const response = await this.searchAccountsRaw(requestParameters);
        return await response.value();
    }
    /**
     * Searches through the users transactions.
     * Search for transactions
     */
    async searchTransactionsRaw(requestParameters) {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query', 'Required parameter requestParameters.query was null or undefined when calling searchTransactions.');
        }
        const queryParameters = {};
        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }
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
            path: `/api/v1/search/transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TransactionArrayFromJSON)(jsonValue));
    }
    /**
     * Searches through the users transactions.
     * Search for transactions
     */
    async searchTransactions(requestParameters) {
        const response = await this.searchTransactionsRaw(requestParameters);
        return await response.value();
    }
}
exports.SearchApi = SearchApi;