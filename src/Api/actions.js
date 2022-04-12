export const tiggerDrawer = (data) => {
    return {
      type: "TRIGGER_DRAWER",
      payload: data,
    };
  };

  export const drawerListAction = (data) => {
    return {
      type: "DRAWER_LIST",
      payload: data,
    };
  };