import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HotelResponse } from '../types/hotelType';
import { RoomResponse } from '../types/roomType';

type Props = {
  data: HotelResponse | RoomResponse;
}

const ImageGrid: React.FC<Props> = ({ data }) => {
  return (
<ImageList
  sx={{
    width: '50wh',
    height: '80vh',
    borderRadius: '10px',
    marginTop: -1,
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
  }}
  variant="woven"
  cols={4}
  gap={8}
>
  {data.image.map((imgUrl, index) => (
    <ImageListItem
      key={index}
      sx={{
        ':hover': {
          filter: 'brightness(1.1)',
        },
      }}
    >
      <img
        srcSet={`${imgUrl}?w=161&fit=crop&auto=format&dpr=2 2x`}
        src={`${imgUrl}?w=161&fit=crop&auto=format`}
        alt="Imagem de Hotel/Quarto"
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>

  );
}

export default ImageGrid;
