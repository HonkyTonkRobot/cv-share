export interface ProspectData {
  name: string
  company: string
  email?: string | null
  linkedin?: string | null
}

export interface Prospect extends ProspectData {
  id: number
}
