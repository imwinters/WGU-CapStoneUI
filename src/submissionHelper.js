import axios from 'axios'
import {v4 as uuidv4} from 'uuid';


const SubmitImage = (image) =>
{

    return axios.post(
    "https://isaacwinterswgucapstoneapi.azurewebsites.net/api/Submission", 
    {
        imageId: uuidv4().toString(),
        imagePath: image,
        dateSubmitted: "2022-06-12T19:21:47.568Z",
        suspectedPositive: true   
    },
    {
        headers:
        {
            "Access-Control-Allow-Origin": "*"
        }
    });
} 

export default SubmitImage;