"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typegoose_1 = require("@typegoose/typegoose");
var defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
var Reference_entity_1 = require("./Reference.entity");
var mongoose_autopopulate_1 = __importDefault(require("mongoose-autopopulate"));
var ExampleEntity = /** @class */ (function (_super) {
    __extends(ExampleEntity, _super);
    function ExampleEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var _a, _b;
    __decorate([
        typegoose_1.prop({ required: true, unique: true, type: String }),
        __metadata("design:type", String)
    ], ExampleEntity.prototype, "productId", void 0);
    __decorate([
        typegoose_1.prop({ ref: typegoose_1.getName(Reference_entity_1.ReferenceEntity), foreignField: 'productId', localField: 'productId', autopopulate: true }),
        __metadata("design:type", typeof (_a = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _a : Object)
    ], ExampleEntity.prototype, "planInfo", void 0);
    __decorate([
        typegoose_1.prop({ ref: typegoose_1.getName(Reference_entity_1.ReferenceEntity), autopopulate: true }),
        __metadata("design:type", typeof (_b = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _b : Object)
    ], ExampleEntity.prototype, "planInfo2", void 0);
    ExampleEntity = __decorate([
        typegoose_1.plugin(mongoose_autopopulate_1.default)
    ], ExampleEntity);
    return ExampleEntity;
}(defaultClasses_1.TimeStamps));
exports.ExampleEntityModel = typegoose_1.getModelForClass(ExampleEntity, {
    schemaOptions: {
        timestamps: true
    }
});
