//Type inference in ZOD

import  { z }  from "zod"  
import express  from "express";

const app = express();

const userProfileSchema = z.object({
    name: z.string().min(1, {message: "Name cannot be empty"}),
    email: z.string().email({ message: "Invalid email format" }),
    age: z.number().min(18, {message: "You must be at least 18 years old"})
})

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
    const {success} = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body;

    if(!success){
       return res.status(411).json({});
    }

    res.json({
         message: "User updated"
    })
});

app.listen(3000, () => {
    console.log("listening at port 3000")
});