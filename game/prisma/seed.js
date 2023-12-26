// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import messages from "../src/lib/Dialog/messages.js"
import events from "../src/lib/Events/index.js";

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
    const e = events[0];
    const event = await prisma.Event.create({data: {
      event: e.event,
      message: e.message,
      completed: e.completed,
      indices: e.indices,
    }})
  }
  messages.prologue.chapter1.forEach(async (m, i) => {
   const message = await prisma.Message.create({data: {
    message: m.message,
    character: m.character,
    expression: m.expression,
    saga: 'Prologue',
    chapter: 'Chapter 1 - The Temple',
    order: i,
   }})
  })

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
  })