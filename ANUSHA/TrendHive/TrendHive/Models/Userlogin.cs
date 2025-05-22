using System.ComponentModel.DataAnnotations;

namespace TrendHive.Models
{
    public class Userlogin
    {
        [Key]
        public string username { get; set; }
        public string password { get; set; }
        public int id { get; set; }
    }
}
