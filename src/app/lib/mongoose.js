import mongoose from "mongoose"

const connectToDb = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
            .then(() => {
                console.log('database connected')
            }).catch(err => console.log(err))
    } catch (error) {

    }
}

export default connectToDb