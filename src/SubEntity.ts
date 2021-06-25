import { prop } from '@typegoose/typegoose';

export class SubEntity {
    @prop({ required: true, type: String })
    value!: string;
}
