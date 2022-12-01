using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SPM.API.Data;
using SPM.API.models;

namespace SPM.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly SPMDbContext _sPMDbContext;
        public CustomerController(SPMDbContext sPMDbContext)
        {
            _sPMDbContext = sPMDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllCustomer()
        {
            var customers = await _sPMDbContext.Customers.ToListAsync();
            return Ok(customers);
        }

        [HttpPost]
        public async Task<IActionResult> AddCustomer([FromBody] Customer customerRequest)
        {
            customerRequest.Id= Guid.NewGuid();
            await _sPMDbContext.Customers.AddAsync(customerRequest);
            await _sPMDbContext.SaveChangesAsync();
            return Ok(customerRequest);

        }


    }
}
