using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookWebApi.Models
{
    [Table("book")]
    public class Book
    {
        [Key]
        [Column("book_id")]
        public int BookId { get; set; }

        [Column("book_name")]
        public string BookName { get; set; }

        [Column("book_price")]
        public int BookPrice { get; set; }
    }
}
