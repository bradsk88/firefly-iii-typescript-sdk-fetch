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
exports.AttachmentsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AttachmentsApi extends runtime.BaseAPI {
    /**
     * With this endpoint you delete an attachment, including any stored file data.
     * Delete an attachment.
     */
    async deleteAttachmentRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling deleteAttachment.');
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
            path: `/api/v1/attachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * With this endpoint you delete an attachment, including any stored file data.
     * Delete an attachment.
     */
    async deleteAttachment(requestParameters) {
        await this.deleteAttachmentRaw(requestParameters);
    }
    /**
     * This endpoint allows you to download the binary content of a transaction. It will be sent to you as a download, using the content type \"application/octet-stream\" and content disposition \"attachment; filename=example.pdf\".
     * Download a single attachment.
     */
    async downloadAttachmentRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling downloadAttachment.');
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
            path: `/api/v1/attachments/{id}/download`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.BlobApiResponse(response);
    }
    /**
     * This endpoint allows you to download the binary content of a transaction. It will be sent to you as a download, using the content type \"application/octet-stream\" and content disposition \"attachment; filename=example.pdf\".
     * Download a single attachment.
     */
    async downloadAttachment(requestParameters) {
        const response = await this.downloadAttachmentRaw(requestParameters);
        return await response.value();
    }
    /**
     * Get a single attachment. This endpoint only returns the available metadata for the attachment. Actual file data is handled in two other endpoints (see below).
     * Get a single attachment.
     */
    async getAttachmentRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling getAttachment.');
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
            path: `/api/v1/attachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AttachmentSingleFromJSON)(jsonValue));
    }
    /**
     * Get a single attachment. This endpoint only returns the available metadata for the attachment. Actual file data is handled in two other endpoints (see below).
     * Get a single attachment.
     */
    async getAttachment(requestParameters) {
        const response = await this.getAttachmentRaw(requestParameters);
        return await response.value();
    }
    /**
     * This endpoint lists all attachments.
     * List all attachments.
     */
    async listAttachmentRaw(requestParameters) {
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
            path: `/api/v1/attachments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AttachmentArrayFromJSON)(jsonValue));
    }
    /**
     * This endpoint lists all attachments.
     * List all attachments.
     */
    async listAttachment(requestParameters) {
        const response = await this.listAttachmentRaw(requestParameters);
        return await response.value();
    }
    /**
     * Creates a new attachment. The data required can be submitted as a JSON body or as a list of parameters. You cannot use this endpoint to upload the actual file data (see below). This endpoint only creates the attachment object.
     * Store a new attachment.
     */
    async storeAttachmentRaw(requestParameters) {
        if (requestParameters.attachmentStore === null || requestParameters.attachmentStore === undefined) {
            throw new runtime.RequiredError('attachmentStore', 'Required parameter requestParameters.attachmentStore was null or undefined when calling storeAttachment.');
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
            path: `/api/v1/attachments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.AttachmentStoreToJSON)(requestParameters.attachmentStore),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AttachmentSingleFromJSON)(jsonValue));
    }
    /**
     * Creates a new attachment. The data required can be submitted as a JSON body or as a list of parameters. You cannot use this endpoint to upload the actual file data (see below). This endpoint only creates the attachment object.
     * Store a new attachment.
     */
    async storeAttachment(requestParameters) {
        const response = await this.storeAttachmentRaw(requestParameters);
        return await response.value();
    }
    /**
     * Update the meta data for an existing attachment. This endpoint does not allow you to upload or download data. For that, see below.
     * Update existing attachment.
     */
    async updateAttachmentRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling updateAttachment.');
        }
        if (requestParameters.attachmentUpdate === null || requestParameters.attachmentUpdate === undefined) {
            throw new runtime.RequiredError('attachmentUpdate', 'Required parameter requestParameters.attachmentUpdate was null or undefined when calling updateAttachment.');
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
            path: `/api/v1/attachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.AttachmentUpdateToJSON)(requestParameters.attachmentUpdate),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AttachmentSingleFromJSON)(jsonValue));
    }
    /**
     * Update the meta data for an existing attachment. This endpoint does not allow you to upload or download data. For that, see below.
     * Update existing attachment.
     */
    async updateAttachment(requestParameters) {
        const response = await this.updateAttachmentRaw(requestParameters);
        return await response.value();
    }
    /**
     * Use this endpoint to upload (and possible overwrite) the file contents of an attachment. Simply put the entire file in the body as binary data.
     * Upload an attachment.
     */
    async uploadAttachmentRaw(requestParameters) {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling uploadAttachment.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/octet-stream';
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
            path: `/api/v1/attachments/{id}/upload`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * Use this endpoint to upload (and possible overwrite) the file contents of an attachment. Simply put the entire file in the body as binary data.
     * Upload an attachment.
     */
    async uploadAttachment(requestParameters) {
        await this.uploadAttachmentRaw(requestParameters);
    }
}
exports.AttachmentsApi = AttachmentsApi;
