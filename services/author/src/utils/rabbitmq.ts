import amqp from 'amqplib'

let channel: amqp.Channel;
let connection: amqp.Connection;

export const connectRabbitMQ=async()=>{
    try {
        const connection=await amqp.connect({
            protocol:"amqp",
            hostname:"localhost",
            port: 5672,
            username: "admin",
            password: "admin123",

        });
        channel=await connection.createChannel();
        console.log("Connected to rabbitMQ");
    } catch (error) {
        console.log("failed connect to rabbitMQ",error);
    
    }
};

export const publishToQueue= async(queueName:string,message:any)=>{
    if(!channel){
        console.error("RabbitMQ channel is not initialized");
        return;
    }
    await channel.assertQueue(queueName,{durable:true});
    channel.sendToQueue(queueName,Buffer.from(JSON.stringify(message)),{
        persistent:true,
    });
};

export const invalidateCacheJob= async(cacheKeys: string[])=>{
    try {
        const message={
            action:"invalidateCache",
            keys:cacheKeys,
        };
        await publishToQueue("cache-invalidation",message)
        console.log("Cache invalidatin job published to Rabbitmq");
    } catch (error) {
        console.error("failed to published cached on rabbitMQ",error);
    
    }
}