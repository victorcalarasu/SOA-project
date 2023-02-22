using MongoDB.Bson.Serialization.Attributes;

namespace OrderWebApi.Models
{
    [Serializable, BsonIgnoreExtraElements]
    public class OrderDetail
    {
        [BsonElement("book_id"), BsonRepresentation(MongoDB.Bson.BsonType.Int32)]
        public int BookId { get; set; }
        [BsonElement("quantity"), BsonRepresentation(MongoDB.Bson.BsonType.Int32)]
        public int Quantity { get; set; }
    }
}
