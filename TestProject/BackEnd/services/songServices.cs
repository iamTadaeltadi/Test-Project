using Microsoft.EntityFrameworkCore;
using songApi.Data;
using songApi.Model;

namespace songApi.services
{
    public class songServices
    {
        public class SongService
        {
            private readonly ApiDbContext _context;

            public SongService(ApiDbContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<Song>> GetAllSongs()
            {
                try
                {
                    return await _context.Songs.ToListAsync();
                }
                catch (Exception ex)
                {
                    // Handle and log the exception
                    throw new Exception("An error occurred while retrieving songs.", ex);
                }
            }

            public async Task<Song> GetSongById(int id)
            {
                try
                {
                    return await _context.Songs.FindAsync(id);
                }
                catch (Exception ex)
                {
                    // Handle and log the exception
                    throw new Exception($"An error occurred while retrieving the song with ID {id}.", ex);
                }
            }

            public async Task CreateSong(Song song)
            {
                try
                {
                    _context.Songs.Add(song);
                    await _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    // Handle and log the exception
                    throw new Exception("An error occurred while creating the song.", ex);
                }
            }

            public async Task UpdateSong(int id, Song song)
            {
                try
                {
                    var existingSong = await _context.Songs.FindAsync(id);
                    if (existingSong == null)
                    {
                        throw new ArgumentException($"Song with ID {id} not found.");
                    }

                    existingSong.Title = song.Title;
                    existingSong.Artist = song.Artist;
                    existingSong.ImageData = song.ImageData;

                    await _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    // Handle and log the exception
                    throw new Exception($"An error occurred while updating the song with ID {id}.", ex);
                }
            }

            public async Task DeleteSong(int id)
            {
                try
                {
                    var song = await _context.Songs.FindAsync(id);
                    if (song != null)
                    {
                        _context.Songs.Remove(song);
                        await _context.SaveChangesAsync();
                    }
                    else{
                        throw new ArgumentException("not found");

                    }
                }
                catch (Exception ex)
                {
                    // Handle and log the exception
                    throw new Exception($"An error occurred while deleting the song with ID {id}.", ex);
                }
            }
        }

    }
}