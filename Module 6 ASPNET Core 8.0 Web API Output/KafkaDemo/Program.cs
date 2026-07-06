using Confluent.Kafka;

var config = new ConsumerConfig
{
    BootstrapServers = "localhost:9092",
    GroupId = "demo-group",
    AutoOffsetReset = AutoOffsetReset.Earliest
};

using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();

consumer.Subscribe("demo-topic");

Console.WriteLine("Waiting for messages...");

while (true)
{
    var result = consumer.Consume();

    Console.WriteLine($"Received: {result.Message.Value}");
}