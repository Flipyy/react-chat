
export const setAttachments = (items) => ({type: "ATTACHMENTS:SET_ITEMS", payload: items})

export const removeAttachment = (file) => ({type: "ATTACHMENTS:REMOVE_ITEM", payload: file})