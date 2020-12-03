import { prop } from '@typegoose/typegoose';

export class SubEntity {

    @prop({ required: true })
    length!: number;

    public getInfo() {
        return 'this is some info!'
    }

}
