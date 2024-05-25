import { Grid } from "../Grid/Grid";
import { PhotosGalleryItem } from "../PhotosGalleryItem/PhotosGalleryItem";

export const PhotosGallery = ({ photos }) => {
  return <Grid>
  {
     photos.map((photo) => 
       <PhotosGalleryItem
         key={photo.id}
         avg_color={photo.avg_color}
         src={photo.src}
         alt={photo.alt} />)
  }
</Grid>;
};
