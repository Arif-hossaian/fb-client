export const EditData = (data: any[], id: any, post: any) => {
  const newData = data.map((item: { _id: any }) =>
    item._id === id ? post : item
  );
  return newData;
};

export const DeleteData = (data: any[], id: any) => {
  const newData = data.filter((item: { _id: any }) => item._id !== id);
  return newData;
};
