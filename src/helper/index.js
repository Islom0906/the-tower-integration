


export const  formatDate = (timestamp) => {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const formatPhoneNumber =(originalString) => {
   return originalString?.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
}


export const PageWayRouter  = ( pageAsPath , findPage) => {
   const pageSplit = pageAsPath.split('/')

   if(findPage) {
     return  pageSplit?.find(item => item === findPage)
   }

   
}


export const langSelect = ( lang , ru , en ,uz) => {
   if(lang === 'ru')  {
       return ru
   }else if(lang === 'en'){
       return en
   }else if(lang === 'uz') {
       return uz
   }
}