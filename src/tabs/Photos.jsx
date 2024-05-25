import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery, Button } from 'components';
import { useState, useEffect } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
  };

  const addPage = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    if (!query) return

    const getData = async () => {
      try {
        const data = await getPhotos(query, page);
        setPhotos(prevPhotos => [...prevPhotos, ...data.photos]);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData()
  }, [query, page])

  return (
    <>
      <Form onSubmit={ handleSearch} />
      {photos.length === 0 && <Text textAlign="center">Let`s begin search 🔎</Text>}
      <PhotosGallery photos={photos} />
      <Button onClick={addPage}>Load more...</Button>
    </>
  );
};
