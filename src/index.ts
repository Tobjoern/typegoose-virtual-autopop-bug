import mongoose from 'mongoose'
import { ExampleEntityModel } from './Example.entity'
import { ReferenceEntityModel } from './Reference.entity'

mongoose.connect('mongodb://localhost:27017/typegoose-bug', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(async () => {
    console.log('Connected!')

    // cleanup
    await ExampleEntityModel.deleteMany({})

    await ReferenceEntityModel.deleteMany({})

    const reference = new ReferenceEntityModel()

    reference.productId = 'prod_1'

    await reference.save()

    const example = new ExampleEntityModel()

    example.productId = 'prod_1'
    example.planInfo2 = reference

    await example.save()

    const fetcched = await ExampleEntityModel.findById(example._id)

    // This should also work!
    console.log(fetcched ? fetcched.planInfo : null);
    console.log(fetcched ? fetcched.planInfo2 : null);
    console.log('----------')
    const fetched2 = await ExampleEntityModel.findById(example._id).populate('planInfo')

    console.log(fetched2 ? fetched2.planInfo : null);
    console.log(fetched2 ? fetched2.planInfo2 : null);
})



