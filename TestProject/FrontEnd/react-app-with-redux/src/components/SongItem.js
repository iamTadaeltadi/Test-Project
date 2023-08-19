import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { FaEdit, FaTrash, FaPlay, FaPause } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { DELETE_SONG_BY_ID } from "../sagas/types/index";
import { toggleModal ,editMode} from '../features/FormmodalSlice';

import {
  SongCardContainer,
  SongTitle,
  SongArtist,
  HoverIcons,
  HoverIcon
} from '../styledComponents/SongItemStyle'; 

const SongItem = ({ song }) => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs);
  const editId = useSelector(state => state.modal.editId);

  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const handelDeleteSong = (id) => {
    console.log(id);
    dispatch({ type: DELETE_SONG_BY_ID, id: id });
  }

  const handleTogglePlay = (edID) => () => { // Wrap it in a function
    const selectedSong = songs.find((s) => s.id === edID);
    if (selectedSong) {
      setAudio(selectedSong.audioDataAsBase64);
      setPlaying(!playing);
    } else {
      setPlaying(!playing);
    }
  }

  const handleEdit = () => {
    dispatch((editMode()))
    dispatch(toggleModal())
  }

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <SongCardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={song.imageData} alt={song.title} />
      <div className="song-details">
        <SongTitle>{`Title: ${song.title}`}</SongTitle>
        <SongArtist>{`Artist: ${song.artist}`}</SongArtist>
      </div>
      {/* Play/Pause icon */}
      <HoverIcons>
        <HoverIcon>
          {playing ? (
            <FaPause onClick={handleTogglePlay} />
          ) : (
            <FaPlay onClick={handleTogglePlay} />
          )}
        </HoverIcon>
        {/* Edit button with onClick */}
        <HoverIcon onClick={handleEdit}>
          <FaEdit />
        </HoverIcon>
        {/* Delete button with onClick */}
        <HoverIcon>
          <FaTrash onClick={() => { handelDeleteSong(song.id) }} />
        </HoverIcon>
      </HoverIcons>
    </SongCardContainer>
  );
};

export default SongItem;