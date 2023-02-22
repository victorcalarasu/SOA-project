using BookWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookDbContext _dbContext;
        public BookController(BookDbContext bookDbContext)
        {
            _dbContext = bookDbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetBooks()
        {
            return _dbContext.Books; 
        }

        [HttpGet("{bookId:int}")]
        public async Task<ActionResult<Book>> GetById(int bookId)
        { 
            var book = await _dbContext.Books.FindAsync(bookId);
            return book;
        }

        [HttpPost]
        public async Task<ActionResult> Create(Book book)
        {
            await _dbContext.Books.AddAsync(book);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(Book book)
        {
            _dbContext.Books.Update(book);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{bookId:int}")]
        public async Task<ActionResult> Delete(int bookId)
        {
            var book = await _dbContext.Books.FindAsync(bookId);
            _dbContext.Books.Remove(book);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
