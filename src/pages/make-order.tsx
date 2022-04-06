import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useTheme } from '@mui/material/styles';
import AddToCartDialog from 'components/makeOrder/AddToCartDialog';
import { PRODUCTS } from 'components/makeOrder/data';
import { Product } from 'models';

const addToCartBoxStyles = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  margin: 'auto',
};

const MakeOrderPage = () => {
  const theme = useTheme();
  const [isAddToCartOpen, setIsAddToCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddProductToCart = (product: Product) => {
    setSelectedProduct(product);
    setIsAddToCartOpen(true);
  };

  return (
    <Box>
      <Typography fontWeight="bold">REALIZAR PEDIDO</Typography>
      <Box display="flex" flexWrap="wrap">
        {PRODUCTS.map((product) => (
          <Card sx={{ maxWidth: 345, margin: '20px', paddingBottom: '15px' }} key={product.id}>
            <CardMedia component="img" height="140" image={product.imageUrl} alt="food image" />
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography gutterBottom variant="h6" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h6" fontWeight="bold">
                  {product.price}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Box
                sx={{ ...addToCartBoxStyles, background: `${theme.palette.secondary.main}` }}
                onClick={() => handleAddProductToCart(product)}
              >
                <AddShoppingCartIcon sx={{ color: 'white' }} />
              </Box>
            </CardActions>
          </Card>
        ))}
      </Box>
      {selectedProduct && (
        <AddToCartDialog
          isOpen={isAddToCartOpen}
          onClose={() => setIsAddToCartOpen(false)}
          selectedProduct={selectedProduct}
        />
      )}
    </Box>
  );
};

export default MakeOrderPage;
