import { getModelForClass, prop, getName, Ref, plugin, arrayProp } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { SubEntity } from './SubEntity';


class ExampleEntity extends TimeStamps {

    @prop({ type: () => [SubEntity] })
    public catsProp!: SubEntity[];

    @prop({ type: [SubEntity] })
    public catsPropV2!: SubEntity[];

    @arrayProp({ type: SubEntity })
    public catsArrProp!: SubEntity[];

}

export const ExampleEntityModel = getModelForClass(ExampleEntity, {
    schemaOptions: {
        timestamps: true
    }
})
