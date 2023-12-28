import {z} from 'zod'

export const schema = z.object({
  changeMoney: z.number().min()
})
