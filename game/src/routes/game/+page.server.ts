
import prisma from '$lib/prisma';
import messages from '$lib/Dialog/messages';

export const load = (async () => {
  const messages = (await prisma.message.findMany({orderBy: [{order: 'asc'}]}))
  const events = await prisma.event.findMany();

  return { data: {
    messages, events
  } }
})