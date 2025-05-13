import db from './../connection.ts'
import { ProspectData } from '../../../models/Prospect.ts'

//NOTE: AI Acknowledgment
//when double checking if db functions could pass undefined or null values, it recommend giving it a default value so that empty values would be consistent, and recommend using the nullish coalescing operator.

// CREATE

export async function addNewProspect(data: ProspectData) {
  const userAdded = await db('prospects').insert({
    name: data.name,
    company: data.company,
    email: data.email ?? null,
    linkedin: data.linkedin ?? null,
  })
  return userAdded

