const express = require("express");
const Event = require("../Models/EventAdminModel");
const moment = require("moment");

exports.getEvents = async (req, res) => {
  try {
    const newEvent = await Event.find();
    res.status(200).json({ data: newEvent, message: "Succesfully Found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

exports.addEvents = async (req, res) => {
  try {
    const { title, description, location, date, image } = req.body;

    const dateFormate = moment(date, "DD-MM-YYYY").toDate();
    const newEvent = await Event.create({
      title,
      description,
      location,
      date: dateFormate,
      image,
    });

    res.status(200).json({ data: newEvent, message: "Succesfully created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

exports.deleteEvents = async (req, res) => {
  try {
    const eventId = req.params.id;
    console.log("event id" + eventId);
    const event = await Event.findByIdAndDelete(eventId);
    if (!event) {
      return res.status(500).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event succesfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

exports.updateEvents = async (req, res) => {
  try {
    const eventId = req.params.id;
    const { title, description, location, date , image } = req.body;
    const formDate = moment(date, "DD-MM-YYYY").toDate();
 
    const event = await Event.findByIdAndUpdate(
      eventId,
      {
        title,
        description,
        location,
        date: formDate,
        image,
      },
      { new: true }
    );

    if (!event) {
      return res.status(500).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event succesfully updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};


exports.getEventById = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    res.status(201).json({ data: event });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
