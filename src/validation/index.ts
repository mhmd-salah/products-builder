export const productValidation = (product: {
  title: string;
  description: string;
  imgURL: string;
  price: string;
}) => {
  
  const errors: {title:string,desctiption:string,imgURL:string,price:string} = {
    title:"",
    desctiption:"",
    imgURL:"",
    price:""
  };

  if(product.title.trim() || product.title.length<10||product.title.length>80 ){
    errors.title=="product title must be between 10 and 80 character"
  }
  if(product.description.trim() || product.description.length<10||product.description.length>80 ){
    errors.desctiption=="product desc must be between 10 and 80 character"
  }

  return errors;
};
