/**
 *
 * Define all global types in this file.
 *
 */

import { type } from "os";

type User = {
  email: string;
  image: string;
  username: string;
};
// types.ts

type Project = {
  id: string;
  title: string;
  description: string;
}

type Experience ={
  id: string;
  Title: string;
  Description: string;
}

type Message =  {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}