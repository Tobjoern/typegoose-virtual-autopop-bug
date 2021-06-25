import { getModelForClass, prop, getName, Ref, plugin, arrayProp } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { SubEntity } from './SubEntity';


class ExampleEntity extends TimeStamps {

    @arrayProp({ type: SubEntity })
    public cats!: SubEntity[];

}

export const ExampleEntityModel = getModelForClass(ExampleEntity, {
    schemaOptions: {
        timestamps: true
    }
})
