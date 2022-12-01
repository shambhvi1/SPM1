using Newtonsoft.Json;

namespace SPM.API.models
{

    public class Product
    {

        public Guid Id { get; set; } 
        public string productName{ get; set; }

        public string productCode { get; set; }
        public string tags { get; set; }
        public string releaseDate { get; set; }
        public long price { get; set; }
        public string description { get; set; }

        public string imageUrl { get; set; }

    }
}
