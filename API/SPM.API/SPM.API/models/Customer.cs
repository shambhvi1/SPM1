namespace SPM.API.models
{
    public class Customer
    {

        public Guid Id { get; set; }
        public string UserName { get; set; }

        public long Mobile { get; set; }
        public string Email
            { get; set; }
        public string Password { get; set; }
    }
}
