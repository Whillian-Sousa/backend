import mongoose from "mongoose";
import { Event } from '../entities/Event'
import { EventRepository }  from './EventRepository'



const eventSchema = new mongoose.Schema({
    title: String,
    location: {
        longitude: String,
        latitude: String
    },
    date: Date,
    createdAt:{
        type: Date,
        default: Date.now
    },
    description: String,
    categories: [String],
    banner: String,
    flyers: [String],
    price: {
        type: Array
    },
    city: String,
    participants: {
        type: Array,
        ref: 'User'
    }
})

const EventModel = mongoose.model('Event', eventSchema)

class EventRepositoryMongoose{
    async add(event: Event): Promise<Event> {
        const eventModel = new EventModel(event)

        await eventModel.save()
        return event; 
    }
}
export { EventRepositoryMongoose }