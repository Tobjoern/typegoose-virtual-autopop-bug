import mongoose from 'mongoose'
import { ExampleEntityModel } from './Example.entity'

console.log('The mongoose version:')
console.log(mongoose.version)

Error.stackTraceLimit = Infinity;


async function doWork() {
    const holder = new ExampleEntityModel()

    // this should be noted in the trace
    await holder.save()
}

function anotherFunc() {
    // other stuff
    // const a = null as any

    // a.b = 'bar'
}

async function oneFunc() {
    anotherFunc()
    await doWork()
}

mongoose.connect('mongodb://localhost:27017/experiments-2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async connection => {
    const collections = connection.connection.collections

    for (const key of Object.keys(collections)) {
        await collections[key].deleteMany({})
    }

    console.log('Connected!')

    try {
        await oneFunc()
    } catch (e) {
        console.error(e)
    }

    // await performTest('catsArrProp')

    // await performTest('catsProp')

    // await performTest('catsPropV2')

    console.log("Done.")
})
