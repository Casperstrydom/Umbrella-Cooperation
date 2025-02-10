export const getAvatar = (conversation) => {
    if (conversation?.profilePic) {
      return conversation.profilePic;
    }
  
    return conversation?.gender === "male"
      ? `https://robohash.org/${conversation._id}?set=set1&bgset=bg2`
      : `https://robohash.org/${conversation._id}?set=set2&bgset=bg2`;
  };
  