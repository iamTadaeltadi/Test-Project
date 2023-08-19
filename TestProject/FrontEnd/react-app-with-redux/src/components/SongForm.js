import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { CREATE_SONG, UPDATE_SONG_BY_ID } from "../sagas/types/index";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { createMode, toggleModal } from '../features/FormmodalSlice';
import { useEffect } from 'react';

// Import the styled components from StyledComponents.js
import {
  ModalOverlay,
  ModalContent,
  Title,
  Input,
  CloseButton,
  ImagePreview,
  SubmitButton,
  Label,
  FormField,
  ErrorText,
} from '../styledComponents/songFormStyles'; 

const SongFormModal = () => {
  const dispatch = useDispatch();
  const isEdit = useSelector(state => state.modal.isEdit);
  const editId = useSelector(state => state.modal.editId);
  


  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [imageBase64, setImageBase64] = useState(null);
  const songs = useSelector(state => state.songs);
  const [audioFile, setAudioFile] = useState("");

  const [titleError, setTitleError] = useState('');
  const [artistError, setArtistError] = useState('');
  const [imageError, setImageError] = useState('');
  const [audioFileError, setAudioFileError] = useState('');
  let songToUpdate ="";


  useEffect(() => {
    if (isEdit && editId) {
       songToUpdate = songs.find((s) => s.id === editId.id);
      // console.log(songToUpdate)

      if (songToUpdate) {
        setTitle(songToUpdate.title);
        setArtist(songToUpdate.artist);
        setImageBase64(songToUpdate.imageBase64);
        setImageBase64(songToUpdate.audioDataAsBase64);
      }
    }
  }, [isEdit, editId, songs]);

  const handleCloseButton =()=>{
    dispatch(toggleModal())
    dispatch(createMode())
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newSong = {
      title: title,
      artist: artist,
      imageData: imageBase64,
      audioDataAsBase64:audioFile
    };
     if (!title) {
      setTitleError('Title is required');
      return;
    }

    if (!artist) {
      setArtistError('Artist is required');
      return;
    }

    if (!imageBase64) {
      setImageError('Image is required');
      return;
    }

    if (!audioFileError) {
      setAudioFileError('audio is required');
      return;
    }
    if (isEdit){
      dispatch({ type: UPDATE_SONG_BY_ID, id:editId.id,updatedSongData: newSong });
      dispatch(toggleModal());

      return

    }

    console.log(newSong)


    dispatch({ type: CREATE_SONG, song: newSong });
    dispatch(toggleModal());
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageBase64(e.target.result);
      };

      reader.readAsDataURL(file);
    }
    setImageError('');
  };

 const handleAudioChange = (e) => {
  const file = e.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      setAudioFile(event.target.result);
      console.log(event.target.result)
    };
    
    reader.readAsDataURL(file);
    setAudioFileError('');
  } else {
    setAudioFile(null);
    setAudioFileError('Audio is required');
  }
};
const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleError('');
  };

  const handleArtistChange = (e) => {
    setArtist(e.target.value);
    setArtistError('');
  };
  
   
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={handleCloseButton}>&times;</CloseButton>
        <Title>{isEdit ? "Edit Song" : "Add New Song"}</Title>

        <form onSubmit={handleSubmit}>
          <FormField>
            <Label>Title:</Label>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
              className={titleError && 'invalid'}
            />
            {titleError && <ErrorText>{titleError}</ErrorText>}
          </FormField>
          <FormField>
            <Label>Artist:</Label>
            <Input
              type="text"
              placeholder="Artist"
              value={artist}
              onChange={handleArtistChange}
              className={artistError && 'invalid'}
            />
            {artistError && <ErrorText>{artistError}</ErrorText>}
          </FormField>
          <FormField>
            <Label>Image:</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imageBase64 && <ImagePreview src={imageBase64} alt="Selected" />}
            {imageError && <ErrorText>{imageError}</ErrorText>}
          </FormField>
          <FormField>
            <Label>Audio:</Label>
            <Input
              type="file"
              accept="audio/*"
              onChange={handleAudioChange}
            />
            {audioFileError && <ErrorText>{audioFileError}</ErrorText>}
          </FormField>
          <SubmitButton type="submit">{isEdit ? "Edit" : "Submit"}</SubmitButton>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SongFormModal;