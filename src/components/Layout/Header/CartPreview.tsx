import { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Product } from 'models';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import IncrementDecrement from 'components/common/IncrementDecrement';
import BaseButton from 'components/common/BaseButton';
import { PRODUCTS } from 'components/makeOrder/data';
import Image from 'next/image';

interface AddToCartDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    position: 'absolute',
    top: -30,
    right: -30,
    width: '360px',
    padding: '10px',
    borderRadius: '0px',
    height: '100vh',
  },
}));

const CartPreview: FC<AddToCartDialogProps> = (props) => {
  const { isOpen, onClose } = props;

  const handleChangeQuantity = (value: number) => {
    console.log(value);
  };

  return (
    <StyledDialog open={isOpen} onClose={onClose} maxWidth="lg">
      <CloseIcon
        sx={{ marginRight: 'auto', color: '#F24423', cursor: 'pointer' }}
        onClick={onClose}
      />
      <Typography align="center" fontWeight="bold">
        MI PEDIDO
      </Typography>
      {PRODUCTS.map((product: Product) => (
        <Box
          key={product.id}
          display="flex"
          alignItems="center"
          mt={2}
          sx={{ background: '#F3F3F3' }}
          p={1}
        >
          <Image src={product.imageUrl} width={120} height={65} alt="product image" />
          <Box mr={1} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <Box display="flex" flexDirection="column" alignContent="space-between">
              <Typography fontSize="12px" align="left" fontWeight={600}>
                {product.name}
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                ${product.price}
              </Typography>
            </Box>
            <Box sx={{ marginTop: 'auto', marginLeft: '10px' }}>
              <IncrementDecrement onCountChange={handleChangeQuantity} />
            </Box>
          </Box>
        </Box>
      ))}
      <BaseButton sx={{ marginTop: 'auto' }}>{`ENVIAR PEDIDO ($150)`}</BaseButton>
    </StyledDialog>
  );
};

export default CartPreview;
