using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Datos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
         [Required]
        public string Password { get; set; }
    }
}