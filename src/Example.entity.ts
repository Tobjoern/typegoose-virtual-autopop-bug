import { getModelForClass, prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { SubEntity } from './SubEntity';


class ExampleEntity extends TimeStamps {

    @prop({ required: true })
    public name!: string;

    @prop({ type: () => [SubEntity], required: true })
    public catsProp!: SubEntity[];

    @prop({ type: [SubEntity] })
    public catsPropV2!: SubEntity[];    

}

export const ExampleEntityModel = getModelForClass(ExampleEntity, {
    schemaOptions: {
        timestamps: true
    }
})
