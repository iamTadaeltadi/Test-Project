using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace songApi.Model
{
    public class Song
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Artist { get; set; }

        public string ImageData { get; set; }
        public string AudioDataAsBase64 { get; set; }

    }
}
