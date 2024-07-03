export const productValidation = (product: {
  title: string;
  description: string;
  imgURL: string;
  price: string;
}) => {

  // errors object message errors
  const errors: {title:string,desctiption:string,imgURL:string,price:string} = {
    title:"",
    desctiption:"",
    imgURL:"",
    price:""
  };

  const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imgURL);

  if(!product.title.trim() || product.title.length < 10||product.title.length>80 ){
    errors.title=="product title must be between 10 and 80 character"
  }
  if(!product.description.trim || product.description.length<10||product.description.length>80 ){
    errors.desctiption=="product desc must be between 10 and 80 character"
  }

  if(!product.imgURL.trim()||!validURL){
    errors.imgURL="valid image url"
  }

  if(!product.price.trim()||isNaN(+product.price)){
    errors.price = "valid price is required"
    
  }
  return errors;
};


