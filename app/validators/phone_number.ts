import vine from '@vinejs/vine'

const validatorBase = {
  customerId: vine.number(),
  number: vine.string().trim().regex(/^\d+$/),
}

export const phoneNumberValidator = vine.compile(vine.object(validatorBase))
