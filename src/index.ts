import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'graphql_first',
        user: 'postgres',
        password: 'postgres',
        type: 'postgresql',
        debug: !__prod__
    });

    const post = orm.create(Post, {title: "My first Post"});
    await orm.em.persistAndFlush(post);
}

console.log("HELLO there WORLD")