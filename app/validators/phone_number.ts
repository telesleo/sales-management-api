import vine from '@vinejs/vine'

const validatorBase = {
  customerId: vine.number(),
  number: vine.string().trim().regex(/^\d+$/),
}

export const phoneNumberValidator = vine.compile(vine.object(validatorBase))

export const phoneNumberValidatorOptional = vine.compile(
  vine.object({
    customerId: validatorBase.customerId.optional(),
    number: validatorBase.number.optional(),
  })
)
