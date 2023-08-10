import request from "supertest";
import { App } from "../app";
const app = new App()
const express = app.app
describe('Event test', () =>{
    
    it('/POST Event', async() =>{
        const event = {
            title: 'Jorge e Mateus',
            price: [{sector: 'pista', amount: '20'}],
            categories: ['Show'],
            description: 'Evento descrição',
            city: 'Belo Horizonte',
            location: {
                latitude: '-19.8658619',
                longitude: '-43.9737064'
            },
            coupons: [],
            date: new Date(),
            participants: [],
        };
        const response = await request(express)
            .post('/events')
            .field('title', event.title)
            .field('description', event.description)
            .field('city', event.city)
            .field('counpons', event.coupons)
            .field('location[latitude]', event.location.latitude)
            .field('location[longitude]', event.location.longitude)
            .field('price[sector]', event.price[0].sector)
            .field('price[amount]', event.price[0].amount)
            .attach('banner', '/home/Whillian/Pictures/banner.jpg')
            .attach('flyers', '/home/Whillian/Pictures/flyers1.jpg')
            .attach('flyers', '/home/Whillian/Pictures/flyers2.jpg');
        if (response.error){
            console.log("🚀 ~ file: Events.test.ts:35 ~ it ~ error:", response.error);
            
        }
            expect(response.status).toBe(201);
            expect(response.body).toEqual({ message: 'Evento criado com sucesso.' });
    });
});

