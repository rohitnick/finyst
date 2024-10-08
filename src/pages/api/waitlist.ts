import { kv } from '@vercel/kv';
import { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { email, plan } = request.body;

  // Retrieve the user data if it exists
  const user = await kv.get(`waitlist:${email}`);

  if (!plan) {
      if (!user) {
          // Save the email if no entry exists
          await kv.set(`waitlist:${email}`, { email });
      }
      return response.status(200).json({ message: 'Email saved successfully.' });
  }

  // Create a new entry with both email and plan
  await kv.set(`waitlist:${email}`, { email, plan });
  return response.status(200).json({ message: 'Email and plan saved successfully.' });
}
