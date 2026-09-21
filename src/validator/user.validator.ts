import z from "zod/v3";

export const userSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    phone: z.string().min(1),
    address: z.string().min(1),

});

 