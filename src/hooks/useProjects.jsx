import { useEffect } from "react";
import { AUTH_TOKEN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addProjects } from "../utils/projectsSlice";

const useProjects = () => {
  const dispatch = useDispatch();

  const getSiteList = async () => {
    const data = await fetch("https://api.netlify.com/api/v1/sites", {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    const json = await data.json();
    dispatch(addProjects(json));
  };

  useEffect(() => {
    getSiteList();
  }, []);
};

export default useProjects;
