import Joi from "joi";

export const RegisterSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password:Joi.string().min(8).max(20).required(),
      picturePath: Joi.string().required(),
      location: Joi.string().required(),  
    
})

export const LoginSchema = Joi.object({
    password: Joi.string().required().min(8).max(20),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),

})

export const PostSchema = Joi.object({
    description: Joi.string().required(),
    picturePath:Joi.string()

})

export const CommentSchema = Joi.object({
    comment: Joi.string().required(),
 
})