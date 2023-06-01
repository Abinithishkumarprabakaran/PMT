import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from '../../global.js';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { triggerCtx } from "../../App.jsx";

import './Popup.css';

const formValidationSchema = yup.object({
  projectTitle: yup
          .string()
          .required(),
  projectDescription: yup
          .string()
          .required(),
})

export default function CreateProject() {

  const [projectButton, setProjectButton] = useContext(triggerCtx)

  const CustomTextField = styled(TextField)({
  height: '230px',
  });

  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues: { 
        projectTitle: '', 
        projectDescription: '',
      },
    validationSchema: formValidationSchema,
    onSubmit: (projectDetails) => {
      // projectDetails.projectTitle = projectDetails.projectTitle.replace(/\s/g, "");
      console.log(projectDetails)
      addProject(projectDetails)
    }
  });

  const navigate = useNavigate();

  const addProject = async (projectDetails) => {
    
    const data = await fetch(`${API}/addproject`, {
        method: "POST",
        body: JSON.stringify(projectDetails),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(data.status === 404) {
      alert("Project is Already Exists")
    }
    else {
      const result = await data.json()
      alert("Project has been Created")
      console.log("Check your Atlas")
    }
};

  return ( projectButton ) ? (
    <div className="popup">
      <form className="popup-inner" onSubmit={handleSubmit}>

        <div className="close-btn">
          <IconButton onClick={()=>{
            navigate('/')
            setProjectButton(false)}}> 
              <CloseIcon /> 
          </IconButton> 
        </div>

        <h4 className='text-2xl font-bold'>Project Title</h4>
        <TextField
          name="projectTitle"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.projectTitle}
          label="Project Title" 
          variant="outlined" 
          error={errors.projectTitle && touched.projectTitle}
          helperText={errors.projectTitle && touched.projectTitle ? errors.projectTitle: null}
          />

        <h4 className='text-2xl font-bold'>Project Description</h4>
        <TextField 
          name="projectDescription"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.projectDescription}
          label="Project Description" 
          variant="outlined" 
          error={errors.projectDescription && touched.projectDescription}
          helperText={errors.projectDescription && touched.projectDescription ? errors.projectDescription: null}
          />

        <div className='project-btn'>
          <Button type="submit" variant='outlined'>Create Project</Button>
        </div>

      </form>
    </div>
  ) : "";
}
