using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SPM.API.Data;
using SPM.API.models;

namespace SPM.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly SPMDbContext _sPMDbContext;
        public ProductsController(SPMDbContext sPMDbContext )
        {
            _sPMDbContext = sPMDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _sPMDbContext.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet]
        [Route("{id:Guid}")]
      
        public async Task<IActionResult> GetProduct([FromRoute] Guid id)
        {
            var product =
                await _sPMDbContext.Products.FirstOrDefaultAsync(x => x.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] Product productRequest) 
        {
            productRequest.Id = Guid.NewGuid();
            await _sPMDbContext.Products.AddAsync(productRequest);
            await _sPMDbContext.SaveChangesAsync();
            return Ok(productRequest);

        }


        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] Guid id, Product updateProductRequest)
        {
           var product = await _sPMDbContext.Products.FindAsync(id);
            if(product == null)
            {
                return NotFound();
            }
            product.productName = updateProductRequest.productName;
            product.productCode = updateProductRequest.productCode;
            product.tags = updateProductRequest.tags;
            product.price = updateProductRequest.price;
            product.description = updateProductRequest.description;

            await _sPMDbContext.SaveChangesAsync();
            return Ok(product);


        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] Guid id)
        {
            var product = await _sPMDbContext.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

             _sPMDbContext.Remove(product);
            await _sPMDbContext.SaveChangesAsync();
            return Ok(product);


        }
    }
}
