import { getModelForClass, prop, getName, Ref, plugin, arrayProp } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { SubEntity } from './SubEntity';


class ExampleEntity extends TimeStamps {

    @prop({ required: true, unique: true, type: String })
    productId!: string;

    @prop({ required: true, type: () => [SubEntity] })
    subEntities!: SubEntity[]

    @arrayProp({ required: true, type: SubEntity })
    otherSubEntities!: SubEntity[]

}

export const ExampleEntityModel = getModelForClass(ExampleEntity, {
    schemaOptions: {
        timestamps: true
    }
})
