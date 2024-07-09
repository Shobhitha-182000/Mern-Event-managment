 
import axios from 'axios';

const fetchImages = async () => {
  try {
    const response = await axios.get("http://localhost:3000/admin/event");
    const events = response.data.data;

    const images = {};

    events.forEach(event => {
      const imageName = event.image;
      images[imageName] = require(`./${imageName}`).default;
    });

    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    return {};
  }
};

export default fetchImages;
