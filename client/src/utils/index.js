import { surpriseMePrompts } from "../constant";

export function getRandomPromt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
   const randomPromt = surpriseMePrompts[randomIndex];
   
   if(randomPromt === prompt ) return getRandomPromt(prompt);
   return randomPromt;
}