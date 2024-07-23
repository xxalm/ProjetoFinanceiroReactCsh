using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    public class UpdateCommentRequestDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title must have at least 5 characters")]
        [MaxLength(200, ErrorMessage = "You reached the maximum characters (200)")]
        public string Title { get; set; } = string.Empty;
        [Required]
        [MinLength(5, ErrorMessage = "Too short")]
        [MaxLength(500, ErrorMessage = "Too long. You reached the maximum characters (500)")]
        public string Content { get; set; } = string.Empty;
    }
}