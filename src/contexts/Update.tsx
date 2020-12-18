import React, { createContext, useState, useContext } from "react";
import { ArrayNews } from "../screens/CreateNews";

interface UpdateContextData {
  update: boolean;
  setUpdate?: any;
  newss: any;
  setNewss: any;
}

const UpdateContext = createContext<UpdateContextData>({} as UpdateContextData);

export function useNews() {
  const context = useContext(UpdateContext);
  const { newss, setNewss } = context;
  return { newss, setNewss };
}

export function useUpdate() {
  const context = useContext(UpdateContext);
  const { update, setUpdate } = context;
  return { update, setUpdate };
}

const UpdateProvider: React.FC = ({ children }) => {
  const [newss, setNewss] = useState<ArrayNews[]>([]);
  const [update, setUpdate] = useState(false);

  return (
    <UpdateContext.Provider value={{
      newss, setNewss, update, setUpdate
    }}>
      {children}
    </UpdateContext.Provider>
  )
};

export default UpdateProvider;
