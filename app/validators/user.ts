import vine from '@vinejs/vine'

const baseValidator = {
  email: vine.string().trim().email(),
  password: vine.string().trim().minLength(6),
  name: vine.string().trim().optional(),
}

export const userValidator = vine.compile(vine.object(baseValidator))
