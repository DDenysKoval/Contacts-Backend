import express from "express";
import pino from 'pino-http';
import cors from 'cors';
import { getAllContacts } from "./servises/contacts.js";

const PORT = Number(process.env.PORT);

const setupServer = () => {

  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.use((req, res, next) => {
    res.status(404).json({
      message: "Not found"
    });
  });

  app.get("/contacts", async (res, req) => {
    const contacts = await getAllContacts();
    res.json({
      status: 200,
      message: "Successfully found contacts!",
      data: contacts,
    });
  });

  app.get("/contacts/:contactId", async (res, req, next) => {
    const {contactId} = req.params;
    const contact = await getAllContacts(contactId);
    if (!contact) {
      res.json({
        message: 'Contact not found',
      });
      return;
    }
    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

  });
};

export default setupServer;
