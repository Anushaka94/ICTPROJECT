using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TrendHive.Data;
using TrendHive.Models;

namespace TrendHive.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ValuesController(ApplicationDbContext context)
        {
            _context = context;

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dressdetail>>> GetProducts()
        {
            return  _context.dressdetails.ToList();
        }



        [HttpPost("login")]
        public async Task<ActionResult<Userlogin>> Login(Userlogin user)
        {
            // Find user by username
            var userlogin =  _context.userlogins.SingleOrDefault(u => u.username == user.username);

            if (userlogin == null || user.password != userlogin.password)
            {
                return Unauthorized("Invalid username or password.");
            }

            var role = "";

            if (userlogin.id == 1)
            {
                role = "User";
            }
            else if (userlogin.id == 2)
            {
                role = "Admin";
            }
           
            return Ok(new { message = "Login successful", role });
        }

        [HttpPost("register")]
        public async Task<ActionResult<Userlogin>> Register(Userlogin users)
        {
            if (_context.userlogins.Any(u => u.username == users.username))
            {
                return BadRequest("Username already exists.");
            }
            var user = new Userlogin
            {
                username = users.username,
                password = users.password,
                id = users.id

            };
            _context.userlogins.Add(user);
            _context.SaveChanges();
            return Ok("Successfully registerd new employee");
        }


        [HttpPut("updatedressdetails")]
        public async Task<ActionResult> UpdateDress(int dressid, [FromBody] Dressdetail updatedDress)
        {
            var existingDress = await _context.dressdetails.FindAsync(dressid);

            if (existingDress == null)
            {
                return NotFound(new { message = "Dress not found." });
            }

            // Update properties
            existingDress.price = updatedDress.price;
            existingDress.size = updatedDress.size;
            existingDress.Dressname = updatedDress.Dressname;
            existingDress.photo = updatedDress.photo;

            await _context.SaveChangesAsync();

            return Ok(new { message = "Dress details updated successfully.", updatedDress });
        }

        //......

        [HttpDelete("deletedetails")]
        public async Task<ActionResult> DeleteDress(int dressid)
        {
            var existingDress = await _context.dressdetails.FindAsync(dressid);

            if (existingDress == null)
            {
                return NotFound(new { message = "Dress not found." });
            }

            _context.dressdetails.Remove(existingDress);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Dress deleted successfully." });
        }



        //........................................................



        [HttpPost("admin")]
        public async Task<ActionResult<Dressdetail>> Register(Dressdetail dress)
        {
            if (_context.dressdetails.Any(d => d.dressid == dress.dressid))
            {
                return BadRequest("Dress ID already exists.");
            }

            var newDress = new Dressdetail
            {
                price = dress.price,
                size = dress.size,
                Dressname = dress.Dressname,
                dressid = dress.dressid,
                photo = dress.photo
            };

            _context.dressdetails.Add(newDress);
            await _context.SaveChangesAsync();
            return Ok("Successfully registered new dress.");
        }


        [HttpPost("user")]
        public async Task<ActionResult<Oderdetail>> userorder(Oderdetail dress)
        {
            if (_context.oderdetails.Any(d => d.Orderid == dress.Orderid))
            {
                return BadRequest("Dress ID already exists.");
            }

            var neworder = new Oderdetail
            {
                Username = dress.Username,
                Address = dress.Address,
                Location = dress.Location,
                Pincode = dress.Pincode,
                mobilenumber = dress.mobilenumber,
                Dressid=dress.Dressid

            };

            _context.oderdetails.Add(neworder);
            await _context.SaveChangesAsync();
            return Ok("Successfully registered new dress.");
        }
    }



}

