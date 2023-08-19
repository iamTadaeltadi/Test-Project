import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { GET_SONGS } from "../sagas/types/index";
import { FaPlus } from 'react-icons/fa'; // Import the Plus icon
import SongItem from './SongItem';
import SongForm from './SongForm'; // Import the SongForm component
import { createMode,editMode, toggleModal } from '../features/FormmodalSlice'

const GlobalStyles = css`
  body {
    background-color: #000;
    color: #fff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const SongListContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
  }
`;

const CreateButton = styled.button`
  background-color: #1db954;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;

  svg {
    margin-right: 8px;
  }
`;

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs);
const isModalOpen = useSelector(state => state.modal.isModalOpen);

  useEffect(() => {
    dispatch({ type: GET_SONGS }); // Dispatch the GET_SONGS action to trigger fetching
  }, [dispatch]);


  const handleCreateButton = (()=>{
    dispatch(toggleModal())
    dispatch(createMode())
    
  })

  return (
    <div>
      <Global styles={GlobalStyles} />
      <SongListContainer>
        {songs.map((song) => (
          song.title && song.artist && song.imageData  && song.imageData.length> 100 && (
            <SongItem key={song.id} song={song}  />
          )
        ))}
      </SongListContainer>
      <CreateButton onClick={()=>{handleCreateButton()}}>
        <FaPlus /> Create New Song
      </CreateButton>
      {isModalOpen&& <SongForm />}
    </div>
  );
};

export default SongList;
