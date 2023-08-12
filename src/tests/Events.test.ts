import request from "supertest";
import { App } from "../app";
import { EventRepository } from "../repositories/EventRepository";
import { EventUseCase } from "../useCases/EventUseCase";
import { Event } from "../entities/Event";

const app = new App();
const express = app.app;

describe("Event test", () => {
  it("/POST Event", async () => {
    const event = {
      title: "Jorge e Mateus",
      price: [{ sector: "pista", amount: "20" }],
      categories: ["Show"],
      description: "Evento descrição",
      city: "Belo Horizonte",
      location: {
        latitude: "-19.8658619",
        longitude: "-43.9737064",
      },
      coupons: [],
      date: new Date(),
      participants: [],
    };
    const response = await request(express)
      .post("/events")
      .field("title", event.title)
      .field("description", event.description)
      .field("city", event.city)
      .field("counpons", event.coupons)
      .field("categories", event.categories)
      .field("location[latitude]", event.location.latitude)
      .field("location[longitude]", event.location.longitude)
      .field("date", event.date.toString())
      .field("price[sector]", event.price[0].sector)
      .field("price[amount]", event.price[0].amount)
      .attach("banner", "/home/Whillian/Pictures/banner.jpg")
      .attach("flyers", "/home/Whillian/Pictures/flyers1.jpg")
      .attach("flyers", "/home/Whillian/Pictures/flyers2.jpg");
    if (response.error) {
      console.log("🚀 ~ file: Events.test.ts:35 ~ it ~ error:", response.error);
    }
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: "Evento criado com sucesso." });
  });
});
const eventRepository = {
  add: jest.fn(),
  findEventsByCategory: jest.fn(),
  findByLocationAndData: jest.fn(),
  findEventsByCity: jest.fn(),
  findEventsByName: jest.fn(),
  findEventById: jest.fn(),
};
const eventUseCase = new EventUseCase(eventRepository);
const event: Event = {
  title: "Jorge e Mateus",
  price: [{ sector: "pista", amount: "20" }],
  categories: ["Show"],
  description: "Evento descrição",
  city: "Belo Horizonte",
  location: {
    latitude: "-19.8658619",
    longitude: "-43.9737064",
  },
  banner: "banner.jpg",
  flyers: ["flyer1.jpg", "flyer2.jpg"],
  coupons: [],
  date: new Date(),
  participants: [],
};
describe("Unit Test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Should return an array of events by category", async () => {
    eventRepository.findEventsByCategory.mockResolvedValue([event]);
    const result = await eventUseCase.findEventsByCategory("Show");

    expect(result).toEqual([event]);
    expect(eventRepository.findEventsByCategory).toHaveBeenCalledWith("Show");
  });
  it("Should return an array of events by Name", async () => {
    eventRepository.findEventsByName.mockResolvedValue([event]);
    const result = await eventUseCase.findEventsByName("Jorge e Mateus");

    expect(result).toEqual([event]);
    expect(eventRepository.findEventsByName).toHaveBeenCalledWith(
      "Jorge e Mateus"
    );
  });
  it("Should return a event by Id", async () => {
    eventRepository.findEventById.mockResolvedValue(event);
    const result = await eventUseCase.findEventById("64c10f9641b37087342412f5");

    expect(result).toEqual(event);
    expect(eventRepository.findEventById).toHaveBeenCalledWith(
      "64c10f9641b37087342412f5"
    );
  });
});
