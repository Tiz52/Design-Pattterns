"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.OfficeDialog = void 0;
var office_button_1 = require("../../product/concrete/office-button");
var dialog_creator_1 = require("../abstract/dialog-creator");
var OfficeDialog = /** @class */ (function (_super) {
    __extends(OfficeDialog, _super);
    function OfficeDialog() {
        return _super.call(this) || this;
    }
    // Factory Method (Concrete)
    OfficeDialog.prototype.createButton = function () {
        return new office_button_1.OfficeButton();
    };
    return OfficeDialog;
}(dialog_creator_1.DialogCreator));
exports.OfficeDialog = OfficeDialog;
