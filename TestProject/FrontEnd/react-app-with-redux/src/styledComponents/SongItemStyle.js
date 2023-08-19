import React from 'react';
import styled from '@emotion/styled';
export const SongCardContainer = styled.div`
  border: 1px solid #333;
  padding: 16px;
  text-align: center;
  background-color: #121212; /* Darker background color */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #282828; /* Darker green color on hover */
  }

  img {
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  .song-details {
    margin-top: 8px;
  }
`;

export const SongTitle = styled.h3`
  margin: 0;
  font-size: 16px; /* Adjust font size to match Spotify UI */
  font-weight: bold; /* Make title bold */
  color: #1db954; /* Green color for title */
`;

export const SongArtist = styled.p`
  margin: 0;
  font-size: 14px;
  color: #b3b3b3; /* Lighter color for artist */
`;

export const HoverIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

export const HoverIcon = styled.div`
  color: white;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    color: #1db954; /* Green color on hover */
  }
`;