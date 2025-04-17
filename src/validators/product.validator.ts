export const validateProductId = (idParam: string) => {
    const id = parseInt(idParam, 10);
  
    if (isNaN(id)) {
      return {
        valid: false,
        error: { status: 400, message: "Invalid product ID" },
      };
    }
  
    return { valid: true, id };
  };