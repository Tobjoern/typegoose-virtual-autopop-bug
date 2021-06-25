import mongoose from 'mongoose'
import { ExampleEntityModel } from './Example.entity'
import { SubEntity } from './SubEntity'

console.log('The mongoose version:')
console.log(mongoose.version)

async function performTest(valKey: 'catsProp' | 'catsPropV2' | 'catsArrProp') {
    console.log("Performing test for: " + valKey)

    const cat = new SubEntity()

    cat.value = 'Johnson'

    const holder = new ExampleEntityModel()

    holder[valKey] = [cat]

    await holder.save()

    const retrived = await ExampleEntityModel.findOne({})

    if (retrived) {
        console.log(`Test for ${valKey} succeeded.`)

        await retrived.remove()
    }
}

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

    await performTest('catsArrProp')

    await performTest('catsProp')

    await performTest('catsPropV2')

    console.log("Done.")
})



