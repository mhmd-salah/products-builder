
/**
 * 
 * @param {string} text - text function start slice it
 * @param {number}  {maxLength = 50} - langth you went slice from text
 * @returns length maxLength of text
 */
export function textSlicer(text:string,maxLength:number=50){
  if(text.length >= maxLength){
    return `${text.slice(0, maxLength)}...`;
  }
  return text
}