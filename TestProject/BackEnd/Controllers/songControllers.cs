using Microsoft.AspNetCore.Mvc;
using songApi.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using static songApi.services.songServices;

namespace  songApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongsController : ControllerBase
    {
        private readonly SongService _songService;

        public SongsController(SongService songService)
        {
            _songService = songService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSongs()
        {
            try
            {
                var songs = await _songService.GetAllSongs();
                return Ok(songs);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while fetching songs.");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSongById(int id)
        {
            try
            {
                var song = await _songService.GetSongById(id);
                if (song == null)
                {
                    return NotFound($"Song with ID {id} not found.");
                }

                return Ok(song);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, $"An error occurred while fetching the song with ID {id}.");
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateSong([FromBody] Song song)
        {
            try
            {
                await _songService.CreateSong(song);
                return CreatedAtAction(nameof(GetSongById), new { id = song.Id }, song);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while creating the song.");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSong(int id, [FromBody] Song song)
        {
            try
            {
                await _songService.UpdateSong(id, song);
                return NoContent();
            }
            catch (ArgumentException argEx)
            {
                return NotFound(argEx.Message);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, $"An error occurred while updating the song with ID {id}.");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSong(int id)
        {
            try
            {
                await _songService.DeleteSong(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, $"An error occurred while deleting the song with ID {id}.");
            }
        }
    }
}
