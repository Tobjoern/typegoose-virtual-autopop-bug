import mongoose from 'mongoose'
import { ExampleEntityModel } from './Example.entity'
import { SubEntity } from './SubEntity'


console.log('The mongoose version:')
console.log(mongoose.version)

mongoose.connect('mongodb://localhost:27017/typegoose-bug-2', {
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

    await ExampleEntityModel.deleteMany({})

    const exampleEntity = new ExampleEntityModel()

    const otherSubEnt = new SubEntity()

    otherSubEnt.length = 25

    const subEnt = new SubEntity()

    subEnt.length = 100

    exampleEntity.productId = 'blub'
    exampleEntity.subEntities = [subEnt]
    exampleEntity.otherSubEntities = [otherSubEnt]

    await exampleEntity.save()

    const retrieved = await ExampleEntityModel.findById(exampleEntity._id)

    if (retrieved) {
        // console.log(retrieved)

        console.log('Using normal type')
        retrieved.otherSubEntities.forEach(retSubEnt => {
            console.log(retSubEnt.getInfo())
        })
        console.log('Using arrow function type')
        retrieved.subEntities.forEach(retSubEnt => {
            console.log(retSubEnt.getInfo())
        })
    }
})



