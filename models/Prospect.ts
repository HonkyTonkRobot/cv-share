export interface ProspectData {
  name: string
  company: string
  email?: string
  linkedin?: string
}

export interface Prospect extends ProspectData {
  id: number
}
