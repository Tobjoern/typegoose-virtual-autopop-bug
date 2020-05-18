import { getModelForClass, prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';


export class ReferenceEntity extends TimeStamps {

    @prop({ required: true, unique: true, type: String  })
    productId!: string;

}

export const ReferenceEntityModel = getModelForClass(ReferenceEntity, {
    schemaOptions: {
        timestamps: true
    }
})