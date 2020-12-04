import mongoose from 'mongoose'
import { ExampleEntityModel } from './Example.entity'
import { ReferenceEntity, ReferenceEntityModel } from './Reference.entity'
import { SubEntity } from './SubEntity'


console.log('The mongoose version:')
console.log(mongoose.version)

mongoose.connect('mongodb://localhost:27017/typegoose-bug-3', {
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

    await ReferenceEntityModel.deleteMany({})

    const exampleEntity = new ExampleEntityModel()

    const otherSubEnt = new SubEntity()

    otherSubEnt.length = 25

    const subEnt = new SubEntity()

    subEnt.length = 100

    const referenceEntity = new ReferenceEntityModel()

    referenceEntity.productId = 'product-id'

    await referenceEntity.save()

    exampleEntity.productId = 'blub'
    exampleEntity.subEntities = [subEnt]
    exampleEntity.otherSubEntities = [otherSubEnt]
    exampleEntity.referenceEntityA = referenceEntity
    exampleEntity.referenceEntityB = referenceEntity


    await exampleEntity.save()

    console.log('Getting entity A')
    const retrieved = await ExampleEntityModel.findById(exampleEntity._id).populate('referenceEntityA')

    // This fails! In order to test the Reference issue, uncomment the following two lines.
    // console.log('Getting entity B')
    // const retrievedB = await ExampleEntityModel.findById(exampleEntity._id).populate('referenceEntityB')

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



