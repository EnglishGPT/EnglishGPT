const formatDate = (date: Date | string, options?: Intl.DateTimeFormatOptions) => {
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    const mergedOptions = { ...defaultOptions, ...options };
  
    return new Intl.DateTimeFormat('en-US', mergedOptions).format(new Date(date));
  };
  
  export default formatDate;
  