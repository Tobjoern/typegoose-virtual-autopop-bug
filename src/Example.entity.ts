import { getModelForClass, prop, getName, Ref, plugin } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ReferenceEntity } from './Reference.entity'
import autoPop from 'mongoose-autopopulate'

@plugin(autoPop)
class ExampleEntity extends TimeStamps {

    @prop({ required: true, unique: true, type: String  })
    productId!: string;

    @prop({ ref: getName(ReferenceEntity), foreignField: 'productId', localField: 'productId', autopopulate: true })
    planInfo!: Ref<ReferenceEntity>;

    @prop({ ref: getName(ReferenceEntity), autopopulate: true })
    planInfo2!: Ref<ReferenceEntity>;

}

export const ExampleEntityModel = getModelForClass(ExampleEntity, {
    schemaOptions: {
        timestamps: true
    }
})