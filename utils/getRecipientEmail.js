const getRecipientEmail = (users, userSignedIn) =>
  users?.filter((user) => user !== userSignedIn?.email)[0];

export default getRecipientEmail;
