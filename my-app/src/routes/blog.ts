import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from "@vishalrpr/medium-common";


export const blogRoute = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: any;
    }
}>();

blogRoute.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";


    try {
        const user = await verify(authHeader, c.env.JWT_SECRET)
        if (user) {
            c.set('userId', user.id)
            await next();
        } else {
            c.json(403);
            return c.json({ message: "you are not logged in" })

        }


    } catch (e) {
        c.json(403);
        return c.json({ message: "you are not logged in" })

    }


})

blogRoute.post('/', async (c) => {
    const body = await c.req.json();
    const authorId = c.get('userId')

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const parsedData = createBlogInput.safeParse(body)
    console.log(parsedData)
    if (!parsedData.success) {
        c.status(411)
        return c.json({ message: "invalid inputs for creating" })
    }
    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId


        }
    })
    return c.json({ id: blog.id })
})

blogRoute.put('/', async (c) => {

    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const parsedData = updateBlogInput.safeParse(body)
    if (!parsedData.success) {
        c.status(411)
        return c.json({ message: "invalid inputs for updating" })
    }


    const blog = await prisma.blog.update({
        where: {
            id: body.id

        }, data: {
            title: body.title,
            content: body.title
        }
    })
    return c.json({ id: blog.id })
})

blogRoute.get('/bulk', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {

        const blog = await prisma.blog.findMany({
            select: {
                content:true,
                id:true,
                title:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })
        return c.json(blog)

    } catch (e) {
        c.status(411)
        return c.text("unable to fetch the blogs")

    }


})



blogRoute.get('/:id', async (c) => {

    const id = await c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {

        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)

            },select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })
        return c.json(blog)

    } catch (e) {
        c.status(411)
        return c.text("unable to fetch the blog")

    }



})




