export const swipeDetails= (state={},action) =>
{
  switch(action.type)
  {
    case "like":
      return {
        open: true,
        message: action.message
    };
    case "reject":
      return {
        open: true,
        message: action.message
    };
      default:
        return {
          open:false ,
          message: ""
        }
  }
}