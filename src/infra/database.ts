import mongoose from "mongoose"

export async function connect(){
    try{
        await mongoose.connect('mongodb+srv://whillscf:r31d4v1@cluster0.3mwm4qd.mongodb.net/hero-tickets');
        console.log('Connect database success')
    } catch (error) {
        console.log("🚀 ~ file: database.ts:7 ~ connect ~ error:", error)
    }
}


