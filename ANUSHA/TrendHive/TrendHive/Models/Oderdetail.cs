using System.ComponentModel.DataAnnotations;

namespace TrendHive.Models
{
    public class Oderdetail
    {
        [Key]
        public int Orderid { get; set; }
        public string Dressid { get; set; }
        public string Username { get; set; }
        public string Address { get; set; }
        public string Location { get; set; }
        public string Pincode { get; set; }
        public string mobilenumber { get; set; }

    }
}
