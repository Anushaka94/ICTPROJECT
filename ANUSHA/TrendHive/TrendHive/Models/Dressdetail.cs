using System.ComponentModel.DataAnnotations;

namespace TrendHive.Models
{
    public class Dressdetail
    {
        public decimal price { get; set; }
        public string size { get; set; }
        public string Dressname { get; set; }
        [Key]
        public int dressid { get; set; }
        
        public string photo { get; set; }
    }
}
