import { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Product } from 'models';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import BaseButton from 'components/common/BaseButton';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IncrementDecrement from 'components/common/IncrementDecrement';

interface AddToCartDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: Product;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    position: 'absolute',
    top: 0,
    width: '320px',
  },
}));

const AddToCartDialog: FC<AddToCartDialogProps> = (props) => {
  const { isOpen, onClose, selectedProduct } = props;

  const handleChangeQuantity = (value: number) => {
    console.log(value);
  };

  return (
    <Box>
      <StyledDialog open={isOpen} onClose={onClose} maxWidth="lg">
        <Card sx={{ width: '100%' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography fontWeight="bold">{selectedProduct.name}</Typography>
            <CloseIcon
              sx={{ color: '#FF0000', cursor: 'pointer', fontSize: '16px' }}
              onClick={onClose}
            />
          </Box>
          <CardMedia
            component="img"
            height="200"
            image={selectedProduct.imageUrl}
            alt="food image"
            sx={{ borderRadius: '5%' }}
          />
          <CardContent>
            <Typography gutterBottom fontWeight="bold" variant="body1" align="center">
              ${selectedProduct.price}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '20px' }}>
              {selectedProduct.description}
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography sx={{ fontSize: '15px', marginBottom: '25px' }}>Unidades</Typography>
              <IncrementDecrement onCountChange={handleChangeQuantity} />
            </Box>
            <Box display="flex">
              <Typography sx={{ fontSize: '15px' }}>Notas para este pedido</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <TextField id="outlined-basic" variant="outlined" placeholder="..." fullWidth />
            </Box>
          </CardContent>
          <CardActions>
            <BaseButton fullWidth> AGREGAR A MI PEDIDO (${selectedProduct.price}) </BaseButton>
          </CardActions>
        </Card>
      </StyledDialog>
    </Box>
  );
};

export default AddToCartDialog;
