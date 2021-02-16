export const swipeActions =
{
  like,
  reject
}
const like = () =>
{
 return  {type: "like" , message: "Liked"}
}
const reject = () =>
{
  return  {type: "reject" , message: "Rejected"}
}