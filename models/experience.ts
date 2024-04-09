import { Schema, model, models } from "mongoose";

const ExperienceSchema = new Schema({
  description: {
    type: String,
    required: [true, "Experience description is required!"],
  },
  website: {
    type: String,
  },
  contact: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  start: {
    type: Date,
    required: [true, "Experience start date is required!"],
  },
  end: {
    type: Date,
    required: [true, "Experience end date is required!"],
  },
  role: {
    type: String,
    required: [true, "Role is required!"],
  },
});

const Experience = models.Experience || model("Experience", ExperienceSchema);


export { Experience,ExperienceSchema};

