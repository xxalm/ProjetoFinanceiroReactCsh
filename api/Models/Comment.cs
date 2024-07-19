using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Comment
    {
        public int? StockId { get; set; }
        public Stock? Stock { get; set; }
    }
}