const moneyFormat = (money) => {
    const formattedMoney = money.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    
    return formattedMoney.replace(/\.00$/, '');
  }
  
  export { moneyFormat };
  