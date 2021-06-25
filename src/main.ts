import mongoose from 'mongoose'
import { ExampleEntityModel } from './Example.entity'
import { SubEntity } from './SubEntity'


console.log('The mongoose version:')
console.log(mongoose.version)

mongoose.connect('mongodb://localhost:27017/experiments-2', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(async connection => {
    const collections = connection.connection.collections

    for (const key of Object.keys(collections)) {
        await collections[key].deleteMany({})
    }

    console.log('Connected!')

    const cat = new SubEntity()

    cat.value = 'Johnson'

    const holder = new ExampleEntityModel()

    holder.cats = [cat]

    await holder.save()

    const retrived = await ExampleEntityModel.findOne({})

    if (retrived) {
        console.log('Retrieval successful!')
        console.log(retrived.cats)
    }

    console.log("Done.")
})



