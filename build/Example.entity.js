var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { getModelForClass, prop, arrayProp } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { SubEntity } from './SubEntity';
class ExampleEntity extends TimeStamps {
}
__decorate([
    prop({ type: () => [SubEntity] }),
    __metadata("design:type", Array)
], ExampleEntity.prototype, "catsProp", void 0);
__decorate([
    prop({ type: [SubEntity] }),
    __metadata("design:type", Array)
], ExampleEntity.prototype, "catsPropV2", void 0);
__decorate([
    arrayProp({ type: SubEntity }),
    __metadata("design:type", Array)
], ExampleEntity.prototype, "catsArrProp", void 0);
export const ExampleEntityModel = getModelForClass(ExampleEntity, {
    schemaOptions: {
        timestamps: true
    }
});
//# sourceMappingURL=Example.entity.js.map