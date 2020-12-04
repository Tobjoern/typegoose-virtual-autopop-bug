import { getModelForClass, prop } from '@typegoose/typegoose';


export class ReferenceEntity {

    @prop({ required: true, unique: true, type: String  })
    productId!: string;

}

export const ReferenceEntityModel = getModelForClass(ReferenceEntity, {
    schemaOptions: {
        timestamps: true
    }
})