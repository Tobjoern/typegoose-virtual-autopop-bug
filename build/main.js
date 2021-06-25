var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from 'mongoose';
import { ExampleEntityModel } from './Example.entity';
import { SubEntity } from './SubEntity';
console.log('The mongoose version:');
console.log(mongoose.version);
mongoose.connect('mongodb://localhost:27017/experiments-2', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then((connection) => __awaiter(this, void 0, void 0, function* () {
    const collections = connection.connection.collections;
    for (const key of Object.keys(collections)) {
        yield collections[key].deleteMany({});
    }
    console.log('Connected!');
    const cat = new SubEntity();
    cat.value = 'Johnson';
    const holder = new ExampleEntityModel();
    holder.cats = [cat];
    yield holder.save();
    const retrived = yield ExampleEntityModel.findOne({});
    if (retrived) {
        console.log('Retrieval successful!');
        console.log(retrived.cats);
    }
    console.log("Done.");
}));
