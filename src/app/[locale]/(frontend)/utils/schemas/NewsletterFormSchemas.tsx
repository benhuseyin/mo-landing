import { z } from 'zod';


// Zod schema
export const contactSchema = z.object({
    fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
    email: z.email({ message: 'Please enter a valid email address' }),
    bday: z.string().min(1, { message: 'Please select your birthday' }),
    consent: z.boolean().refine(v => v === true, { message: 'Please accept to receive updates' })
});