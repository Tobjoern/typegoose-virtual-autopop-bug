import { getModelForClass, prop, getName, Ref, plugin, arrayProp } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ReferenceEntity } from './Reference.entity';
import { SubEntity } from './SubEntity';


class ExampleEntity extends TimeStamps {

    @prop({ required: true, unique: true, type: String })
    productId!: string;

    @prop({ required: true, type: () => SubEntity })
    subEntities!: SubEntity[]

    @prop({ required: true, type: [SubEntity] })
    otherSubEntities!: SubEntity[]

    @prop({ ref: ReferenceEntity, required: true })
    referenceEntityA: Ref<ReferenceEntity>

    @prop({ ref: () => ReferenceEntity, required: true })
    referenceEntityB: Ref<ReferenceEntity>

}

export const ExampleEntityModel = getModelForClass(ExampleEntity, {
    schemaOptions: {
        timestamps: true
    }
})
