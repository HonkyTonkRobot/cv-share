import request from 'superagent'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProspectData } from '../../models/Prospect'

export default function useAddProspect() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: ProspectData) => {
      await request.post('/api/v1/prospects').send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['prospect'] })
    },
  })
}
